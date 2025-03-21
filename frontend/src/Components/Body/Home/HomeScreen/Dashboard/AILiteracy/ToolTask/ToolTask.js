import React, { useState } from 'react';
import './ToolTask.css';

const aiTools = {
  writing: [
    {
      name: "ChatGPT",
      description: "AI chatbot that assists in answering queries, writing content, and generating ideas.",
      features: [
        "Natural language conversations",
        "Content generation",
        "Question answering",
        "Code assistance"
      ],
      useCases: [
        "Writing articles and blogs",
        "Brainstorming ideas",
        "Learning concepts",
        "Problem-solving"
      ],
      website: "https://chat.openai.com",
      isPaid: false
    },
    {
      name: "Notion AI",
      description: "Enhances note-taking and document writing with AI-powered suggestions and automation.",
      features: [
        "Smart autocomplete",
        "Content summarization",
        "Writing assistance",
        "Document organization"
      ],
      useCases: [
        "Taking meeting notes",
        "Creating documentation",
        "Project management",
        "Knowledge base creation"
      ],
      website: "https://notion.so",
      isPaid: true
    },
    {
      name: "Grammarly",
      description: "AI-based grammar and writing assistant that helps in proofreading and clarity improvements.",
      features: [
        "Grammar checking",
        "Style suggestions",
        "Tone detection",
        "Plagiarism detection"
      ],
      useCases: [
        "Academic writing",
        "Professional emails",
        "Content editing",
        "Document proofreading"
      ],
      website: "https://grammarly.com",
      isPaid: true
    },
    {
      name: "Jasper AI",
      description: "AI content generator for writing marketing copy, blog posts, and creative content.",
      features: [
        "Marketing copy generation",
        "Blog post writing",
        "Social media content",
        "SEO optimization"
      ],
      useCases: [
        "Content marketing",
        "Social media management",
        "Ad copywriting",
        "Product descriptions"
      ],
      website: "https://jasper.ai",
      isPaid: true
    }
  ],
  creativity: [
    {
      name: "Canva AI",
      description: "AI-powered design assistant for creating presentations, social media graphics, and videos.",
      features: [
        "Template suggestions",
        "Auto-layout",
        "Image generation",
        "Text effects"
      ],
      useCases: [
        "Social media graphics",
        "Presentations",
        "Marketing materials",
        "Infographics"
      ],
      website: "https://canva.com",
      isPaid: true
    },
    {
      name: "DALL·E",
      description: "AI image generator that creates images from text descriptions.",
      features: [
        "Text-to-image generation",
        "Image editing",
        "Style transfer",
        "Multiple art styles"
      ],
      useCases: [
        "Creating marketing visuals",
        "Concept art",
        "Social media content",
        "Design inspiration"
      ],
      website: "https://openai.com/dall-e-2",
      isPaid: true
    },
    {
      name: "Runway ML",
      description: "AI-powered video editing and creative tool for making effects, animation, and motion graphics.",
      features: [
        "Video editing",
        "Motion graphics",
        "Green screen",
        "Text-to-video"
      ],
      useCases: [
        "Video production",
        "Special effects",
        "Content creation",
        "Animation"
      ],
      website: "https://runwayml.com",
      isPaid: true
    },
    {
      name: "Deep Dream Generator",
      description: "An AI tool for creating surreal and artistic images based on deep learning.",
      features: [
        "Style transfer",
        "Image processing",
        "Artistic effects",
        "Pattern generation"
      ],
      useCases: [
        "Artistic creation",
        "Photo effects",
        "Digital art",
        "Pattern design"
      ],
      website: "https://deepdreamgenerator.com",
      isPaid: true
    }
  ],
  coding: [
    {
      name: "GitHub Copilot",
      description: "AI-powered coding assistant that suggests code snippets and helps developers write efficient code.",
      features: [
        "Code completion",
        "Function suggestions",
        "Documentation help",
        "Multi-language support"
      ],
      useCases: [
        "Software development",
        "Code automation",
        "Learning programming",
        "Quick prototyping"
      ],
      website: "https://github.com/features/copilot",
      isPaid: true
    },
    {
      name: "Tabnine",
      description: "AI-driven code completion tool that enhances productivity for developers.",
      features: [
        "Code completion",
        "Error detection",
        "Best practice suggestions",
        "Team collaboration"
      ],
      useCases: [
        "Code development",
        "Team programming",
        "Code learning",
        "Project management"
      ],
      website: "https://tabnine.com",
      isPaid: true
    }
  ],
  business: [
    {
      name: "Synthesia",
      description: "AI-based video creation tool that generates videos with AI avatars.",
      features: [
        "AI avatars",
        "Text-to-speech",
        "Multiple languages",
        "Custom scripts"
      ],
      useCases: [
        "Training videos",
        "Marketing content",
        "Educational materials",
        "Presentations"
      ],
      website: "https://synthesia.io",
      isPaid: true
    },
    {
      name: "Pictory",
      description: "AI-powered tool that converts text-based content into engaging videos.",
      features: [
        "Text-to-video",
        "Auto-editing",
        "Subtitle generation",
        "Content repurposing"
      ],
      useCases: [
        "Content marketing",
        "Social media videos",
        "Blog to video",
        "Educational content"
      ],
      website: "https://pictory.ai",
      isPaid: true
    }
  ],
  healthcare: [
    {
      name: "IBM Watson Health",
      description: "AI-powered analytics and diagnostics tool used in healthcare.",
      features: [
        "Health analytics",
        "Disease prediction",
        "Treatment suggestions",
        "Research assistance"
      ],
      useCases: [
        "Medical diagnosis",
        "Healthcare research",
        "Patient care",
        "Clinical trials"
      ],
      website: "https://www.ibm.com/watson-health",
      isPaid: true
    },
    {
      name: "Ada Health",
      description: "AI-powered symptom checker for health-related queries.",
      features: [
        "Symptom assessment",
        "Health tracking",
        "Medical information",
        "Care guidance"
      ],
      useCases: [
        "Health assessment",
        "Medical guidance",
        "Symptom tracking",
        "Health education"
      ],
      website: "https://ada.com",
      isPaid: false
    }
  ],
  search: [
    {
      name: "Google Bard",
      description: "AI-powered conversational search tool for answering complex queries.",
      features: [
        "Natural language search",
        "Complex query handling",
        "Information synthesis",
        "Real-time updates"
      ],
      useCases: [
        "Research",
        "Information gathering",
        "Learning assistance",
        "Problem-solving"
      ],
      website: "https://bard.google.com",
      isPaid: false
    }
  ]
};

