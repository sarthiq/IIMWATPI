import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './SchollarshipSummary.css';
import { Link } from 'react-router-dom';

export const ScholarshipSummary = () => {
  const scholarships = [
    {
      icon: "🎓",
      title: "Merit-Based",
      description: "Academic excellence scholarships for outstanding students with exceptional grades"
    },
    {
      icon: "💰",
      title: "Need-Based",
      description: "Financial assistance for students demonstrating economic hardship"
    },
    {
      icon: "🌟",
      title: "Research Grants",
      description: "Funding opportunities for innovative research projects and academic pursuits"
    },
    {
      icon: "🌍",
      title: "International",
      description: "Scholarships for international students seeking global education opportunities"
    }
  ];

  return (
    <Card className="scholarship-summary">
      <Card.Body>
        <Container>
          <div className="summary-header text-center mb-5">
            <h2 className="summary-title">Scholarship Opportunities</h2>
            <p className="summary-subtitle">
              Discover financial aid options to support your educational journey
            </p>
          </div>

          <Row className="g-4">
            {scholarships.map((scholarship, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="summary-card h-100 border-0 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="feature-icon mb-3 display-4">
                      {scholarship.icon}
                    </div>
                    <Card.Title className="feature-title h5 mb-3">
                      {scholarship.title}
                    </Card.Title>
                    <Card.Text className="feature-description text-muted">
                      {scholarship.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Link to="/schollarship" 
              className="btn btn-primary btn-lg px-4">
              View Scholarships
            </Link>
          </div>
        </Container>
      </Card.Body>
    </Card>
  );
};
