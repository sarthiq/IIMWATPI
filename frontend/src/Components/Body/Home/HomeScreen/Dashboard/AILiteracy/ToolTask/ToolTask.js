import React, { useState } from 'react';
import './ToolTask.css';

export const ToolTask = () => {
  const [taskForm, setTaskForm] = useState({
    taskName: '',
    aiTool: '',
    description: '',
    additionalData: '',
    file: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(taskForm);
  };

  const handleFileChange = (e) => {
    setTaskForm({
      ...taskForm,
      file: e.target.files[0]
    });
  };

  return (
    <div className="aitools-container">
      <h1 className="main-title">AI Tools Explorer</h1>

      {/* Writing & Productivity Section */}
      <section className="tools-section">
        <h2 className="section-title">
          <span className="emoji">🧠</span> AI-Powered Writing & Productivity Tools
        </h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>ChatGPT</h3>
            <p>AI chatbot that assists in answering queries, writing content, and generating ideas.</p>
          </div>
          <div className="tool-card">
            <h3>Notion AI</h3>
            <p>Enhances note-taking and document writing with AI-powered suggestions and automation.</p>
          </div>
          <div className="tool-card">
            <h3>Grammarly</h3>
            <p>AI-based grammar and writing assistant that helps in proofreading and clarity improvements.</p>
          </div>
          <div className="tool-card">
            <h3>Jasper AI</h3>
            <p>AI content generator for writing marketing copy, blog posts, and creative content.</p>
          </div>
        </div>
      </section>

      {/* Creativity & Design Section */}
      <section className="tools-section">
        <h2 className="section-title">
          <span className="emoji">🎨</span> AI in Creativity & Design
        </h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Canva AI</h3>
            <p>AI-powered design assistant for creating presentations, social media graphics, and videos.</p>
          </div>
          <div className="tool-card">
            <h3>DALL·E</h3>
            <p>AI image generator that creates images from text descriptions.</p>
          </div>
          <div className="tool-card">
            <h3>Runway ML</h3>
            <p>AI-powered video editing and creative tool for making effects, animation, and motion graphics.</p>
          </div>
          <div className="tool-card">
            <h3>Deep Dream Generator</h3>
            <p>An AI tool for creating surreal and artistic images based on deep learning.</p>
          </div>
        </div>
      </section>

      {/* Coding & Development Section */}
      <section className="tools-section">
        <h2 className="section-title">
          <span className="emoji">💻</span> AI in Coding & Development
        </h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>GitHub Copilot</h3>
            <p>AI-powered coding assistant that suggests code snippets and helps developers write efficient code.</p>
          </div>
          <div className="tool-card">
            <h3>Tabnine</h3>
            <p>AI-driven code completion tool that enhances productivity for developers.</p>
          </div>
        </div>
      </section>

      {/* Business & Marketing Section */}
      <section className="tools-section">
        <h2 className="section-title">
          <span className="emoji">📊</span> AI in Business & Marketing
        </h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Synthesia</h3>
            <p>AI-based video creation tool that generates videos with AI avatars.</p>
          </div>
          <div className="tool-card">
            <h3>Pictory</h3>
            <p>AI-powered tool that converts text-based content into engaging videos.</p>
          </div>
        </div>
      </section>

      {/* Healthcare & Research Section */}
      <section className="tools-section">
        <h2 className="section-title">
          <span className="emoji">⚕️</span> AI in Healthcare & Research
        </h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>IBM Watson Health</h3>
            <p>AI-powered analytics and diagnostics tool used in healthcare.</p>
          </div>
          <div className="tool-card">
            <h3>Ada Health</h3>
            <p>AI-powered symptom checker for health-related queries.</p>
          </div>
        </div>
      </section>

      {/* Search & Data Analysis Section */}
      <section className="tools-section">
        <h2 className="section-title">
          <span className="emoji">🔎</span> AI in Search & Data Analysis
        </h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Google Bard</h3>
            <p>AI-powered conversational search tool for answering complex queries.</p>
          </div>
        </div>
      </section>

      {/* Task Submission Section */}
      <section className="submission-section">
        <h2 className="section-title">
          <span className="emoji">📝</span> Task Submission Form
        </h2>
        <form onSubmit={handleSubmit} className="submission-form">
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              placeholder="e.g., Generate AI-based Blog Post"
              value={taskForm.taskName}
              onChange={(e) => setTaskForm({...taskForm, taskName: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>AI Tool Used</label>
            <select
              value={taskForm.aiTool}
              onChange={(e) => setTaskForm({...taskForm, aiTool: e.target.value})}
              required
            >
              <option value="">Select AI Tool</option>
              <option value="chatgpt">ChatGPT</option>
              <option value="notion">Notion AI</option>
              <option value="grammarly">Grammarly</option>
              <option value="jasper">Jasper AI</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Describe your task in detail"
              value={taskForm.description}
              onChange={(e) => setTaskForm({...taskForm, description: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Additional Data (Optional)</label>
            <textarea
              placeholder="Any additional information"
              value={taskForm.additionalData}
              onChange={(e) => setTaskForm({...taskForm, additionalData: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Upload File (Optional)</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input"
            />
          </div>

          <button type="submit" className="submit-button">Submit Task</button>
        </form>
      </section>
    </div>
  );
};


  