import React from 'react';
import { Container } from 'react-bootstrap';
import './AILiteracySummary.css';
import { Link } from 'react-router-dom';

export const AILiteracySummary = () => {
  const features = [
    {
      icon: "🤖",  // Robot emoji for ChatGPT/AI
      title: "ChatGPT",
      description: "Learn how to effectively use ChatGPT for coding assistance, content creation, and problem-solving"
    },
    {
      icon: "🎨",  // Artist palette for AI Image Tools
      title: "AI Image Tools",
      description: "Explore DALL-E, Midjourney, and other AI image generation tools for creative projects"
    },
    {
      icon: "✍️",  // Writing hand for Writing Assistants
      title: "Writing Assistants",
      description: "Discover AI writing tools for content improvement, grammar checking, and style enhancement"
    },
    {
      icon: "🔍",  // Magnifying glass for Research
      title: "AI Research Tools",
      description: "Learn about AI-powered research assistants for efficient information gathering and analysis"
    }
  ];

  return (
    <div className="about-section">
      <Container>
        <div className="about-header">
          <h1 className="about-title">
            AI Literacy 
            <span className="title-highlight">Master Modern AI Tools</span>
          </h1>
          <p className="about-description">
            Enhance your productivity and creativity with cutting-edge AI tools and technologies
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="ai-literacy-stats-container">
          <div className="ai-literacy-stat-item">
            <span className="ai-literacy-stat-number">20+</span>
            <span className="ai-literacy-stat-label">AI Tools Covered</span>
          </div>
          <div className="ai-literacy-stat-item">
            <span className="ai-literacy-stat-number">5K+</span>
            <span className="ai-literacy-stat-label">Students Trained</span>
          </div>
          <div className="ai-literacy-stat-item">
            <span className="ai-literacy-stat-number">100%</span>
            <span className="ai-literacy-stat-label">Hands-on Practice</span>
          </div>
        </div> */}

        <div className="ai-literacy-cta-section">
          <Link to="/dashboard/ai-literacy/tools-tasks" className="ai-literacy-primary-cta">
            Explore AI Tools
          </Link>
          <Link to="/dashboard/ai-literacy/start" className="ai-literacy-secondary-cta">
            Start Learning
          </Link>
        </div>
      </Container>
    </div>
  );
};
