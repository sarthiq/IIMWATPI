import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button, ProgressBar } from 'react-bootstrap';
import tenthData from './tenth.json';
import twelthData from './twelth.json';
import graduationData from './graduation.json';
import './SecQuestion.css';

export const SecQuestion = () => {
    const [educationLevel, setEducationLevel] = useState('');
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [flattenedQuestions, setFlattenedQuestions] = useState([]);

    useEffect(() => {
        if (educationLevel) {
            let selectedData;
            switch (educationLevel) {
                case 'tenth':
                    selectedData = tenthData.sections;
                    break;
                case 'twelth':
                    selectedData = twelthData.sections;
                    break;
                case 'graduation':
                    selectedData = graduationData.sections;
                    break;
                default:
                    selectedData = [];
            }
            setQuestions(selectedData);
            
            // Flatten questions array
            const flattened = selectedData.reduce((acc, section) => {
                return [...acc, ...section.questions.map(q => ({
                    ...q,
                    sectionName: section.sectionName
                }))];
            }, []);
            
            setFlattenedQuestions(flattened);
            setCurrentQuestionIndex(0);
            setAnswers({});
        }
    }, [educationLevel]);

    const handleAnswerChange = (questionText, answer) => {
        setAnswers(prev => ({
            ...prev,
            [questionText]: answer
        }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < flattenedQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Answers:', answers);
    };

    const currentQuestion = flattenedQuestions[currentQuestionIndex];
    const progress = (currentQuestionIndex / flattenedQuestions.length) * 100;

    return (
        <Container className="sec-question-container">
            {!educationLevel ? (
                <Card className="education-select-card">
                    <Card.Body>
                        <Card.Title>Select Your Education Level</Card.Title>
                        <Form.Select 
                            value={educationLevel}
                            onChange={(e) => setEducationLevel(e.target.value)}
                            className="mb-3"
                        >
                            <option value="">Select Level</option>
                            <option value="tenth">10th Standard</option>
                            <option value="twelth">12th Standard</option>
                            <option value="graduation">Graduation</option>
                        </Form.Select>
                    </Card.Body>
                </Card>
            ) : flattenedQuestions.length > 0 && currentQuestion ? (
                <div className="question-page">
                    <div className="progress-container">
                        <ProgressBar 
                            now={progress} 
                            label={`${Math.round(progress)}%`} 
                        />
                        <div className="question-counter">
                            Question {currentQuestionIndex + 1} of {flattenedQuestions.length}
                        </div>
                    </div>

                    <Card className="question-card">
                        <Card.Body>
                            <div className="section-name">{currentQuestion.sectionName}</div>
                            <div className="question-text">
                                {currentQuestion.questionText}
                            </div>
                            <Form.Group className="options-group">
                                {currentQuestion.type === "multiple-choice" && (
                                    <div className="options-container">
                                        {currentQuestion.options.map((option, optionIndex) => (
                                            <Form.Check
                                                key={optionIndex}
                                                type="radio"
                                                id={`question-${currentQuestionIndex}-${optionIndex}`}
                                                name={currentQuestion.questionText}
                                                label={option}
                                                onChange={() => handleAnswerChange(currentQuestion.questionText, option)}
                                                checked={answers[currentQuestion.questionText] === option}
                                                className="option-item"
                                            />
                                        ))}
                                    </div>
                                )}
                                {currentQuestion.type === "multiple-select" && (
                                    <div className="options-container">
                                        {currentQuestion.options.map((option, optionIndex) => (
                                            <Form.Check
                                                key={optionIndex}
                                                type="checkbox"
                                                id={`question-${currentQuestionIndex}-${optionIndex}`}
                                                label={option}
                                                onChange={(e) => {
                                                    const currentAnswers = answers[currentQuestion.questionText] || [];
                                                    if (e.target.checked) {
                                                        handleAnswerChange(currentQuestion.questionText, [...currentAnswers, option]);
                                                    } else {
                                                        handleAnswerChange(
                                                            currentQuestion.questionText,
                                                            currentAnswers.filter(ans => ans !== option)
                                                        );
                                                    }
                                                }}
                                                className="option-item"
                                            />
                                        ))}
                                    </div>
                                )}
                            </Form.Group>
                        </Card.Body>
                    </Card>

                    <div className="navigation-buttons">
                        <Button 
                            onClick={handlePrevious} 
                            disabled={currentQuestionIndex === 0}
                            className="nav-button"
                        >
                            Previous
                        </Button>
                        {currentQuestionIndex === flattenedQuestions.length - 1 ? (
                            <Button 
                                onClick={handleSubmit}
                                className="submit-button"
                            >
                                Submit
                            </Button>
                        ) : (
                            <Button 
                                onClick={handleNext}
                                className="nav-button next-button"
                            >
                                Next
                            </Button>
                        )}
                    </div>
                </div>
            ) : null}
        </Container>
    );
};