import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './EntranceHome.css';

export const EntranceHome = () => {
  const exams = [
    {
      title: "11-12 Entrance Exam",
      description:
        "Prepare for your 11-12 entrance exams with our comprehensive resources.",
      link: "./intermediate",
      className: "exam-11-12",
    },
    {
      title: "Graduation Entrance Exam",
      description:
        "Get ready for graduation entrance exams with our expert guidance.",
      link: "./graduation",
      className: "exam-graduation",
    },
    {
      title: "Post-Graduation/After Graduation Entrance Exam",
      description:
        "Ace your post-graduation entrance exams with our tailored materials.",
      link: "./after-graduation",
      className: "exam-post-graduation",
    },
  ];

  return (
    <div className="entrance-home">
      <h1>Entrance Home</h1>
      {exams.map((exam, index) => (
        <Card
          key={index}
          className={exam.className}
          style={{ marginBottom: "20px" }}
        >
          <Card.Body>
            <Card.Title>{exam.title}</Card.Title>
            <Card.Text>{exam.description}</Card.Text>
            <Link to={`./${exam.link}`} className="btn btn-primary">
              Learn More
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
