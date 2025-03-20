import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Nav } from 'react-bootstrap';
import { examData } from './examData';
import './IntermediateExam.css'; // Assuming you have a CSS file for custom styles

export const IntermediateExam = () => {
    const [activeTab, setActiveTab] = useState("national"); // 'national', 'state', or 'scholarship'

    const renderExamItem = (name, description) => (
        <ListGroup.Item>
            <span className="exam-name">{name}</span>
            {description && <span className="exam-description">– {description}</span>}
        </ListGroup.Item>
    );

    const renderRegionHeader = (title) => (
        <ListGroup.Item className="region-header">{title}</ListGroup.Item>
    );

    return (
        <Container className="intermediate-exam-container">
            <h1 className="intermediate-exam-title">Intermediate Entrance Exams</h1>
            
            <Nav variant="tabs" className="mb-4">
                <Nav.Item>
                    <Nav.Link
                        active={activeTab === "national"}
                        onClick={() => setActiveTab("national")}
                    >
                        National Level Exams
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        active={activeTab === "state"}
                        onClick={() => setActiveTab("state")}
                    >
                        State Level Exams
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        active={activeTab === "scholarship"}
                        onClick={() => setActiveTab("scholarship")}
                    >
                        Scholarship Exams
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            {activeTab === "national" && (
                <Row>
                    <Col lg={6}>
                        <h2 className="exam-section-title">National-Level Entrance Exams</h2>
                        <ListGroup className="exam-list">
                            {examData.national.mainExams.map((exam, index) => 
                                renderExamItem(exam.name, exam.description)
                            )}
                        </ListGroup>
                    </Col>
                    <Col lg={6}>
                        <h2 className="exam-section-title">Additional Resources</h2>
                        <ListGroup className="exam-list">
                            {examData.national.resources.map((resource, index) => (
                                <ListGroup.Item key={index}>
                                    <span className="exam-name">{resource.name}:</span>
                                    <a href={resource.link} className="resource-link"> {resource.linkText}</a>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            )}

            {activeTab === "state" && (
                <Row>
                    <Col>
                        <h2 className="exam-section-title">State-Level & Other Residential School Entrance Exams</h2>
                        <ListGroup className="exam-list">
                            {renderRegionHeader("State Board Residential Schools Entrance Exams")}
                            {examData.state.residentialSchools.map((exam, index) => 
                                renderExamItem(exam.name, exam.description)
                            )}
                        </ListGroup>
                    </Col>
                </Row>
            )}

            {activeTab === "scholarship" && (
                <Row>
                    <Col>
                        <h2 className="exam-section-title">State-Sponsored Scholarship & Talent Search Exams</h2>
                        
                        <div className="scholarship-section">
                            <h3 className="scholarship-category-title">National Talent Search Exams</h3>
                            <ListGroup className="exam-list">
                                {examData.scholarship.nationalTalentSearch.map((exam, index) => 
                                    renderExamItem(exam.name, exam.description)
                                )}
                            </ListGroup>
                        </div>

                        <div className="scholarship-section">
                            <h3 className="scholarship-category-title">State-Specific Talent Search & Scholarship Exams</h3>
                            <ListGroup className="exam-list">
                                <ListGroup.Item className="region-header main-region">North India</ListGroup.Item>
                                {examData.scholarship.stateWise.northIndia.map((exam, index) => 
                                    renderExamItem(exam.name, exam.description)
                                )}

                                <ListGroup.Item className="region-header main-region">South India</ListGroup.Item>
                                {examData.scholarship.stateWise.southIndia.map((exam, index) => 
                                    renderExamItem(exam.name, exam.description)
                                )}

                                <ListGroup.Item className="region-header main-region">East & Northeast India</ListGroup.Item>
                                {examData.scholarship.stateWise.eastNortheast.map((exam, index) => 
                                    renderExamItem(exam.name, exam.description)
                                )}

                                <ListGroup.Item className="region-header main-region">West & Central India</ListGroup.Item>
                                {examData.scholarship.stateWise.westCentral.map((exam, index) => 
                                    renderExamItem(exam.name, exam.description)
                                )}
                            </ListGroup>
                        </div>

                        <div className="scholarship-section">
                            <h3 className="scholarship-category-title">Special Category Scholarships & Exams</h3>
                            <ListGroup className="exam-list">
                                {examData.scholarship.specialCategory.map((exam, index) => 
                                    renderExamItem(exam.name, exam.description)
                                )}
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    );
}