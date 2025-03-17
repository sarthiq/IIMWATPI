import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";
import ReactDOM from "react-dom";

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

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    closeModal();
  };

  return (
    <div className="text-section">
      <h1 className="banner-heading">Empowering Students to be AI-ready Career Professionals!</h1>
      <p className="banner-description">
        Equipping students with AI literacy and tools to navigate the future,
        fostering career awareness, and guiding subject choices to align with
        their aspirations.
      </p>
      <div>
        <button className="coming-soon-btn" onClick={openModal}>Book Demo</button>
      </div>
      {isOpen && ReactDOM.createPortal(
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
                <input type="text" placeholder="School/College" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Reason for inquiry" required />
              </div>
              <div className="form-actions">
                <button className="form-submit-button" type="submit">Submit</button>
                <button className="form-cancel-button" type="button" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>,
        document.getElementById('popup-portal-root')
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

export const Banner = () => {
  return (
    <div className="banner-container">
      <div className="grid-layout">
        <DashboardSection />
        <AILiteracySection />
        <TextSection />
        <CareerSection />
      </div>
    </div>
  );
};


