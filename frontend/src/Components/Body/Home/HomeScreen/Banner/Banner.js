import React, { useState, useEffect } from 'react';
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";
import ReactDOM from "react-dom";
import { useAlert } from "../../../../UI/Alert/AlertContext";
import { createQueryHandler } from "../Dashboard/apiHandler";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";



const TextSection = ({ isOpen, closeModal, handleSubmit, isLoading }) => {
  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <div className="popup-overlay">
            <div className="popup-content">
              <h2 className="section-heading">Book a Demo</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Name" required className="form-control" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" required className="form-control" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone" required className="form-control" />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="School/College Name"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" required className="form-control" />
                </div>
                <div className="form-actions">
                  <button
                    className="form-submit-button"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? <Spinner animation="border" size="sm" /> : "Submit"}
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
    </>
  );
};


const CareerPhase = ({ phase, isActive, isCompleted, onComplete, onPhaseClick }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [progress, setProgress] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    // Initial card animation
    if (initialLoad) {
      setTimeout(() => setInitialLoad(false), 1000);
    }

    if (isActive && !isPaused) {
      setShowDetails(true);
      
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 1;
        });
      }, 60);

      const timer = setTimeout(() => {
        setShowDetails(false);
        setTimeout(onComplete, 500);
        setProgress(0);
      }, 6000);

      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    }
  }, [isActive, onComplete, initialLoad, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const phaseContent = {
    1: {
      title: "Career & Course Selection",
      icon: "fa-graduation-cap",
      mainPoint: "Know yourself first",
      description: "Recommendation based on your interest, IQ, and Personality test.",
      keyPoints: [
        {
          title: "IQ Test",
          points: ["Aptitude Assessment", "Learning Style Analysis"]
        },
        {
          title: "Personality Test",
          points: ["Career Compatibility Test", "Behavioral Assessment"]
        }
      ]
    },
    2: {
      title: "College Selection & Admission Assistance",
      icon: "fa-university",
      mainPoint: "Best College to Evolve",
      description: "Challenging academics and an atmosphere to hit and trial to develop your expertise.",
      keyPoints: [
        {
          title: "College shortlisting",
          points: ["Course-wise Rankings", "Admission Requirements"]
        },
        {
          title: "Admission Assistance",
          points: ["Application Timeline", "Document Preparation"]
        }
      ]
    },
    3: {
      title: "AI skilling & soft skill training",
      icon: "fa-laptop-code",
      mainPoint: "Getting Professionally Ready",
      description: "Let AI complement your talent to develop professionally.",
      keyPoints: [
        {
          title: "AI Skilling",
          points: ["Industry Tools Training", "Hands-on Projects"]
        },
        {
          title: "Soft skill training",
          points: ["Communication Workshop", "Leadership Development"]
        }
      ]
    },
    4: {
      title: "Career Launch Pad",
      icon: "fa-rocket",
      mainPoint: "Take Off",
      description: "Providing platform to your dreams and aspirations",
      keyPoints: [
        {
          title: "Preparation",
          points: ["Interview Preparation", "Portfolio Building"]
        },
        {
          title: "Recruiters Connect",
          points: ["Industry Networking", "Job Placement Support"]
        }
      ]
    }
  };

  const content = phaseContent[phase];

  return (
    <div 
      className={`career-phase ${initialLoad ? 'initial-load' : ''} 
                  ${isActive ? 'active' : ''} 
                  ${isCompleted ? 'completed' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="phase-card">
        <div className="progress-container">
          <div className="progress-steps">
            {[1, 2, 3, 4].map(step => (
              <div 
                key={step} 
                className={`progress-step ${step <= phase ? 'active' : ''} 
                           ${step < phase ? 'completed' : ''}`}
                onClick={() => onPhaseClick(step)}
                style={{ cursor: 'pointer' }}
              >
                <div className="step-number">
                  {step}
                  <div className="step-pulse"></div>
                </div>
                <div className="progress-line">
                  <div 
                    className="progress-fill"
                    style={{
                      width: step === phase && isActive ? `${progress}%` : 
                            step < phase ? '100%' : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="phase-content">
          <div className="phase-header">
            <div className="phase-icon-wrapper">
              <div className="phase-icon">
                <i className={`fas ${content.icon}`}></i>
                <div className="icon-particles">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="particle"></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="phase-title">
              <span className="phase-badge">Phase {phase}</span>
              <h3>{content.title}</h3>
            </div>
          </div>

          <div className="phase-details">
            <div className={`content-wrapper ${showDetails ? 'show' : 'hide'}`}
                 style={{ textAlign: 'left' }}>
              <div className="main-point">
                <h4>{content.mainPoint}</h4>
                <p>{content.description}</p>
              </div>

              <div className="key-points" style={{ paddingLeft: '15px' }}>
                {content.keyPoints.map((section, index) => (
                  <div 
                    key={index} 
                    className="point-section"
                    style={{ 
                      animationDelay: `${0.2 * index}s`,
                      fontSize: '0.85rem',
                      textAlign: 'left'
                    }}
                  >
                    <h5 className="point-header" style={{ fontSize: '0.95rem', textAlign: 'left' }}>
                      <span className="point-icon"></span>
                      {section.title}
                    </h5>
                    <ul className="point-list" style={{ 
                      textAlign: 'left', 
                      paddingLeft: '15px',
                      fontSize: '0.8rem'
                    }}>
                      {section.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CareerJourney = () => {
  const [activePhase, setActivePhase] = useState(1);
  const totalPhases = 4;

  const handlePhaseComplete = () => {
    setActivePhase(current => current < totalPhases ? current + 1 : 1);
  };

  const handlePhaseClick = (phaseNumber) => {
    setActivePhase(phaseNumber);
  };

  return (
    <div className="career-journey-container">
      <div className="journey-background">
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
      </div>
      
      <div className="phases-wrapper">
        {[1, 2, 3, 4].map(phase => (
          <CareerPhase
            key={phase}
            phase={phase}
            isActive={phase === activePhase}
            isCompleted={phase < activePhase}
            onComplete={handlePhaseComplete}
            onPhaseClick={handlePhaseClick}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSection = ({ openModal }) => (
  <div className="banner-hero-section">
    <div className="banner-hero-content">
      <div className="banner-title-wrapper">
        <h1 className="banner-hero-title">
          Your AI-Powered Education & Career Guide
          <div className="typewriter-container">
            <span className="banner-gradient-text">
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
          </div>
        </h1>
      </div>
      <p className="banner-hero-description">
        Navigate your educational journey with personalized AI guidance, explore career paths,
        and master the skills of tomorrow. Join thousands of students discovering their potential.
      </p>
      <div className="banner-cta-buttons">
        <Link to="/dashboard" className="banner-primary-cta">Start Your Journey</Link>
        <button className="banner-secondary-cta" onClick={openModal}>Book Demo</button>
      </div>
      <div className="banner-stats-container">
        {/* <div className="banner-stat-item">
          <span className="banner-stat-number">50K+</span>
          <span className="banner-stat-label">Students Guided</span>
        </div> */}
        <div className="banner-stat-item">
          <span className="banner-stat-number">100+</span>
          <span className="banner-stat-label">Career Paths</span>
        </div>
        <div className="banner-stat-item">
          <span className="banner-stat-number">24/7</span>
          <span className="banner-stat-label">AI Support</span>
        </div>
      </div>
    </div>
    <div className="banner-hero-visual">
      <CareerJourney />
    </div>
  </div>
);

export const Banner = () => {
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
      showAlert("info", "Info", "Query submitted successfully", null, () => {
        closeModal();
      });
    }
  };

  return (
    <div className="modern-banner">
      <HeroSection openModal={openModal} />
      <TextSection 
        isOpen={isOpen} 
        closeModal={closeModal} 
        handleSubmit={handleSubmit} 
        isLoading={isLoading} 
      />
    </div>
  );
};
