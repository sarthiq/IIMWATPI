import React, { useState, useEffect } from "react";
import "./CareerReport.css";

// Dummy data simulating backend response
const dummyData = {
  studentDetails: {
    studentName: "Alok Prajapati",
    schoolName: "St. Mary's High School",
    class: "12th Grade - Science"
  },
  personalityScores: {
    extraversion: 53,
    agreeableness: 55,
    conscientiousness: 54,
    neuroticism: 54,
    openness: 51
  }
};

export const CareerReport = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStudentData(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading report...</div>;
  }

  const personalityTraits = [
    {
      trait: "Extraversion",
      score: studentData.personalityScores.extraversion,
      leftLabel: "Introvert",
      rightLabel: "Extrovert",
      color: "#74b9cc",
      high: [
        "Feel energized around people",
        "Wide social circle and friends",
        "Say before thinking"
      ],
      low: [
        "Avoid attention and prefer solitude",
        "Find it difficult to start a conversation",
        "Perform best when alone"
      ]
    },
    {
      trait: "Agreeableness",
      score: studentData.personalityScores.agreeableness,
      leftLabel: "Self-Centered",
      rightLabel: "Empathetic",
      color: "#ffc107",
      high: [
        "Highly empathetic",
        "Enjoys helping others",
        "Cares for people around"
      ],
      low: [
        "Self-centered and looks for self-interest",
        "Insult and belittle others",
        "Sometimes manipulate others for self-interest"
      ]
    },
    {
      trait: "Conscientiousness",
      score: studentData.personalityScores.conscientiousness,
      leftLabel: "Unorganized",
      rightLabel: "Organized",
      color: "#4caf50",
      high: [
        "Like to be prepared beforehand",
        "Enjoys following schedules",
        "Pays attention to details"
      ],
      low: [
        "Procrastinates and avoids tasks until the last moment",
        "Dislike structure and schedules",
        "Usually makes mess and fails to complete tasks on time"
      ]
    },
    {
      trait: "Neuroticism",
      score: studentData.personalityScores.neuroticism,
      leftLabel: "Emotionally stable",
      rightLabel: "Emotional",
      color: "#9c27b0",
      high: [
        "Mood swings and stress",
        "Get upset easily",
        "Struggles to bounce back after failures"
      ],
      low: [
        "Emotionally stable",
        "Deals with stress and usually relaxed",
        "Doesn't worry much"
      ]
    },
    {
      trait: "Openness",
      score: studentData.personalityScores.openness,
      leftLabel: "Rigid",
      rightLabel: "Early Adopter",
      color: "#ff5252",
      high: [
        "Gets involved in new things",
        "Creative",
        "Abstract thinking"
      ],
      low: [
        "Dislike changes",
        "Resist New things",
        "Lack imagination"
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      <div id="report" className="report-container">
        <h1>Student Assessment Report</h1>
        
        <div className="report-section">
          <h2>Basic Details of Student</h2>
          <div className="details">
            <p>Name : {studentData.studentDetails.studentName}</p>
            <p>School/College : {studentData.studentDetails.schoolName}</p>
            <p>Class/Course : {studentData.studentDetails.class}</p>
          </div>
        </div>

        <div className="report-section">
          <h2>Personality Test Explanation</h2>
          
          <div className="personality-grid">
            {/* Left Column - Personality Scores */}
            <div className="personality-scores">
              {personalityTraits.map((trait, index) => (
                <div key={index} className="score-row">
                  <div className="score-labels">
                    <span className="left-label">{trait.leftLabel}</span>
                    <span className="right-label">{trait.rightLabel}</span>
                  </div>
                  <div className="score-bar-container">
                    <div 
                      className="score-bar"
                      style={{ backgroundColor: trait.color }}
                    />
                    <span 
                      className="score-value" 
                      style={{ left: `${trait.score}%` }}
                    >
                      {trait.score}%
                    </span>
                    <div 
                      className="circle-indicator"
                      style={{ left: `${trait.score}%` }}
                    />
                  </div>
                  <div 
                    className="score-indicator"
                    style={{ 
                      left: `${trait.score}%`,
                    }}
                  >
                    {trait.trait}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Personality Table */}
            <div className="personality-table">
              <div className="table-header">
                <div className="trait-header">Personality Types</div>
                <div className="score-header">High (score 60 or more)</div>
                <div className="score-header">Low (Score 30 or less)</div>
              </div>
              
              {personalityTraits.map((trait, index) => (
                <div key={index} className={`trait-row ${trait.trait.toLowerCase()}`}>
                  <div className="trait-name">{trait.trait}</div>
                  <div className="trait-details">
                    <ul>
                      {trait.high.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="trait-details">
                    <ul>
                      {trait.low.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => window.print()} className="print-button">
        Download Report
      </button>
    </div>
  );
};

