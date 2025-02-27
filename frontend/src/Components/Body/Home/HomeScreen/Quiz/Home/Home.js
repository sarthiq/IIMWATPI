import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import "./QuizHome.css"; // Unique CSS for this page



export const QuizHome = ({ quizInfo,setTimeDuration }) => {
  const { id } = useParams(); // Get quiz ID from URL
  const navigate = useNavigate();


  

  return (
    <Container className="quiz-home-container">
      <Card className="quiz-home-card">
        <Card.Img variant="top" src={`${process.env.REACT_APP_REMOTE_ADDRESS}/${quizInfo.imageUrl}`} className="quiz-home-image" />
        <Card.Body>
          <Card.Title className="quiz-home-title">{quizInfo.title}</Card.Title>
          <Card.Text className="quiz-home-description">
            {quizInfo.description}
          </Card.Text>
          <Button
            variant="primary"
            className="quiz-home-button"
            onClick={() => {
              setTimeDuration((prevData) => {
                return {
                  ...prevData,
                  startTime: new Date(),
                };
              });
              navigate(`/quiz/${id}/question`);
            }}
          >
            Start Test
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
