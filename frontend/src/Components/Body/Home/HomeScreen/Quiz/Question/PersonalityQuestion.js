import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Modal } from "react-bootstrap";
import "./Question.css"; // You'll need to create this CSS file
import "./Timer.css"; // Import the new timer styles
import { FaVolumeUp } from "react-icons/fa";

export const PersonalityQuestion = ({
  questions,
  setUserPersonalityAnswer,
  setTimeDuration,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [language, setLanguage] = useState("english"); // Toggle between english/hindi
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [showTimeUpModal, setShowTimeUpModal] = useState(false);
  const [showIncompleteModal, setShowIncompleteModal] = useState(false);
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
    } else if (timeLeft === 0 && !showTimeUpModal) {
      // Time's up - show modal
      setShowTimeUpModal(true);
      setTimerActive(false);
    }
    return () => clearInterval(timer);
  }, [timeLeft, timerActive, showTimeUpModal]);

  // Redirect after modal is shown
  useEffect(() => {
    let redirectTimer;
    if (showTimeUpModal) {
      redirectTimer = setTimeout(() => {
        navigate(`/quiz/${id}/result`);
      }, 3000); // 3 seconds delay
    }
    return () => clearTimeout(redirectTimer);
  }, [showTimeUpModal, navigate, id]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const speakText = () => {
    const text = currentQ.text[language];
    const utterance = new SpeechSynthesisUtterance(text);

    // Set language for speech synthesis
    if (language === "hindi") {
      utterance.lang = "hi-IN";
    } else {
      utterance.lang = "en-US";
    }

    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    window.speechSynthesis.speak(utterance);
  };

  const options = [
    { id: 1, text: "Strongly Agree", value: 5 },
    { id: 2, text: "Agree", value: 4 },
    { id: 3, text: "Neutral", value: 3 },
    { id: 4, text: "Disagree", value: 2 },
    { id: 5, text: "Strongly Disagree", value: 1 }
  ];

  const handleAnswerSelect = (optionId) => {
    setSelectedAnswer(optionId);
    
    // Update question status
    setQuestionStatus(prev => ({
      ...prev,
      [currentQuestion]: {
        ...prev[currentQuestion],
        visited: true,
        answered: true,
        selectedAnswer: optionId
      }
    }));
  };
  
  const handleNext = () => {
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
    
    setUserPersonalityAnswer((prevUserPersonalityAnswer) => {
      prevUserPersonalityAnswer.push(options[selectedAnswer - 1].value);
      return prevUserPersonalityAnswer;
    });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Check if all questions are answered
      const allAnswered = Object.values(questionStatus).every(q => q.answered);
      
      if (!allAnswered) {
        // Show modal for incomplete quiz
        setShowIncompleteModal(true);
        return;
      }
      
      // All questions answered, proceed to results
      setTimeDuration((prevData) => ({
        ...prevData,
        endTime: new Date(),
      }));
      setTimerActive(false);
      navigate(`/quiz/${id}/result`);
    }
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
      
      // Remove the last answer when going back
      setUserPersonalityAnswer((prevAnswers) => {
        const newAnswers = [...prevAnswers];
        newAnswers.pop();
        return newAnswers;
      });
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

  const handleFinishQuiz = () => {
    // Check if all questions are answered
    const allAnswered = Object.values(questionStatus).every(q => q.answered);
    
    if (!allAnswered) {
      // Show modal for incomplete quiz
      setShowIncompleteModal(true);
      return;
    }
    
    // All questions answered, proceed to results
    setTimeDuration((prevData) => ({
      ...prevData,
      endTime: new Date(),
    }));
    setTimerActive(false);
    navigate(`/quiz/${id}/result`);
  };

  if (questions.length === 0) {
    return <h1>No Questions Found</h1>;
  }

  const currentQ = questions[currentQuestion];
  
  // Calculate statistics
  const answeredCount = Object.values(questionStatus).filter(q => q.answered).length;
  const visitedCount = Object.values(questionStatus).filter(q => q.visited).length;
  const totalQuestions = questions.length;
  const unansweredCount = totalQuestions - answeredCount;

  return (
    <Container className="question-container">
      <Card className="question-card">
        <Card.Header className="quiz-timer-header">
          <div className="quiz-timer-display">
            <span className="quiz-timer-label">Time Remaining:</span>
            <span className={`quiz-timer-value ${timeLeft < 60 ? 'quiz-timer-warning' : ''}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="quiz-progress">
            <span>Progress: {answeredCount}/{totalQuestions} answered</span>
            {unansweredCount > 0 && (
              <span className="incomplete-warning"> - {unansweredCount} questions remaining</span>
            )}
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
          <div className="language-toggle">
            <Button
              variant={language === "english" ? "primary" : "outline-primary"}
              onClick={() => setLanguage("english")}
              className="me-2"
            >
              English
            </Button>
            <Button
              variant={language === "hindi" ? "primary" : "outline-primary"}
              onClick={() => setLanguage("hindi")}
            >
              हिंदी
            </Button>
          </div>

          <Card.Title className="question-title">
            {currentQuestion + 1}. {currentQ.text[language]}
            <Button
              variant="link"
              onClick={speakText}
              className="speak-button"
              title="Click to hear the question"
            >
              <FaVolumeUp />
            </Button>
          </Card.Title>

          <hr />

          <div className="question-circle">
            {options.map((option, index) => (
              <div key={option.id} className="option-wrapper">
                <Button
                  variant={selectedAnswer === option.id ? "success" : "outline-primary"}
                  className={`question-circle ${selectedAnswer === option.id ? "selected" : ""}`}
                  onClick={() => handleAnswerSelect(option.id)}
                >
                </Button>
                <span className="option-text">{option.text}</span>
              </div>
            ))}
          </div>
        </Card.Body>

        <Card.Footer className="question-footer">
          <div className="button-group">
            <Button
              variant="primary"
              className="nav-button prev-button"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              variant="primary"
              className="nav-button next-button"
              onClick={handleNext}
              disabled={selectedAnswer === null}
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
            </Button>
          </div>
        </Card.Footer>
      </Card>

      {/* Time's Up Modal */}
      <Modal show={showTimeUpModal} onHide={() => setShowTimeUpModal(false)} centered className="quiz-timer-modal">
        <Modal.Header closeButton>
          <Modal.Title>Time's Up!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your 20-minute time limit for the Personality test has expired.</p>
          <p>You will be redirected to the results page in a few seconds.</p>
        </Modal.Body>
      </Modal>

      {/* Incomplete Quiz Modal */}
      <Modal show={showIncompleteModal} onHide={() => setShowIncompleteModal(false)} centered className="quiz-timer-modal">
        <Modal.Header closeButton>
          <Modal.Title>Incomplete Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You must answer all {totalQuestions} questions before completing the personality test.</p>
          <p>You have {unansweredCount} unanswered questions.</p>
          <p>Please go back and answer all questions to get accurate results.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowIncompleteModal(false)}>
            Continue Quiz
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
