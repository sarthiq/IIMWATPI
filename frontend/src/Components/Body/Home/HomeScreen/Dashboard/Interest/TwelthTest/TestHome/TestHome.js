import React from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import './TestHome.css';
import { Link } from 'react-router-dom';

export const TestHome = () => {
    return (
        <Container className="twelfth-dashboard py-4">
            <Alert variant="info" className="twelfth-intro-alert">
                <h4 className="text-center mb-3">Class 12 Stream Recommendations</h4>
                <p>Based on your interest test results, here are the recommended streams and subjects for your academic journey. Under NEP 2020, you can mix subjects across streams based on your interests.</p>
            </Alert>

            <div className="subject-sections">
                {streams.map((stream, streamIndex) => (
                    <div key={streamIndex}>
                        <h5 className="section-title mt-5">{stream.name}</h5>
                        <Row className="g-4">
                            {stream.coreSubjects.map((subject, index) => (
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

                        <h6 className="section-subtitle mt-4">Optional Subjects</h6>
                        <Row className="g-4">
                            {stream.optionalSubjects.map((subject, index) => (
                                <Col key={index} md={6} lg={4}>
                                    <Card className="subject-card optional-card h-100">
                                        <Card.Body>
                                            <Card.Title className="subject-title">{subject}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}

                <div className="text-center mt-5">
                    <Link 
                        to="./test-question" 
                        className="btn btn-primary btn-lg"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Start Stream Assessment Test
                    </Link>
                </div>
            </div>
        </Container>
    );
};

const streams = [
    {
        name: "Science Stream",
        coreSubjects: [
            {
                name: "Physics",
                topics: ["Mechanics", "Electromagnetism", "Modern Physics"]
            },
            {
                name: "Chemistry",
                topics: ["Organic", "Inorganic", "Physical Chemistry"]
            },
            {
                name: "Mathematics/Biology",
                topics: ["PCM or PCB combination"]
            },
            {
                name: "English",
                topics: ["Language", "Literature"]
            }
        ],
        optionalSubjects: [
            "Computer Science",
            "Informatics Practices",
            "Biotechnology",
            "Psychology",
            "Economics",
            "Engineering Graphics"
        ]
    },
    {
        name: "Commerce Stream",
        coreSubjects: [
            {
                name: "Accountancy",
                topics: ["Financial Accounting", "Cost Accounting"]
            },
            {
                name: "Business Studies",
                topics: ["Management", "Business Environment"]
            },
            {
                name: "Economics",
                topics: ["Micro Economics", "Macro Economics"]
            },
            {
                name: "Mathematics/Applied Mathematics",
                topics: ["Statistics", "Calculus", "Applied Mathematics"]
            }
        ],
        optionalSubjects: [
            "Entrepreneurship",
            "Information Technology",
            "Legal Studies",
            "Physical Education",
            "Psychology"
        ]
    },
    {
        name: "Arts/Humanities Stream",
        coreSubjects: [
            {
                name: "History",
                topics: ["Ancient", "Medieval", "Modern"]
            },
            {
                name: "Political Science",
                topics: ["Indian Politics", "International Relations"]
            },
            {
                name: "Sociology/Psychology",
                topics: ["Society", "Human Behavior"]
            },
            {
                name: "Geography",
                topics: ["Physical", "Human", "Economic Geography"]
            }
        ],
        optionalSubjects: [
            "Fine Arts",
            "Media Studies",
            "Legal Studies",
            "Fashion Studies",
            "Mathematics",
            "Home Science"
        ]
    },
    {
        name: "Vocational Stream",
        coreSubjects: [
            {
                name: "Digital Skills",
                topics: ["Web Development", "Digital Marketing"]
            },
            {
                name: "Business Skills",
                topics: ["Retail Management", "Tourism & Hospitality"]
            },
            {
                name: "Technical Skills",
                topics: ["AI & ML", "Healthcare", "Agriculture"]
            }
        ],
        optionalSubjects: [
            "Entrepreneurship",
            "IT Skills",
            "Healthcare",
            "Agriculture",
            "Tourism"
        ]
    }
];