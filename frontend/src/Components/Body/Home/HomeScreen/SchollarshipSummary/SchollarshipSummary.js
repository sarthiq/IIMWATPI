import React from 'react';
import { Container } from 'react-bootstrap';
import './SchollarshipSummary.css';
import { Link } from 'react-router-dom';

export const ScholarshipSummary = () => {
  const scholarships = [
    {
      icon: "🎓",
      title: "Merit-Based",
      description: "Academic excellence scholarships for outstanding students with exceptional grades"
    },
    {
      icon: "💰",
      title: "Need-Based",
      description: "Financial assistance for students demonstrating economic hardship"
    },
    {
      icon: "🌟",
      title: "Research Grants",
      description: "Funding opportunities for innovative research projects and academic pursuits"
    },
    {
      icon: "🌍",
      title: "International",
      description: "Scholarships for international students seeking global education opportunities"
    }
  ];

  return (
    <div className="about-section">
      <Container>
        <div className="about-header">
          <h1 className="about-title">
            Scholarship Opportunities
            <span className="title-highlight">Your Path to Academic Success</span>
          </h1>
          <p className="about-description">
            Discover financial aid options to support your educational journey and achieve your academic goals
          </p>
        </div>

        <div className="feature-grid">
          {scholarships.map((scholarship, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-wrapper">
                {scholarship.icon}
              </div>
              <h3>{scholarship.title}</h3>
              <p>{scholarship.description}</p>
            </div>
          ))}
        </div>
{/* 
        <div className="schollarship-summary-stats-container">
          <div className="schollarship-summary-stat-item">
            <span className="schollarship-summary-stat-number">50+</span>
            <span className="schollarship-summary-stat-label">Scholarships Available</span>
          </div>
          <div className="schollarship-summary-stat-item">
            <span className="schollarship-summary-stat-number">10K+</span>
            <span className="schollarship-summary-stat-label">Students Funded</span>
          </div>
          <div className="schollarship-summary-stat-item">
            <span className="schollarship-summary-stat-number">95%</span>
            <span className="schollarship-summary-stat-label">Success Rate</span>
          </div>
        </div> */}

        <div className="schollarship-summary-cta-section">
          <Link to="/schollarship" className="schollarship-summary-primary-cta">
            Browse Scholarships
          </Link>
          {/* <Link to="/schollarship/apply" className="schollarship-summary-secondary-cta">
            Apply Now
          </Link> */}
        </div>
      </Container>
    </div>
  );
};
