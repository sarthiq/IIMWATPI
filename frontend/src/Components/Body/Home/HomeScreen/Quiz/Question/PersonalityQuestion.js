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
  const [timerActive, setTimerActive] = useState(true);

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
  };
  
  const handleNext = () => {
    setUserPersonalityAnswer((prevUserPersonalityAnswer) => {
      prevUserPersonalityAnswer.push(options[selectedAnswer - 1].value);
      return prevUserPersonalityAnswer;
    });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
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
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      // Remove the last answer when going back
      setUserPersonalityAnswer((prevAnswers) => {
        const newAnswers = [...prevAnswers];
        newAnswers.pop();
        return newAnswers;
      });
    }
  };

  if (questions.length === 0) {
    return <h1>No Questions Found</h1>;
  }

  const currentQ = questions[currentQuestion];

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
        </Card.Header>
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
                  onClick={() => handleAnswerSelect(index + 1)}
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
    </Container>
  );
};
