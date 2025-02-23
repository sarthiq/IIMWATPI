import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Spinner,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import { quizHandler } from "../apiHandler";
import { useAlert } from "../../../../../../UI/Alert/AlertContext";

export const QuizHome = () => {
  const [showForm, setShowForm] = useState(false);
  const [quizData, setQuizData] = useState({
    title: "",
    description: "",
    image: "",
    typeId: "",
  });
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { showAlert } = useAlert();
  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    const response = await quizHandler({}, "getQuizzes", setLoading, showAlert);

    if (response) {
      console.log(response);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuizData({ ...quizData, [name]: value });
  };

  const handleImageChange = (e) => {
    setQuizData({ ...quizData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleCreateQuiz = async () => {
    if (!quizData.title || !quizData.typeId) return;
    setSubmitting(true);
    try {
      const response = await axios.post("/api/quizzes", quizData); // Replace with actual API endpoint
      setQuizzes([...quizzes, response.data]);
      setQuizData({ title: "", description: "", image: "", typeId: "" });
      setShowForm(false);
    } catch (err) {
      setError("Failed to create quiz. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="quiz-creation-container">
      <h2 className="quiz-header">Quiz Management</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button
        className="quiz-create-btn"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Close Form" : "Create Quiz"}
      </Button>
      {showForm && (
        <Card className="quiz-form-card">
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={quizData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={quizData.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image (Optional)</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Type ID</Form.Label>
                <Form.Control
                  type="text"
                  name="typeId"
                  value={quizData.typeId}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                className="quiz-submit-btn"
                onClick={handleCreateQuiz}
                disabled={submitting}
              >
                {submitting ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Create"
                )}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
      <h3 className="quiz-list-header">Available Quizzes</h3>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status" />
          <p>Loading quizzes...</p>
        </div>
      ) : (
        <Row>
          {quizzes.map((quiz) => (
            <Col md={6} lg={4} key={quiz.id} className="quiz-col">
              <Card className="quiz-card">
                {quiz.image && (
                  <Card.Img
                    variant="top"
                    src={quiz.image}
                    className="quiz-image"
                  />
                )}
                <Card.Body>
                  <Card.Title>{quiz.title}</Card.Title>
                  <Card.Text>Type ID: {quiz.typeId}</Card.Text>
                  <Link to={`./${quiz.id}`} className="quiz-view-link">
                    View More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};
