import React from 'react';
import { Container } from 'react-bootstrap';
import './AILiteracySummary.css';
import { Link } from 'react-router-dom';

export const AILiteracySummary = () => {
  const features = [
    {
      icon: "fas fa-robot",
      title: "ChatGPT",
      description: "Learn how to effectively use ChatGPT for coding assistance, content creation, and problem-solving"
    },
    {
      icon: "fas fa-palette",
      title: "AI Image Tools",
      description: "Explore DALL-E, Midjourney, and other AI image generation tools for creative projects"
    },
    {
      icon: "fas fa-pen-fancy",
      title: "Writing Assistants",
      description: "Discover AI writing tools for content improvement, grammar checking, and style enhancement"
    },
    {
      icon: "fas fa-search",
      title: "AI Research Tools",
      description: "Learn about AI-powered research assistants for efficient information gathering and analysis"
    }
  ];

  return (
    <div className="ai-literacy-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">
            AI Tools Guide
            <span className="title-highlight">Master Modern AI Technologies</span>
          </h2>
          <p className="section-description">
            Enhance your productivity and creativity with cutting-edge AI tools and technologies
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-wrapper">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">AI Tools Covered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5K+</span>
            <span className="stat-label">Students Trained</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Hands-on Practice</span>
          </div>
        </div>

        <div className="cta-section">
          <Link to="/dashboard/ai-literacy/tools-tasks" className="primary-cta">
            Explore AI Tools
          </Link>
          <Link to="/dashboard/ai-literacy/start" className="secondary-cta">
            Start Learning
          </Link>
        </div>
      </Container>
    </div>
  );
};
