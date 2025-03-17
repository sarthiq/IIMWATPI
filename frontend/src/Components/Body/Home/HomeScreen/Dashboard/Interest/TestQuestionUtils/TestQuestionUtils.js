import React, { useState } from "react";
import { Card, Form, Button, Container, ProgressBar } from "react-bootstrap";
import { calculateResults } from "./testUtils";
import { useNavigate } from "react-router-dom";

export const TestQuestionUtils = ({
  questions,
  title1,
  title2,
  grade,
  setResults,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  const [showError, setShowError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleOptionSelect = (questionId, value) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionId - 1] = value;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      setShowError(true);
      return;
    }
    setShowError(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (!answers[currentQuestion]) {
      setShowError(true);
      return;
    }
    setShowError(false);

    // Calculate results
    const results = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});

    const result = calculateResults(results, questions.length, grade);
    setResults(result);

    setIsSubmitted(true);

    navigate("../result");
  };

  return (
    <Container className="test-question-container my-5">
      <Card className="test-question-card">
        <Card.Header className="test-question-header bg-primary text-white">
          <h2 className="text-center mb-0">{title1}</h2>
          <p className="text-center mb-0">{title2}</p>
        </Card.Header>

        <Card.Body className="test-question-body">
          <ProgressBar
            now={((currentQuestion + 1) / questions.length) * 100}
            label={`${currentQuestion + 1}/${questions.length}`}
            className="mb-4"
          />

          <div className="question-content">
            <h4 className="question-number">Question {currentQuestion + 1}</h4>
            <p className="question-text">
              {questions[currentQuestion].question}
            </p>

            <Form className="options-form">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className="d-flex align-items-start option-item mb-3"
                >
                  <span className="me-2">{option.value}.</span>
                  <Form.Check
                    type="radio"
                    id={`q${currentQuestion}-option${option.value}`}
                    name={`question${currentQuestion}`}
                    label={option.label}
                    checked={
                      answers[questions[currentQuestion].id - 1] ===
                      option.value
                    }
                    onChange={() =>
                      handleOptionSelect(
                        questions[currentQuestion].id,
                        option.value
                      )
                    }
                    className="ms-2"
                  />
                </div>
              ))}
            </Form>

            {showError && (
              <div className="text-danger mt-2">
                Please select an option before proceeding.
              </div>
            )}
          </div>
        </Card.Body>

        <Card.Footer className="test-question-footer d-flex justify-content-between">
          <Button
            variant="secondary"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          {currentQuestion === questions.length - 1 ? (
            <Button
              variant="success"
              onClick={handleSubmit}
              disabled={isSubmitted}
            >
              {isSubmitted ? "Submitted" : "Submit"}
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </Button>
          )}
        </Card.Footer>
      </Card>
    </Container>
  );
};
