import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './EntranceHome.css';

export const EntranceHome = () => {
  const exams = [
    {
      title: "11-12 Entrance Exam",
      description:
        "Prepare for your 11-12 entrance exams with our comprehensive resources.",
      link: "./intermediate",
      className: "exam-card exam-11-12",
    },
    {
      title: "Graduation Entrance Exam",
      description:
        "Get ready for graduation entrance exams with our expert guidance.",
      link: "./graduation",
      className: "exam-card exam-graduation",
    },
    {
      title: "Post-Graduation/After Graduation Entrance Exam",
      description:
        "Ace your post-graduation entrance exams with our tailored materials.",
      link: "./after-graduation",
      className: "exam-card exam-post-graduation",
    },
  ];

  return (
    <div className="entrance-home">
      <h1 className="entrance-title">Entrance Home</h1>
      <Row className="exam-row">
        {exams.map((exam, index) => (
          <Col md={4} key={index} className="exam-col">
            <Card
              className={exam.className}
            >
              <Card.Body>
                <Card.Title>{exam.title}</Card.Title>
                <Card.Text>{exam.description}</Card.Text>
                <Link to={exam.link} className="exam-button">
                  Learn More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
