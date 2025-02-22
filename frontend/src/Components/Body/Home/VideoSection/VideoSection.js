import React from "react";
import "./VideoSection.css"; // Import CSS file

export const VideoSection = () => {
  return (
    <section className="video-section">
      {/* Video Box */}
      <div className="video-box">Video Section</div>

      {/* Cards Section */}
      <div className="cards-container">
        <h2>All about education and the initiative</h2>
        <div className="cards">
          {["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6", "Card 7", "Card 8", "Card 9"].map(
            (text, index) => (
              <div key={index} className="card">
                {text}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};


