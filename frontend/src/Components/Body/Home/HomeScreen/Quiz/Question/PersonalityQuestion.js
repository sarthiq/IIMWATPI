import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import "./Question.css"; // You'll need to create this CSS file
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
    { id: 1, text: "Strongly Agree" },
    { id: 2, text: "Agree" },
    { id: 3, text: "Neutral" },
    { id: 4, text: "Disagree" },
    { id: 5, text: "Strongly Disagree" },
  ];

  const handleAnswerSelect = (optionId) => {
    setSelectedAnswer(optionId);
  };

  const handleNext = () => {
    setUserPersonalityAnswer((prevUserPersonalityAnswer) => {
      prevUserPersonalityAnswer.push(selectedAnswer);
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
      navigate(`/quiz/${id}/result`);
    }
  };

  if (questions.length === 0) {
    return <h1>No Questions Found</h1>;
  }

  const currentQ = questions[currentQuestion];

  return (
    <Container className="question-container">
      <Card className="question-card">
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

          <div className="question-options">
            {options.map((option, index) => (
              <Button
                key={option.id}
                variant={
                  selectedAnswer === option.id ? "success" : "outline-primary"
                }
                className={`question-option ${
                  selectedAnswer === option.id ? "selected" : ""
                }`}
                onClick={() => handleAnswerSelect(index + 1)}
              >
                {option.text}
              </Button>
            ))}
          </div>
        </Card.Body>

        <Card.Footer className="question-footer">
          <Button
            variant="primary"
            className="next-button"
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >
            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};
