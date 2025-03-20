import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAlert } from "../../../../../UI/Alert/AlertContext";
import "./TestResults.css";
import { getTestResultsHandler } from "../apiHandler";

export const TestResults = () => {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [quizzes, setQuizzes] = useState(null);
  const { showAlert } = useAlert();

  useEffect(() => {
    fetchTestResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(quizzes);
  const fetchTestResults = async () => {
    const response = await getTestResultsHandler(setIsLoading, showAlert);
    if (response && response.success) {
      setResults(response.data.results);
      setQuizzes(response.data.quizzes);
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
            {!data ? (
              <div className="result-details">
                <p>You haven't taken this test yet.</p>
                <Link
                  to={`/quiz/${
                    quizzes?.find(
                      (quiz) => quiz.title.toLowerCase() === type.toLowerCase()
                    )?.id || ""
                  }`}
                  className="take-test-link"
                >
                  Take Test Now
                </Link>
              </div>
            ) : (
              <>
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
                    <div className="personality-test-section">
                        <div className="personality-scores">
                          {/* Extraversion */}
                          <div className="score-row">
                            <div className="score-labels">
                              <span className="left-label">Introvert</span>
                              <span className="right-label">Extravert</span>
                            </div>
                            <div className="score-bar-container">
                              <div 
                                className="score-bar"
                                style={{ 
                                  backgroundColor: "#4287f5",
                                  width: `${data.detailedResult.result.extraversion}%` 
                                }}
                              />
                              <span 
                                className="score-value" 
                                style={{ left: `${data.detailedResult.result.extraversion}%` }}
                              >
                                {data.detailedResult.result.extraversion.toFixed(1)}%
                              </span>
                              <div 
                                className="circle-indicator"
                                style={{ left: `${data.detailedResult.result.extraversion}%` }}
                              />
                            </div>
                            <div 
                              className="score-indicator"
                              style={{ 
                                left: `${data.detailedResult.result.extraversion}%`,
                              }}
                            >
                              Extraversion
                            </div>
                          </div>



                          {/* Agreeableness */}
                          <div className="score-row">
                            <div className="score-labels">
                              <span className="left-label">Self-Centered</span>
                              <span className="right-label">Empathetic</span>
                            </div>
                            <div className="score-bar-container">
                              <div 
                                className="score-bar"
                                style={{ 
                                  backgroundColor: "#f542a7",
                                  width: `${data.detailedResult.result.agreeableness}%`
                                }}
                              />
                              <span 
                                className="score-value" 
                                style={{ left: `${data.detailedResult.result.agreeableness}%` }}
                              >
                                {data.detailedResult.result.agreeableness.toFixed(1)}%
                              </span>
                              <div 
                                className="circle-indicator"
                                style={{ left: `${data.detailedResult.result.agreeableness}%` }}
                              />
                            </div>
                            <div 
                              className="score-indicator"
                              style={{ 
                                left: `${data.detailedResult.result.agreeableness}%`,
                              }}
                            >
                              Agreeableness
                            </div>
                          </div>

                          {/* Conscientiousness */}
                          <div className="score-row">
                            <div className="score-labels">
                              <span className="left-label">Unorganized</span>
                              <span className="right-label">Organized</span>
                            </div>
                            <div className="score-bar-container">
                              <div 
                                className="score-bar"
                                style={{ 
                                  backgroundColor: "#42f5b3",
                                  width: `${data.detailedResult.result.conscientiousness}%`
                                }}
                              />
                              <span 
                                className="score-value" 
                                style={{ left: `${data.detailedResult.result.conscientiousness}%` }}
                              >
                                {data.detailedResult.result.conscientiousness.toFixed(1)}%
                              </span>
                              <div 
                                className="circle-indicator"
                                style={{ left: `${data.detailedResult.result.conscientiousness}%` }}
                              />
                            </div>
                            <div 
                              className="score-indicator"
                              style={{ 
                                left: `${data.detailedResult.result.conscientiousness}%`,
                              }}
                            >
                              Conscientiousness
                            </div>
                          </div>

                          {/* Neuroticism */}
                          <div className="score-row">
                            <div className="score-labels">
                              <span className="left-label">Emotionally stable</span>
                              <span className="right-label">Emotional</span>
                            </div>
                            <div className="score-bar-container">
                              <div 
                                className="score-bar"
                                style={{ 
                                  backgroundColor: "#f5a742",
                                  width: `${data.detailedResult.result.neuroticism}%`
                                }}
                              />
                              <span 
                                className="score-value" 
                                style={{ left: `${data.detailedResult.result.neuroticism}%` }}
                              >
                                {data.detailedResult.result.neuroticism.toFixed(1)}%
                              </span>
                              <div 
                                className="circle-indicator"
                                style={{ left: `${data.detailedResult.result.neuroticism}%` }}
                              />
                            </div>
                            <div 
                              className="score-indicator"
                              style={{ 
                                left: `${data.detailedResult.result.neuroticism}%`,
                              }}
                            >
                              Neuroticism
                            </div>
                          </div>

                          {/* Openness */}
                          <div className="score-row">
                            <div className="score-labels">
                              <span className="left-label">Rigid</span>
                              <span className="right-label">Early Adopter</span>
                            </div>
                            <div className="score-bar-container">
                              <div 
                                className="score-bar"
                                style={{ 
                                  backgroundColor: "#9042f5",
                                  width: `${data.detailedResult.result.openness}%`
                                }}
                              />
                              <span 
                                className="score-value" 
                                style={{ left: `${data.detailedResult.result.openness}%` }}
                              >
                                {data.detailedResult.result.openness.toFixed(1)}%
                              </span>
                              <div 
                                className="circle-indicator"
                                style={{ left: `${data.detailedResult.result.openness}%` }}
                              />
                            </div>
                            <div 
                              className="score-indicator"
                              style={{ 
                                left: `${data.detailedResult.result.openness}%`,
                              }}
                            >
                              Openness
                            </div>
                          </div>
                        </div>
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
              </>
            )}
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
