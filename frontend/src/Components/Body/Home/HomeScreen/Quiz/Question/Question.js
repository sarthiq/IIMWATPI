import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";
import "./Question.css"; // Unique styles for this page

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome", "Lisbon", "London"],
    correct: 2,
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn", "Venus", "Mercury"],
    correct: 1,
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6", "7", "8"],
    correct: 1,
  },
  // Add 17 more questions in this format
];

export const Question = () => {
  const { id, questionId } = useParams(); // Get quiz ID and question number from URL
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [age, setAge] = useState("");
  const [isAgeRequired, setIsAgeRequired] = useState(false);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setIsAgeRequired(true);
    }
  };

  const handleSubmit = () => {
    if (!age) {
      alert("Please enter your age before submitting.");
      return;
    }
    navigate(`/quiz/${id}/result`);
  };

  return (
    <Container className="question-container">
      <Card className="question-card">
        {!isAgeRequired ? (
          <>
            <Card.Body>
              <Card.Title className="question-title">
                {currentQuestion + 1}. {questions[currentQuestion].question}
              </Card.Title>
              <div className="question-options">
                {questions[currentQuestion].answers.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "success" : "outline-primary"}
                    className="question-option"
                    onClick={() => setSelectedAnswer(index)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </Card.Body>
            <Card.Footer className="question-footer">
              <Button variant="primary" className="next-button" onClick={handleNext}>
                {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
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
            <Button variant="success" className="submit-button" onClick={handleSubmit}>
              Submit & Get Result
            </Button>
          </Card.Body>
        )}
      </Card>
    </Container>
  );
};
