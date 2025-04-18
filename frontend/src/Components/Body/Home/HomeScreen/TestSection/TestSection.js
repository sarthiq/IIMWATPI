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
  const [allExpanded, setAllExpanded] = useState(false);

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

  const toggleAllCards = () => {
    setAllExpanded(!allExpanded);
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
          cta: "Take our Personality Test today to understand yourself better and choose a career that aligns with your strengths. Also you can download your Personality certificate!"
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
      <div className="ts-loading-container">
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
          <h1 className="ts-title">
            Discover Your Potential
            <span className="ts-title-highlight">Through Assessment</span>
          </h1>
          <p className="ts-section-subtitle">
            Take our scientifically designed tests to understand your strengths and chart your path to success
          </p>
        </div>

        <div className="ts-quiz-boxes-container">
          {quizzes.map((quiz) => {
            const quizContent = getQuizContent(quiz.typeId);
            
            return (
              <div key={quiz.id} className="ts-quiz-box">
                <div className="ts-quiz-box-header">
                  <div className="ts-image-container">
                    <img
                      src={quiz.imageUrl
                        ? `${process.env.REACT_APP_REMOTE_ADDRESS}/${quiz.imageUrl}`
                        : "/IQ.png"}
                      alt={`${quiz.title} Test`}
                      className="ts-quiz-box-image"
                    />
                  </div>
                  <h3>{quiz.title}</h3>
                </div>

                {quizContent && (
                  <div className="ts-quiz-box-content">
                    <h4 className="ts-content-title">{quizContent.title}</h4>
                    <p className="ts-content-description">{quizContent.description}</p>
                    
                    <div className="ts-content-wrapper">
                      <div className={`ts-content-points-container ${allExpanded ? 'ts-expanded' : ''}`}>
                        <ul className="ts-content-points">
                          {quizContent.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                        {!allExpanded && <div className="ts-fade-out"></div>}
                      </div>
                      
                      <div className={`ts-content-cta-container ${allExpanded ? 'ts-expanded' : ''}`}>
                        <p className="ts-content-cta">{quizContent.cta}</p>
                        {!allExpanded && <div className="ts-fade-out"></div>}
                      </div>
                      
                      <button 
                        className="ts-toggle-btn" 
                        onClick={toggleAllCards}
                        aria-label={allExpanded ? "Show less" : "Show more"}
                      >
                        {allExpanded ? (
                          <>
                            <span className="ts-toggle-icon ts-rotate">▲</span>
                            <span className="ts-toggle-text">Show Less</span>
                          </>
                        ) : (
                          <>
                            <span className="ts-toggle-icon">▼</span>
                            <span className="ts-toggle-text">Show More</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="ts-card-footer">
                  {quiz.typeId === 'creativity' ? (
                    <button className="ts-take-test-btn ts-disabled">
                      Coming Soon
                    </button>
                  ) : (
                    <Link to={`./quiz/${quiz.id}`} className="ts-take-test-btn">
                      Take Test
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
