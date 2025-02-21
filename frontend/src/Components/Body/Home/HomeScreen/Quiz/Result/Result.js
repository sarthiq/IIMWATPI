import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import "./Result.css"; // Unique styles for result page

export const Result = () => {
  const navigate = useNavigate();

  // Simulated quiz data
  const totalQuestions = 20;
  const attemptedQuestions = Math.floor(Math.random() * totalQuestions) + 1; // Randomly simulate attempted questions
  const iqScore = attemptedQuestions * 5; // Example calculation: Each correct answer adds 5 IQ points

  // Determine IQ Level
  let iqLevel = "Average";
  if (iqScore > 80) iqLevel = "Genius";
  else if (iqScore > 60) iqLevel = "Above Average";
  else if (iqScore > 40) iqLevel = "Normal";
  else iqLevel = "Below Average";

  return (
    <Container className="result-container">
      <Card className="result-card">
        <Card.Body>
          <Card.Title className="result-title">Quiz Results</Card.Title>
          <div className="result-details">
            <p><strong>Total Questions:</strong> {totalQuestions}</p>
            <p><strong>Questions Attempted:</strong> {attemptedQuestions}</p>
            <p><strong>IQ Score:</strong> {iqScore}</p>
            <p><strong>IQ Level:</strong> {iqLevel}</p>
          </div>
          <Button variant="primary" className="home-button" onClick={() => navigate("/")}>
            Go to Home Page
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
