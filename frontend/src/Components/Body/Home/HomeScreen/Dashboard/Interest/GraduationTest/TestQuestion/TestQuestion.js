import React, { useState } from "react";
import { Card, Form, Button, Container, ProgressBar } from "react-bootstrap";

const questions = [
  {
    id: 1,
    question: "When you think about your future, what excites you the most?",
    options: [
      {
        label:
          "Designing innovative solutions, solving engineering problems, and working with technology",
        value: "A",
      },
      {
        label:
          "Understanding how the human body functions, how medicines work, and helping people stay healthy",
        value: "B",
      },
      {
        label:
          "Learning how businesses grow, how markets function, and how to manage finances",
        value: "C",
      },
      {
        label:
          "Expressing yourself through writing, storytelling, art, or performing arts",
        value: "D",
      },
      {
        label:
          "Studying society, political systems, psychology, and how people behave",
        value: "E",
      },
    ],
  },
  {
    id: 2,
    question: "If you had a free day, what would you love to do?",
    options: [
      {
        label:
          "Experiment with gadgets, learn coding, or solve engineering puzzles",
        value: "A",
      },
      {
        label:
          "Read about medical discoveries, watch health documentaries, or volunteer at a hospital",
        value: "B",
      },
      {
        label:
          "Analyze business trends, follow stock markets, or research investment strategies",
        value: "C",
      },
      {
        label:
          "Write, paint, play music, or act out scenes from your favorite movies",
        value: "D",
      },
      {
        label:
          "Read history books, discuss political issues, or analyze psychological behaviors",
        value: "E",
      },
    ],
  },
  {
    id: 3,
    question: "Which of these school subjects did you enjoy the most?",
    options: [
      { label: "Mathematics, Physics, or Computer Science", value: "A" },
      { label: "Biology, Chemistry, or Health Sciences", value: "B" },
      { label: "Economics, Business Studies, or Accountancy", value: "C" },
      { label: "Literature, Fine Arts, or Performing Arts", value: "D" },
      {
        label: "History, Political Science, Sociology, or Psychology",
        value: "E",
      },
    ],
  },
  {
    id: 4,
    question:
      "Imagine you're in a group project, what role do you naturally take?",
    options: [
      {
        label: "Designing technical solutions and solving logical problems",
        value: "A",
      },
      { label: "Researching health and biological aspects", value: "B" },
      { label: "Managing budgets and business strategies", value: "C" },
      {
        label:
          "Presenting creatively through writing, visuals, or performances",
        value: "D",
      },
      {
        label:
          "Debating and ensuring ethical and societal perspectives are considered",
        value: "E",
      },
    ],
  },
  {
    id: 5,
    question: "Which of these topics do you find most exciting?",
    options: [
      { label: "How AI and robotics are changing the world", value: "A" },
      {
        label: "How the brain functions and the future of medicine",
        value: "B",
      },
      {
        label: "How businesses grow and why some succeed while others fail",
        value: "C",
      },
      { label: "How artists and writers shape culture", value: "D" },
      { label: "How historical events influence modern societies", value: "E" },
    ],
  },
  {
    id: 6,
    question:
      "If given a chance to visit one of the following places, which one excites you the most?",
    options: [
      { label: "A space research center or a tech innovation lab", value: "A" },
      { label: "A medical research institute or hospital", value: "B" },
      { label: "A stock exchange or a corporate office", value: "C" },
      { label: "A film studio or an art gallery", value: "D" },
      { label: "A government institution or a historical museum", value: "E" },
    ],
  },
  {
    id: 7,
    question: "What kind of books or documentaries do you enjoy the most?",
    options: [
      {
        label:
          "Science fiction, engineering breakthroughs, or tech innovations",
        value: "A",
      },
      {
        label: "Medical discoveries, human biology, or health research",
        value: "B",
      },
      {
        label:
          "Business strategies, investment tips, or success stories of entrepreneurs",
        value: "C",
      },
      {
        label:
          "Literary classics, art biographies, or performance documentaries",
        value: "D",
      },
      {
        label:
          "Political history, social movements, or human behavior analysis",
        value: "E",
      },
    ],
  },
  {
    id: 8,
    question:
      "If you had to explain something to a group of students, what would you love to talk about?",
    options: [
      { label: "How self-driving cars work or how AI is evolving", value: "A" },
      { label: "How the human immune system fights diseases", value: "B" },
      { label: "How brands attract customers and increase sales", value: "C" },
      { label: "How a great novel, movie, or painting is created", value: "D" },
      { label: "How a political event shaped the modern world", value: "E" },
    ],
  },
  {
    id: 9,
    question: "What kind of YouTube videos or TV shows interest you the most?",
    options: [
      {
        label: "Science and tech innovations, engineering marvels",
        value: "A",
      },
      { label: "Health and wellness tips, medical breakthroughs", value: "B" },
      {
        label: "Business case studies, financial growth strategies",
        value: "C",
      },
      {
        label: "Creative content, movie-making insights, or art tutorials",
        value: "D",
      },
      {
        label:
          "Political debates, social commentaries, or history documentaries",
        value: "E",
      },
    ],
  },
  {
    id: 10,
    question: "If you could have one superpower, which would you choose?",
    options: [
      {
        label: "The ability to invent and create futuristic technology",
        value: "A",
      },
      { label: "The power to heal people instantly", value: "B" },
      {
        label: "The ability to predict financial markets accurately",
        value: "C",
      },
      {
        label: "The talent to master any form of creative expression",
        value: "D",
      },
      {
        label: "The wisdom to solve political and social conflicts effectively",
        value: "E",
      },
    ],
  },
  {
    id: 11,
    question: "What kind of problems do you enjoy solving?",
    options: [
      {
        label:
          "Complex equations, software development, or engineering challenges",
        value: "A",
      },
      {
        label: "Diagnosing symptoms and finding medical solutions",
        value: "B",
      },
      { label: "Business and financial problems, economic trends", value: "C" },
      { label: "Creating compelling stories, artworks, or music", value: "D" },
      {
        label:
          "Understanding human behavior, historical causes, and political dynamics",
        value: "E",
      },
    ],
  },
  {
    id: 12,
    question: "Which career sounds the most appealing to you?",
    options: [
      { label: "Engineer, Scientist, Software Developer", value: "A" },
      { label: "Doctor, Biotechnologist, Medical Researcher", value: "B" },
      { label: "Entrepreneur, Economist, Financial Analyst", value: "C" },
      { label: "Writer, Filmmaker, Artist", value: "D" },
      { label: "Journalist, Political Scientist, Psychologist", value: "E" },
    ],
  },
  {
    id: 13,
    question: "What motivates you the most?",
    options: [
      { label: "Solving real-world technical challenges", value: "A" },
      {
        label: "Making a difference in people's health and well-being",
        value: "B",
      },
      { label: "Building wealth and managing businesses", value: "C" },
      { label: "Expressing ideas creatively and inspiring others", value: "D" },
      { label: "Understanding people and influencing change", value: "E" },
    ],
  },
  {
    id: 14,
    question: "If you could start your own venture, what would it be?",
    options: [
      { label: "A tech startup focused on AI", value: "A" },
      { label: "A healthcare innovation company", value: "B" },
      { label: "A financial consulting firm", value: "C" },
      { label: "A media production house", value: "D" },
      { label: "A non-profit organization for social change", value: "E" },
    ],
  },
  {
    id: 15,
    question: "If you had to research one topic for a year, what would it be?",
    options: [
      { label: "The future of AI and robotics", value: "A" },
      { label: "Advances in cancer treatment", value: "B" },
      { label: "The impact of cryptocurrency on economies", value: "C" },
      { label: "The evolution of storytelling in cinema", value: "D" },
      { label: "The psychology of leadership and influence", value: "E" },
    ],
  },
];

export const TestQuestion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [showError, setShowError] = useState(false);

  const handleOptionSelect = (questionId, value) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionId - 1] = value;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (answers[currentQuestion] === null) {
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

  return (
    <Container className="test-question-container my-5">
      <Card className="test-question-card">
        <Card.Header className="test-question-header bg-primary text-white">
          <h2 className="text-center mb-0">
            Interest-Based Stream Selection Test for College Students
          </h2>
          <p className="text-center mb-0">Graduation Admission</p>
        </Card.Header>

        <Card.Body className="test-question-body">
          <ProgressBar
            now={((currentQuestion + 1) / 15) * 100}
            label={`${currentQuestion + 1}/15`}
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
                    checked={answers[questions[currentQuestion].id - 1] === option.value}
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
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};
