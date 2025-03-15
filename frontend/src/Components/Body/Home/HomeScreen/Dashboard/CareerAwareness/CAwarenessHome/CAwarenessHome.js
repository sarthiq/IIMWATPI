import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook, faUserGraduate, faBriefcase, faUniversity } from '@fortawesome/free-solid-svg-icons';
import './CAwarenessHome.css';

export const CAwarenessHome = () => {
  const careerStages = [
    {
      title: '9th Grade',
      path: './base-ui-model',
      icon: faBook,
      color: '#4CAF50'
    },
    {
      title: '11th Grade',
      path: './base-ui-model',
      icon: faGraduationCap,
      color: '#2196F3'
    },
    {
      title: 'Graduation',
      path: './base-ui-model',
      icon: faUserGraduate,
      color: '#FF9800'
    },
    {
      title: 'Post Graduation',
        path: './base-ui-model',
      icon: faBriefcase,
      color: '#9C27B0'
    },
    {
      title: 'Advanced Studies',
      path: './base-ui-model',
      icon: faUniversity,
      color: '#F44336'
    }
  ];

  return (
    <Container className="career-container">
      <h1 className="career-title">Career Awareness</h1>
      <Row className="justify-content-center">
        {careerStages.map((stage, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="career-card">
              <Card.Body>
                <div className="icon-circle" style={{ backgroundColor: stage.color }}>
                  <FontAwesomeIcon icon={stage.icon} className="stage-icon" />
                </div>
                <Card.Title className="mt-3">{stage.title}</Card.Title>
                <Link to={stage.path} className="career-link">
                  Explore <FontAwesomeIcon icon="arrow-right" />
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
