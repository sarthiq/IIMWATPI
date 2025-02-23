import React, { useState } from "react";
import "./CareerResearch.css";

const researchData = [
  { title: "AI in Career Growth", description: "Exploring AI's role in job evolution.", link: "#" },
  { title: "Future of Software Jobs", description: "Analyzing trends in software industry.", link: "#" },
  { title: "Impact of Automation", description: "How automation is reshaping careers.", link: "#" },
  { title: "Remote Work Revolution", description: "The shift towards remote jobs and its effects.", link: "#" },
  { title: "Cybersecurity Careers", description: "Growing demand for cybersecurity experts.", link: "#" },
  { title: "Freelancing Trends", description: "Exploring opportunities in freelancing.", link: "#" },
  { title: "Tech Startup Culture", description: "How startups are changing the job market.", link: "#" },
  { title: "Sustainable Careers", description: "Green jobs and the future of sustainability.", link: "#" },
];

export const CareerResearch = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, researchData.length));
  };

  return (
    <section className="career-research-section">
      <h2 className="career-research-title">Career Research</h2>
      <div className="research-grid">
        {researchData.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="research-card">
            <h3 className="research-card-title">{item.title}</h3>
            <p className="research-card-description">{item.description}</p>
            <a href={item.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>
      {visibleCount < researchData.length && (
        <button className="load-more" onClick={loadMore}>Load More</button>
      )}
    </section>
  );
};
