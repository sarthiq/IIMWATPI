import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./HomeScreen.css"; // Unique CSS for this page
import { Link } from "react-router-dom";
import { TestSection } from "../TestSection/TestSection";
import { VideoSection } from "../VideoSection/VideoSection";

const quizzes = [
  { id: 1, title: "Science Quiz", image: "https://placehold.co/400" },
  { id: 2, title: "History Quiz", image: "https://placehold.co/400" },
  { id: 3, title: "Math Quiz", image: "https://placehold.co/400" },
  { id: 4, title: "General Knowledge", image: "https://placehold.co/400" },
];

export const HomeScreen = () => {
  return (
    <div className="quiz-selection-page">
      <TestSection/>
      <VideoSection/>
      {/* Quiz Cards */}
      <Container className="quiz-container">
        <Row>
          {quizzes.map((quiz) => (
            <Link to={`./quiz/${quiz.id}`}>
              <Col key={quiz.id} md={6} lg={4} className="quiz-col">
                <Card className="quiz-card">
                  <Card.Img
                    variant="top"
                    src={quiz.image}
                    className="quiz-image"
                  />
                  <Card.Body>
                    <Card.Title className="quiz-title">{quiz.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
          ))}
        </Row>
      </Container>
    </div>
  );
};
