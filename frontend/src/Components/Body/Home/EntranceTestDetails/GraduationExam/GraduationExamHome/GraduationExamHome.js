import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { examCategories } from "../Data/examData";
import "./GraduationExamHome.css";

export const GraduationExamHome = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const renderExamCards = (exams) => {
    return (
      <Row className="grad-exam-row g-4">
        {exams.map((exam) => (
          <Col key={exam.name} xs={12} md={6} lg={4}>
            <Card className="grad-exam-card h-100 shadow-sm">
              <Card.Body>
                <div className="grad-exam-header">
                  <h5 className="grad-exam-title mb-3">{exam.name}</h5>
                  <p className="grad-exam-body mb-2">
                    <strong>Conducting Body:</strong> {exam.conducting_body}
                  </p>
                  <p className="grad-exam-date mb-3">
                    <strong>Applications Open:</strong>{" "}
                    {exam.application_start_date}
                  </p>
                </div>
                <div className="grad-exam-actions mt-auto">
                  <Button
                    variant="outline-primary"
                    className="grad-exam-apply me-2"
                    href={exam.application_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </Button>
                  <Link
                    to={`./exam-details/${exam.id}`}
                    className="btn btn-link grad-exam-details"
                  >
                    View Details →
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <Container className="grad-exam-container py-5">
      <h2 className="grad-exam-heading text-center mb-4">
        Graduation Entrance Exams
      </h2>

      <Nav variant="tabs" className="grad-exam-tabs mb-4">
        {examCategories.map((category) => (
          <Nav.Item key={category.id}>
            <Nav.Link
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              className="grad-exam-tab"
            >
              {category.title}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {examCategories.map((category) => (
        category.id === activeCategory && (
          <div key={category.id}>
            {renderExamCards(category.exams)}
          </div>
        )
      ))}
    </Container>
  );
};