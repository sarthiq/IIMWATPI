import React from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import './TestHome.css';
import { Link } from 'react-router-dom';

export const TestHome = () => {
    
    return (
        <Container className="tenth-dashboard py-4">
            <Alert variant="info" className="tenth-intro-alert">
                <h4 className="text-center mb-3">Class 10 Subject Recommendations</h4>
                <p>Based on your interest test results, here are the recommended subjects and their importance for your academic journey.</p>
            </Alert>

            <div className="subject-sections">
                <h5 className="section-title">Core Subjects</h5>
                <Row className="g-4">
                    {coreSubjects.map((subject, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card className="subject-card h-100">
                                <Card.Body>
                                    <Card.Title className="subject-title">{subject.name}</Card.Title>
                                    {subject.topics && (
                                        <ul className="subject-topics">
                                            {subject.topics.map((topic, idx) => (
                                                <li key={idx}>{topic}</li>
                                            ))}
                                        </ul>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <h5 className="section-title mt-5">Optional Subjects</h5>
                <Row className="g-4">
                    {optionalSubjects.map((subject, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card className="subject-card optional-card h-100">
                                <Card.Body>
                                    <Card.Title className="subject-title">{subject}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-5">
                    <Link 
                        to="./test-question" 
                        className="btn btn-primary btn-lg"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Start Interest Assessment Test
                    </Link>
                </div>
            </div>
        </Container>
    );
};

const coreSubjects = [
    {
        name: "English",
        topics: ["Language", "Literature"]
    },
    {
        name: "Hindi/Regional Language",
        topics: ["Based on state/board"]
    },
    {
        name: "Mathematics",
        topics: ["Standard Math", "Basic Math"]
    },
    {
        name: "Science",
        topics: ["Physics", "Chemistry", "Biology"]
    },
    {
        name: "Social Science",
        topics: ["History", "Geography", "Political Science", "Economics"]
    },
    {
        name: "Computer Science/IT",
        topics: ["Mandatory in some schools"]
    },
    {
        name: "Environmental Studies",
        topics: ["Available in certain boards"]
    },
    {
        name: "Health & Physical Education",
        topics: ["Physical Fitness", "Health Education"]
    }
];

const optionalSubjects = [
    "Sanskrit/Foreign Languages",
    "Artificial Intelligence",
    "Robotics",
    "Home Science",
    "Fine Arts/Performing Arts",
    "Vedic Mathematics"
];