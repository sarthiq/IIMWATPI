import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { categories } from "../Data/examData";
import "./AfterGraduationHome.css";

export const AfterGraduationHome = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const renderExamCards = (exams) => {
    return (
      <Row className="after-grad-exam-row g-4">
        {exams.map((exam) => (
          <Col key={exam.name} xs={12} md={6} lg={4}>
            <Card className="after-grad-exam-card h-100 shadow-sm">
              <Card.Body>
                <div className="after-grad-exam-header">
                  <h5 className="after-grad-exam-title mb-3">{exam.name}</h5>
                  <p className="after-grad-exam-body mb-2">
                    <strong>Conducting Body:</strong> {exam.conducting_body}
                  </p>
                  <p className="after-grad-exam-date mb-3">
                    <strong>Applications Open:</strong>{" "}
                    {exam.application_start_date}
                  </p>
                </div>
                <div className="after-grad-exam-actions mt-auto">
                  <Button
                    variant="outline-primary"
                    className="after-grad-exam-apply me-2"
                    href={exam.application_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </Button>
                  <Link
                    to={`./exam-details/${exam.id}`}
                    className="btn btn-link after-grad-exam-details"
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
    <Container className="after-grad-container py-5">
      <h2 className="after-grad-heading text-center mb-4">
        After Graduation Opportunities
      </h2>

      <Nav variant="tabs" className="after-grad-tabs mb-4">
        {categories.map((category) => (
          <Nav.Item key={category.id}>
            <Nav.Link
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              className="after-grad-tab"
            >
              {category.title}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {categories.map((category) => (
        category.id === activeCategory && (
          <div key={category.id}>
            {renderExamCards(category.exams)}
          </div>
        )
      ))}
    </Container>
  );
};