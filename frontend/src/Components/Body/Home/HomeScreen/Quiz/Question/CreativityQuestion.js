import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";
import "./Question.css";

export const CreativityQuestion = ({
  questions,
  setUserCreativityAnswer,
  setTimeDuration,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (e) => {
    const text = e.target.value;
    setAnswer(text);
  };

  const handleNext = () => {
    if (answer.trim() === "") {
      alert("Please provide an answer before continuing");
      return;
    }

    // Save the answer
    setUserCreativityAnswer((prevUserCreativityAnswer) => ({
      ...prevUserCreativityAnswer,
      [questions[currentQuestion].id]: answer,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
    } else {
      setTimeDuration((prevData) => ({
        ...prevData,
        endTime: new Date(),
      }));
      navigate(`/quiz/${id}/result`);
    }
  };

  if (questions.length === 0) {
    return <h1>No Questions Found</h1>;
  }

  const currentQ = questions[currentQuestion];

  return (
    <Container className="question-container">
      <Card className="question-card">
        <Card.Body>
          <Card.Title className="question-title">
            {currentQuestion + 1}. {currentQ.text}
          </Card.Title>

          <hr />

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={6}
              value={answer}
              onChange={handleAnswerChange}
              placeholder="Write your answer here..."
            />
          </Form.Group>
        </Card.Body>

        <Card.Footer className="question-footer">
          <Button
            variant="primary"
            className="next-button"
            onClick={handleNext}
            disabled={answer.trim() === ""}
          >
            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};
