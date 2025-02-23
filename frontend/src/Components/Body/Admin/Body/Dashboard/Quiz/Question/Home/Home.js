import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./QuestionHome.css"; // Unique CSS for this page

const dummyQuestions = [
  { id: 1, text: "What is React?", image: "", type: "text", weight: 1.5 },
  { id: 2, text: "", image: "https://placehold.co/400", type: "image", weight: 2.0 },
  { id: 3, text: "What is JSX?", image: "https://placehold.co/400", type: "both", weight: 2.5 },
];

export const QuestionHome = () => {
  const [showForm, setShowForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    text: "",
    imageUrl: "",
    type: "text",
    weight: "",
  });

  const handleChange = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
  };

  const handleCreateQuestion = () => {
    if (!newQuestion.text && !newQuestion.imageUrl) {
      alert("Either question text or image URL is required!");
      return;
    }
    console.log("New Question Created:", newQuestion);
    setShowForm(false);
  };

  return (
    <Container className="question-home">
      {/* Quiz Status Section */}
      <Row className="quiz-status">
        <Col md={6}>
          <h4>Quiz ID: 12345</h4>
          <p>Total Questions: {dummyQuestions.length}</p>
        </Col>
        <Col md={6} className="quiz-actions">
          <Button variant="warning" className="quiz-action-btn">Activate/Deactivate Quiz</Button>
          <Button variant="danger" className="quiz-action-btn">Delete Quiz</Button>
        </Col>
      </Row>

      {/* Create Question Button */}
      <Row>
        <Col className="text-center">
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>Create Question</Button>
        </Col>
      </Row>

      {/* Create Question Form */}
      {showForm && (
        <Row className="question-form">
          <Col md={8} className="mx-auto">
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group controlId="questionText">
                    <Form.Label>Question Text (Optional)</Form.Label>
                    <Form.Control type="text" name="text" value={newQuestion.text} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group controlId="imageUrl">
                    <Form.Label>Image URL (Optional)</Form.Label>
                    <Form.Control type="text" name="imageUrl" value={newQuestion.imageUrl} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group controlId="questionType">
                    <Form.Label>Type</Form.Label>
                    <Form.Select name="type" value={newQuestion.type} onChange={handleChange}>
                      <option value="text">Text</option>
                      <option value="image">Image</option>
                      <option value="both">Both</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="questionWeight">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="number" step="0.1" name="weight" value={newQuestion.weight} onChange={handleChange} />
                  </Form.Group>

                  <Button variant="success" onClick={handleCreateQuestion} className="mt-3">Create Question</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Question List */}
      <Row className="question-list">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Text</th>
                <th>Image</th>
                <th>Type</th>
                <th>Weight</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyQuestions.map((question) => (
                <tr key={question.id}>
                  <td>{question.text || "N/A"}</td>
                  <td>{question.image ? <img src={question.image} alt="Question" width="50" /> : "N/A"}</td>
                  <td>{question.type}</td>
                  <td>{question.weight}</td>
                  <td>
                    <Link to={`./question/${question.id}`} className="view-more-btn">View More</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};


