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
import { Link, useParams } from "react-router-dom";
import "./QuestionHome.css"; // Unique CSS for this page
import { createHandler, quizHandler } from "../../apiHandler";
import { useAlert } from "../../../../../../../UI/Alert/AlertContext";

export const QuestionHome = () => {
  const [showForm, setShowForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    text: "",
    type: "text",
    weight: "",
  });
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questions, setQuestions] = useState([]);
  const { showAlert } = useAlert();
  const [details, setDetails] = useState({
    id: "",
    totalQuestions: 0,
  });
  const [dataUpdated, setDataUpdated] = useState(0);

  useEffect(() => {
    fetchDetails();
  }, [dataUpdated]);

  const fetchDetails = async () => {
    const response = await quizHandler(
      { quizId: params.id },
      "getQuiz",
      setIsLoading,
      showAlert
    );

    if (response) {
      setQuestions(response.questions);

      setDetails({
        id: response.quiz.id,
        totalQuestions: response.questions.length,
      });
    }
  };
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleChange = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
  };

  const handleCreateQuestion = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Append all form fields to the FormData object
    formData.append("quizId", params.id);
    formData.append("text", newQuestion.text);
    formData.append("type", newQuestion.type);
    formData.append("weight", newQuestion.weight);

    // Append the image file if it exists
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    // Submit the form data using the createHandler API
    const response = await createHandler(
      formData,
      "createQuestion",
      setIsSubmitting,
      showAlert
    );

    if (response) {
      setDataUpdated(dataUpdated + 1);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
        <p>Loading Details...</p>
      </div>
    );
  }
  return (
    <Container className="question-home">
      {/* Quiz Status Section */}
      <Row className="quiz-status">
        <Col md={6}>
          <h4>Quiz ID: {details.id}</h4>
          <p>Total Questions: {details.totalQuestions}</p>
        </Col>
        <Col md={6} className="quiz-actions">
          <Button variant="warning" className="quiz-action-btn">
            Activate/Deactivate Quiz
          </Button>
          <Button variant="danger" className="quiz-action-btn">
            Delete Quiz
          </Button>
        </Col>
      </Row>

      {/* Create Question Button */}
      <Row>
        <Col className="text-center">
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            Create Question
          </Button>
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
                    <Form.Control
                      type="text"
                      name="text"
                      value={newQuestion.text}
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

                  <Form.Group controlId="questionType">
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                      name="type"
                      value={newQuestion.type}
                      onChange={handleChange}
                    >
                      <option value="text">Text</option>
                      <option value="image">Image</option>
                      <option value="both">Both</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="questionWeight">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                      type="number"
                      step="0.1"
                      name="weight"
                      value={newQuestion.weight}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button
                    variant="success"
                    onClick={handleCreateQuestion}
                    className="mt-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <Spinner size="sm" /> : "Create Question"}
                  </Button>
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
              {questions.map((question) => (
                <tr key={question.id}>
                  <td>{question.text || "N/A"}</td>
                  <td>
                    {question.imageUrl ? (
                      <img
                        src={`${process.env.REACT_APP_REMOTE_ADDRESS}/${question.imageUrl}`}
                        alt="Question"
                        height="100"
                        width="auto"
                      />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td>{question.type}</td>
                  <td>{question.weight}</td>
                  <td>
                    <Link
                      to={`./question/${question.id}`}
                      className="view-more-btn"
                    >
                      View More
                    </Link>
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
