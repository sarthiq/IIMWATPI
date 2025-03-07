import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";
import "./Question.css"; // Keeping styles file unchanged

export const Question = ({ questions, setUserAnswer, setTimeDuration }) => {
  
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [age, setAge] = useState("");
  const [isAgeRequired, setIsAgeRequired] = useState(false);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    const questionId = questions[currentQuestion].id;
    setUserAnswer((prevUserAnswer) => ({
      ...prevUserAnswer,
      [questionId]: questions[currentQuestion].Answers[index].id,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setTimeDuration((prevData) => ({
        ...prevData,
        endTime: new Date(),
      }));
      setIsAgeRequired(true);
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

  if (questions.length === 0) {
    return <h1>No Questions Found</h1>;
  }
  
  const currentQ = questions[currentQuestion];
  const Q = "Q.";
  return (
    <Container className="question-container">
      <Card className="question-card">
        {!isAgeRequired ? (
          <>
            <Card.Body>
              <Card.Title className="question-title">
                 {Q + (currentQuestion+1)}
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
              <Button
                variant="primary"
                className="next-button"
                onClick={handleNext}
              >
                {currentQuestion === questions.length - 1
                  ? "Finish Quiz"
                  : "Next"}
              </Button>
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
    </Container>
  );
};
