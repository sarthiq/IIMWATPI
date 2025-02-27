import React, { useEffect, useState } from "react";
import "./TestSection.css";
import { Link } from "react-router-dom";
import { useAlert } from "../../../../UI/Alert/AlertContext";
import { Spinner } from "react-bootstrap";
import { fetchQuizzesHandler } from "../Quiz/apiHandler";

export const TestSection = () => {
  const { showAlert } = useAlert();
  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await fetchQuizzesHandler(setIsLoading, showAlert);
    if (response) {
      setQuizzes(response.data);
    }
  };

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
console.log(quizzes);
  return (
    <section className="test-section">
      <h2 className="section-title">Discover Your Potential</h2>

      {/* Boxes Container */}
      <div className="quiz-boxes-container">
        {quizzes.map((quiz) => (
          <Link key={quiz.id} to={`./quiz/${quiz.id}`} className="quiz-box">
            <img
              src={
                quiz.imageUrl
                  ? `${process.env.REACT_APP_REMOTE_ADDRESS}/${quiz.imageUrl}`
                  : "/IQ.png"
              }
              alt={`${quiz.title} Test`}
              className="quiz-box-image"
            />
            <div className="quiz-box-header">{quiz.title}</div>
            <div className="quiz-box-body">
              <p className="desc-text">{quiz.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
