import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Button, Spinner, Alert } from "react-bootstrap";
import { useAlert } from "../../../../../UI/Alert/AlertContext";

import { FaDownload, FaUserCircle, FaBrain, FaSearch } from "react-icons/fa";
import styles from "./CareerReport.module.css";
import data from "../CareerRecommendations/CRHome/data-v2.json";
import { getProfileHandler, getTestResultsHandler } from "../apiHandler";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CommonPersonalityTypes = data["Common Personality Types"];

let CareerRecommendations = [];

try {
  CareerRecommendations = data["Career Recommendations"] || [];
} catch (error) {
  console.error("Error loading data from JSON:", error);
}

const getPersonalityLabel = (trait, score) => {
  const labels = {
    extraversion: { low: "Introvert", high: "Extrovert" },
    agreeableness: { low: "Self-Centered", high: "Empathetic" },
    conscientiousness: { low: "Unorganized", high: "Organized" },
    neuroticism: { low: "Emotionally Stable", high: "Emotional" },
    openness: { low: "Rigid", high: "Early Adopter" },
  };

  return score > 50 ? labels[trait].high : labels[trait].low;
};

const calculatePersonalityTypeMatch = (personalityResults) => {
  if (!personalityResults?.result) {
    console.log("No personality results found");
    return [];
  }

  // Check if CommonPersonalityTypes exists
  if (!CommonPersonalityTypes) {
    console.error("CommonPersonalityTypes is not defined");
    return [];
  }

  // Define the trait mappings with their corresponding scores
  const traitMappings = {
    extraversion: {
      left: "Introvert",
      right: "Extrovert",
      score: personalityResults.result.extraversion
    },
    agreeableness: {
      left: "Self-Centered",
      right: "Altruist",
      score: personalityResults.result.agreeableness
    },
    conscientiousness: {
      left: "Unorganized",
      right: "Organized",
      score: personalityResults.result.conscientiousness
    },
    neuroticism: {
      left: "Emotionally Stable",
      right: "Emotional",
      score: personalityResults.result.neuroticism
    },
    openness: {
      left: "Rigid",
      right: "Early Adopter",
      score: personalityResults.result.openness
    }
  };

  try {
    // Calculate match score for each personality type
    const personalityTypeScores = Object.entries(CommonPersonalityTypes).map(([type, traits]) => {
      let matchScore = 0;
      
      // For each trait in the personality type
      traits.forEach(trait => {
        // Find which trait dimension this trait belongs to
        for (const [dimension, mapping] of Object.entries(traitMappings)) {
          if (trait === mapping.left || trait === mapping.right) {
            // If the trait is on the "left" side, subtract from 100
            if (trait === mapping.left) {
              const traitScore = 100 - mapping.score;
              matchScore += traitScore;
            } else {
              // If the trait is on the "right" side, use the score directly
              matchScore += mapping.score;
            }
            break;
          }
        }
      });
      
      return { type, matchScore };
    });

    // Sort by match score and get top 3
    const topTypes = personalityTypeScores
      .sort((a, b) => {
        // First sort by score (descending)
        if (b.matchScore !== a.matchScore) {
          return b.matchScore - a.matchScore;
        }
        // If scores are equal, sort alphabetically by type name
        return a.type.localeCompare(b.type);
      })
      .slice(0, 3)
      .map(score => score.type);
    
    // Ensure we always return 3 personality types
    // If we have fewer than 3, add the remaining personality types from personalityTypeArray
    if (topTypes.length < 3) {
      const remainingTypes = data["personalityTypeArray"].filter(type => !topTypes.includes(type));
      topTypes.push(...remainingTypes.slice(0, 3 - topTypes.length));
    }
    
    return topTypes;
  } catch (error) {
    console.error("Error in calculatePersonalityTypeMatch:", error);
    return [];
  }
};

