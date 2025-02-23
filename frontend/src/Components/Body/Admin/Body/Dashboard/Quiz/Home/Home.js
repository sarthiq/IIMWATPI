import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "./Home.css"; // Unique CSS for this page
import { Link } from "react-router-dom";
const dummyQuizzes = [
  {
    id: 1,
    title: "Science Quiz",
    typeId: "SCI-101",
    image: "https://placehold.co/400",
  },
  {
    id: 2,
    title: "History Quiz",
    typeId: "HIS-202",
    image: "https://placehold.co/400",
  },
  {
    id: 3,
    title: "Math Quiz",
    typeId: "MATH-303",
    image: "https://placehold.co/400",
  },
];
export const QuizHome = () => {
  const [showForm, setShowForm] = useState(false);
  const [quizData, setQuizData] = useState({
    title: "",
    description: "",
    image: "",
    typeId: "",
  });

  const [quizzes, setQuizzes] = useState(dummyQuizzes);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuizData({ ...quizData, [name]: value });
  };

  const handleImageChange = (e) => {
    setQuizData({ ...quizData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleCreateQuiz = () => {
    if (!quizData.title || !quizData.typeId) return;
    setQuizzes([...quizzes, { ...quizData, id: quizzes.length + 1 }]);
    setQuizData({ title: "", description: "", image: "", typeId: "" });
    setShowForm(false);
  };

  return (
    <Container className="quiz-creation-container">
      <h2 className="quiz-header">Quiz Management</h2>
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

              <Button className="quiz-submit-btn" onClick={handleCreateQuiz}>
                Create
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}

      <h3 className="quiz-list-header">Available Quizzes</h3>
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
    </Container>
  );
};
