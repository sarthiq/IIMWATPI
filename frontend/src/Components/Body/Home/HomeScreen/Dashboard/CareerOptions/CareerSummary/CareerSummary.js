import React, { useState } from 'react';
import { Container, Badge, Table, Nav } from 'react-bootstrap';
import { careerData } from './careerData';
import './CareerSummary.css';
import { PersonalitySummary } from './PersonalitySummary/PersonalitySummary';
import { IQSummary } from './IQSummary/IQSummary';

export const CareerSummary = () => {
    const [timeframe, setTimeframe] = useState('longTerm'); // 'longTerm' or 'shortTerm'
    const [activeTab, setActiveTab] = useState('careers'); // Changed from timeframe to activeTab

    const getDemandBadgeVariant = (demand) => {
        if (demand.includes("High")) return "warning";
        if (demand.includes("Medium")) return "info";
        return "secondary";
    };

    const renderCareerTable = (data) => (
        <div className="table-responsive">
            <Table striped bordered hover className="career-table">
                <thead>
                    <tr>
                        <th>Career Option</th>
                        <th>Description</th>
                        <th>Field of Study</th>
                        <th>Education Required</th>
                        <th>Expected Salary</th>
                        <th>Future Demand</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((career, index) => (
                        <tr key={index}>
                            <td>{career["Career Option"]}</td>
                            <td>{career.Description}</td>
                            <td>{career["Field of Study"]}</td>
                            <td>{career["Education Required"]}</td>
                            <td>{career["Expected Salary (Next 5 Years)"]}</td>
                            <td>
                                <Badge bg={getDemandBadgeVariant(career["Future Demand"])}>
                                    {career["Future Demand"]}
                                </Badge>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'careers':
                return (
                    <>
                        <Nav variant="tabs" className="mb-4">
                            <Nav.Item>
                                <Nav.Link 
                                    active={timeframe === 'longTerm'}
                                    onClick={() => setTimeframe('longTerm')}
                                >
                                    Next 5-10 Years
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link 
                                    active={timeframe === 'shortTerm'}
                                    onClick={() => setTimeframe('shortTerm')}
                                >
                                    Next 5 Years
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {renderCareerTable(careerData[timeframe])}
                    </>
                );
            case 'personality':
                return <PersonalitySummary />;
            case 'iq':
                return <IQSummary />;
            default:
                return null;
        }
    };

    return (
        <Container className="career-summary-container">
            <h1 className="career-summary-title">Top Career Options</h1>
            
            <Nav variant="tabs" className="mb-4">
                <Nav.Item>
                    <Nav.Link 
                        active={activeTab === 'careers'}
                        onClick={() => setActiveTab('careers')}
                    >
                        Career Options
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                        active={activeTab === 'personality'}
                        onClick={() => setActiveTab('personality')}
                    >
                        Personality Summary
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                        active={activeTab === 'iq'}
                        onClick={() => setActiveTab('iq')}
                    >
                        IQ Summary
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            {/* <div className="education-pattern-message alert alert-info mb-4">
                <h4>Future Career Trends</h4>
                <ul>
                    <li>AI and Technology Integration</li>
                    <li>Sustainability Focus</li>
                    <li>Digital Transformation</li>
                    <li>Healthcare Innovation</li>
                </ul>
            </div> */}

            {renderContent()}
        </Container>
    );
};