const ToolCard = ({ tool }) => {
  return (
    <div className="tool-card">
      <div className="tool-header">
        <h3>{tool.name}</h3>
      </div>
      
      <p className="tool-description">{tool.description}</p>
      
      <div className="tool-features">
        <h4>Key Features:</h4>
        <ul>
          {tool.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <div className="tool-use-cases">
        <h4>Use Cases:</h4>
        <ul>
          {tool.useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </div>
      
      <a 
        href={tool.website} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="tool-link"
      >
        Try Tool →
      </a>
    </div>
  );
};

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
        <div className="tools-grid two-columns">
          {aiTools.writing.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </section>

      {/* Creativity & Design Section */}
      <section className="tools-section">
        <h2 className="section-title">
          <span className="emoji">🎨</span> AI in Creativity & Design
        </h2>
        <div className="tools-grid two-columns">
          {aiTools.creativity.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </section>

      {/* Coding & Development Section */}
      <section className="tools-section">
        <h2 className="section-title">
          <span className="emoji">💻</span> AI in Coding & Development
        </h2>
        <div className="tools-grid two-columns">
          {aiTools.coding.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </section>

      {/* Business & Marketing Section */}
      <section className="tools-section">
        <h2 className="section-title">
          <span className="emoji">📊</span> AI in Business & Marketing
        </h2>
        <div className="tools-grid two-columns">
          {aiTools.business.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </section>

      {/* Healthcare & Research Section */}
      <section className="tools-section">
        <h2 className="section-title">
          <span className="emoji">⚕️</span> AI in Healthcare & Research
        </h2>
        <div className="tools-grid two-columns">
          {aiTools.healthcare.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </section>

      {/* Search & Data Analysis Section */}
      <section className="tools-section">
        <h2 className="section-title">
          <span className="emoji">🔎</span> AI in Search & Data Analysis
        </h2>
        <div className="tools-grid two-columns">
          {aiTools.search.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
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