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
          <img src="/IQ.png" alt="IQ Test" className="quiz-box-image" />
          <div className="quiz-box-header">IQ</div>
          <div className="quiz-box-body">
            <p className="desc-text">Learning Speed</p>
            {/* <p className="extra-text"><strong>Description:</strong> In 5 points</p> */}
          </div>
        </Link>

        <Link to={`./quiz/2`} className="quiz-box">
          <img src="/Personality.png" alt="Personality Test" className="quiz-box-image" />
          <div className="quiz-box-header">Personality</div>
          <div className="quiz-box-body">
            <p className="desc-text">Behavior</p>
            {/* <p className="extra-text"><strong>Description:</strong> Find out your strengths.</p> */}
          </div>
        </Link>

        <Link to={`./quiz/3`} className="quiz-box">
          <img src="/Creativity.png" alt="Creativity Test" className="quiz-box-image" />
          <div className="quiz-box-header">Creativity</div>
          <div className="quiz-box-body">
            <p className="desc-text">Thinking out of the box
            </p>
            {/* <p className="extra-text"><strong>Description:</strong> Test your creative potential.</p> */}
          </div>
        </Link>
      </div>
    </section>
  );
};
