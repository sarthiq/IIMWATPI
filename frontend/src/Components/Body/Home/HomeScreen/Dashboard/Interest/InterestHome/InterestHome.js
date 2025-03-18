import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./InterestHome.css";
import { useAlert } from "../../../../../../UI/Alert/AlertContext";
import { getInterestHandler } from "../../apiHandler";


export const InterestHome = () => {
  const [results, setResults] = useState([]);
  const {showAlert}=useAlert();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTestResultsHandler()
  }, []);

  const getTestResultsHandler=async()=>{
    const response=await getInterestHandler(setIsLoading, showAlert);
    if(response){
      setResults(response.data);
    }
  }
  console.log(results);
  return (
    <Container className="interest-home-container py-4">
      {/* Results Section */}
      <section className="interest-results-section mb-5">
        <h2 className="interest-section-title mb-4">
          Your Interest Test Results
        </h2>
        <Row>
          <Col md={4}>
            <Card className="interest-result-card">
              <Card.Header className="interest-card-header">
                Class 10 Results
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {results[10]?.length > 0 ? (
                    <ol>
                      {results[10].map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ol>
                  ) : (
                    "No results available yet"
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="interest-result-card">
              <Card.Header className="interest-card-header">
                Class 12 Results
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {results[12]?.length > 0 ? (
                    <ol>
                      {results[12].map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ol>
                  ) : (
                    "No results available yet"
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="interest-result-card">
              <Card.Header className="interest-card-header">
                Graduation Results
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {results[16]?.length > 0 ? (
                    <ol>
                      {results[16].map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ol>
                  ) : (
                    "No results available yet"
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Available Tests Section */}
      <section className="interest-tests-section">
        <h2 className="interest-section-title mb-4">Take Interest Test</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="interest-test-card">
              <Card.Body>
                <Card.Title>Class 10 Interest Test</Card.Title>
                <Card.Text>
                  Discover your interests and potential career paths after Class
                  10.
                </Card.Text>
                <Link to="./tenth-test" className="btn btn-primary interest-start-btn">
                  Take Test
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="interest-test-card">
              <Card.Body>
                <Card.Title>Class 12 Interest Test</Card.Title>
                <Card.Text>
                  Explore your interests and career options after Class 12.
                </Card.Text>
                <Link to="./twelth-test" className="btn btn-primary interest-start-btn">
                  Take Test
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="interest-test-card">
              <Card.Body>
                <Card.Title>Graduation Interest Test</Card.Title>
                <Card.Text>
                  Find your professional interests and career direction after
                  graduation.
                </Card.Text>
                <Link to="./graduation-test" className="btn btn-primary interest-start-btn">
                  Take Test
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};
