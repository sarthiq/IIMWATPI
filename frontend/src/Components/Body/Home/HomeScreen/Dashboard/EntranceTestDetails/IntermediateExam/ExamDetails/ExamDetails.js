import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import {
  nationalExamData,
  stateExamData,
  scholarshipExamData,
} from "../Data/examData";
import "./ExamDetails.css";

export const ExamDetails = () => {
  const { category, id } = useParams();

  // Get the correct data array based on category
  const getExamData = () => {
    switch (category) {
      case "national":
        return nationalExamData;
      case "state":
        return stateExamData;
      case "scholarship":
        return scholarshipExamData;
      default:
        return [];
    }
  };

  // Find the specific exam
  const exam = getExamData().find((exam) => exam.id === parseInt(id));

  if (!exam) {
    return <div className="exam-details-error">Exam not found</div>;
  }

  return (
    <Container className="exam-details-container py-5">
      <h2 className="exam-details-title text-center mb-4">{exam.exam_name}</h2>

      <Row className="g-4">
        <Col xs={12} lg={8}>
          <Card className="exam-details-main-card shadow-sm">
            <Card.Body>
              <div className="exam-details-section mb-4">
                <h4 className="exam-details-section-title">
                  Basic Information
                </h4>
                <Table striped bordered hover className="exam-details-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Conducting Body</strong>
                      </td>
                      <td>{exam.conducting_body}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Exam Level</strong>
                      </td>
                      <td>{exam.exam_level}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Exam Mode</strong>
                      </td>
                      <td>{exam.exam_mode}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Exam Date</strong>
                      </td>
                      <td>{exam.exam_date}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Status</strong>
                      </td>
                      <td>
                        <span className="exam-details-status">
                          {exam.status}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="exam-details-section mb-4">
                <h4 className="exam-details-section-title">Important Dates</h4>
                <Table striped bordered hover className="exam-details-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Application Start</strong>
                      </td>
                      <td>{exam.application_start_date}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Application End</strong>
                      </td>
                      <td>{exam.application_end_date}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Admit Card Release</strong>
                      </td>
                      <td>{exam.admit_card_release_date}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Result Date</strong>
                      </td>
                      <td>{exam.result_date}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="exam-details-section mb-4">
                <h4 className="exam-details-section-title">Eligibility</h4>
                <p className="exam-details-text">{exam.eligibility}</p>
              </div>

              <div className="exam-details-section mb-4">
                <h4 className="exam-details-section-title">
                  Selection Process
                </h4>
                <p className="exam-details-text">{exam.selection_process}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <div className="exam-details-sidebar">
            <Card className="exam-details-pattern-card shadow-sm mb-4">
              <Card.Body>
                <h4 className="exam-details-section-title">Exam Pattern</h4>
                <div className="exam-pattern-info">
                  <p>
                    <strong>Total Marks:</strong>{" "}
                    {exam.exam_pattern.total_marks}
                  </p>
                  <p>
                    <strong>Duration:</strong> {exam.exam_pattern.duration}
                  </p>
                  <p>
                    <strong>Negative Marking:</strong>{" "}
                    {exam.exam_pattern.negative_marking ? "Yes" : "No"}
                  </p>
                </div>
                <h5 className="exam-details-subsection-title mt-3">Sections</h5>
                {exam.exam_pattern.sections.map((section, index) => (
                  <div key={index} className="exam-section-item">
                    <p className="mb-1">
                      <strong>{section.name}</strong>
                    </p>
                    <p className="mb-1">Marks: {section.marks}</p>
                    {section.questions && (
                      <p className="mb-2">Questions: {section.questions}</p>
                    )}
                  </div>
                ))}
              </Card.Body>
            </Card>

            <Card className="exam-details-syllabus-card shadow-sm">
              <Card.Body>
                <h4 className="exam-details-section-title">Syllabus</h4>
                <ul className="exam-syllabus-list">
                  {exam.syllabus.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>

      <div className="exam-details-links mt-4 text-center">
        <a
          href={exam.application_link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary exam-details-apply-btn me-3"
        >
          Apply Now
        </a>
      </div>
    </Container>
  );
};
