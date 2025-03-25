import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './EntranceExamSummary.css';
import { Link } from 'react-router-dom';

export const EntranceExamSummary = () => {
  const features = [
    {
      icon: "📚",
      title: "Exam Patterns",
      description: "Detailed analysis of question patterns, marking schemes, and exam structure"
    },
    {
      icon: "📅",
      title: "Important Dates",
      description: "Stay updated with application deadlines and exam schedules"
    },
    {
      icon: "📋",
      title: "Syllabus Coverage",
      description: "Comprehensive subject-wise syllabus breakdown for all major entrance exams"
    },
    {
      icon: "🎯",
      title: "Preparation Tips",
      description: "Expert strategies and study materials for exam preparation"
    }
  ];

  return (
    <section className="ees-entrance-exam-section">
      <Container>
        <div className="ees-section-header">
          <h2 className="ees-section-title">
            Entrance Exam Guide
            <span className="ees-title-highlight">Your Path to Success</span>
          </h2>
          <p className="ees-section-description">
            Comprehensive resources and guidance for your entrance exam preparation journey
          </p>
        </div>

        <Row className="ees-feature-grid">
          {features.map((feature, index) => (
            <div className="ees-feature-card" key={index}>
              <div className="ees-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </Row>

        {/* <div className="ees-stats-container">
          <div className="ees-stat-item">
            <span className="ees-stat-number">50+</span>
            <span className="ees-stat-label">Exam Guides</span>
          </div>
          <div className="ees-stat-item">
            <span className="ees-stat-number">10K+</span>
            <span className="ees-stat-label">Students Guided</span>
          </div>
          <div className="ees-stat-item">
            <span className="ees-stat-number">95%</span>
            <span className="ees-stat-label">Success Rate</span>
          </div>
        </div> */}

        <div className="ees-cta-section">
          <Link to="/entrance-test-details" className="ees-primary-cta">
            Explore Exam Guides
          </Link>
          <button className="ees-secondary-cta">
            Download Resources
          </button>
        </div>
      </Container>
    </section>
  );
};


