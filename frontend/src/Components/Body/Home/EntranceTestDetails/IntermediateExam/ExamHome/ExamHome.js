import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { nationalExamData, stateExamData, scholarshipExamData } from "../Data/examData";
import "./ExamHome.css";

export const ExamHome = () => {
  const [activeTab, setActiveTab] = useState("national");

  const renderExamCards = (exams,category) => {
    return (
      <Row className="entrance-exam-row g-4">
        {exams.map((exam) => (
          <Col key={exam.id} xs={12} md={6} lg={4}>
            <Card className="entrance-exam-card h-100 shadow-sm">
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
                <div className="entrance-exam-actions mt-auto">
                  <Button
                    variant="outline-primary"
                    className="entrance-exam-apply me-2"
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
    <Container className="entrance-exam-container py-5">
      <h2 className="entrance-exam-heading text-center mb-4">
        Entrance Examinations
      </h2>

      <Nav variant="tabs" className="entrance-exam-tabs mb-4">
        <Nav.Item>
          <Nav.Link
            active={activeTab === "national"}
            onClick={() => setActiveTab("national")}
            className="entrance-exam-tab"
          >
            National Exams
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active={activeTab === "state"}
            onClick={() => setActiveTab("state")}
            className="entrance-exam-tab"
          >
            State Exams
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active={activeTab === "scholarship"}
            onClick={() => setActiveTab("scholarship")}
            className="entrance-exam-tab"
          >
            Scholarship Exams
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {activeTab === "national" && renderExamCards(nationalExamData, "national")}
      {activeTab === "state" && renderExamCards(stateExamData, "state")}
      {activeTab === "scholarship" && renderExamCards(scholarshipExamData, "scholarship")}
    </Container>
  );
};
