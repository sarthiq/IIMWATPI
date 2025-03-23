import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { examCategories } from "../Data/examData";
import "./GraduationExamHome.css";

export const GraduationExamHome = () => {
  const renderExamCards = (exams) => {
    return (
      <Row className="grad-exam-row g-4">
        {exams.map((exam) => (
          <Col key={exam.name} xs={12} sm={6} lg={4}>
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
                    className="grad-exam-apply"
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
    <Container fluid="lg" className="grad-exam-container py-4">
      {examCategories.map((category) => (
        <div key={category.id} className="exam-section mb-5">
          <h3 className="section-heading mb-4">{category.title}</h3>
          {renderExamCards(category.exams)}
        </div>
      ))}
    </Container>
  );
};