const getCareerRecommendations = (iqResults, personalityResults, interestResults) => {
  if (!CareerRecommendations || !CommonPersonalityTypes) {
    console.error("Required data is not loaded");
    return [];
  }

  // Get IQ category
  const iqScore = iqResults?.result?.label ? (!isNaN(iqResults.result.label) ? Number(iqResults.result.label) : 0) : 0;
  const iqCategory = iqScore < 80 ? 1 : 
                    iqScore < 90 ? 81 : 
                    iqScore < 100 ? 91 : 
                    iqScore < 120 ? 101 : 121;

  // Get top 3 matching personality types
  const matchingPersonalityTypes = calculatePersonalityTypeMatch(personalityResults);

  // Map personality types to their IDs
  const personalityTypeToId = {};
  data["personalityTypeArray"].forEach((type, index) => {
    personalityTypeToId[type] = index + 1; // IDs start from 1
  });

  // Create a map to group recommendations by field
  const fieldMap = new Map();

  if (interestResults?.['16']) {
    const interests = Array.isArray(interestResults['16']) ? 
      interestResults['16'] : 
      Object.entries(interestResults['16'])
        .sort(([,a], [,b]) => b - a)
        .map(([subject]) => subject);

    // Process each career field in the CareerRecommendations array
    CareerRecommendations.forEach(careerField => {
      // Get the field name (e.g., "STEM (Science, Technology, Engineering, and Mathematics)")
      const fieldName = Object.keys(careerField)[0];
      const careerOptions = careerField[fieldName];

      // Extract the main category from the field name (e.g., "STEM" from "STEM (Science, Technology, Engineering, and Mathematics)")
      const mainCategory = fieldName.split(' ')[0].toLowerCase();
      
      // Check if any interest matches this field
      const matchingInterest = interests.find(interest => {
        // Get the first word of the interest
        const firstWord = interest.split(' ')[0].toLowerCase();
        
        // Simple matching based on first word
        if (mainCategory === 'stem' && 
            (firstWord === 'science,' || 
             firstWord === 'technology' || 
             firstWord === 'engineering' || 
             firstWord === 'mathematics')) {
          return true;
        }
        
        if (mainCategory === 'medical' && 
            (firstWord === 'medical,' || 
             firstWord === 'health' || 
             firstWord === 'medicine' || 
             firstWord === 'biology')) {
          return true;
        }
        
        if (mainCategory === 'business' && 
            (firstWord === 'business' || 
             firstWord === 'economics' || 
             firstWord === 'finance' || 
             firstWord === 'management')) {
          return true;
        }
        
        if (mainCategory === 'social' && 
            (firstWord === 'social' || 
             firstWord === 'psychology' || 
             firstWord === 'sociology' || 
             firstWord === 'anthropology')) {
          return true;
        }
        
        if (mainCategory === 'arts' && 
            (firstWord === 'arts' || 
             firstWord === 'humanities' || 
             firstWord === 'literature' || 
             firstWord === 'history')) {
          return true;
        }
        
        // Direct match with the main category
        return firstWord === mainCategory;
      });

      if (!matchingInterest) {
        return; // Skip this field if no matching interest
      }

      if (!careerOptions || !Array.isArray(careerOptions)) {
        return;
      }

      // Process each career option
      careerOptions.forEach(option => {
        // Get the personality ID for this option
        const personalityId = option.ID;
        
        // Check if this personality ID matches any of the user's personality types
        const matchingPersonality = matchingPersonalityTypes.find(type => {
          // Get the index of the personality type in the personalityTypeArray
          const personalityIndex = data["personalityTypeArray"].indexOf(type);
          // Add 1 to match the ID (since IDs start from 1)
          return personalityIndex + 1 === personalityId;
        });
        
        if (!matchingPersonality) {
          return; // Skip if personality doesn't match
        }
        
        // Check if IQ range matches
        const optionIQStart = option["IQ Range"][0];
        const optionIQEnd = option["IQ Range"][1];
        const userIQ = iqCategory;

        // Check if IQ falls within range
        if (userIQ >= optionIQStart && userIQ <= optionIQEnd) {
          // Get the personality type name from personalityTypeArray based on ID
          const personalityTypeName = data["personalityTypeArray"][personalityId - 1];

          // Create a unique key for this field
          const fieldKey = fieldName;
          
          // Initialize the field in the map if it doesn't exist
          if (!fieldMap.has(fieldKey)) {
            fieldMap.set(fieldKey, []);
          }
          
          // Add this recommendation to the field
          fieldMap.get(fieldKey).push({
            personalityType: personalityTypeName,
            fieldOfStudy: option["Recommended Field of Study"],
            courses: option["Relevant Courses"].split(", "),
            careers: option["Potential Career Pathways"].split(", "),
            colleges: option["Recommended Colleges"] ? option["Recommended Colleges"].split(", ") : []
          });
        }
      });
    });
  }

  // Convert the map to an array of field recommendations
  const recommendations = [];
  fieldMap.forEach((value, key) => {
    recommendations.push({
      fieldName: key,
      recommendations: value
    });
  });

  return recommendations;
};

