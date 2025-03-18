import React from 'react';
import { Container, Row, Col, Accordion, Table } from 'react-bootstrap';
import './AfterGraduation.css';

export const AfterGraduation = () => {
    const categories = [
        {
            id: 1,
            title: "Higher Education Entrance Exams",
            exams: [
                {
                    name: "Graduate Aptitude Test in Engineering (GATE)",
                    description: "For M.Tech admissions and PSU recruitment",
                    notificationDate: "September 2024",
                    examDate: "February 2025",
                    eligibility: "B.Tech/B.E. graduates",
                    officialLink: "https://gate.iitk.ac.in"
                },
                {
                    name: "Common Admission Test (CAT)",
                    description: "For MBA admissions in IIMs and other top B-schools",
                    notificationDate: "July 2024",
                    examDate: "November 2024",
                    eligibility: "Graduates from any discipline",
                    officialLink: "https://iimcat.ac.in"
                },
                {
                    name: "Graduate Management Admission Test (GMAT)",
                    description: "For international MBA programs",
                    notificationDate: "Available year-round",
                    examDate: "Available year-round",
                    eligibility: "Graduates from any discipline",
                    officialLink: "https://www.mba.com/exams/gmat"
                },
                {
                    name: "UGC NET",
                    description: "For PhD admissions and Assistant Professor eligibility",
                    notificationDate: "Quarterly basis",
                    examDate: "Multiple sessions per year",
                    eligibility: "Post-graduates in relevant discipline",
                    officialLink: "https://ugcnet.nta.nic.in"
                }
            ]
        },
        {
            id: 2,
            title: "Government Job Examinations",
            exams: [
                {
                    name: "Civil Services Examination (UPSC CSE)",
                    description: "For IAS, IPS, IFS and other civil services",
                    notificationDate: "February 2025",
                    examDate: "May-June 2025 (Prelims)",
                    eligibility: "Graduates from any discipline",
                    officialLink: "https://www.upsc.gov.in"
                },
                {
                    name: "Staff Selection Commission (SSC CGL)",
                    description: "For various Group B and C posts",
                    notificationDate: "December 2024",
                    examDate: "March-April 2025",
                    eligibility: "Graduates from any discipline",
                    officialLink: "https://ssc.nic.in"
                },
                {
                    name: "Banking Examinations (IBPS PO/SBI PO)",
                    description: "For Probationary Officers in banks",
                    notificationDate: "Multiple notifications",
                    examDate: "Multiple dates",
                    eligibility: "Graduates from any discipline",
                    officialLink: "https://www.ibps.in"
                }
            ]
        },
        {
            id: 3,
            title: "Professional Certification Exams",
            exams: [
                {
                    name: "Chartered Accountancy (CA)",
                    description: "Professional accounting qualification",
                    notificationDate: "Bi-annual",
                    examDate: "May and November",
                    eligibility: "Commerce graduates",
                    officialLink: "https://www.icai.org"
                },
                {
                    name: "Company Secretary (CS)",
                    description: "Corporate law and governance certification",
                    notificationDate: "Bi-annual",
                    examDate: "June and December",
                    eligibility: "Graduates from any discipline",
                    officialLink: "https://www.icsi.edu"
                },
                {
                    name: "CFA Program",
                    description: "Global investment management certification",
                    notificationDate: "Rolling basis",
                    examDate: "February, August, November",
                    eligibility: "Bachelor's degree or final year",
                    officialLink: "https://www.cfainstitute.org"
                }
            ]
        }
    ];

    const renderExamTable = (exams) => (
        <div className="after-grad-table-wrapper">
            <Table striped bordered hover responsive className="after-grad-exam-table">
                <thead>
                    <tr>
                        <th>Exam Name</th>
                        <th>Description</th>
                        <th>Notification Date</th>
                        <th>Exam Date</th>
                        <th>Eligibility</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {exams.map((exam, index) => (
                        <tr key={index}>
                            <td className="exam-name-cell">{exam.name}</td>
                            <td>{exam.description}</td>
                            <td>{exam.notificationDate}</td>
                            <td>{exam.examDate}</td>
                            <td>{exam.eligibility}</td>
                            <td>
                                <a 
                                    href={exam.officialLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-primary btn-sm after-grad-link-btn"
                                >
                                    Official Website
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );

    return (
        <Container fluid className="after-grad-container">
            <Row className="after-grad-header-row">
                <Col>
                    <h1 className="after-grad-main-title">Post-Graduation Opportunities</h1>
                    <p className="after-grad-subtitle">
                        Comprehensive guide to entrance examinations and opportunities after graduation
                    </p>
                </Col>
            </Row>
            
            <Row className="after-grad-content-row">
                <Col>
                    <Accordion defaultActiveKey="0" className="after-grad-accordion">
                        {categories.map((category, index) => (
                            <Accordion.Item 
                                eventKey={index.toString()} 
                                key={index} 
                                className="after-grad-accordion-item"
                            >
                                <Accordion.Header className="after-grad-accordion-header">
                                    {category.title}
                                </Accordion.Header>
                                <Accordion.Body>
                                    {renderExamTable(category.exams)}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};