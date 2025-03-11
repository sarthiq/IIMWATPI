import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import './CareerRecommendations.css';

export const CareerRecommendations = () => {
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userEducation, setUserEducation] = useState({
    institutionType: 'School', // This will come from user profile
    standard: '10',           // This will come from user profile
  });

  // Dummy data structure based on institution type and class
  const careerData = {
    School: {
      '8': {
        streams: ['Science', 'Commerce', 'Arts'],
        nextSteps: 'Focus on building strong fundamentals in core subjects',
        careers: [
          {
            title: "Future Science Path",
            description: "Prepare for a career in Science and Technology",
            careers: ["Doctor", "Engineer", "Research Scientist"],
            skills: ["Mathematics", "Science", "Critical Thinking"]
          },
          {
            title: "Future Commerce Path",
            description: "Prepare for a career in Business and Finance",
            careers: ["Chartered Accountant", "Business Manager", "Banker"],
            skills: ["Mathematics", "Economics", "Business Studies"]
          }
        ]
      },
      '10': {
        streams: ['Science (PCM/PCB)', 'Commerce', 'Humanities'],
        nextSteps: 'Choose stream based on interests and aptitude',
        careers: [
          {
            title: "Medical Sciences",
            description: "Preparation for medical field",
            careers: ["Doctor", "Dentist", "Pharmacist"],
            skills: ["Biology", "Chemistry", "Physics"]
          },
          {
            title: "Engineering",
            description: "Preparation for engineering field",
            careers: ["Software Engineer", "Mechanical Engineer", "Civil Engineer"],
            skills: ["Mathematics", "Physics", "Computer Science"]
          }
        ]
      }
    },
    College: {
      'Engineering': {
        streams: ['Computer Science', 'Mechanical', 'Civil'],
        nextSteps: 'Specialize in your chosen field',
        careers: [
          {
            title: "Technology Sector",
            description: "Career in IT and Software",
            careers: ["Software Developer", "Data Scientist", "System Architect"],
            skills: ["Programming", "Data Structures", "Algorithms"]
          },
          {
            title: "Core Engineering",
            description: "Career in Traditional Engineering",
            careers: ["Design Engineer", "Project Manager", "Consultant"],
            skills: ["Technical Design", "Project Management", "Analysis"]
          }
        ]
      }
    },
    University: {
      'Masters': {
        streams: ['MTech', 'MBA', 'MSc'],
        nextSteps: 'Specialize and focus on research/industry expertise',
        careers: [
          {
            title: "Advanced Technology",
            description: "High-level technical positions",
            careers: ["Senior Developer", "Tech Lead", "Research Scientist"],
            skills: ["Advanced Programming", "Research", "Leadership"]
          }
        ]
      }
    }
  };

  useEffect(() => {

    setUserEducation({
      institutionType: 'School',
      standard: '10',
    });
    setIsLoading(true);
    // Simulate API call to get user education details and recommendations
    setTimeout(() => {
      const userRecommendations = careerData[userEducation.institutionType][userEducation.standard];
      setRecommendations(userRecommendations);
      setIsLoading(false);
    }, 1000);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

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
          <p className="user-education-info">
            Based on your current education: {userEducation.institutionType} - {userEducation.standard}
          </p>
        </Col>
      </Row>

      {recommendations && (
        <>
          <section className="current-path-section mb-4">
            <h3 className="section-title">Your Current Path</h3>
            <Card className="path-card">
              <Card.Body>
                <h4>Available Streams</h4>
                <ul className="streams-list">
                  {recommendations.streams.map((stream, index) => (
                    <li key={index}>{stream}</li>
                  ))}
                </ul>
                <h4>Next Steps</h4>
                <p>{recommendations.nextSteps}</p>
              </Card.Body>
            </Card>
          </section>

          <section className="career-options-section">
            <h3 className="section-title">Recommended Career Paths</h3>
            <Row>
              {recommendations.careers.map((career, index) => (
                <Col key={index} md={6}>
                  {renderCareerCard(career)}
                </Col>
              ))}
            </Row>
          </section>
        </>
      )}
    </Container>
  );
};