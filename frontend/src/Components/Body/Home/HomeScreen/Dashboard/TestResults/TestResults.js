import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAlert } from "../../../../../UI/Alert/AlertContext";
import "./TestResults.css";
import { getTestResultsHandler } from "../apiHandler";

export const TestResults = () => {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useAlert();

  useEffect(() => {
    fetchTestResults();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTestResults = async () => {
    const response = await getTestResultsHandler(setIsLoading, showAlert);
    if (response && response.success) {
      setResults(response.data.results);
    }
  };

  if (isLoading) {
    return (
      <div className="results-loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const renderTestCard = (type, data) => {
    if (!data) return null;

    const getTestTitle = () => {
      switch (type) {
        case "iq":
          return "IQ Test";
        case "personality":
          return "Personality Test";
        case "creativity":
          return "Creativity Test";
        default:
          return "Test";
      }
    };

    return (
      <Col md={6} lg={4} className="mb-4">
        <Card className="result-card">
          <Card.Body>
            <Card.Title className="result-title">{getTestTitle()}</Card.Title>
            <div className="result-details">
              <p className="result-date">
                Taken on: {new Date(data.completedAt).toLocaleDateString()}
              </p>

              {type === "iq" && (
                <p className="result-score">
                  IQ Level: {data.detailedResult.result.label}
                </p>
              )}

              {type === "personality" && (
                <div className="personality-traits">
                  <p>Personality Traits:</p>
                  <ul>
                    <li>
                      Extraversion:{" "}
                      {data.detailedResult.result.extraversion.toFixed(1)}%
                    </li>
                    <li>
                      Agreeableness:{" "}
                      {data.detailedResult.result.agreeableness.toFixed(1)}%
                    </li>
                    <li>
                      Conscientiousness:{" "}
                      {data.detailedResult.result.conscientiousness.toFixed(1)}%
                    </li>
                    <li>
                      Neuroticism:{" "}
                      {data.detailedResult.result.neuroticism.toFixed(1)}%
                    </li>
                    <li>
                      Openness: {data.detailedResult.result.openness.toFixed(1)}
                      %
                    </li>
                  </ul>
                </div>
              )}

              {type === "creativity" && (
                <div className="creativity-scores">
                  <p>Overall: {data.detailedResult.result.label}</p>
                  <p>Category Scores:</p>
                  <ul>
                    <li>
                      Fluency:{" "}
                      {data.detailedResult.result.categoryScores.fluency.toFixed(
                        1
                      )}
                    </li>
                    <li>
                      Flexibility:{" "}
                      {data.detailedResult.result.categoryScores.flexibility.toFixed(
                        1
                      )}
                    </li>
                    <li>
                      Originality:{" "}
                      {data.detailedResult.result.categoryScores.originality.toFixed(
                        1
                      )}
                    </li>
                    <li>
                      Elaboration:{" "}
                      {data.detailedResult.result.categoryScores.elaboration.toFixed(
                        1
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link
              to={`/quiz/${data.quizId}/`}
              className="view-details-link"
            >
              Take Test Again
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container className="test-results-container">
      <Row className="mb-4">
        <Col>
          <h2 className="results-title">Your Test Results</h2>
        </Col>
      </Row>

      <Row>
        {!results ? (
          <Col>
            <Card className="no-results-card">
              <Card.Body>
                <p>You haven't taken any tests yet.</p>
                <Link to="/" className="take-test-link">
                  Take a Test Now
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ) : (
          <>
            {renderTestCard("iq", results.iq)}
            {renderTestCard("personality", results.personality)}
            {renderTestCard("creativity", results.creativity)}
          </>
        )}
      </Row>
    </Container>
  );
};
