import React, { useState } from 'react';
import './ToolTask.css';

export const ToolTask = () => {
  const [task, setTask] = useState("Use an AI tool to generate a creative story.");
  const [submission, setSubmission] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="tooltask-container">
      <h2 className="tooltask-title">AI Task</h2>
      <p className="tooltask-description">{task}</p>
      <form onSubmit={handleSubmit} className="tooltask-form">
        <textarea
          className="tooltask-textarea"
          value={submission}
          onChange={(e) => setSubmission(e.target.value)}
          placeholder="Enter your task submission here..."
          required
        />
        <button type="submit" className="tooltask-submit-button">Submit Task</button>
      </form>
      {submitted && <p className="tooltask-success-message">Task submitted successfully!</p>}
    </div>
  );
};

