import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import "./QuizHome.css"; // Unique CSS for this page

const quizData = {
  1: {
    title: "Science Quiz",
    description: "Test your knowledge of physics, chemistry, and biology!",
    image: "https://placehold.co/400",
  },
  2: {
    title: "History Quiz",
    description: "Explore historical events and famous personalities.",
    image: "https://placehold.co/400",
  },
  3: {
    title: "Math Quiz",
    description: "Challenge your problem-solving skills with math puzzles!",
    image: "https://placehold.co/400",
  },
  4: {
    title: "General Knowledge",
    description: "A mix of interesting facts and trivia from around the world!",
    image: "https://placehold.co/400",
  },
};

export const QuizHome = ({ setTimeDuration }) => {
  const { id } = useParams(); // Get quiz ID from URL
  const navigate = useNavigate();

  const quiz = quizData[id] || {
    title: "Quiz Not Found",
    description: "The selected quiz does not exist.",
    image: "https://placehold.co/400",
  };

  return (
    <Container className="quiz-home-container">
      <Card className="quiz-home-card">
        <Card.Img variant="top" src={quiz.image} className="quiz-home-image" />
        <Card.Body>
          <Card.Title className="quiz-home-title">{quiz.title}</Card.Title>
          <Card.Text className="quiz-home-description">
            {quiz.description}
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
            Start Quiz
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
