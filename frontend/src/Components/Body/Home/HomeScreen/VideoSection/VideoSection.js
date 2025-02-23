import React from "react";
import "./VideoSection.css"; // Import CSS file

export const VideoSection = () => {
  const cardNames = [
    "Education System", "Future of Learning", "AI in Education",
    "E-Learning Platforms", "Scholarship Programs", "Skill Development",
    "Innovative Teaching", "Career Guidance", "Student Success Stories"
  ];

  return (
    <section className="video-section">
      <div className="content-wrapper">
        {/* Left Side - Video Box */}
        <div className="video-box">
          <p>Video Section</p>
          <video controls className="video">
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Side - Cards Section */}
        <div className="cards-container">
          <h2>All about education and the initiative</h2>
          <div className="cards-grid">
            {cardNames.map((name, index) => (
              <div key={index} className="card">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
