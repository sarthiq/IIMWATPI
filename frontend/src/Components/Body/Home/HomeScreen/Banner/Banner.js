import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";


export const Banner = () => {
  return (
    <div className="banner-container">
      <div className="grid-layout">
        {/* Top Center Dashboard */}
        <div className="section dashboard-section">
          <div className="glass-container">
            <h2>Students Dashboard</h2>
            <div className="box-grid">
              <div className="box">Profile</div>
              <div className="box">Recommendation</div>
              <div className="box">AI Modules</div>
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

        {/* Top Right AI Literacy */}
        <div className="section ai-literacy-section">
          <div className="glass-container">
            <h2>AI Literacy</h2>
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

        {/* Bottom Left Text */}
        <div className="text-section">
          <h1>Empowering Students to be AI-ready Career Professionals!</h1>
          <p>
            Equipping students with AI literacy and tools to navigate the future,
            fostering career awareness, and guiding subject choices to align with
            their aspirations.
          </p>
          <div >
          <button className="coming-soon-btn">Book Demo</button>
          </div>
        </div>

        {/* Bottom Right Career Awareness */}
        <div className="section career-section">
          <div className="glass-container">
            <h2>Career Awareness</h2>
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
      </div>
    </div>
  );
};


