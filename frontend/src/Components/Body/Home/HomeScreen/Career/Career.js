import React, { useState } from "react";
import { Link } from "react-router-dom";
import CareerData from "./CareerData"; // Import career list
import "./Career.css";

export const Career= () => {
  const [visibleCards, setVisibleCards] = useState(6);

  const handleLoadMore = () => {
    setVisibleCards((prev) => Math.min(prev + 6, CareerData.length));
  };

  return (
    <section className="career-section">
      <h2 className="career-title">Top 50 Career Options for the Next 5 Years (2025-2030)</h2>

      {/* Career Cards */}
      <div className="career-container">
        {CareerData.slice(0, visibleCards).map((career) => (
          <Link to={`/career-details/${career.id}`} key={career.id} className="career-box">
            <img src={career.image} alt={career.title} className="career-image" />
            <p className="career-title-text">{career.title}</p>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCards < CareerData.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </section>
  );
};
