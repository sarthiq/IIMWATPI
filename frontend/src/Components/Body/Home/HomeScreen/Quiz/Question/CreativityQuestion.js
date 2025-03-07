import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Form, ListGroup } from "react-bootstrap";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import "./Question.css";

export const CreativityQuestion = ({
  questions,
  setUserCreativityAnswer,
  setTimeDuration,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentPoint, setCurrentPoint] = useState("");
  const [answers, setAnswers] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddPoint = () => {
    if (currentPoint.trim() === "") return;

    if (editIndex >= 0) {
      // Edit existing point
      const newAnswers = [...answers];
      newAnswers[editIndex] = currentPoint;
      setAnswers(newAnswers);
      setEditIndex(-1);
    } else {
      // Add new point
      setAnswers([...answers, currentPoint]);
    }
    setCurrentPoint("");
  };

  const handleEditPoint = (index) => {
    setCurrentPoint(answers[index]);
    setEditIndex(index);
  };

  const handleRemovePoint = (index) => {
    setAnswers(answers.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(-1);
      setCurrentPoint("");
    }
  };

  const handleNext = () => {
    if (answers.length === 0) {
      alert("Please add at least one point before continuing");
      return;
    }

    // Save the answers in the required format
    setUserCreativityAnswer((prevUserCreativityAnswer) => ({
      ...prevUserCreativityAnswer,
      [questions[currentQuestion].id]: {
        question: questions[currentQuestion].text,
        answers: answers
      }
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswers([]);
      setCurrentPoint("");
      setEditIndex(-1);
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
          <Card.Title className="question-title mb-4">
            {currentQuestion + 1}. {currentQ.text}
          </Card.Title>

          <div className="answer-input-section mb-4">
            <Form.Group className="d-flex gap-2">
              <Form.Control
                type="text"
                value={currentPoint}
                onChange={(e) => setCurrentPoint(e.target.value)}
                placeholder="Enter your point here..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddPoint();
                  }
                }}
              />
              <Button 
                variant="success" 
                onClick={handleAddPoint}
                className="add-point-btn"
              >
                <FaPlus /> {editIndex >= 0 ? 'Update' : 'Add'}
              </Button>
            </Form.Group>
          </div>

          <ListGroup className="points-list mb-4">
            {answers.map((point, index) => (
              <ListGroup.Item 
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <span>{point}</span>
                <div className="point-actions">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEditPoint(index)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleRemovePoint(index)}
                  >
                    <FaTrash />
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>

        <Card.Footer className="question-footer">
          <Button
            variant="primary"
            className="next-button"
            onClick={handleNext}
            disabled={answers.length === 0}
          >
            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};