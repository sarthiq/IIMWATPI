import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AILiteracyHome.css';


export const AILiteracyHome = () => {
  const navigate = useNavigate();

  const theoryItems = [
    "Introduction to AI",
    "History of AI",
    "AI vs Human Intelligence",
    "Types of AI",
    "Ethical Concerns in AI"
  ];

  const toolsAndTasksItems = [
    "AI-powered tools",
    "AI in Education",
    "AI in Social Media",
    "AI in Healthcare",
    "AI in Career Planning"
  ];

  return (
    <div className="ai-literacy-container">
      <div className="ai-literacy-column ai-literacy-theory">
        <h2 className="ai-literacy-column-title">Theory</h2>
        <ul className="ai-literacy-item-list">
          {theoryItems.map((item, index) => (
            <li key={index} className="ai-literacy-item">{item}</li>
          ))}
        </ul>
        <button 
          className="ai-literacy-nav-button ai-literacy-theory-button"
          onClick={() => navigate('./theory')}
        >
          Go to Theory
        </button>
      </div>
      <div className="ai-literacy-column ai-literacy-tools-tasks">
        <h2 className="ai-literacy-column-title">Tools & Task</h2>
        <ul className="ai-literacy-item-list">
          {toolsAndTasksItems.map((item, index) => (
            <li key={index} className="ai-literacy-item">{item}</li>
          ))}
        </ul>
        <button 
          className="ai-literacy-nav-button ai-literacy-tools-button"
          onClick={() => navigate('./tools-tasks')}
        >
          Go to Tools & Task
        </button>
      </div>

      
    </div>
  );
};

