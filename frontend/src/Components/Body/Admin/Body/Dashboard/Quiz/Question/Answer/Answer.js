export const Answer = () => {
  return <>Answer Page</>;
};
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Table, Dropdown } from "react-bootstrap";
import "./AnswerHome.css"; // Unique CSS file

const dummyAnswers = [
  { id: 1, text: "React is a JavaScript library.", image: "", type: "text", active: true },
  { id: 2, text: "", image: "https://via.placeholder.com/100", type: "image", active: false },
  { id: 3, text: "JSX is a syntax extension.", image: "https://via.placeholder.com/100", type: "both", active: true },
];

export const AnswerHome = () => {
  const [showForm, setShowForm] = useState(false);
  const [newAnswer, setNewAnswer] = useState({
    text: "",
    imageUrl: "",
    type: "text",
  });

  const handleChange = (e) => {
    setNewAnswer({ ...newAnswer, [e.target.name]: e.target.value });
  };

  const handleCreateAnswer = () => {
    if (!newAnswer.text && !newAnswer.imageUrl) {
      alert("Either answer text or image URL is required!");
      return;
    }
    console.log("New Answer Created:", newAnswer);
    setShowForm(false);
  };

  return (
    <Container className="answer-page">
      {/* Question Status Section */}
      <Row className="question-status">
        <Col md={6}>
          <h4>Question Title: What is React?</h4>
          <p>Weight: 2.5 | Question ID: 12345</p>
        </Col>
        <Col md={6} className="question-actions">
          <Button variant="warning" className="question-action-btn">Activate/Deactivate Question</Button>
          <Button variant="danger" className="question-action-btn">Delete Question</Button>
        </Col>
      </Row>

      {/* Create Answer Button */}
      <Row>
        <Col className="text-center">
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>Create Answer</Button>
        </Col>
      </Row>

      {/* Create Answer Form */}
      {showForm && (
        <Row className="answer-form">
          <Col md={8} className="mx-auto">
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group controlId="answerText">
                    <Form.Label>Answer Text (Optional)</Form.Label>
                    <Form.Control type="text" name="text" value={newAnswer.text} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group controlId="imageUrl">
                    <Form.Label>Image URL (Optional)</Form.Label>
                    <Form.Control type="text" name="imageUrl" value={newAnswer.imageUrl} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group controlId="answerType">
                    <Form.Label>Type</Form.Label>
                    <Form.Select name="type" value={newAnswer.type} onChange={handleChange}>
                      <option value="text">Text</option>
                      <option value="image">Image</option>
                      <option value="both">Both</option>
                    </Form.Select>
                  </Form.Group>

                  <Button variant="success" onClick={handleCreateAnswer} className="mt-3">Create Answer</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Answer List */}
      <Row className="answer-list">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Text</th>
                <th>Image</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyAnswers.map((answer) => (
                <tr key={answer.id}>
                  <td>{answer.text || "N/A"}</td>
                  <td>{answer.image ? <img src={answer.image} alt="Answer" width="50" /> : "N/A"}</td>
                  <td>{answer.type}</td>
                  <td>
                    <Button variant={answer.active ? "warning" : "success"} className="action-btn">
                      {answer.active ? "Deactivate" : "Activate"}
                    </Button>
                    <Button variant="danger" className="action-btn">Delete</Button>
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

