import React, { useState, useEffect } from "react";
import "./CareerReport.css";
import { Spinner, Container, Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';

// Dummy data simulating backend response
const dummyData = {
  studentDetails: {
    studentName: "Alok Prajapati",
    schoolName: "St. Mary's High School",
    class: "12th Grade - Science"
  },
  personalityScores: {
    extraversion: 81,
    agreeableness: 75,
    conscientiousness: 74,
    neuroticism: 64,
    openness: 71
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
    return (
      <div className="profile-loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
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

  const handlePrint = () => {
    const reportContent = document.getElementById('report');
    const printWindow = window.open('', '', 'height=600,width=800');
    
    // Get all stylesheets from the current document
    const styles = Array.from(document.styleSheets)
      .map(styleSheet => {
        try {
          return Array.from(styleSheet.cssRules)
            .map(rule => rule.cssText)
            .join('');
        } catch (e) {
          return '';
        }
      })
      .join('\n');

    printWindow.document.write(`
      <html>
        <head>
          <title>Student Assessment Report</title>
          <style>
            ${styles}
            body {
              padding: 0;
              margin: 0;
            }
            .report-container {
              padding: 40px;
            }
            @page {
              size: A4;
              margin: 0;
            }
            @media print {
              body {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .print-button {
                display: none !important;
              }
            }
          </style>
        </head>
        <body>
          ${reportContent.outerHTML}
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  return (
    <Container fluid className="cr-page-wrapper">
      <div id="report" className="cr-report-container">
        <Card className="cr-header-card mb-4">
          <Card.Body className="text-center">
            <h1 className="cr-report-title">Student Assessment Report</h1>
            <div className="cr-student-meta">
              <Badge bg="primary" className="cr-meta-badge">
                {studentData.studentDetails.class}
              </Badge>
              <Badge bg="info" className="cr-meta-badge">
                {studentData.studentDetails.schoolName}
              </Badge>
            </div>
          </Card.Body>
        </Card>

        <Row className="g-4">
          <Col lg={4}>
            <Card className="cr-profile-card">
              <Card.Body>
                <div className="cr-profile-header">
                  <div className="cr-avatar">
                    {studentData.studentDetails.studentName.charAt(0)}
                  </div>
                  <h3 className="cr-student-name">
                    {studentData.studentDetails.studentName}
                  </h3>
                </div>
                <hr className="cr-divider" />
                <div className="cr-profile-details">
                  <p><strong>School:</strong> {studentData.studentDetails.schoolName}</p>
                  <p><strong>Class:</strong> {studentData.studentDetails.class}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={8}>
            <Card className="cr-score-card">
              <Card.Body>
                <h3 className="cr-section-title">Personality Assessment</h3>
                {personalityTraits.map((trait, index) => (
                  <div key={index} className="cr-score-item">
                    <div className="cr-score-labels">
                      <span>{trait.leftLabel}</span>
                      <span className="cr-trait-name">{trait.trait}</span>
                      <span>{trait.rightLabel}</span>
                    </div>
                    <ProgressBar 
                      now={trait.score} 
                      variant="custom"
                      className="cr-custom-progress"
                      style={{'--progress-color': trait.color}}
                    />
                    <div className="cr-score-value">{trait.score}%</div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="report-section">
          <h2 className="section-title">Recommendation</h2>
          <div className="recommendation-grid">
            <div className="recommendation-box">
              <h3 className="box-title">Career Options</h3>
              <ul className="recommendation-list">
                <li>Software Engineer</li>
                <li>Data Scientist</li>
                <li>Product Manager</li>
                <li>UI/UX Designer</li>
              </ul>
            </div>
            <div className="recommendation-box">
              <h3 className="box-title">Higher Education</h3>
              <ul className="recommendation-list">
                <li>B.Tech in Computer Science</li>
                <li>BCA</li>
                <li>B.Sc in Data Science</li>
                <li>B.Des in UI/UX</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="report-section">
          <h2 className="section-title">Action Plan</h2>
          <div className="action-grid">
            <div className="action-box">
              <h3 className="box-title">Immediate Steps (0-6 months)</h3>
              <ul className="action-list">
                <li>Complete Python Programming Course</li>
                <li>Learn Basic Web Development</li>
                <li>Create GitHub Profile</li>
              </ul>
            </div>
            <div className="action-box">
              <h3 className="box-title">Short Term (6-12 months)</h3>
              <ul className="action-list">
                <li>Build Portfolio Projects</li>
                <li>Join Coding Communities</li>
                <li>Participate in Hackathons</li>
              </ul>
            </div>
            <div className="action-box">
              <h3 className="box-title">Long Term (1-2 years)</h3>
              <ul className="action-list">
                <li>Internship in Tech Company</li>
                <li>Industry Certifications</li>
                <li>Specialized Skills Development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="report-section">
          <h2 className="section-title">IQ Test Result Explanation</h2>
          <div className="iq-container">
            <div className="iq-score-box">
              <div className="score-circle">120</div>
              <p className="score-label">IQ Score</p>
            </div>
            <div className="iq-details">
              <div className="detail-box">
                <h3 className="box-title">Strong Areas</h3>
                <ul className="detail-list">
                  <li>Logical Reasoning</li>
                  <li>Pattern Recognition</li>
                  <li>Numerical Ability</li>
                </ul>
              </div>
              <div className="detail-box">
                <h3 className="box-title">Areas for Improvement</h3>
                <ul className="detail-list">
                  <li>Verbal Reasoning</li>
                  <li>Spatial Awareness</li>
                  <li>Memory</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="report-section">
          <h2 className="section-title">Interest Test Explanation</h2>
          <div className="interest-container">
            <div className="interest-bars">
              <div className="interest-item">
                <span className="interest-label">Technology</span>
                <div className="interest-bar">
                  <div className="bar-fill" style={{width: '85%'}}>85%</div>
                </div>
              </div>
              <div className="interest-item">
                <span className="interest-label">Science</span>
                <div className="interest-bar">
                  <div className="bar-fill" style={{width: '75%'}}>75%</div>
                </div>
              </div>
              <div className="interest-item">
                <span className="interest-label">Arts</span>
                <div className="interest-bar">
                  <div className="bar-fill" style={{width: '60%'}}>60%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="report-section">
          <h2 className="section-title">Personality Test Explanation</h2>
          <div className="personality-grid">
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
      
      <div className="cr-print-button-wrapper">
        <button onClick={handlePrint} className="cr-print-button">
          <i className="bi bi-download me-2"></i>
          Download Report
        </button>
      </div>
    </Container>
  );
};

