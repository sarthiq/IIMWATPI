import React from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import './TestHome.css';
import { Link } from 'react-router-dom';

export const TestHome = () => {
    return (
        <Container className="graduation-dashboard py-4">
            <Alert variant="info" className="graduation-intro-alert">
                <h4 className="text-center mb-3">Higher Education Recommendations</h4>
                <p>Based on your interest assessment, here are recommended degree programs and specializations for your academic journey.</p>
            </Alert>

            <div className="degree-sections">
                <h5 className="section-title">Popular Degree Programs</h5>
                <Row className="g-4">
                    {degreePrograms.map((program, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card className="degree-card h-100">
                                <Card.Body>
                                    <Card.Title className="degree-title">{program.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{program.duration}</Card.Subtitle>
                                    {program.specializations && (
                                        <>
                                            <p className="specialization-header">Popular Specializations:</p>
                                            <ul className="specialization-list">
                                                {program.specializations.map((spec, idx) => (
                                                    <li key={idx}>{spec}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <h5 className="section-title mt-5">Additional Career Paths</h5>
                <Row className="g-4">
                    {additionalPaths.map((path, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card className="degree-card alternative-card h-100">
                                <Card.Body>
                                    <Card.Title className="degree-title">{path.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{path.duration}</Card.Subtitle>
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
                        Start Career Interest Assessment
                    </Link>
                </div>
            </div>
        </Container>
    );
};

const degreePrograms = [
    {
        name: "B.Tech / B.E.",
        duration: "4 Years",
        specializations: [
            "Computer Science & Engineering",
            "Electronics & Communication",
            "Mechanical Engineering",
            "Civil Engineering",
            "Artificial Intelligence & ML"
        ]
    },
    {
        name: "BBA / MBA",
        duration: "3-4 Years / 2 Years",
        specializations: [
            "Marketing",
            "Finance",
            "Human Resources",
            "Operations Management",
            "International Business"
        ]
    },
    {
        name: "BSc / MSc",
        duration: "3 Years / 2 Years",
        specializations: [
            "Computer Science",
            "Mathematics",
            "Physics",
            "Chemistry",
            "Data Science"
        ]
    },
    {
        name: "BA / MA",
        duration: "3 Years / 2 Years",
        specializations: [
            "Economics",
            "Psychology",
            "English Literature",
            "Political Science",
            "Sociology"
        ]
    },
    {
        name: "BCA / MCA",
        duration: "3 Years / 2 Years",
        specializations: [
            "Software Development",
            "Web Technologies",
            "Mobile App Development",
            "Cloud Computing",
            "Cybersecurity"
        ]
    },
    {
        name: "Medical Studies",
        duration: "5.5 Years (MBBS)",
        specializations: [
            "General Medicine",
            "Surgery",
            "Pediatrics",
            "Orthopedics",
            "Cardiology"
        ]
    }
];

const additionalPaths = [
    {
        name: "Diploma Courses",
        duration: "1-3 Years"
    },
    {
        name: "Professional Certifications",
        duration: "3-12 Months"
    },
    {
        name: "Vocational Training",
        duration: "6-12 Months"
    },
    {
        name: "Research Programs",
        duration: "2-5 Years"
    },
    {
        name: "Integrated Programs",
        duration: "5 Years"
    },
    {
        name: "Distance Learning",
        duration: "Flexible"
    }
];