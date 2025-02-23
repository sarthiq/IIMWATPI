import React from "react";
import "./TestSection.css";

export const TestSection = () => {
  return (
    <section className="test-section">
      <h2 className="section-title">Discover Your Potential</h2>

      {/* Cards Container */}
      <div className="uni-cards-container">
        <div className="uni-card">
          <div className="uni-card-header">IQ</div>
          <div className="uni-card-body">
            <p className="desc-text">Check if you are the next Aryabhata</p>
            <p className="extra-text"><strong>Description:</strong></p>
            <p className="extra-text">In 5 points</p>
          </div>
        </div>

        <div className="uni-card">
          <div className="uni-card-header">Personality</div>
          <div className="uni-card-body">
            <p className="desc-text">If you are a better actor, leader or doctor?</p>
            <p className="extra-text"><strong>Description:</strong></p>
          </div>
        </div>

        <div className="uni-card">
          <div className="uni-card-header">Creativity</div>
          <div className="uni-card-body">
            <p className="desc-text">What if you can compose songs or fashion designer</p>
            <p className="extra-text"><strong>Description:</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};
