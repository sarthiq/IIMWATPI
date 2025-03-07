import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Spinner, ProgressBar } from "react-bootstrap";
import "./Result.css"; // Unique styles for result page
import { submitAnswersHandler } from "../apiHandler";
import { useAlert } from "../../../../../UI/Alert/AlertContext";

export const Result = ({
  userAnswer,
  userPersonalityAnswer,
  timeDuration,
  quizInfo,
  userCreativityAnswer,
  setResult,
  result,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Loading state for spinner
  const [timeRemaining, setTimeRemaining] = useState(120); // 2 minutes in seconds
  const { showAlert } = useAlert();
  //console.log(userPersonalityAnswer);
  // console.log(userAnswer=={});
  // if (!userAnswer) {
  //   if (userPersonalityAnswer.length === 0) {
  //     userPersonalityAnswer = JSON.parse(
  //       localStorage.getItem("userPersonalityAnswer")
  //     );
  //     quizInfo.typeId = "personality";
  //     quizInfo.id = 3;
  //   }
  // }

  useEffect(() => {
    const submitDetails = async () => {
      if (quizInfo.typeId === "creativity") {
        // Start the countdown timer for creativity quiz
        const timer = setInterval(() => {
          setTimeRemaining((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
            }
            return prev - 1;
          });
        }, 1000);

        // Submit the answers
        const response = await submitAnswersHandler(
          {
            answers: userCreativityAnswer,
            timeDuration,
            quizId: quizInfo.id,
          },
          "submitCreativityQuiz",
          setLoading,
          showAlert
        );

        if (response) {
          clearInterval(timer);
          setResult(response.data);
          setLoading(false);
        }
      } else {
        // For other quiz types, proceed as normal
        const response = await submitAnswersHandler(
          {
            answers: quizInfo.typeId === "personality" ? userPersonalityAnswer : userAnswer,
            timeDuration,
            quizId: quizInfo.id,
          },
          quizInfo.typeId === "personality" ? "submitPersonalityQuiz" : "submitQuiz",
          setLoading,
          showAlert
        );

        if (response) {
          setResult(response.data);
          setLoading(false);
        }
      }
    };

    submitDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getLoadingMessage = () => {
    if (quizInfo.typeId === "creativity") {
      return (
        <div className="creativity-loading">
          <div className="loading-message-container">
            <h4>Analyzing Your Creative Responses</h4>
            <p className="loading-description">
              Our AI is carefully evaluating your unique answers across multiple dimensions:
            </p>
            <ul className="analysis-points">
              <li>Calculating fluency scores</li>
              <li>Measuring flexibility in thinking</li>
              <li>Evaluating response originality</li>
              <li>Assessing idea elaboration</li>
            </ul>
            <div className="timer-container">
              <p>Estimated time remaining: {formatTime(timeRemaining)}</p>
              <ProgressBar 
                now={((120 - timeRemaining) / 120) * 100} 
                variant="info" 
                animated
              />
            </div>
            <p className="patience-message">
              Please be patient as we generate your detailed creativity profile...
            </p>
          </div>
        </div>
      );
    }

    return (
      <>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Submitting your quiz and calculating results...</p>
      </>
    );
  };

  if (loading || !result) {
    return (
      <Container className="result-container">
        <Card className="result-card loading-card">
          <Card.Body className="text-center">
            {getLoadingMessage()}
          </Card.Body>
        </Card>
      </Container>
    );
  }

  if (quizInfo.typeId === "personality") {
    return (
      <Container className="result-container">
        <Card className="result-card">
          <Card.Body>
            <Card.Title className="result-title">
              Personality Quiz Results
            </Card.Title>
            <div className="result-details">
              <div className="personality-bars">
                <div className="trait-section">
                  <div className="trait-bar">
                    <div className="trait-label">E</div>
                    <div className="bar-container extraversion-container">
                      <div 
                        className="bar extraversion" 
                        style={{width: `${result.extraversion}%`}}
                      >
                      </div>
                      <span className="percentage" style={{left: `${result.extraversion}%`}}>
                        {result.extraversion.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <div className="trait-fullname">Extraversion</div>
                </div>
                
                <div className="trait-section">
                  <div className="trait-bar">
                    <div className="trait-label">A</div>
                    <div className="bar-container agreeableness-container">
                      <div 
                        className="bar agreeableness" 
                        style={{width: `${result.agreeableness}%`}}
                      >
                      </div>
                      <span className="percentage" style={{left: `${result.agreeableness}%`}}>
                        {result.agreeableness.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <div className="trait-fullname">Agreeableness</div>
                </div>

                <div className="trait-section">
                  <div className="trait-bar">
                    <div className="trait-label">C</div>
                    <div className="bar-container conscientiousness-container">
                      <div 
                        className="bar conscientiousness" 
                        style={{width: `${result.conscientiousness}%`}}
                      >
                      </div>
                      <span className="percentage" style={{left: `${result.conscientiousness}%`}}>
                        {result.conscientiousness.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <div className="trait-fullname">Conscientiousness</div>
                </div>

                <div className="trait-section">
                  <div className="trait-bar">
                    <div className="trait-label">N</div>
                    <div className="bar-container neuroticism-container">
                      <div 
                        className="bar neuroticism" 
                        style={{width: `${result.neuroticism}%`}}
                      >
                      </div>
                      <span className="percentage" style={{left: `${result.neuroticism}%`}}>
                        {result.neuroticism.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <div className="trait-fullname">Neuroticism</div>
                </div>

                <div className="trait-section">
                  <div className="trait-bar">
                    <div className="trait-label">O</div>
                    <div className="bar-container openness-container">
                      <div 
                        className="bar openness" 
                        style={{width: `${result.openness}%`}}
                      >
                      </div>
                      <span className="percentage" style={{left: `${result.openness}%`}}>
                        {result.openness.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <div className="trait-fullname">Openness to Experience</div>
                </div>
              </div>
            </div>
            <Button
              variant="primary"
              className="home-button"
              onClick={() => navigate("../certificate")}
            >
              Download Certificate
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  // ... existing code ...
  if (quizInfo.typeId === "creativity") {
    return (
      <Container className="result-container">
        <Card className="result-card">
          <Card.Body>
            <Card.Title className="result-title">
              Creativity Assessment Results
            </Card.Title>
            <div className="result-details">
              <p className="overall-score mb-4">
                <strong>Overall Creativity Level:</strong> {result.label}
              </p>

              <h5 className="category-title mb-3">Category Scores:{result.total}</h5>
              
              <table className="category-scores-table">
                <tbody>
                  <tr>
                    <td>
                      <strong>Fluency:</strong>
                    </td>
                    <td>{result.categoryScores.fluency.toFixed(1)}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Flexibility:</strong>
                    </td>
                    <td>{result.categoryScores.flexibility.toFixed(1)}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Originality:</strong>
                    </td>
                    <td>{result.categoryScores.originality.toFixed(1)}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Elaboration:</strong>
                    </td>
                    <td>{result.categoryScores.elaboration.toFixed(1)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Button
              variant="primary"
              className="home-button"
              onClick={() => navigate("../certificate")}
            >
             Download Certificate
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  // ... rest of the existing code ...

  return (
    <Container className="result-container">
      <Card className="result-card">
        <Card.Body>
          <Card.Title className="result-title">IQ Results</Card.Title>
          <div className="result-details">
            <p>
              <strong>IQ Range:</strong> {result.iqLevel}
            </p>
          </div>
          <Button
            variant="primary"
            className="home-button"
            onClick={() => navigate("../certificate")}
          >
           Download Certificate
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
