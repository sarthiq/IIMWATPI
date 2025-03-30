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
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDetails = async () => {
    const response = await fetchQuizzesHandler(setIsLoading, showAlert);
    if (response) {
      setQuizzes(response.data);
    }
  };

  const getQuizContent = (typeId) => {
    switch (typeId) {
      case 'normal':
        return {
          title: "Measure Your IQ – Know Your True Potential!",
          description: "Did you know?",
          points: [
            "An IQ of 120+ means you're more intelligent than 95% of people! With this level of intelligence, you have hidden potential and can achieve anything you set your mind to.",
            "An IQ between 90-100? No worries! With focus, specialization, and consistent effort, you can outperform even those with higher IQs (120) in your domain."
          ],
          cta: "Take our IQ Test today to discover where you stand and download your IQ certificate!"
        };
      case 'personality':
        return {
          title: "Discover Your Personality – Know Your Strengths!",
          description: "Your personality shapes your success!",
          points: [
            "If you are an introvert, you have a better chance of cracking the UPSC examination with your ability to focus deeply, work independently, and think critically.",
            "If you are an extrovert, your true potential shines when surrounded by people, making you excel in leadership roles, networking, and dynamic environments."
          ],
          cta: "Take our Personality Test today to understand yourself better and choose a career that aligns with your strengths. You also can download your Personality type certificate!"
        };
      case 'creativity':
        return {
          title: "Discover Your Creativity – Unleash Your Unique Potential!",
          description: "Creativity and intelligence shape the way you think and solve problems!",
          points: [
            "High IQ individuals usually have lower creativity, as their thinking is often analytical and structured rather than imaginative and free-flowing.",
            "If you have both high creativity and high IQ, you are among the rarest of the rare—a unique combination that allows you to think critically, solve complex problems, and create groundbreaking ideas."
          ],
          cta: "Take our Creativity Test today to discover your creative potential and download your Creativity Certificate!"
        };
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <section className="ts-test-section" id="test-section">
      <div className="ts-container">
        <div className="ts-header">
          <h2 className="ts-title">
            Discover Your Potential
            <span className="ts-title-highlight">Through Assessment</span>
          </h2>
          <p className="ts-section-subtitle">
            Take our scientifically designed tests to understand your strengths and chart your path to success
          </p>
        </div>

        <div className="quiz-boxes-container">
          {quizzes.map((quiz) => {
            const quizContent = getQuizContent(quiz.typeId);
            return (
              <div key={quiz.id} className="quiz-box">
                <div className="quiz-box-header">
                  <div className="image-container">
                    <img
                      src={quiz.imageUrl
                        ? `${process.env.REACT_APP_REMOTE_ADDRESS}/${quiz.imageUrl}`
                        : "/IQ.png"}
                      alt={`${quiz.title} Test`}
                      className="quiz-box-image"
                    />
                  </div>
                  <h3>{quiz.title}</h3>
                </div>

                {quizContent && (
                  <div className="quiz-box-content">
                    <h4 className="content-title">{quizContent.title}</h4>
                    <p className="content-description">{quizContent.description}</p>
                    <ul className="content-points">
                      {quizContent.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <p className="content-cta">{quizContent.cta}</p>
                  </div>
                )}
                
                {quiz.typeId === 'creativity' ? (
                  <button className="take-test-btn disabled">
                    Coming Soon
                  </button>
                ) : (
                  <Link to={`./quiz/${quiz.id}`} className="take-test-btn">
                    Take Test
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
