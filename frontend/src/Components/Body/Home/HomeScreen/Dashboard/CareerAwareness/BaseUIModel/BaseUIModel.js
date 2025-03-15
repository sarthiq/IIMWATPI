import React from 'react';
import './BaseUIModel.css';
import { FaGraduationCap, FaClipboardList, FaRoute, FaUniversity, FaArrowRight } from 'react-icons/fa';
import { BsArrowDownRight } from 'react-icons/bs';
import { MdSubject } from 'react-icons/md';
import { Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BaseUIModel = () => {
    // Dummy data for graduation level
    const modelData = {
        streams: {
            title: "Streams & Subjects",
            content: [
                {
                    stream: "Bachelor of Technology (B.Tech)",
                    subjects: [
                        "Computer Science & Engineering",
                        "Electronics & Communication",
                        "Mechanical Engineering",
                        "Civil Engineering"
                    ]
                },
                {
                    stream: "Bachelor of Science (B.Sc)",
                    subjects: [
                        "Physics",
                        "Chemistry",
                        "Mathematics",
                        "Computer Science"
                    ]
                }
            ]
        },
        eligibility: {
            title: "Eligibility Criteria",
            criteria: [
                "Minimum 60% in 12th standard (PCM)",
                "Valid JEE Main/Advanced score for B.Tech",
                "Cleared entrance examination",
                "Age limit: 17-25 years"
            ]
        },
        careerPathways: {
            title: "Career Pathways & Opportunities",
            paths: [
                {
                    role: "Software Developer",
                    opportunities: [
                        "Full Stack Development",
                        "Mobile App Development",
                        "Cloud Computing",
                        "AI/ML Engineering"
                    ]
                },
                {
                    role: "Data Scientist",
                    opportunities: [
                        "Data Analysis",
                        "Business Intelligence",
                        "Machine Learning",
                        "Research"
                    ]
                }
            ]
        },
        topColleges: {
            title: "Top Colleges",
            institutions: [
                {
                    name: "Indian Institute of Technology (IIT)",
                    location: "Multiple Locations",
                    rating: "5.0"
                },
                {
                    name: "National Institute of Technology (NIT)",
                    location: "Multiple Locations",
                    rating: "4.8"
                },
                {
                    name: "Birla Institute of Technology",
                    location: "Pilani",
                    rating: "4.7"
                }
            ]
        }
    };

    return (
        <Container fluid className="base-ui-model">
            {/* Streams and Subjects Section */}
            <Row className="journey-section justify-content-center">
                <Col lg={8} className="section-wrapper">
                    <Card className="section streams-subjects">
                        <Card.Body>
                            <Card.Title className="section-title">
                                <MdSubject className="section-icon" />
                                {modelData.streams.title}
                            </Card.Title>
                            <div className="section-content">
                                {modelData.streams.content.map((stream, index) => (
                                    <div key={index} className="stream-card">
                                        <h3>{stream.stream}</h3>
                                        <ul>
                                            {stream.subjects.map((subject, idx) => (
                                                <li key={idx}>{subject}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Eligibility Criteria Section */}
            <Row className="journey-section justify-content-center">
                <Col lg={8} className="section-wrapper">
                    <Card className="section eligibility-criteria">
                        <Card.Body>
                            <Card.Title className="section-title">
                                <FaClipboardList className="section-icon" />
                                {modelData.eligibility.title}
                            </Card.Title>
                            <div className="section-content">
                                <ul>
                                    {modelData.eligibility.criteria.map((criterion, index) => (
                                        <li key={index}>{criterion}</li>
                                    ))}
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Career Pathways Section */}
            <Row className="journey-section justify-content-center">
                <Col lg={8} className="section-wrapper">
                    <Card className="section career-pathways">
                        <Card.Body>
                            <Card.Title className="section-title">
                                <FaRoute className="section-icon" />
                                {modelData.careerPathways.title}
                            </Card.Title>
                            <div className="section-content">
                                {modelData.careerPathways.paths.map((path, index) => (
                                    <div key={index} className="pathway-card">
                                        <h3>
                                            <FaArrowRight className="path-arrow" />
                                            {path.role}
                                        </h3>
                                        <ul>
                                            {path.opportunities.map((opportunity, idx) => (
                                                <li key={idx}>{opportunity}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Top Colleges Section */}
            <Row className="journey-section justify-content-center">
                <Col lg={8} className="section-wrapper">
                    <Card className="section top-colleges">
                        <Card.Body>
                            <Card.Title className="section-title">
                                <FaUniversity className="section-icon" />
                                {modelData.topColleges.title}
                            </Card.Title>
                            <div className="section-content">
                                {modelData.topColleges.institutions.map((college, index) => (
                                    <Card key={index} className="college-card">
                                        <Card.Body>
                                            <Card.Title>{college.name}</Card.Title>
                                            <Card.Text>
                                                <p>Location: {college.location}</p>
                                                <p>Rating: {college.rating}</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BaseUIModel;
