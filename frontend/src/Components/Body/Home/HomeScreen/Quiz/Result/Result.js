import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Spinner } from "react-bootstrap";
import "./Result.css"; // Unique styles for result page
import { submitAnswersHandler } from "../apiHandler";
import { useAlert } from "../../../../../UI/Alert/AlertContext";

export const Result = ({
  userAnswer,
  userPersonalityAnswer,
  timeDuration,
  quizInfo,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Loading state for spinner
  const [result, setResult] = useState(null); // State to store quiz result
  const { showAlert } = useAlert();
  // console.log(userAnswer=={});
  // if (!userAnswer) {
  //   if (userPersonalityAnswer.length === 0) {
  //     userPersonalityAnswer = JSON.parse(
  //       localStorage.getItem("userPersonalityAnswer")
  //     );
  //     quizInfo.typeId = "personality";
  //     quizInfo.id = 3;
  //   }
  // }

  useEffect(() => {
    const submitDetails = async () => {
      const response = await submitAnswersHandler(
        {
          answers:
            quizInfo.typeId === "personality"
              ? userPersonalityAnswer
              : userAnswer,
          timeDuration,
          quizId: quizInfo.id,
        },
        quizInfo.typeId === "personality"
          ? "submitPersonalityQuiz"
          : "submitQuiz",
        setLoading,
        showAlert
      );
      console.log(response);
      if (response) {
        setResult(response.data);
        setLoading(false);
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

  if (quizInfo.typeId === "personality") {
    return (
      <Container className="result-container">
        <Card className="result-card">
          <Card.Body>
            <Card.Title className="result-title">
              Personality Quiz Results
            </Card.Title>
            <div className="result-details">
              <table className="personality-table">
                <thead>
                  <tr>
                    <th>Personality Trait</th>
                    <th>Your Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Extraversion (E)</td>
                    <td>{result.extraversion.toFixed(2)}%</td>
                  </tr>
                  <tr>
                    <td>Agreeableness (A)</td>
                    <td>{result.agreeableness.toFixed(2)}%</td>
                  </tr>
                  <tr>
                    <td>Conscientiousness (C)</td>
                    <td>{result.conscientiousness.toFixed(2)}%</td>
                  </tr>
                  <tr>
                    <td>Neuroticism (N)</td>
                    <td>{result.neuroticism.toFixed(2)}%</td>
                  </tr>
                  <tr>
                    <td>Openness to Experience (O)</td>
                    <td>{result.openness.toFixed(2)}%</td>
                  </tr>
                </tbody>
              </table>
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
  } else
    return (
      <Container className="result-container">
        <Card className="result-card">
          <Card.Body>
            <Card.Title className="result-title">IQ Results</Card.Title>
            <div className="result-details">
              <p>
                <strong>IQ Level:</strong>{" "}
                {result.iqLevel[0] + " - " + result.iqLevel[1]}
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
