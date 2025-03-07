import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import './CareerRecommendations.css';

export const CareerRecommendations = () => {
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Example data structure - replace with actual API call
  const getRecommendations = () => {
    const schoolRecommendations = {
      "8-10": [
        {
          title: "Science Stream",
          description: "Focus on Physics, Chemistry, Biology/Math",
          careers: ["Doctor", "Engineer", "Scientist"],
          skills: ["Analytical thinking", "Problem solving", "Research"]
        },
        {
          title: "Commerce Stream",
          description: "Focus on Business Studies, Economics",
          careers: ["Accountant", "Business Manager", "Entrepreneur"],
          skills: ["Financial analysis", "Business acumen", "Leadership"]
        }
      ],
      "11-12": [
        {
          title: "Pre-Medical",
          description: "Preparation for medical entrance exams",
          careers: ["Doctor", "Dentist", "Veterinarian"],
          skills: ["Biology", "Chemistry", "Patient care"]
        },
        {
          title: "Engineering",
          description: "Preparation for engineering entrance exams",
          careers: ["Software Engineer", "Mechanical Engineer", "Civil Engineer"],
          skills: ["Mathematics", "Physics", "Problem-solving"]
        }
      ]
    };

    const collegeRecommendations = {
      "Engineering": [
        {
          title: "Computer Science",
          description: "Focus on programming and software development",
          careers: ["Software Developer", "Data Scientist", "AI Engineer"],
          skills: ["Programming", "Algorithm design", "Data structures"]
        },
        {
          title: "Mechanical Engineering",
          description: "Focus on machine design and manufacturing",
          careers: ["Mechanical Designer", "Production Engineer", "Robotics Engineer"],
          skills: ["CAD/CAM", "Thermodynamics", "Machine design"]
        }
      ],
      "Medical": [
        {
          title: "MBBS",
          description: "Focus on medical sciences and patient care",
          careers: ["General Physician", "Surgeon", "Specialist"],
          skills: ["Clinical skills", "Patient care", "Medical knowledge"]
        }
      ]
    };

    return { school: schoolRecommendations, college: collegeRecommendations };
  };

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setRecommendations(getRecommendations());
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="recommendations-loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const renderCareerCard = (career) => (
    <Card className="career-card mb-4">
      <Card.Body>
        <Card.Title className="career-title">{career.title}</Card.Title>
        <Card.Text className="career-description">
          {career.description}
        </Card.Text>
        <div className="career-details">
          <div className="career-section">
            <h5>Potential Careers</h5>
            <ul>
              {career.careers.map((c, index) => (
                <li key={index}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="career-section">
            <h5>Required Skills</h5>
            <ul>
              {career.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="career-recommendations-container">
      <Row className="mb-4">
        <Col>
          <h2 className="recommendations-title">Career Recommendations</h2>
        </Col>
      </Row>

      {recommendations && (
        <>
          {/* School Recommendations */}
          <section className="recommendation-section">
            <h3 className="section-title">School Level Recommendations</h3>
            {Object.entries(recommendations.school).map(([grade, careers]) => (
              <div key={grade} className="grade-section mb-4">
                <h4 className="grade-title">Class {grade}</h4>
                <Row>
                  {careers.map((career, index) => (
                    <Col key={index} md={6}>
                      {renderCareerCard(career)}
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </section>

          {/* College Recommendations */}
          <section className="recommendation-section">
            <h3 className="section-title">College Level Recommendations</h3>
            {Object.entries(recommendations.college).map(([stream, careers]) => (
              <div key={stream} className="stream-section mb-4">
                <h4 className="stream-title">{stream}</h4>
                <Row>
                  {careers.map((career, index) => (
                    <Col key={index} md={6}>
                      {renderCareerCard(career)}
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </section>
        </>
      )}
    </Container>
  );
};