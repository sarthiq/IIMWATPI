import React from "react";
import "./TestSection.css";
import { Link } from "react-router-dom";

export const TestSection = () => {
  return (
    <section className="test-section">
      <h2 className="section-title">Discover Your Potential</h2>

      {/* Boxes Container */}
      <div className="quiz-boxes-container">
        <Link to={`./quiz/1`} className="quiz-box">
          <img src="/logo512.png" alt="IQ Test" className="quiz-box-image" />
          <div className="quiz-box-header">IQ</div>
          <div className="quiz-box-body">
            <p className="desc-text">Check if you are the next Aryabhata</p>
            <p className="extra-text"><strong>Description:</strong> In 5 points</p>
          </div>
        </Link>

        <Link to={`./quiz/2`} className="quiz-box">
          <img src="/logo192.png" alt="Personality Test" className="quiz-box-image" />
          <div className="quiz-box-header">Personality</div>
          <div className="quiz-box-body">
            <p className="desc-text">Are you a better actor, leader, or doctor?</p>
            <p className="extra-text"><strong>Description:</strong> Find out your strengths.</p>
          </div>
        </Link>

        <Link to={`./quiz/3`} className="quiz-box">
          <img src="/logo192.png" alt="Creativity Test" className="quiz-box-image" />
          <div className="quiz-box-header">Creativity</div>
          <div className="quiz-box-body">
            <p className="desc-text">Can you compose songs or design fashion?</p>
            <p className="extra-text"><strong>Description:</strong> Test your creative potential.</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
