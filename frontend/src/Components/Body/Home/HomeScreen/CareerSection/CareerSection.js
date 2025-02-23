import React, { useState } from "react";
import "./CareerSection.css";

export const CareerSection = () => {
  const allVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/LXb3EKWsInQ",
    "https://www.youtube.com/embed/kJQP7kiw5Fk",
    "https://www.youtube.com/embed/04854XqcfCY",
    "https://www.youtube.com/embed/6Dh-RL__uN4",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/fLexgOxsZu0",
    "https://www.youtube.com/embed/uelHwf8o7_U",
    "https://www.youtube.com/embed/CevxZvSJLk8",
    "https://www.youtube.com/embed/QK8mJJJvaes",
  ];

  // 50 videos tak dikhane ke liye dummy list generate ki
  while (allVideos.length < 50) {
    allVideos.push(allVideos[allVideos.length % 12]); // Repeat existing videos
  }

  const [visibleVideos, setVisibleVideos] = useState(8);

  return (
    <section className="career-section">
      <h2 className="career-title">Top Career Options for the Next 5 Years</h2>

      <div className="video-grid">
        {allVideos.slice(0, visibleVideos).map((video, index) => (
          <iframe
            key={index}
            className="video-frame"
            src={video}
            title={`Career Video ${index + 1}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ))}
      </div>

      {visibleVideos < 50 && (
        <button className="load-more" onClick={() => setVisibleVideos(prev => prev + 4)}>
          Load More
        </button>
      )}
    </section>
  );
};
