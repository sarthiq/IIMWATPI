import React from 'react';
import { Container, Badge, Table } from 'react-bootstrap';
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
            <div className="education-pattern-message alert alert-info mb-4">
                <h4>Best Education Patterns Till 2030</h4>
                <ul>
                    <li>Digital & Technical Skills</li>
                    <li>Specialized Certifications</li>
                    <li>Continuous Learning</li>
                    <li>Hybrid Education</li>
                </ul>
            </div>
            <div className="table-responsive">
                <Table striped bordered hover className="career-table">
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Potential Careers</th>
                            <th>Education Required</th>
                            <th>Expected Salary</th>
                            <th>Demand</th>
                        </tr>
                    </thead>
                    <tbody>
                        {careerData.map((field, index) => (
                            <tr key={index}>
                                <td className="field-column">{field.field}</td>
                                <td>
                                    <ol className="careers-list">
                                        {field.careers.map((career, idx) => (
                                            <li key={idx}>{career}</li>
                                        ))}
                                    </ol>
                                </td>
                                <td>
                                    <div className="education-details">
                                        <p><strong>Stream:</strong> {field.education.stream}</p>
                                        <p><strong>Graduation:</strong> {field.education.graduation}</p>
                                        <p><strong>Additional:</strong> {field.education.additional}</p>
                                    </div>
                                </td>
                                <td className="salary-column">
                                    <span className="salary-range">{field.salary}</span>
                                </td>
                                <td className="demand-column">
                                    <Badge bg={getDemandBadgeVariant(field.demand)}>
                                        {field.demand}
                                    </Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};