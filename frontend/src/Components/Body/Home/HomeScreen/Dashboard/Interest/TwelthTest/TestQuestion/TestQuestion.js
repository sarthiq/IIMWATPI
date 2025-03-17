import React, { useState } from 'react';
import { Card, Form, Button, Container, ProgressBar } from 'react-bootstrap';

const questions = [
    {
        id: 1,
        question: "When you think about your future, what excites you the most?",
        options: [
            { label: "Solving puzzles, working with numbers, and understanding how things work (like why airplanes fly or how chemicals react)", value: "A" },
            { label: "Understanding how the human body functions, how diseases spread, and how to help people stay healthy", value: "B" },
            { label: "Learning how businesses make money, how stock markets work, and how people decide what to buy", value: "C" },
            { label: "Expressing yourself through dance, music, or acting, and entertaining people", value: "D" },
            { label: "Exploring history, political systems, and how societies evolve over time", value: "E" }
        ]
    },
    {
        id: 2,
        question: "If you had a free day, what would you love to do?",
        options: [
            { label: "Experiment with gadgets, solve math puzzles, or try simple science experiments (like making a basic electric circuit)", value: "A" },
            { label: "Read about new medical discoveries, learn first aid, or watch medical documentaries", value: "B" },
            { label: "Think of business ideas, trade things, or plan how to save and grow money", value: "C" },
            { label: "Watch movies, listen to music, try new dance steps, or act out scenes from your favorite shows", value: "D" },
            { label: "Read history books, research current affairs, or discuss social issues", value: "E" }
        ]
    },
    {
        id: 3,
        question: "Which of these school activities do you enjoy the most?",
        options: [
            { label: "Solving tricky math problems and understanding physics concepts, like why the sky is blue or how a car engine works", value: "A" },
            { label: "Learning about plants, animals, and how the human body works", value: "B" },
            { label: "Discussing how companies sell products and how markets decide prices", value: "C" },
            { label: "Performing in school plays, singing competitions, or dance performances", value: "D" },
            { label: "Writing essays, debating political issues, or analyzing historical events", value: "E" }
        ]
    },
    {
        id: 4,
        question: "Imagine you're in a group project, what role do you naturally take?",
        options: [
            { label: "Working on calculations, ensuring accuracy, and analyzing technical details", value: "A" },
            { label: "Researching biological or medical aspects and explaining health impacts", value: "B" },
            { label: "Managing the budget and making sure the project is financially efficient", value: "C" },
            { label: "Taking charge of presentations, speaking confidently, and adding creativity", value: "D" },
            { label: "Making sure the project aligns with real-world social or historical perspectives", value: "E" }
        ]
    },
    {
        id: 5,
        question: "Which of these topics do you find most exciting?",
        options: [
            { label: "Physics laws, mathematical tricks, how rockets work, and why objects fall to the ground", value: "A" },
            { label: "The human brain, diseases, genetics, and how medicines work", value: "B" },
            { label: "How businesses grow, why some brands are successful, and how people invest money", value: "C" },
            { label: "Acting, dancing, singing, making fun videos, or storytelling", value: "D" },
            { label: "Historical revolutions, political debates, and analyzing news", value: "E" }
        ]
    },
    {
        id: 6,
        question: "If given a chance to visit one of the following places, which one excites you the most?",
        options: [
            { label: "A space research center or an advanced engineering lab", value: "A" },
            { label: "A hospital or a research lab working on new medicines", value: "B" },
            { label: "A stock exchange or a successful startup's office", value: "C" },
            { label: "A theater or a recording studio", value: "D" },
            { label: "A historical museum or a parliament building", value: "E" }
        ]
    },
    {
        id: 7,
        question: "What kind of books or documentaries do you enjoy the most?",
        options: [
            { label: "Science fiction, engineering marvels, or AI breakthroughs", value: "A" },
            { label: "Medical advancements, human biology, or nature documentaries", value: "B" },
            { label: "Business success stories, stock market guides, or biographies of entrepreneurs", value: "C" },
            { label: "Celebrity interviews, musical performances, or artistic biographies", value: "D" },
            { label: "War history, political discussions, or social change movements", value: "E" }
        ]
    },
    {
        id: 8,
        question: "If you had to explain something to a group of students, what would you love to talk about?",
        options: [
            { label: "How airplanes fly or how electricity powers a city", value: "A" },
            { label: "How the heart pumps blood or how vaccines work", value: "B" },
            { label: "How companies earn profit or why people buy luxury products", value: "C" },
            { label: "How a film is made or how musicians compose songs", value: "D" },
            { label: "How historical events shaped the modern world", value: "E" }
        ]
    },
    {
        id: 9,
        question: "What kind of YouTube videos or TV shows interest you the most?",
        options: [
            { label: "Science experiments, engineering breakdowns, or tech reviews", value: "A" },
            { label: "Medical discoveries, nature documentaries, or health-related videos", value: "B" },
            { label: "Business strategies, investment tips, or entrepreneurial journeys", value: "C" },
            { label: "Dance tutorials, movie-making insights, or musical performances", value: "D" },
            { label: "Historical documentaries, debates, or news analysis", value: "E" }
        ]
    },
    {
        id: 10,
        question: "If you could have one superpower, which would you choose?",
        options: [
            { label: "The ability to invent and create futuristic technology", value: "A" },
            { label: "The power to heal people instantly", value: "B" },
            { label: "The ability to predict market trends and build wealth", value: "C" },
            { label: "The talent to perform any art form flawlessly", value: "D" },
            { label: "The wisdom to solve social and political problems effectively", value: "E" }
        ]
    },
    {
        id: 11,
        question: "What kind of problems do you enjoy solving?",
        options: [
            { label: "Complex equations, logical puzzles, and scientific challenges", value: "A" },
            { label: "Diagnosing health symptoms and finding cures", value: "B" },
            { label: "Finding ways to make or save money", value: "C" },
            { label: "Creating new stories, songs, or performances", value: "D" },
            { label: "Understanding historical events and making connections to today's world", value: "E" }
        ]
    },
    {
        id: 12,
        question: "If you were asked to give a TED Talk, what topic would you choose?",
        options: [
            { label: "Future of artificial intelligence and robotics", value: "A" },
            { label: "How the human brain works and how to stay healthy", value: "B" },
            { label: "How businesses can change the world", value: "C" },
            { label: "The art of storytelling and emotional expression", value: "D" },
            { label: "How history teaches us lessons for the future", value: "E" }
        ]
    },
    {
        id: 13,
        question: "If your friend had a difficult math problem, how would you feel?",
        options: [
            { label: "Excited to solve it and explain the logic behind it", value: "A" },
            { label: "Curious, but only if it had something to do with biology or health", value: "B" },
            { label: "Not very interested unless it was about money or profits", value: "C" },
            { label: "Bored, I would rather focus on creative subjects", value: "D" },
            { label: "More interested in its history or impact on society", value: "E" }
        ]
    },
    {
        id: 14,
        question: "What kind of competitions would you love to participate in?",
        options: [
            { label: "Science and math Olympiads", value: "A" },
            { label: "Biology or medical quizzes", value: "B" },
            { label: "Business plan or investment challenges", value: "C" },
            { label: "Talent shows like singing, dancing, or acting", value: "D" },
            { label: "Debate, essay writing, or Model United Nations (MUN)", value: "E" }
        ]
    },
    {
        id: 15,
        question: "If you had to pick a dream project, what would it be?",
        options: [
            { label: "Designing a new type of spaceship or robot", value: "A" },
            { label: "Discovering a cure for a major disease", value: "B" },
            { label: "Building a successful business or startup", value: "C" },
            { label: "Directing a movie, writing a song, or choreographing a dance", value: "D" },
            { label: "Writing a book about history, politics, or society", value: "E" }
        ]
    }
];

