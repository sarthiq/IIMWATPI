import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Badge, Alert, ListGroup } from "react-bootstrap";
import { scholarshipDetails } from "../SchollarshipData/schollarshipData";
import "./SchollarshipDetails.css";

export const SchollarshipDetails = () => {
  const { route } = useParams();
  const scholarship = scholarshipDetails[route];

  if (!scholarship) {
    return (
      <Container className="schp-details-container py-5">
        <Alert variant="danger">Scholarship not found</Alert>
      </Container>
    );
  }

  return (
    <Container className="schp-details-container py-5">
      <Card className="schp-main-card shadow-sm mb-4">
        <Card.Header className="schp-header">
          <h1 className="schp-title mb-3">{scholarship.name}</h1>
          <Badge bg="primary" className="schp-category-badge">
            {scholarship.category}
          </Badge>
          <Badge bg="secondary" className="schp-quota-badge ms-2">
            {scholarship.quota}
          </Badge>
        </Card.Header>

        <Card.Body>
          <Row>
            <Col md={8}>
              <section className="schp-about-section mb-4">
                <h3 className="schp-section-title">About the Scholarship</h3>
                <p className="schp-about-text">{scholarship.about}</p>
              </section>

              <section className="schp-eligibility-section mb-4">
                <h3 className="schp-section-title">Eligibility Criteria</h3>
                <ListGroup variant="flush" className="schp-eligibility-list">
                  {scholarship.eligibility.map((criteria, index) => (
                    <ListGroup.Item key={index} className="schp-eligibility-item">
                      {criteria}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </section>

              <section className="schp-benefits-section mb-4">
                <h3 className="schp-section-title">Benefits</h3>
                <ListGroup variant="flush" className="schp-benefits-list">
                  {scholarship.benefits.map((benefit, index) => (
                    <ListGroup.Item key={index} className="schp-benefit-item">
                      {benefit}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </section>
            </Col>

            <Col md={4}>
              <Card className="schp-info-card mb-4">
                <Card.Header className="schp-info-header">
                  <h4 className="schp-info-title">Important Dates</h4>
                </Card.Header>
                <Card.Body>
                  <div className="schp-date-item">
                    <strong>Start Date:</strong>
                    <span>{scholarship.applicationPeriod.startDate}</span>
                  </div>
                  <div className="schp-date-item">
                    <strong>Last Date:</strong>
                    <span>{scholarship.applicationPeriod.closeDate}</span>
                  </div>
                </Card.Body>
              </Card>

              <Card className="schp-contact-card">
                <Card.Header className="schp-contact-header">
                  <h4 className="schp-contact-title">Contact Information</h4>
                </Card.Header>
                <Card.Body>
                  <div className="schp-contact-item">
                    <strong>Helpline:</strong>
                    <span>{scholarship.contactInfo.helpline}</span>
                  </div>
                  <div className="schp-contact-item">
                    <strong>Email:</strong>
                    <span>{scholarship.contactInfo.email}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <section className="schp-documents-section mt-4">
            <h3 className="schp-section-title">Required Documents</h3>
            <Row className="g-3">
              {scholarship.documents.map((document, index) => (
                <Col md={6} key={index}>
                  <div className="schp-document-item">
                    <i className="bi bi-file-earmark-text"></i>
                    {document}
                  </div>
                </Col>
              ))}
            </Row>
          </section>

          <section className="schp-notes-section mt-4">
            <h3 className="schp-section-title">Important Notes</h3>
            <Alert variant="info" className="schp-notes-alert">
              <ListGroup variant="flush" className="schp-notes-list">
                {scholarship.importantNotes.map((note, index) => (
                  <ListGroup.Item key={index} className="schp-note-item">
                    {note}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Alert>
          </section>
        </Card.Body>

        <Card.Footer className="schp-footer">
          <a
            href={scholarship.applicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary schp-apply-btn"
          >
            Apply Now
          </a>
        </Card.Footer>
      </Card>
    </Container>
  );
};