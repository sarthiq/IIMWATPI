import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Spinner } from "react-bootstrap";
import "./Result.css"; // Unique styles for result page
import { submitAnswersHandler } from "../apiHandler";
import { useAlert } from "../../../../../UI/Alert/AlertContext";

export const Result = ({ userAnswer,timeDuration }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Loading state for spinner
  const [result, setResult] = useState(null); // State to store quiz result
  const{showAlert}=useAlert();
  

  useEffect(() => {
    const submitDetails = async () => {
      const response = await submitAnswersHandler(
        {answers:userAnswer,timeDuration},
        setLoading,
        showAlert
      );

      if (response) {
        setResult(response.data);
      }
    };

    submitDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || !result) {
    return (
      <Container className="result-container">
        <Card className="result-card">
          <Card.Body className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p>Submitting your quiz and calculating results...</p>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  console.log(result);
  
  return (
    <Container className="result-container">
      <Card className="result-card">
        <Card.Body>
          <Card.Title className="result-title">Quiz Results</Card.Title>
          <div className="result-details">
            <p>
              <strong>Total Questions:</strong> {result.totalQuestions}
            </p>
            <p>
              <strong>Questions Attempted:</strong> {result.attemptedQuestions}
            </p>
            <p>
              <strong>Correct Answers:</strong> {result.correctAnswers}
            </p>
            <p>
              <strong>Score:</strong> {result.score}
            </p>
            <p>
              <strong>Percentage:</strong> {result.percentage}%
            </p>
            <p>
              <strong>IQ Level:</strong> {result.iqLevel}
            </p>
          </div>
          <Button
            variant="primary"
            className="home-button"
            onClick={() => navigate("/")}
          >
            Go to Home Page
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