export const CareerReport = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    institutionName: "",
    institutionType: "",
    otherInstitution: "",
    standard: "",
    course: "",
    year: "",
    branch: "",
    profilePhoto: null,
  });
  const [iqResults, setIqResults] = useState(null);
  const [personalityResults, setPersonalityResults] = useState(null);
  const [interestResults, setInterestResults] = useState(null);
  const { showAlert } = useAlert();
  const reportRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Fetch profile data
      const profileResponse = await getProfileHandler(setIsLoading, showAlert);
      
      if (profileResponse && profileResponse.success) {
        const userData = {
          ...profileResponse.data,
          ...profileResponse.data.User,
          name: profileResponse.data.User?.name || "",
          email: profileResponse.data.User?.email || "",
          phone: profileResponse.data.User?.phone || "",
          institutionName: profileResponse.data?.institutionName || "",
          institutionType: profileResponse.data?.institutionType || "",
          otherInstitution: profileResponse.data?.otherInstitution || "",
          standard: profileResponse.data?.standard || "",
          course: profileResponse.data?.course || "",
          year: profileResponse.data?.year || "",
          branch: profileResponse.data?.branch || "",
          profilePhoto: profileResponse.data?.profilePhoto || null,
        };
        setUserInfo(userData);
      } else {
        setError("Failed to load profile data. Please try again later.");
      }
      
      // Fetch test results
      const testResponse = await getTestResultsHandler(setIsLoading, showAlert);
      
      if (testResponse && testResponse.success && testResponse.data && testResponse.data.results) {
        setIqResults(testResponse.data.results?.iq?.detailedResult || null);
        setPersonalityResults(testResponse.data.results?.personality?.detailedResult || null);
        setInterestResults(testResponse.data?.interests || null);
      } else {
        setError("Failed to load test results. Please try again later.");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("An error occurred while loading your data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadReport = async () => {
    if (!reportRef.current) return;
    
    try {
      setIsGeneratingPDF(true);
      
      // Create a new PDF document with A4 size
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Get the report element
      const reportElement = reportRef.current;
      
      // Calculate the width and height for A4
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Use html2canvas to capture the report as an image
      const canvas = await html2canvas(reportElement, {
        scale: 1.5, // Higher scale for better quality
        useCORS: true, // Allow loading cross-origin images
        logging: false, // Disable logging
        allowTaint: true,
        backgroundColor: '#ffffff'
      });
      
      // Convert canvas to image
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      
      // Calculate the aspect ratio to maintain proportions
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      // Add the image to the PDF
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      
      // If the content is longer than one page, add new pages
      let heightLeft = imgHeight;
      let position = 0;
      let pageNumber = 1;
      
      // Add page numbers
      pdf.setFontSize(10);
      pdf.setTextColor(100);
      pdf.text(`Page ${pageNumber}`, pdfWidth - 20, pdfHeight - 10);
      
      // Add more pages if needed
      while (heightLeft > pdfHeight) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, -position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
        pageNumber++;
        
        // Add page number to new page
        pdf.setFontSize(10);
        pdf.setTextColor(100);
        pdf.text(`Page ${pageNumber}`, pdfWidth - 20, pdfHeight - 10);
      }
      
      // Add a title page
      pdf.insertPage(0);
      pdf.setFillColor(52, 152, 219);
      pdf.rect(0, 0, pdfWidth, pdfHeight, 'F');
      
      // Add title
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(28);
      pdf.text('Career Assessment Report', pdfWidth / 2, 80, { align: 'center' });
      
      // Add user info
      pdf.setFontSize(16);
      pdf.text(`Name: ${userInfo.name || 'Not specified'}`, pdfWidth / 2, 120, { align: 'center' });
      pdf.text(`Date: ${new Date().toLocaleDateString()}`, pdfWidth / 2, 140, { align: 'center' });
      
      // Add footer
      pdf.setFontSize(10);
      pdf.setTextColor(255, 255, 255);
      pdf.text('Generated by IIMWATPI Career Assessment System', pdfWidth / 2, pdfHeight - 20, { align: 'center' });
      
      // Save the PDF
      pdf.save(`Career_Report_${userInfo.name || 'User'}_${new Date().toISOString().split('T')[0]}.pdf`);
      
      showAlert('Report downloaded successfully!', 'success');
    } catch (error) {
      console.error('Error generating PDF:', error);
      
      // Try alternative approach if the first method fails
      try {
        // Create a new PDF document with A4 size
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
        
        // Add title page
        pdf.setFillColor(52, 152, 219);
        pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(), 'F');
        
        // Add title
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(28);
        pdf.text('Career Assessment Report', pdf.internal.pageSize.getWidth() / 2, 80, { align: 'center' });
        
        // Add user info
        pdf.setFontSize(16);
        pdf.text(`Name: ${userInfo.name || 'Not specified'}`, pdf.internal.pageSize.getWidth() / 2, 120, { align: 'center' });
        pdf.text(`Date: ${new Date().toLocaleDateString()}`, pdf.internal.pageSize.getWidth() / 2, 140, { align: 'center' });
        
        // Add footer
        pdf.setFontSize(10);
        pdf.text('Generated by IIMWATPI Career Assessment System', pdf.internal.pageSize.getWidth() / 2, pdf.internal.pageSize.getHeight() - 20, { align: 'center' });
        
        // Add a new page for the report content
        pdf.addPage();
        
        // Add text content instead of image
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(12);
        
        // Add profile information
        pdf.setFontSize(16);
        pdf.text('Profile Information', 20, 20);
        pdf.setFontSize(12);
        pdf.text(`Name: ${userInfo.name || 'Not specified'}`, 20, 30);
        pdf.text(`Email: ${userInfo.email || 'Not specified'}`, 20, 40);
        pdf.text(`Standard: ${userInfo.standard || 'Not specified'}`, 20, 50);
        pdf.text(`Course: ${userInfo.course || 'Not specified'}`, 20, 60);
        pdf.text(`Institution: ${userInfo.institutionName || 'Not specified'}`, 20, 70);
        
        // Add IQ results
        pdf.addPage();
        pdf.setFontSize(16);
        pdf.text('IQ Assessment', 20, 20);
        pdf.setFontSize(12);
        if (iqResults) {
          pdf.text(`IQ Score: ${iqResults.result.label}`, 20, 30);
        } else {
          pdf.text('No IQ assessment results available.', 20, 30);
        }
        
        // Add personality results
        pdf.addPage();
        pdf.setFontSize(16);
        pdf.text('Personality Assessment', 20, 20);
        pdf.setFontSize(12);
        if (personalityResults) {
          let yPos = 30;
          Object.entries(personalityResults.result).forEach(([trait, score]) => {
            pdf.text(`${trait.charAt(0).toUpperCase() + trait.slice(1)}: ${Math.round(score)}%`, 20, yPos);
            yPos += 10;
          });
        } else {
          pdf.text('No personality assessment results available.', 20, 30);
        }
        
        // Add interest results
        pdf.addPage();
        pdf.setFontSize(16);
        pdf.text('Interest Analysis', 20, 20);
        pdf.setFontSize(12);
        if (interestResults && interestResults["16"]) {
          let yPos = 30;
          const interests = Array.isArray(interestResults["16"])
            ? interestResults["16"].map((subject) => ({ subject }))
            : Object.entries(interestResults["16"]).map(([subject, score]) => ({ subject }));
          
          interests.forEach(({ subject }, index) => {
            pdf.text(`${index + 1}. ${subject}`, 20, yPos);
            yPos += 10;
          });
        } else {
          pdf.text('No interest assessment results available.', 20, 30);
        }
        
        // Add page numbers
        const pageCount = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
          pdf.setPage(i);
          pdf.setFontSize(10);
          pdf.setTextColor(100);
          pdf.text(`Page ${i} of ${pageCount}`, pdf.internal.pageSize.getWidth() - 20, pdf.internal.pageSize.getHeight() - 10);
        }
        
        // Save the PDF
        pdf.save(`Career_Report_${userInfo.name || 'User'}_${new Date().toISOString().split('T')[0]}.pdf`);
        
        showAlert('Report downloaded successfully!', 'success');
      } catch (fallbackError) {
        console.error('Error in fallback PDF generation:', fallbackError);
        showAlert('Failed to generate report. Please try again later.', 'danger');
      }
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3">Loading your career report...</p>
      </div>
    );
  }

  return (
    <Container className={styles.container}>
      <div className={styles.reportHeader}>
        <h1 className={styles.mainTitle}>Career Report</h1>
        <Button 
          variant="primary" 
          className={styles.downloadButton}
          onClick={handleDownloadReport}
          disabled={isGeneratingPDF}
        >
          {isGeneratingPDF ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              <span className="ms-2">Generating PDF...</span>
            </>
          ) : (
            <>
              <FaDownload className={styles.downloadIcon} />
              Download Report
            </>
          )}
        </Button>
      </div>

      {error && (
        <Alert variant="danger" className={styles.alert}>
          {error}
        </Alert>
      )}

      <div ref={reportRef} className={styles.reportContent}>
        {/* Profile Information Section */}
        <Card className={styles.profileCard}>
          <Card.Header className={styles.cardHeader}>
            <FaUserCircle className={styles.cardIcon} />
            <h2>Profile Information</h2>
          </Card.Header>
          <Card.Body className={styles.profileBody}>
            <div className={styles.profileInfo}>
              <div className={styles.profilePhotoContainer}>
                {userInfo.profilePhoto ? (
                  <img 
                    src={userInfo.profilePhoto} 
                    alt="Profile" 
                    className={styles.profilePhoto} 
                  />
                ) : (
                  <div className={styles.profileInitial}>
                    {userInfo.name.charAt(0) || "U"}
                  </div>
                )}
              </div>
              <div className={styles.profileDetails}>
                <div className={styles.profileDetail}>
                  <span className={styles.detailLabel}>Name:</span>
                  <span className={styles.detailValue}>{userInfo.name || "Not specified"}</span>
                </div>
                <div className={styles.profileDetail}>
                  <span className={styles.detailLabel}>Email:</span>
                  <span className={styles.detailValue}>{userInfo.email || "Not specified"}</span>
                </div>
                <div className={styles.profileDetail}>
                  <span className={styles.detailLabel}>Standard:</span>
                  <span className={styles.detailValue}>{userInfo.standard || "Not specified"}</span>
                </div>
                <div className={styles.profileDetail}>
                  <span className={styles.detailLabel}>Course:</span>
                  <span className={styles.detailValue}>{userInfo.course || "Not specified"}</span>
                </div>
                <div className={styles.profileDetail}>
                  <span className={styles.detailLabel}>Institution:</span>
                  <span className={styles.detailValue}>{userInfo.institutionName || "Not specified"}</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* Test Results Section */}
        <div className={styles.testResultsSection}>
          <h2 className={styles.sectionTitle}>Assessment Results</h2>
          
          <div className={styles.assessmentCards}>
            {/* IQ Assessment Card */}
            <Card className={styles.assessmentCard}>
              <Card.Header className={styles.cardHeader}>
                <FaBrain className={styles.cardIcon} />
                <h2>IQ Assessment</h2>
              </Card.Header>
              <Card.Body>
                {iqResults ? (
                  <div className={styles.resultContent}>
                    <div className={styles.iqResult}>
                      <div className={styles.iqScore}>{iqResults.result.label}</div>
                    </div>
                  </div>
                ) : (
                  <div className={styles.emptyContent}>
                    <p>No IQ assessment results available.</p>
                  </div>
                )}
              </Card.Body>
            </Card>

            {/* Personality Assessment Card */}
            <Card className={styles.assessmentCard}>
              <Card.Header className={styles.cardHeader}>
                <FaUserCircle className={styles.cardIcon} />
                <h2>Personality Assessment</h2>
              </Card.Header>
              <Card.Body>
                {personalityResults ? (
                  <div className={styles.resultContent}>
                    <div className={styles.personalityTraits}>
                      {Object.entries(personalityResults.result).map(
                        ([trait, score]) => (
                          <div key={trait} className={styles.traitContainer}>
                            <div className={styles.traitHeader}>
                              <span className={styles.traitTitle}>
                                {trait.charAt(0).toUpperCase() + trait.slice(1)}
                              </span>
                              <span
                                className={styles.traitScoreAnimated}
                                style={{
                                  "--score-width": `${score}%`,
                                  "--score-number": Math.round(score),
                                }}
                              />
                            </div>
                            <div className={styles.traitBar}>
                              <div
                                className={styles.traitProgress}
                                style={{ "--score-width": `${score}%` }}
                              />
                            </div>
                            <div className={styles.traitLabels}>
                              <span className={styles.lowLabel}>
                                {getPersonalityLabel(trait, 0)}
                              </span>
                              <span className={styles.highLabel}>
                                {getPersonalityLabel(trait, 100)}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  <div className={styles.emptyContent}>
                    <p>No personality assessment results available.</p>
                  </div>
                )}
              </Card.Body>
            </Card>

            {/* Interest Assessment Card */}
            <Card className={styles.assessmentCard}>
              <Card.Header className={styles.cardHeader}>
                <FaSearch className={styles.cardIcon} />
                <h2>Interest Analysis</h2>
              </Card.Header>
              <Card.Body>
                {interestResults && interestResults["16"] ? (
                  <div className={styles.resultContent}>
                    <div className={styles.interestAreas}>
                      {(Array.isArray(interestResults["16"])
                        ? interestResults["16"].map((subject) => ({ subject }))
                        : Object.entries(interestResults["16"]).map(
                            ([subject, score]) => ({ subject })
                          )
                      ).map(({ subject }, index) => (
                        <div key={subject} className={styles.interestItem}>
                          <span className={styles.interestNumber}>{index + 1}.</span>
                          <span className={styles.interestName}>{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className={styles.emptyContent}>
                    <p>No interest assessment results available.</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Career Recommendations Section */}
        {(iqResults && personalityResults && interestResults) && (
          <div className={styles.recommendationsSection}>
            <h2 className={styles.sectionTitle}>Recommended Career Paths</h2>
            
            {getCareerRecommendations(iqResults, personalityResults, interestResults).map((field, index) => (
              <div key={index} className={styles.fieldSection}>
                <div className={styles.fieldHeader}>
                  <h3 className={styles.fieldTitle}>{field.fieldName}</h3>
                </div>
                
                <div className={styles.tableContainer}>
                  <table className={styles.recommendationsTable}>
                    <thead>
                      <tr>
                        <th>Personality Type</th>
                        <th>Field of Study</th>
                        <th>Relevant Courses</th>
                        <th>Potential Career Pathways</th>
                        <th>Recommended Colleges</th>
                      </tr>
                    </thead>
                    <tbody>
                      {field.recommendations.map((recommendation, idx) => (
                        <tr key={idx} className={styles.tableRow}>
                          <td className={styles.personalityCell}>
                            <span className={styles.personalityTag}>{recommendation.personalityType}</span>
                          </td>
                          <td>{recommendation.fieldOfStudy}</td>
                          <td>
                            <ul className={styles.tableList}>
                              {recommendation.courses.map((course, courseIdx) => (
                                <li key={courseIdx}>{course}</li>
                              ))}
                            </ul>
                          </td>
                          <td>
                            <ul className={styles.tableList}>
                              {recommendation.careers.map((career, careerIdx) => (
                                <li key={careerIdx}>{career}</li>
                              ))}
                            </ul>
                          </td>
                          <td>
                            {recommendation.colleges && recommendation.colleges.length > 0 ? (
                              <ul className={styles.tableList}>
                                {recommendation.colleges.map((college, collegeIdx) => (
                                  <li key={collegeIdx}>{college}</li>
                                ))}
                              </ul>
                            ) : (
                              <span>Not specified</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary Tables Section */}
        <div className={styles.summaryTablesSection}>
          <h2 className={styles.sectionTitle}>Assessment Summaries</h2>
          
          {/* IQ Summary Table */}
          <div className={styles.summaryTableContainer}>
            <div className={styles.summaryTableHeader}>
              <h3 className={styles.summaryTableTitle}>IQ Assessment Summary</h3>
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.summaryTable}>
                <thead>
                  <tr>
                    <th>IQ Range</th>
                    <th>IQ Category</th>
                    <th>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={`${styles.summaryTableRow} ${iqResults?.result?.label >= 120 ? styles.highlighted : ''}`}>
                    <td className={styles.iqRangeCell}>120+</td>
                    <td className={styles.iqCategoryCell}>High IQ</td>
                    <td className={styles.meaningCell}>
                      <p className={styles.meaningHeading}>Highly Intelligent/Genius</p>
                      <p className={styles.meaningDescription}>Can learn anything easily</p>
                    </td>
                  </tr>
                  <tr className={`${styles.summaryTableRow} ${iqResults?.result?.label >= 100 && iqResults?.result?.label < 120 ? styles.highlighted : ''}`}>
                    <td className={styles.iqRangeCell}>100-120</td>
                    <td className={styles.iqCategoryCell}>Above Average IQ</td>
                    <td className={styles.meaningCell}>
                      <p className={styles.meaningHeading}>Superior Intelligence</p>
                      <p className={styles.meaningDescription}>Likely to excel academically</p>
                    </td>
                  </tr>
                  <tr className={`${styles.summaryTableRow} ${iqResults?.result?.label >= 90 && iqResults?.result?.label < 100 ? styles.highlighted : ''}`}>
                    <td className={styles.iqRangeCell}>90-100</td>
                    <td className={styles.iqCategoryCell}>Average IQ</td>
                    <td className={styles.meaningCell}>
                      <p className={styles.meaningHeading}>Normal/Average Intelligent</p>
                      <p className={styles.meaningDescription}>Can learn things and perform academically well with dedication and hard work</p>
                    </td>
                  </tr>
                  <tr className={`${styles.summaryTableRow} ${iqResults?.result?.label >= 80 && iqResults?.result?.label < 90 ? styles.highlighted : ''}`}>
                    <td className={styles.iqRangeCell}>80-90</td>
                    <td className={styles.iqCategoryCell}>Below Average IQ</td>
                    <td className={styles.meaningCell}>
                      <p className={styles.meaningHeading}>Dull Normal</p>
                      <p className={styles.meaningDescription}>Difficulty in learning complex and new things: Repeated</p>
                    </td>
                  </tr>
                  <tr className={`${styles.summaryTableRow} ${iqResults?.result?.label >= 70 && iqResults?.result?.label < 80 ? styles.highlighted : ''}`}>
                    <td className={styles.iqRangeCell}>70-80</td>
                    <td className={styles.iqCategoryCell}>Low IQ</td>
                    <td className={styles.meaningCell}>
                      <p className={styles.meaningHeading}>Borderline Delayed</p>
                      <p className={styles.meaningDescription}>Can study and learn to some extent if repeated multiple times but not complex ideas/concepts.</p>
                    </td>
                  </tr>
                  <tr className={`${styles.summaryTableRow} ${iqResults?.result?.label < 70 ? styles.highlighted : ''}`}>
                    <td className={styles.iqRangeCell}>Below 70</td>
                    <td className={styles.iqCategoryCell}>Very Low IQ</td>
                    <td className={styles.meaningCell}>
                      <p className={styles.meaningHeading}>Delayed</p>
                      <p className={styles.meaningDescription}>Should be given special attention</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.summaryNote}>
                *IQ measures the learning speed and sharpness of the mind. Higher IQ only reflects better at understanding and making sense of things while success depends on many other parameters.
              </div>
            </div>
          </div>
          
          {/* Personality Summary Table */}
          <div className={styles.summaryTableContainer}>
            <div className={styles.summaryTableHeader}>
              <h3 className={styles.summaryTableTitle}>Personality Assessment Summary</h3>
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.summaryTable}>
                <thead>
                  <tr>
                    <th>Personality Trait</th>
                    <th>High (score 60 or more)</th>
                    <th>Low (Score 30 or less)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.summaryTableRow}>
                    <td className={styles.personalityTraitCell}>Extraversion</td>
                    <td className={styles.personalityCategoryCell}>
                      <div className={`${styles.personalityCategoryHeader} ${personalityResults?.result?.extraversion >= 60 ? styles.high : ''}`}>
                        High Characteristics:
                      </div>
                      <ul className={styles.personalityDetailsList}>
                        <li>Feel energized around people</li>
                        <li>Wide social circle and friends</li>
                        <li>Say before thinking</li>
                      </ul>
                    </td>
                    <td className={styles.personalityDetailsCell}>
                      <div className={`${styles.personalityCategoryHeader} ${personalityResults?.result?.extraversion <= 30 ? styles.low : ''}`}>
                        Low Characteristics:
                      </div>
                      <ul className={styles.personalityDetailsList}>
                        <li>Avoid attention and prefer solitude</li>
                        <li>Find it difficult to start a conversation</li>
                        <li>Perform best when alone</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className={styles.summaryTableRow}>
                    <td className={styles.personalityTraitCell}>Agreeableness</td>
                    <td className={styles.personalityCategoryCell}>
                      <div className={`${styles.personalityCategoryHeader} ${personalityResults?.result?.agreeableness >= 60 ? styles.high : ''}`}>
                        High Characteristics:
                      </div>
                      <ul className={styles.personalityDetailsList}>
                        <li>Highly empathetic</li>
                        <li>Enjoys helping others</li>
                        <li>Cares for people around</li>
                      </ul>
                    </td>
                    <td className={styles.personalityDetailsCell}>
                      <div className={`${styles.personalityCategoryHeader} ${personalityResults?.result?.agreeableness <= 30 ? styles.low : ''}`}>
                        Low Characteristics:
                      </div>
                      <ul className={styles.personalityDetailsList}>
                        <li>Self-centered and looks for self-interest</li>
                        <li>Insult and belittle others</li>
                        <li>Sometimes manipulate others for self-interest</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className={styles.summaryTableRow}>
                    <td className={styles.personalityTraitCell}>Conscientiousness</td>
                    <td className={styles.personalityCategoryCell}>
                      <div className={`${styles.personalityCategoryHeader} ${personalityResults?.result?.conscientiousness >= 60 ? styles.high : ''}`}>
                        High Characteristics:
                      </div>
                      <ul className={styles.personalityDetailsList}>
                        <li>Like to be prepared beforehand</li>
                        <li>Enjoys following schedules</li>
                        <li>Pays attention to details</li>
                      </ul>
                    </td>
                    <td className={styles.personalityDetailsCell}>
                      <div className={`${styles.personalityCategoryHeader} ${personalityResults?.result?.conscientiousness <= 30 ? styles.low : ''}`}>
                        Low Characteristics:
                      </div>
                      <ul className={styles.personalityDetailsList}>
                        <li>Procrastinates and avoids tasks until the last moment</li>
                        <li>Dislike structure and schedules</li>
                        <li>Usually makes mess and fails to complete tasks on time</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className={styles.summaryTableRow}>
                    <td className={styles.personalityTraitCell}>Neuroticism</td>
                    <td className={styles.personalityCategoryCell}>
                      <div className={`${styles.personalityCategoryHeader} ${personalityResults?.result?.neuroticism >= 60 ? styles.high : ''}`}>
                        High Characteristics:
                      </div>
                      <ul className={styles.personalityDetailsList}>
                        <li>Mood swings and stress</li>
                        <li>Get upset easily</li>
                        <li>Struggles to bounce back after failures</li>
                      </ul>
                    </td>
                    <td className={styles.personalityDetailsCell}>
                      <div className={`${styles.personalityCategoryHeader} ${personalityResults?.result?.neuroticism <= 30 ? styles.low : ''}`}>
                        Low Characteristics:
                      </div>
                      <ul className={styles.personalityDetailsList}>
                        <li>Emotionally stable</li>
                        <li>Deals with stress and usually relaxed</li>
                        <li>Doesn't worry much</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className={styles.summaryTableRow}>
                    <td className={styles.personalityTraitCell}>Openness</td>
                    <td className={styles.personalityCategoryCell}>
                      <div className={`${styles.personalityCategoryHeader} ${personalityResults?.result?.openness >= 60 ? styles.high : ''}`}>
                        High Characteristics:
                      </div>
                      <ul className={styles.personalityDetailsList}>
                        <li>Gets involved in new things</li>
                        <li>Creative</li>
                        <li>Abstract thinking</li>
                      </ul>
                    </td>
                    <td className={styles.personalityDetailsCell}>
                      <div className={`${styles.personalityCategoryHeader} ${personalityResults?.result?.openness <= 30 ? styles.low : ''}`}>
                        Low Characteristics:
                      </div>
                      <ul className={styles.personalityDetailsList}>
                        <li>Dislike changes</li>
                        <li>Resist New things</li>
                        <li>Lack imagination</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.summaryNote}>
                *Personality traits influence career satisfaction and performance. Understanding your personality profile helps in choosing environments and roles that align with your natural tendencies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
