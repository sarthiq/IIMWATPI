import React, { useState, useEffect } from "react";
import "./CareerReport.css";
import { Spinner, Container, Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';
import { updateUserProfileHandler, getUserProfileHandler, getTestResultsHandler } from "../apiHandler";
import { useAlert } from "../../../../../UI/Alert/AlertContext";

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
  // Initialize studentData with default values
  const [studentData, setStudentData] = useState({
    studentDetails: {
      studentName: "N/A",
      schoolName: "N/A",
      class: "N/A"
    }
  });
  const [testResults, setTestResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [printLoading, setPrintLoading] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const { showAlert } = useAlert();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileResponse, testResponse] = await Promise.all([
          getUserProfileHandler(setLoading, showAlert),
          getTestResultsHandler(setLoading, showAlert)
        ]);

        if (profileResponse && profileResponse.success && profileResponse.data) {
          const userData = {
            studentDetails: {
              studentName: profileResponse.data.User?.name || "N/A",
              schoolName: profileResponse.data.institutionName || "N/A",
              class: `${profileResponse.data.standard || "N/A"} - ${profileResponse.data.course || "N/A"} ${profileResponse.data.branch ? `(${profileResponse.data.branch})` : ''}`
            }
          };
          setStudentData(userData);
        }

        if (testResponse && testResponse.success && testResponse.data) {
          // Transform the API response to match our component structure
          setTestResults({
            iq: {
              score: testResponse.data.results.iq?.detailedResult?.result?.label || "0",
              strongAreas: testResponse.data.results.iq?.detailedResult?.result?.strongAreas || [
                "Logical Reasoning",
                "Pattern Recognition",
                "Spatial Visualization"
              ],
              improvementAreas: testResponse.data.results.iq?.detailedResult?.result?.improvementAreas || [
                "Verbal Comprehension",
                "Working Memory"
              ]
            },
            interest: {
              // Transform interests data from the response
              technology: testResponse.data.interests["10"] ? 75 : 0,
              science: testResponse.data.interests["12"] ? 75 : 0,
              arts: testResponse.data.interests["16"]?.includes("Social Sciences, Humanities, and Political Studies") ? 75 : 0
            },
            personality: {
              // Map personality scores from the response
              extraversion: testResponse.data.results.personality?.detailedResult?.result?.extraversion || 0,
              agreeableness: testResponse.data.results.personality?.detailedResult?.result?.agreeableness || 0,
              conscientiousness: testResponse.data.results.personality?.detailedResult?.result?.conscientiousness || 0,
              neuroticism: testResponse.data.results.personality?.detailedResult?.result?.neuroticism || 0,
              openness: testResponse.data.results.personality?.detailedResult?.result?.openness || 0
            },
            creativity: {
              // Add creativity scores if needed
              score: testResponse.data.results.creativity?.detailedResult?.result?.total || 0,
              label: testResponse.data.results.creativity?.detailedResult?.result?.label || "N/A",
              categories: testResponse.data.results.creativity?.detailedResult?.result?.categoryScores || {}
            }
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        showAlert("error", "Error", "Failed to load test results");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add a function to update the user profile if needed
  const updateProfile = async (updatedData) => {
    try {
      setLoading(true);
      const response = await updateUserProfileHandler(updatedData, setLoading, showAlert);
      if (response) {
        showAlert("success", "Success", "Profile updated successfully");
        // Refresh data after update
        const userData = {
          studentDetails: {
            studentName: response.name || "N/A",
            schoolName: response.institute || "N/A",
            class: response.grade || "N/A"
          },
          personalityScores: {
            extraversion: response.extraversion || 50,
            agreeableness: response.agreeableness || 50,
            conscientiousness: response.conscientiousness || 50,
            neuroticism: response.neuroticism || 50,
            openness: response.openness || 50
          }
        };
        setStudentData(userData);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      showAlert("error", "Error", "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle section click for animation
  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    setTimeout(() => {
      setActiveSection(null);
    }, 500);
  };

  if (loading) {
    return (
      <div className="profile-loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // Move personalityTraits inside the component and use testResults
  const personalityTraits = [
    {
      trait: "Extraversion",
      score: testResults?.personality?.extraversion || 0,
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
      score: testResults?.personality?.agreeableness || 0,
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
      score: testResults?.personality?.conscientiousness || 0,
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
      score: testResults?.personality?.neuroticism || 0,
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
      score: testResults?.personality?.openness || 0,
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
    setPrintLoading(true);
    const reportContent = document.getElementById('report');
    const printWindow = window.open('', '', 'height=800,width=1000');
    
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

    // Add additional styles for print layout
    const printStyles = `
      body {
        padding: 0;
        margin: 0;
        font-family: Arial, sans-serif;
      }
      .report-container {
        max-width: 100%;
        margin: 0;
        padding: 0;
      }
      .report-section {
        page-break-inside: avoid;
        margin-bottom: 20px;
      }
      .main-content-container {
        box-shadow: none;
        padding: 0;
        margin-bottom: 20px;
      }
      .personality-grid {
        page-break-inside: avoid;
      }
      .personality-scores,
      .personality-table {
        page-break-inside: avoid;
      }
      .trait-row {
        page-break-inside: avoid;
      }
      @page {
        size: A4;
        margin: 15px;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        .print-button,
        .report-actions {
          display: none !important;
        }
        .report-header {
          margin-bottom: 20px;
        }
        .section-title {
          margin-bottom: 15px;
        }
        .personality-table {
          border: 1px solid #ddd;
          margin: 20px 0;
          font-size: 14px;
          border-collapse: collapse;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
        }
        .table-header {
          display: grid;
          grid-template-columns: 1fr 2fr 2fr;
          background-color: #f8f9fa;
          font-weight: bold;
          border-bottom: 1px solid #ddd;
          padding: 0;
        }
        .trait-header, .score-header {
          padding: 12px 15px;
          text-align: center;
          font-size: 14px;
          color: #2c3e50;
          border-right: 1px solid #ddd;
        }
        .trait-header:last-child, .score-header:last-child {
          border-right: none;
        }
        .trait-row {
          display: grid;
          grid-template-columns: 1fr 2fr 2fr;
          border-bottom: 1px solid #ddd;
          margin: 0;
          padding: 0;
        }
        .trait-name {
          padding: 12px 15px;
          font-weight: bold;
          background-color: #f8f9fa;
          font-size: 14px;
          color: #2c3e50;
          border-right: 1px solid #ddd;
        }
        .trait-details {
          padding: 12px 15px;
          border-right: 1px solid #ddd;
        }
        .trait-details:last-child {
          border-right: none;
        }
        .trait-details ul {
          list-style-type: decimal;
          margin: 0;
          padding-left: 20px;
        }
        .trait-details li {
          margin: 6px 0;
          font-size: 14px;
          line-height: 1.4;
          color: #555;
        }
        .extraversion { background-color: rgba(116, 185, 204, 0.05); }
        .agreeableness { background-color: rgba(255, 193, 7, 0.05); }
        .conscientiousness { background-color: rgba(76, 175, 80, 0.05); }
        .neuroticism { background-color: rgba(156, 39, 176, 0.05); }
        .openness { background-color: rgba(255, 82, 82, 0.05); }
      }
    `;

    printWindow.document.write(`
      <html>
        <head>
          <title>Career Assessment Report</title>
          <style>
            ${styles}
            ${printStyles}
          </style>
        </head>
        <body>
          <div class="report-container">
            ${reportContent.innerHTML}
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    
    // Wait for images and styles to load
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
      setPrintLoading(false);
    }, 1000);
  };

  // Function to get career recommendations based on personality traits
  const getCareerRecommendations = () => {
    const recommendations = {
      careers: [],
      education: []
    };
    
    // Add careers based on personality traits
    if (testResults?.personality?.openness > 70) {
      recommendations.careers.push("Creative Director", "UX/UI Designer", "Content Creator");
      recommendations.education.push("Bachelor of Design", "Bachelor of Fine Arts", "Bachelor of Media Studies");
    }
    
    if (testResults?.personality?.conscientiousness > 70) {
      recommendations.careers.push("Project Manager", "Data Analyst", "Financial Planner");
      recommendations.education.push("Bachelor of Business Administration", "Bachelor of Commerce", "Bachelor of Economics");
    }
    
    if (testResults?.personality?.extraversion > 70) {
      recommendations.careers.push("Sales Manager", "Public Relations Specialist", "Event Planner");
      recommendations.education.push("Bachelor of Communication", "Bachelor of Marketing", "Bachelor of Hospitality Management");
    }
    
    if (testResults?.personality?.agreeableness > 70) {
      recommendations.careers.push("Counselor", "Social Worker", "Human Resources Manager");
      recommendations.education.push("Bachelor of Psychology", "Bachelor of Social Work", "Bachelor of Human Resource Management");
    }
    
    // Add default recommendations if none were added
    if (recommendations.careers.length === 0) {
      recommendations.careers.push("Software Developer", "Business Analyst", "Marketing Specialist");
      recommendations.education.push("Bachelor of Computer Science", "Bachelor of Business Administration", "Bachelor of Marketing");
    }
    
    return recommendations;
  };

  const careerRecommendations = getCareerRecommendations();

  return (
    <Container fluid className="cr-page-wrapper">
      <div id="report" className="cr-report-container">
        {/* Main content container */}
        <div className="main-content-container">
          {/* Modern Header with Gradient */}
          <div className="report-header">
            <div className="report-header-content">
              <div className="student-avatar-large">
                {studentData?.studentDetails?.studentName?.charAt(0) || "?"}
              </div>
              <div className="student-info-wrapper">
                <h1 className="student-name">
                  {studentData?.studentDetails?.studentName || "N/A"}
                </h1>
                <div className="student-meta">
                  <span className="meta-badge">
                    {studentData?.studentDetails?.class || "N/A"}
                  </span>
                  <span className="meta-divider"></span>
                  <span className="meta-badge">
                    {studentData?.studentDetails?.schoolName || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Career Recommendations section */}
          <div 
            className={`report-section recommendation-section ${activeSection === 'recommendations' ? 'active' : ''}`}
            onClick={() => handleSectionClick('recommendations')}
          >
            <h2 className="section-title">Career Recommendations</h2>
            <div className="career-grid">
              <div className="career-card">
                <h3>Career Paths</h3>
                <ul className="career-list">
                  {careerRecommendations.careers.map((career, index) => (
                    <li key={index}>{career}</li>
                  ))}
                </ul>
              </div>
              <div className="career-card">
                <h3>Education Pathways</h3>
                <ul className="career-list">
                  {careerRecommendations.education.map((education, index) => (
                    <li key={index}>{education}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* IQ Assessment Section */}
          <div 
            className={`report-section iq-section ${activeSection === 'iq' ? 'active' : ''}`}
            onClick={() => handleSectionClick('iq')}
          >
            <h2 className="section-title">IQ Assessment</h2>
            <div className="iq-content-modern">
              <div className="iq-row">
                <div className="iq-score-circle">
                  <div className="score-ring">
                    <span className="score-number">{testResults?.iq?.score || "N/A"}</span>
                    <span className="score-label">IQ Score</span>
                  </div>
                </div>
                <div className="iq-details-grid">
                  <div className="analysis-box">
                    <h4>Strong Areas</h4>
                    <ul>
                      {testResults?.iq?.strongAreas?.map((area, index) => (
                        <li key={index}>{area}</li>
                      )) || <li>No data available</li>}
                    </ul>
                  </div>
                  <div className="analysis-box">
                    <h4>Areas for Improvement</h4>
                    <ul>
                      {testResults?.iq?.improvementAreas?.map((area, index) => (
                        <li key={index}>{area}</li>
                      )) || <li>No data available</li>}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interest Test Section */}
          <div 
            className={`report-section ${activeSection === 'interests' ? 'active' : ''}`}
            onClick={() => handleSectionClick('interests')}
          >
            <h2 className="section-title">Interest Test Explanation</h2>
            <div className="interest-container">
              <div className="interest-bars">
                {Object.entries(testResults?.interest || {}).map(([key, value]) => (
                  <div key={key} className="interest-item">
                    <span className="interest-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <div className="interest-bar">
                      <div className="bar-fill" style={{width: `${value}%`}}>
                        {value}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personality Section - Outside the main container */}
        <div 
          className={`report-section ${activeSection === 'personality' ? 'active' : ''}`}
          onClick={() => handleSectionClick('personality')}
        >
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
                      style={{ left: `${trait.score.toFixed(2)}%` }}
                    >
                      {trait.score.toFixed(2)}%
                    </span>
                    <div 
                      className="circle-indicator"
                      style={{ left: `${trait.score.toFixed(2)}%` }}
                    />
                  </div>
                  <div 
                    className="score-indicator"
                    style={{ left: `${trait.score.toFixed(2)}%` }}
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

      <div className="report-actions">
        <button 
          onClick={handlePrint} 
          className="print-button"
          disabled={printLoading}
        >
          {printLoading ? (
            <Spinner animation="border" size="sm" />
          ) : (
            <i className="fas fa-download"></i>
          )}
          {printLoading ? "Preparing..." : "Download Report"}
        </button>
      </div>
    </Container>
  );
};

