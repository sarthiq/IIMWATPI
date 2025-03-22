import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";
import ReactDOM from "react-dom";
import { useAlert } from "../../../../UI/Alert/AlertContext";
import { createQueryHandler } from "../Dashboard/apiHandler";
import { Spinner } from "react-bootstrap";

const DashboardSection = () => (
  <div className="section dashboard-section">
    <div className="glass-container">
      <h2 className="section-heading">Students Dashboard</h2>
      <div className="box-grid">
        <div className="box">Profile</div>
        <div className="box">Recommendation</div>
        <div className="box">AI Modules</div>
      </div>
      <div className="box-grid career-grid">
        <div className="box">Career Awareness</div>
        <div className="box">Entrance/Job</div>
      </div>
      <div className="box-grid metric-grid">
        <div className="box">IQ</div>
        <div className="box">Personality</div>
        <div className="box">Interest</div>
      </div>
      <div className="highlight-box">Top 5 recommended career options</div>
    </div>
  </div>
);

const AILiteracySection = () => (
  <div className="section ai-literacy-section">
    <div className="glass-container">
      <h2 className="section-heading">AI Literacy</h2>
      <div className="ai-box-layout">
        <div className="top-row">
          <div className="box">AI Module</div>
          <div className="box">Basics Videos</div>
        </div>
        <div className="middle-row">
          <div className="box">AI for learning</div>
          <div className="box">AI for projects</div>
          <div className="box">AI trends</div>
        </div>
        <div className="highlight-box">Learn & Use AI</div>
      </div>
    </div>
  </div>
);

const TextSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { showAlert } = useAlert();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements[0].value,
      email: e.target.elements[1].value,
      phone: e.target.elements[2].value,
      schoolOrCollege: e.target.elements[3].value,
      reason: e.target.elements[4].value,
    };

    const response = await createQueryHandler(
      formData,
      setIsLoading,
      showAlert
    );

    if (response) {
      showAlert("info", "Info", "Query submitted successfully",null, () => {
        closeModal();
      });
    }
  };

  return (
    <div className="text-section">
      <h1 className="banner-heading">
        Empowering Students to be AI-ready Career Professionals!
      </h1>
      <p className="banner-description">
        Equipping students with AI literacy and tools to navigate the future,
        fostering career awareness, and guiding subject choices to align with
        their aspirations.
      </p>
      <div>
        <button className="coming-soon-btn" onClick={openModal}>
          Book Demo
        </button>
      </div>
      {isOpen &&
        ReactDOM.createPortal(
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Query Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone" required />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="School/College Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" required />
                </div>
                <div className="form-actions">
                  <button
                    className="form-submit-button"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? <Spinner /> : "Submit"}
                  </button>
                  <button
                    className="form-cancel-button"
                    type="button"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.getElementById("popup-portal-root")
        )}
    </div>
  );
};

const CareerSection = () => (
  <div className="section career-section">
    <div className="glass-container">
      <h2 className="section-heading">Career Awareness</h2>
      <div className="career-box-layout">
        <div className="top-row">
          <div className="box">Top 50 Options</div>
          <div className="box">Recommended</div>
        </div>
        <div className="middle-row">
          <div className="box">Practice</div>
          <div className="box">Trends</div>
          <div className="box">Projects</div>
        </div>
        <div className="highlight-box">Learn, Practice, & Earn</div>
      </div>
    </div>
  </div>
);

const HeroSection = () => (
  <div className="hero-section">
    <div className="hero-content">
      <h1 className="hero-title">
        Your AI-Powered Education & Career Guide
        <span className="gradient-text">
          <Typewriter
            words={[' for Success', ' for Growth', ' for Future']}
            loop={true}
            cursor={true}
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p className="hero-description">
        Navigate your educational journey with personalized AI guidance, explore career paths,
        and master the skills of tomorrow. Join thousands of students discovering their potential.
      </p>
      <div className="cta-buttons">
        <button className="primary-cta">Start Your Journey</button>
        <button className="secondary-cta">Watch Demo</button>
      </div>
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-number">50K+</span>
          <span className="stat-label">Students Guided</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100+</span>
          <span className="stat-label">Career Paths</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">AI Support</span>
        </div>
      </div>
    </div>
    <div className="hero-visual">
      <div className="feature-grid">
        <div className="feature-card">
          <i className="fas fa-brain"></i>
          <h3>Smart Learning</h3>
          <p>AI-powered personalized learning paths</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-chart-line"></i>
          <h3>Career Tracking</h3>
          <p>Real-time progress monitoring</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-graduation-cap"></i>
          <h3>Exam Prep</h3>
          <p>Comprehensive entrance exam guides</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-robot"></i>
          <h3>AI Tools</h3>
          <p>Latest AI technology integration</p>
        </div>
      </div>
    </div>
  </div>
);

export const Banner = () => {
  return (
    <div className="modern-banner">
      <HeroSection />
    </div>
  );
};
