import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AILiteracySummary.css';
import { Link } from 'react-router-dom';

export const AILiteracySummary = () => {
  const features = [
    {
      icon: "🤖",
      title: "ChatGPT",
      description: "Learn how to effectively use ChatGPT for coding assistance, content creation, and problem-solving"
    },
    {
      icon: "🎨",
      title: "AI Image Tools",
      description: "Explore DALL-E, Midjourney, and other AI image generation tools for creative projects"
    },
    {
      icon: "✍️",
      title: "Writing Assistants",
      description: "Discover AI writing tools for content improvement, grammar checking, and style enhancement"
    },
    {
      icon: "🔍",
      title: "AI Research Tools",
      description: "Learn about AI-powered research assistants for efficient information gathering and analysis"
    }
  ];

  return (
    <Card className="ai-literacy-summary">
      <Card.Body>
        <Container>
          <div className="summary-header text-center mb-5">
            <h2 className="summary-title">AI Tools Guide</h2>
            <p className="summary-subtitle">
              Master the use of AI tools to enhance your productivity
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
            <Link to="/dashboard/ai-literacy/tools-tasks" 
              className="btn btn-primary btn-lg px-4">
              Learn More
            </Link>
          </div>
        </Container>
      </Card.Body>
    </Card>
  );
};
