import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './EntranceExamSummary.css';
import { Link } from 'react-router-dom';
export const EntranceExamSummary = () => {
  const features = [
    {
      icon: "📚",
      title: "Exam Patterns",
      description: "Detailed analysis of question patterns, marking schemes, and exam structure"
    },
    {
      icon: "📅",
      title: "Important Dates",
      description: "Stay updated with application deadlines and exam schedules"
    },
    {
      icon: "📋",
      title: "Syllabus Coverage",
      description: "Comprehensive subject-wise syllabus breakdown for all major entrance exams"
    },
    {
      icon: "🎯",
      title: "Preparation Tips",
      description: "Expert strategies and study materials for exam preparation"
    }
  ];

  return (
    <Card className="entrance-exam-summary">
      <Card.Body>
        <Container>
          <div className="summary-header text-center mb-5">
            <h2 className="summary-title">Entrance Exam Guide</h2>
            <p className="summary-subtitle">
              Your complete resource for entrance exam preparation
            </p>
          </div>

          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="summary-card h-100 border-0 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="feature-icon mb-3 display-4">
                      {feature.icon}
                    </div>
                    <Card.Title className="feature-title h5 mb-3">
                      {feature.title}
                    </Card.Title>
                    <Card.Text className="feature-description text-muted">
                      {feature.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Link to="/entrance-test-details"
               className="btn btn-primary btn-lg px-4">
              Explore More
            </Link>
          </div>
        </Container>
      </Card.Body>
    </Card>
  );
};


