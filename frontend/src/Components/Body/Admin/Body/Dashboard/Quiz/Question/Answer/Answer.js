import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table,
  Spinner,
} from "react-bootstrap";
import "./AnswerHome.css";
import { useParams } from "react-router-dom";
import { useAlert } from "../../../../../../../UI/Alert/AlertContext";
import { createHandler, quizHandler } from "../../apiHandler";

const dummyAnswers = [
  {
    id: 1,
    text: "React is a JavaScript library.",
    image: "",
    type: "text",
    active: true,
  },
  {
    id: 2,
    text: "",
    image: "https://via.placeholder.com/100",
    type: "image",
    active: false,
  },
  {
    id: 3,
    text: "JSX is a syntax extension.",
    image: "https://via.placeholder.com/100",
    type: "both",
    active: true,
  },
];

export const AnswerHome = () => {
  const [showForm, setShowForm] = useState(false);
  const [newAnswer, setNewAnswer] = useState({
    text: "",
    type: "text",
  });
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [answers, setAnswers] = useState([]);
  const { showAlert } = useAlert();
  const [details, setDetails] = useState({
    id: "",
    question: "",
    weight: "",
    totalAnswers: 0,
  });

  const [dataUpdated, setDataUpdated] = useState(0);

  useEffect(() => {
    fetchDetails();
  }, [dataUpdated]);

  const fetchDetails = async () => {
    const response = await quizHandler(
      { questionId: params.qid },
      "getQuestion",
      setLoading,
      showAlert
    );

    if (response) {
      setAnswers(response.answers);
      
      setDetails({
        id: response.question.id,
        weight: response.question.weight,
        question: response.question.text,
        totalAnswers: response.answers.length,
      });
    }
  };
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleChange = (e) => {
    setNewAnswer({ ...newAnswer, [e.target.name]: e.target.value });
  };

  const handleCreateAnswer = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Append all form fields to the FormData object
    formData.append("questionId", params.qid);
    formData.append("text", newAnswer.text);
    formData.append("type", newAnswer.type);

    // Append the image file if it exists
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    // Submit the form data using the createHandler API
    const response = await createHandler(
      formData,
      "createAnswer",
      setCreating,
      showAlert
    );

    if (response) {
      setDataUpdated(dataUpdated + 1);
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
        <p>Loading Details...</p>
      </div>
    );
  }
  return (
    <Container className="answer-page">
      <Row className="question-status">
        <Col md={6}>
          <h4>Question Title: {details.question}</h4>
          <p>
            Weight: {details.weight} | Question ID: {details.id}
          </p>
          <p>Total Answers: {details.totalAnswers}</p>
        </Col>
        <Col md={6} className="question-actions">
          <Button variant="warning">Activate/Deactivate Question</Button>
          <Button variant="danger">Delete Question</Button>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            Create Answer
          </Button>
        </Col>
      </Row>

      {showForm && (
        <Row className="answer-form">
          <Col md={8} className="mx-auto">
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group controlId="answerText">
                    <Form.Label>Answer Text (Optional)</Form.Label>
                    <Form.Control
                      type="text"
                      name="text"
                      value={newAnswer.text}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Image (Optional)</Form.Label>
                    <Form.Control
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="answerType">
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                      name="type"
                      value={newAnswer.type}
                      onChange={handleChange}
                    >
                      <option value="text">Text</option>
                      <option value="image">Image</option>
                      <option value="both">Both</option>
                    </Form.Select>
                  </Form.Group>

                  <Button
                    variant="success"
                    onClick={handleCreateAnswer}
                    className="mt-3"
                    disabled={creating}
                  >
                    {creating ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Create Answer"
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

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
              {answers.map((answer) => (
                <tr key={answer.id}>
                  <td>{answer.text || "N/A"}</td>
                  <td>
                    {answer.imageUrl ? (
                      <img
                        src={`${process.env.REACT_APP_REMOTE_ADDRESS}/${answer.imageUrl}`}
                        alt="Answer"
                        height="80"
                        width="auto"
                      />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td>{answer.type}</td>
                  <td>
                    <Button variant={answer.active ? "warning" : "success"}>
                      {answer.active ? "Deactivate" : "Activate"}
                    </Button>
                    <Button variant="danger" className="ms-2">
                      Delete
                    </Button>
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
