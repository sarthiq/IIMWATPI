import React from 'react';
import { Container, Row, Col, Table, Accordion } from 'react-bootstrap';
import './GraduationExam.css';

export const GraduationExam = () => {
    const examCategories = [
        {
            id: 1,
            title: "Science, Technology, Engineering, and Mathematics (STEM)",
            exams: [
                {
                    name: "Joint Entrance Examination (JEE) Main",
                    notificationDate: "December 2024",
                    applicationPeriod: "January 2025",
                    examDate: "April 2025",
                    resultDeclaration: "May 2025",
                    counselingDates: "June-July 2025",
                    officialLink: "https://jeemain.nta.nic.in"
                },
                {
                    name: "Joint Entrance Examination (JEE) Advanced",
                    notificationDate: "May 2025",
                    applicationPeriod: "May 2025",
                    examDate: "June 2025",
                    resultDeclaration: "June 2025",
                    counselingDates: "July 2025",
                    officialLink: "https://jeeadv.ac.in"
                },
                {
                    name: "Birla Institute of Technology and Science Admission Test (BITSAT)",
                    notificationDate: "January 2025",
                    applicationPeriod: "February-March 2025",
                    examDate: "May 2025",
                    resultDeclaration: "June 2025",
                    counselingDates: "July 2025",
                    officialLink: "https://www.bits-pilani.ac.in/bitsat"
                },
                {
                    name: "Vellore Institute of Technology Engineering Entrance Examination (VITEEE)",
                    notificationDate: "November 2024",
                    applicationPeriod: "December 2024-March 2025",
                    examDate: "April 2025",
                    resultDeclaration: "April 2025",
                    counselingDates: "May 2025",
                    officialLink: "https://vit.ac.in/admission/viteee"
                },
                {
                    name: "Consortium of Medical, Engineering and Dental Colleges of Karnataka (COMEDK UGET)",
                    notificationDate: "January 2025",
                    applicationPeriod: "February-April 2025",
                    examDate: "10th May 2025",
                    resultDeclaration: "May 2025",
                    counselingDates: "June 2025",
                    officialLink: "https://www.comedk.org"
                },
                {
                    name: "Aligarh Muslim University Engineering Entrance Test (AMUEEE)",
                    notificationDate: "February 2025",
                    applicationPeriod: "March-April 2025",
                    examDate: "May 2025",
                    resultDeclaration: "June 2025",
                    counselingDates: "July 2025",
                    officialLink: "https://www.amucontrollerexams.com"
                },
                {
                    name: "Jamia Millia Islamia Engineering Entrance Test (JMI EEE)",
                    notificationDate: "February 2025",
                    applicationPeriod: "March-April 2025",
                    examDate: "June 2025",
                    resultDeclaration: "July 2025",
                    counselingDates: "August 2025",
                    officialLink: "https://www.jmi.ac.in"
                }
            ]
        },
        {
            id: 2,
            title: "Medical, Healthcare, and Life Sciences",
            exams: [
                {
                    name: "National Eligibility cum Entrance Test (NEET-UG)",
                    notificationDate: "December 2024",
                    applicationPeriod: "January-February 2025",
                    examDate: "4th May 2025",
                    resultDeclaration: "June 2025",
                    counselingDates: "July-August 2025",
                    officialLink: "https://neet.nta.nic.in"
                },
                {
                    name: "All India Institute of Medical Sciences Entrance Exam (AIIMS)",
                    notificationDate: "January 2025",
                    applicationPeriod: "February-March 2025",
                    examDate: "1st June 2025",
                    resultDeclaration: "June 2025",
                    counselingDates: "July 2025",
                    officialLink: "https://www.aiimsexams.ac.in"
                },
                {
                    name: "Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER) MBBS Entrance Exam",
                    notificationDate: "February 2025",
                    applicationPeriod: "March-April 2025",
                    examDate: "June 2025",
                    resultDeclaration: "June 2025",
                    counselingDates: "July 2025",
                    officialLink: "https://jipmer.edu.in"
                },
                {
                    name: "Global Allied Healthcare Entrance Test (GAHET)",
                    notificationDate: "January 2025",
                    applicationPeriod: "February-March 2025",
                    examDate: "[To Be Announced]",
                    resultDeclaration: "[To Be Announced]",
                    counselingDates: "[To Be Announced]",
                    officialLink: "https://www.gahet.in"
                }
            ]
        },
        {
            id: 3,
            title: "Business, Economics, and Finance",
            exams: [
                {
                    name: "Common University Entrance Test (CUET) for UG Programs",
                    notificationDate: "February 2025",
                    applicationPeriod: "March 2025",
                    examDate: "8th May - 1st June 2025",
                    resultDeclaration: "June 2025",
                    counselingDates: "July 2025",
                    officialLink: "https://cuet.samarth.ac.in"
                },
                {
                    name: "Symbiosis Entrance Test (SET)",
                    notificationDate: "January 2025",
                    applicationPeriod: "February-April 2025",
                    examDate: "May 2025",
                    resultDeclaration: "May 2025",
                    counselingDates: "June 2025",
                    officialLink: "https://www.set-test.org"
                },
                {
                    name: "Narsee Monjee Institute of Management Studies (NMIMS) NPAT",
                    notificationDate: "December 2024",
                    applicationPeriod: "December 2024-May 2025",
                    examDate: "May 2025",
                    resultDeclaration: "June 2025",
                    counselingDates: "July 2025",
                    officialLink: "https://nmims.edu/npat"
                }
            ]
        },
        {
            id: 4,
            title: "Arts, Media, and Communication",
            exams: [
                {
                    name: "National School of Drama (NSD) Entrance Exam",
                    notificationDate: "January 2025",
                    applicationPeriod: "February-March 2025",
                    examDate: "May 2025",
                    resultDeclaration: "June 2025",
                    counselingDates: "July 2025",
                    officialLink: "https://nsd.gov.in"
                },
                {
                    name: "Film and Television Institute of India (FTII) Joint Entrance Test (JET)",
                    notificationDate: "December 2024",
                    applicationPeriod: "January-February 2025",
                    examDate: "March 2025",
                    resultDeclaration: "April 2025",
                    counselingDates: "May 2025",
                    officialLink: "https://www.ftii.ac.in"
                },
                {
                    name: "National Institute of Design (NID) Entrance Exam",
                    notificationDate: "October 2024",
                    applicationPeriod: "November-December 2024",
                    examDate: "January 2025",
                    resultDeclaration: "February 2025",
                    counselingDates: "March 2025",
                    officialLink: "https://admissions.nid.edu"
                }
            ]
        },
        {
            id: 5,
            title: "Social Sciences, Humanities, and Political Studies",
            exams: [
                {
                    name: "Common University Entrance Test (CUET) for UG Programs",
                    notificationDate: "February 2025",
                    applicationPeriod: "March 2025",
                    examDate: "8th May - 1st June 2025",
                    resultDeclaration: "June 2025",
                    counselingDates: "July 2025",
                    officialLink: "https://cuet.samarth.ac.in"
                },
                {
                    name: "Tata Institute of Social Sciences Bachelor's Admission Test (TISS-BAT)",
                    notificationDate: "November 2024",
                    applicationPeriod: "December 2024-February 2025",
                    examDate: "April 2025",
                    resultDeclaration: "May 2025",
                    counselingDates: "June 2025",
                    officialLink: "https://www.tiss.edu"
                },
                {
                    name: "Banaras Hindu University Undergraduate Entrance Test (BHU UET)",
                    notificationDate: "January 2025",
                    applicationPeriod: "February-March 2025",
                    examDate: "April 2025",
                    resultDeclaration: "May 2025",
                    counselingDates: "June 2025",
                    officialLink: "https://www.bhuonline.in"
                }
            ]
        },
        {
            id: 6,
            title: "Law",
            exams: [
                {
                    name: "Common Law Admission Test (CLAT)",
                    notificationDate: "August 2024",
                    applicationPeriod: "August-November 2024",
                    examDate: "8th December 2024",
                    resultDeclaration: "January 2025",
                    counselingDates: "January-March 2025",
                    officialLink: "https://consortiumofnlus.ac.in"
                },
                {
                    name: "All India Law Entrance Test (AILET)",
                    notificationDate: "September 2024",
                    applicationPeriod: "September-November 2024",
                    examDate: "7th December 2024",
                    resultDeclaration: "January 2025",
                    counselingDates: "January-March 2025",
                    officialLink: "https://nationallawuniversitydelhi.in"
                },
                {
                    name: "Law School Admission Test (LSAT) India",
                    notificationDate: "October 2024",
                    applicationPeriod: "November 2024-January 2025",
                    examDate: "January 2025",
                    resultDeclaration: "February 2025",
                    counselingDates: "March 2025",
                    officialLink: "https://www.discoverlaw.in"
                }
            ]
        }
    ];

    const renderExamTable = (exams) => (
        <div className="grad-table-wrapper">
            <Table striped bordered hover responsive className="grad-exam-table">
                <thead>
                    <tr>
                        <th>Exam Name</th>
                        <th>Notification Date</th>
                        <th>Application Period</th>
                        <th>Exam Date</th>
                        <th>Result Declaration</th>
                        <th>Counseling Dates</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {exams.map((exam, index) => (
                        <tr key={index}>
                            <td>{exam.name}</td>
                            <td>{exam.notificationDate}</td>
                            <td>{exam.applicationPeriod}</td>
                            <td>{exam.examDate}</td>
                            <td>{exam.resultDeclaration}</td>
                            <td>{exam.counselingDates}</td>
                            <td>
                                <a 
                                    href={exam.officialLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-primary btn-sm"
                                >
                                    View More
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );

    return (
        <Container fluid className="grad-exam-container">
            <Row className="grad-header-row">
                <Col>
                    <h1 className="grad-main-title">Graduation Entrance Examinations</h1>
                    <p className="grad-subtitle">Comprehensive Guide to Various Entrance Exams for Graduation Programs</p>
                </Col>
            </Row>
            
            <Row className="grad-content-row">
                <Col>
                    <Accordion defaultActiveKey="0" className="grad-accordion">
                        {examCategories.map((category, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index} className="grad-accordion-item">
                                <Accordion.Header className="grad-accordion-header">
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