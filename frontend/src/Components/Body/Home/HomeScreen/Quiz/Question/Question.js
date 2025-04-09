import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Form, Modal } from "react-bootstrap";
import "./Question.css"; // Keeping styles file unchanged
import "./Timer.css"; // Import the new timer styles

export const Question = ({ questions, setUserAnswer, setTimeDuration }) => {
  
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [age, setAge] = useState("");
  const [isAgeRequired, setIsAgeRequired] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [showTimeUpModal, setShowTimeUpModal] = useState(false);
  const [timerActive, setTimerActive] = useState(true);
  const [questionStatus, setQuestionStatus] = useState({});

  // Initialize question status when questions are loaded
  useEffect(() => {
    if (questions && questions.length > 0) {
      const initialStatus = {};
      questions.forEach((q, index) => {
        initialStatus[index] = {
          visited: false,
          answered: false,
          selectedAnswer: null
        };
      });
      setQuestionStatus(initialStatus);
    }
  }, [questions]);

  // Update selected answer when navigating to a question
  useEffect(() => {
    if (questionStatus[currentQuestion] && questionStatus[currentQuestion].selectedAnswer !== null) {
      setSelectedAnswer(questionStatus[currentQuestion].selectedAnswer);
    } else {
      setSelectedAnswer(null);
    }
  }, [currentQuestion, questionStatus]);

  // Timer effect
  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isAgeRequired) {
      // Time's up - auto submit
      setTimeDuration((prevData) => ({
        ...prevData,
        endTime: new Date(),
      }));
      setIsAgeRequired(true);
      setTimerActive(false);
    }
    return () => clearInterval(timer);
  }, [timeLeft, timerActive, isAgeRequired, setTimeDuration]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    
    // Update question status
    setQuestionStatus(prev => ({
      ...prev,
      [currentQuestion]: {
        ...prev[currentQuestion],
        visited: true,
        answered: true,
        selectedAnswer: index
      }
    }));
    
    const questionId = questions[currentQuestion].id;
    setUserAnswer((prevUserAnswer) => ({
      ...prevUserAnswer,
      [questionId]: questions[currentQuestion].Answers[index].id,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      // Mark current question as visited
      setQuestionStatus(prev => ({
        ...prev,
        [currentQuestion]: {
          ...prev[currentQuestion],
          visited: true,
          answered: selectedAnswer !== null,
          selectedAnswer: selectedAnswer
        }
      }));
      
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTimeDuration((prevData) => ({
        ...prevData,
        endTime: new Date(),
      }));
      setIsAgeRequired(true);
      setTimerActive(false);
    }
  };

  const handleSubmit = () => {
    if (!age) {
      alert("Please enter your age before submitting.");
      return;
    } else {
      setUserAnswer((prevUserAnswer) => ({
        ...prevUserAnswer,
        age: age,
      }));
    }
    navigate(`/quiz/${id}/result`);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      // Mark current question as visited
      setQuestionStatus(prev => ({
        ...prev,
        [currentQuestion]: {
          ...prev[currentQuestion],
          visited: true,
          answered: selectedAnswer !== null,
          selectedAnswer: selectedAnswer
        }
      }));
      
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSkip = () => {
    if (currentQuestion < questions.length - 1) {
      // Mark current question as visited but not answered
      setQuestionStatus(prev => ({
        ...prev,
        [currentQuestion]: {
          ...prev[currentQuestion],
          visited: true,
          answered: false,
          selectedAnswer: null
        }
      }));
      
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const handleQuestionClick = (index) => {
    // Mark current question as visited before switching
    setQuestionStatus(prev => ({
      ...prev,
      [currentQuestion]: {
        ...prev[currentQuestion],
        visited: true,
        answered: selectedAnswer !== null,
        selectedAnswer: selectedAnswer
      }
    }));
    
    setCurrentQuestion(index);
  };

  if (questions.length === 0) {
    return <h1>No Questions Found</h1>;
  }
  
  const currentQ = questions[currentQuestion];
  const Q = `Q.${currentQuestion + 1}`;
  
  // Calculate statistics
  const answeredCount = Object.values(questionStatus).filter(q => q.answered).length;
  const visitedCount = Object.values(questionStatus).filter(q => q.visited).length;
  const totalQuestions = questions.length;
  
  return (
    <Container className="question-container">
      <Card className="question-card">
        {!isAgeRequired ? (
          <>
            <Card.Header className="quiz-timer-header">
              <div className="quiz-timer-display">
                <span className="quiz-timer-label">Time Remaining:</span>
                <span className={`quiz-timer-value ${timeLeft < 60 ? 'quiz-timer-warning' : ''}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              <div className="quiz-progress">
                <span>Progress: {answeredCount}/{totalQuestions} answered</span>
              </div>
            </Card.Header>
            
            {/* Question Navigation Grid */}
            <div className="question-navigation">
              {questions.map((_, index) => (
                <div 
                  key={index} 
                  className={`question-number ${index === currentQuestion ? 'current' : ''} 
                    ${questionStatus[index]?.visited ? 'visited' : ''} 
                    ${questionStatus[index]?.answered ? 'answered' : ''}`}
                  onClick={() => handleQuestionClick(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            
            <Card.Body>
              <Card.Title className="question-title">
                  {`${Q}`} {"Complete the pattern? "}
              </Card.Title>

              {currentQ.imageUrl && (
                <div className="question-image">
                  <img
                    src={`${process.env.REACT_APP_REMOTE_ADDRESS}/${currentQ.imageUrl}`}
                    alt="Question"
                  />
                </div>
              )}

              <hr />

              <div className="question-options">
                {currentQ.Answers.map((option, index) => (
                  <Button
                    key={index}
                    variant={
                      selectedAnswer === index ? "success" : "outline-primary"
                    }
                    className={`question-option ${
                      selectedAnswer === index ? "selected" : ""
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    {option.imageUrl ? (
                      <img
                        src={`${process.env.REACT_APP_REMOTE_ADDRESS}/${option.imageUrl}`}
                        alt={`Option ${index + 1}`}
                        className="option-image"
                      />
                    ) : (
                      option.text
                    )}
                  </Button>
                ))}
              </div>
            </Card.Body>

            <Card.Footer className="question-footer">
              <div className="button-group">
                <Button
                  variant="primary"
                  className="nav-button"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                
                <Button
                  variant="primary"
                  className="nav-button"
                  onClick={handleSkip}
                  disabled={currentQuestion === questions.length - 1 || selectedAnswer !== null}
                >
                  Skip
                </Button>

                <Button
                  variant="primary"
                  className="nav-button"
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                >
                  {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
                </Button>
              </div>
            </Card.Footer>
          </>
        ) : (
          <Card.Body>
            <Card.Title className="question-title">Enter Your Age</Card.Title>
            <Form.Group>
              <Form.Control
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="age-input"
              />
            </Form.Group>
            <Button
              variant="success"
              className="submit-button"
              onClick={handleSubmit}
            >
              Submit & Get Result
            </Button>
          </Card.Body>
        )}
      </Card>

      {/* Time's Up Modal */}
      <Modal show={showTimeUpModal} onHide={() => setShowTimeUpModal(false)} centered className="quiz-timer-modal">
        <Modal.Header closeButton>
          <Modal.Title>Time's Up!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your 30-minute time limit for the IQ test has expired. Your answers will be submitted automatically.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowTimeUpModal(false)}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
