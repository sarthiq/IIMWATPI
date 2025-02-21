import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";
import "./Question.css"; // Unique styles for this page

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", image: null },
      { text: "Madrid", image: null },
      { text: "Paris", image: null },
      { text: "Rome", image: null },
      { text: "Lisbon", image: null },
      { text: "London", image: null },
    ],
    correct: 2,
    image: null, // No image for this question
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", image: null },
      { text: "Mars", image: "https://example.com/mars.jpg" }, // Image for Mars
      { text: "Jupiter", image: null },
      { text: "Saturn", image: null },
      { text: "Venus", image: null },
      { text: "Mercury", image: null },
    ],
    correct: 1,
    image: "https://example.com/red-planet.jpg", // Example image URL
  },
  {
    id: 3,
    question: null, // No text question
    answers: [
      { text: null, image: "https://placehold.co/400" }, // Only image for this option
      { text: null, image: "https://example.com/option2.jpg" },
      { text: null, image: "https://example.com/option3.jpg" },
      { text: null, image: "https://example.com/option4.jpg" },
      { text: null, image: "https://example.com/option5.jpg" },
      { text: null, image: "https://example.com/option6.jpg" },
    ],
    correct: 1,
    image: "https://placehold.co/400", // Only image for this question
  },
  // Add more questions in this format
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

  const currentQ = questions[currentQuestion];

  return (
    <Container className="question-container">
      <Card className="question-card">
        {!isAgeRequired ? (
          <>
            <Card.Body>
              {currentQ.question && (
                <Card.Title className="question-title">
                  {currentQuestion + 1}. {currentQ.question}
                </Card.Title>
              )}
              {currentQ.image && (
                <div className="question-image">
                  <img src={currentQ.image} alt="Question" />
                </div>
              )}
              <hr/>
              <div className="question-options">
                {currentQ.answers.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "success" : "outline-primary"}
                    className="question-option"
                    onClick={() => setSelectedAnswer(index)}
                  >
                    {option.image ? (
                      <img src={option.image} alt={`Option ${index + 1}`} className="option-image" />
                    ) : (
                      option.text
                    )}
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