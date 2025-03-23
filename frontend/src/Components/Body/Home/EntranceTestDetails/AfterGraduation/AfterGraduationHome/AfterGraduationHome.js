import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { categories } from "../Data/examData";
import "./AfterGraduationHome.css";

export const AfterGraduationHome = () => {
  const renderExamCards = (exams) => {
    return (
      <Row className="after-grad-exam-row g-4">
        {exams.map((exam) => (
          <Col key={exam.name} xs={12} sm={6} lg={4}>
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
                    variant="primary"
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
    <Container fluid="lg" className="after-grad-container py-4">
      {categories.map((category) => (
        <div key={category.id} className="exam-section mb-5">
          <h3 className="section-heading mb-4">{category.title}</h3>
          {renderExamCards(category.exams)}
        </div>
      ))}
    </Container>
  );
};
