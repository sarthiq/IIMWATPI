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
    <section className="entrance-exam-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">
            Entrance Exam Guide
            <span className="title-highlight">Your Path to Success</span>
          </h2>
          <p className="section-description">
            Comprehensive resources and guidance for your entrance exam preparation journey
          </p>
        </div>

        <Row className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </Row>

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Exam Guides</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Students Guided</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">Success Rate</span>
          </div>
        </div>

        <div className="cta-section">
          <Link to="/entrance-test-details" className="primary-cta">
            Explore Exam Guides
          </Link>
          <button className="secondary-cta">
            Download Resources
          </button>
        </div>
      </Container>
    </section>
  );
};