export const TestQuestion = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    
    const handleOptionSelect = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    return (
        <Container className="test-question-container my-5">
            <Card className="test-question-card">
                <Card.Header className="test-question-header bg-primary text-white">
                    <h2 className="text-center mb-0">Interest-Based Stream Selection Test</h2>
                    <p className="text-center mb-0">Class 11-12th</p>
                </Card.Header>
                
                <Card.Body className="test-question-body">
                    <ProgressBar 
                        now={(currentQuestion + 1) * (100/15)} 
                        label={`${currentQuestion + 1}/15`}
                        className="mb-4"
                    />
                    
                    <div className="question-content">
                        <h4 className="question-number">Question {currentQuestion + 1}</h4>
                        <p className="question-text">{questions[currentQuestion].question}</p>
                        
                        <Form className="options-form">
                            {questions[currentQuestion].options.map((option, index) => (
                                <Form.Check
                                    key={index}
                                    type="radio"
                                    id={`q${currentQuestion}-option${option.value}`}
                                    name={`question${currentQuestion}`}
                                    label={option.label}
                                    checked={answers[questions[currentQuestion].id] === option.value}
                                    onChange={() => handleOptionSelect(questions[currentQuestion].id, option.value)}
                                    className="option-item mb-3"
                                />
                            ))}
                        </Form>
                    </div>
                </Card.Body>

                <Card.Footer className="test-question-footer d-flex justify-content-between">
                    <Button 
                        variant="secondary" 
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                    >
                        Previous
                    </Button>
                    <Button 
                        variant="primary" 
                        onClick={handleNext}
                        disabled={currentQuestion === questions.length - 1}
                    >
                        Next
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    );
};