import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { nationalExamData, stateExamData, scholarshipExamData } from "../Data/examData";
import "./ExamHome.css";

export const ExamHome = () => {
  
  const renderExamCards = (exams, category) => {
    return (
      <Row className="entrance-exam-row g-4">
        {exams.map((exam) => (
          <Col key={exam.id} xs={12} sm={6} lg={4}>
            <Card className="entrance-exam-card shadow-sm">
              <Card.Body>
                <div className="entrance-exam-header">
                  <h5 className="entrance-exam-title mb-3">{exam.exam_name}</h5>
                  <p className="entrance-exam-body mb-2">
                    <strong>Conducting Body:</strong> {exam.conducting_body}
                  </p>
                  <p className="entrance-exam-date mb-3">
                    <strong>Applications Open:</strong>{" "}
                    {exam.application_start_date}
                  </p>
                </div>
                <div className="entrance-exam-actions">
                  <Button
                    variant="outline-primary"
                    className="entrance-exam-apply"
                    href={exam.application_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </Button>
                  <Link
                    to={`./${category}/${exam.id}`}
                    className="btn btn-link entrance-exam-details"
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
    <Container fluid="lg" className="entrance-exam-container py-4">
      <div className="exam-section mb-5">
        <h3 className="section-heading">National Exams</h3>
        {renderExamCards(nationalExamData, "national")}
      </div>

      <div className="exam-section mb-5">
        <h3 className="section-heading">State Exams</h3>
        {renderExamCards(stateExamData, "state")}
      </div>

      <div className="exam-section mb-5">
        <h3 className="section-heading">Scholarship Exams</h3>
        {renderExamCards(scholarshipExamData, "scholarship")}
      </div>
    </Container>
  );
};
