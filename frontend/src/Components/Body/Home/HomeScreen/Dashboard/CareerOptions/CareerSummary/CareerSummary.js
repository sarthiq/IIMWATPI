import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import { careerData } from './careerData';
import './CareerSummary.css';

export const CareerSummary = () => {
    const getDemandBadgeVariant = (demand) => {
        return demand === "Very High" ? "danger" :
               demand === "High" ? "warning" :
               "info";
    };

    return (
        <Container className="career-summary-container">
            <h1 className="career-summary-title">Career Options Summary</h1>
            <div className="career-cards-grid">
                {careerData.map((field, index) => (
                    <Card key={index} className="career-card">
                        <Card.Header className="career-card-header">
                            <h2>{field.field}</h2>
                            <Badge bg={getDemandBadgeVariant(field.demand)}>
                                {field.demand} Demand
                            </Badge>
                        </Card.Header>
                        <Card.Body>
                            <div className="career-info-section">
                                <h3>Potential Careers</h3>
                                <div className="careers-list">
                                    {field.careers.map((career, idx) => (
                                        <Badge key={idx} bg="light" text="dark" className="career-badge">
                                            {career}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="career-info-section">
                                <h3>Education Path</h3>
                                <div className="education-path">
                                    <span className="education-step">
                                        📌 {field.education.stream}
                                    </span>
                                    <span className="education-arrow">→</span>
                                    <span className="education-step">
                                        🎓 {field.education.graduation}
                                    </span>
                                    <span className="education-arrow">→</span>
                                    <span className="education-step">
                                        🎖 {field.education.additional}
                                    </span>
                                </div>
                            </div>

                            <div className="career-info-section">
                                <h3>Expected Salary</h3>
                                <div className="salary-range">
                                    {field.salary}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};