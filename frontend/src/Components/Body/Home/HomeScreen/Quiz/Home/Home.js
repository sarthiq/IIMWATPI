import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import "./QuizHome.css"; // Unique CSS for this page

export const QuizHome = ({ quizInfo, setTimeDuration }) => {
  const { id } = useParams(); // Get quiz ID from URL
  const navigate = useNavigate();

  const getTestInstructions = (typeId) => {
    switch (typeId) {
      case "normal":
        return (
          <div className="test-instructions">
            <div className="test-details">
              <ul className="details-list">
                <li>Total Questions: 60</li>
                <li>
                  Difficulty: The test starts with a few easy questions and
                  gradually becomes more challenging.
                </li>
                <li>Time Required: Approximately 60 minutes.</li>
              </ul>
            </div>

            <div className="instruction-section">
              <h4>Before You Begin:</h4>
              <p>
                For the most accurate results, ensure you are in a quiet,
                distraction-free environment.
              </p>
            </div>

            <div className="instruction-section">
              <h4>How to Answer:</h4>
              <p>
                Each question presents a pattern. Your task is to identify the
                correct option that best completes the pattern. There is only
                one correct answer for each question.
              </p>
              <p className="final-note">
                Get ready to challenge your mind and test your IQ!
              </p>
            </div>
          </div>
        );

      case "personality":
        return (
          <div className="test-instructions">
            <div className="test-details">
              <ul className="details-list">
                <li>Total Questions: 50</li>
                <li>
                  How to Answer: Select the option that best applies to you.
                </li>
                <li>Time Required: Approximately 30 minutes.</li>
              </ul>
            </div>

            <div className="instruction-section">
              <h4>Before You Begin:</h4>
              <p>
                Each question has five options: Strongly Agree, Agree, Neutral,
                Disagree, Strongly Disagree.
              </p>
              <div className="example-section">
                <p>
                  <strong>Example Question:</strong> "I enjoy working alone
                  rather than in a group."
                </p>
                <ul>
                  <li>Strongly Agree – If you always prefer working alone.</li>
                  <li>
                    Agree – If you mostly enjoy working alone but are okay with
                    groups sometimes.
                  </li>
                  <li>Neutral – If you have no strong preference.</li>
                  <li>Disagree – If you generally prefer working in groups.</li>
                  <li>
                    Strongly Disagree – If you always perform better in group
                    settings.
                  </li>
                </ul>
              </div>
              <p>
                For the most accurate results, ensure you are in a quiet,
                focused environment before starting the test.
              </p>
              <p className="final-note">
                Get ready to uncover insights about your personality!
              </p>
            </div>
          </div>
        );

      case "creativity":
        return (
          <div className="test-instructions">
            <div className="test-details">
              <ul className="details-list">
                <li>Total Objects: 2</li>
                <li>Task: Identify 10 different uses for each object.</li>
                <li>
                  Submission Requirement: You can submit the test only if you
                  have entered at least 7 uses per object.
                </li>
                <li>Time Required: Approximately 30 minutes.</li>
              </ul>
            </div>

            <div className="instruction-section">
              <h4>Before You Begin:</h4>
              <p>
                Think creatively and freely—there are no right or wrong answers!
              </p>
              <p>
                If you can't think of 10 uses, you may repeat some options, but
                aim for originality.
              </p>

              <div className="example-section">
                <p>
                  <strong>Example Question:</strong>
                </p>
                <p>Object: Pen</p>
                <p>Possible Uses:</p>
                <ul>
                  <li>
                    Writing or Drawing – Its primary purpose, used for taking
                    notes, sketching, or signing documents.
                  </li>
                  <li>
                    Hair Accessory – Can be used to hold up a bun or tie hair in
                    an emergency.
                  </li>
                  <li>
                    Emergency Self-Defense Tool – Can be used to poke or jab in
                    case of self-defense situations.
                  </li>
                </ul>
              </div>
              <p className="final-note">
                Take our Creativity Test today to explore your creative
                potential and see how uniquely your mind thinks!
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Container className="quiz-home-container">
      <Card className="quiz-home-card">
        {/* <Card.Img
          variant="top"
          src={`${process.env.REACT_APP_REMOTE_ADDRESS}/${quizInfo.imageUrl}`}
          className="quiz-home-image"
        /> */}
        <Card.Body>
          <Card.Title className="quiz-home-title text-center">{quizInfo.title + " Test"}</Card.Title>

          {getTestInstructions(quizInfo.typeId)}
          <Button
            variant="primary"
            className="quiz-home-button"
            onClick={() => {
              setTimeDuration((prevData) => ({
                ...prevData,
                startTime: new Date(),
              }));
              navigate(`/quiz/${id}/question`);
            }}
          >
            Start Test
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
