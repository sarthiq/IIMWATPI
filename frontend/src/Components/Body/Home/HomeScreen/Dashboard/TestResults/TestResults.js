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
        default:
          return "Test";
      }
    };

    return (
      <div className="test-card-wrapper">
        <div className="test-card-container">
          <div className="test-card-header">
            <h3 className="test-card-title">{getTestTitle()}</h3>
          </div>
          
          {!data ? (
            <div className="test-empty-state">
              <p>You haven't taken this test yet.</p>
              <Link to={`/quiz/${quizzes?.find((quiz) => 
                quiz.title.toLowerCase() === type.toLowerCase())?.id || ""}`} 
                className="test-action-button">
                Take Test Now
              </Link>
            </div>
          ) : (
            <>
              <div className="test-content">
                <p className="test-date-info">
                  Taken on: {new Date(data.completedAt).toLocaleDateString()}
                </p>

                {type === "iq" && (
                  <div className="iq-result-section">
                    <p className="test-iq-score">
                      IQ Level: {data.detailedResult.result.label}
                    </p>
                    
                    <div className="iq-table-container">
                      <table className="iq-table">
                        <thead>
                          <tr>
                            <th>IQ Range</th>
                            <th>IQ Category</th>
                            <th>Meaning</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>120+</td>
                            <td>High IQ</td>
                            <td>
                              <strong>Highly Intelligent/Genius</strong><br />
                              Can learn anything easily
                            </td>
                          </tr>
                          <tr>
                            <td>100-120</td>
                            <td>Above Average IQ</td>
                            <td>
                              <strong>Superior Intelligence</strong><br />
                              Likely to excel academically
                            </td>
                          </tr>
                          <tr>
                            <td>90-100</td>
                            <td>Average IQ</td>
                            <td>
                              <strong>Normal/Average Intelligent</strong><br />
                              Can learn things and perform academically well with dedication and hard work
                            </td>
                          </tr>
                          <tr>
                            <td>80-90</td>
                            <td>Below Average IQ</td>
                            <td>
                              <strong>Dull Normal</strong><br />
                              Difficulty in learning complex and new things: Repeated
                            </td>
                          </tr>
                          <tr>
                            <td>70-80</td>
                            <td>Low IQ</td>
                            <td>
                              <strong>Borderline Delayed</strong><br />
                              Can study and learn to some extent if repeated multiple times but not complex ideas/concepts.
                            </td>
                          </tr>
                          <tr>
                            <td>Below 70</td>
                            <td>Very Low IQ</td>
                            <td>
                              <strong>Delayed</strong><br />
                              Should be given special attention
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="iq-note">
                        *IQ measures the learning speed and sharpness of the mind. Higher IQ only reflects better at understanding and making sense of things while success depends on many other parameters.
                      </p>
                    </div>
                  </div>
                )}

                {type === "personality" && (
                  <div className="personality-section">
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
              </div>
              <Link to={`/quiz/${data.quizId}/`} className="test-action-button">
                Take Test Again
              </Link>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <Container className="test-results-container">
      <Row className="mb-4">
        <Col>
          <h2 className="results-title">Your Test Results</h2>
        </Col>
      </Row>

      <Row className="results-row" style={{ display: 'flex', margin: '0', width: '100%' }}>
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
          </>
        )}
      </Row>
    </Container>
  );
};
