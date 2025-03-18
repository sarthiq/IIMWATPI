import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './IntermediateExam.css'; // Assuming you have a CSS file for custom styles

export const IntermediateExam = () => {
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
            
            {/* First Row - National Exams and Resources */}
            <Row>
                {/* National Level Entrance Exams Column - Keep as is */}
                <Col lg={6}>
                    <h2 className="exam-section-title">National-Level Entrance Exams</h2>
                    <ListGroup className="exam-list">
                        {renderExamItem(
                            "Sainik Schools Entrance Exam (AISSEE)",
                            "For admission to Sainik Schools"
                        )}
                        {renderExamItem(
                            "Jawahar Navodaya Vidyalaya Selection Test (JNVST)",
                            "For admission to Jawahar Navodaya Vidyalayas"
                        )}
                        {renderExamItem(
                            "Rashtriya Indian Military College (RIMC) Entrance Exam",
                            "For admission to RIMC, Dehradun"
                        )}
                        {renderExamItem(
                            "Rashtriya Military Schools (RMS) Entrance Exam",
                            "For admission to RMS institutions"
                        )}
                        {renderExamItem(
                            "Indira Gandhi Rashtriya Uran Akademi (IGRUA) Entrance Test",
                            "For students aspiring for aviation-related education"
                        )}
                        {renderExamItem(
                            "National Talent Search Examination (NTSE) Stage 2",
                            "Though not a direct admission test, NTSE scholars get preference in many reputed schools"
                        )}
                    </ListGroup>
                </Col>
                
                {/* Resources Column - Keep as is */}
                <Col lg={6}>
                    <h2 className="exam-section-title">Additional Resources</h2>
                    <ListGroup className="exam-list">
                        <ListGroup.Item>
                            <span className="exam-name">Sainik Schools:</span>
                            <a href="https://exams.nta.ac.in/AISSEE/" className="resource-link"> NTA AISSEE Official Website</a>
                        </ListGroup.Item>
                        {/* {renderExamItem(
                            "Jawahar Navodaya Vidyalayas: NVS Admission Portal"
                        )} */}

                        <ListGroup.Item>
                            <span className="exam-name">Jawahar Navodaya Vidyalayas:</span>
                            <a href="https://navodaya.gov.in/nvs/en/Home1" className="resource-link"> NVS Admission Portal</a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

            {/* Second Row - State Level Exams */}
            <Row>
                <Col>
                    <h2 className="exam-section-title">State-Level & Other Residential School Entrance Exams</h2>
                    <ListGroup className="exam-list">
                        {renderRegionHeader("State Board Residential Schools Entrance Exams")}
                        {renderExamItem(
                            "Eklavya Model Residential School (EMRS) Admission Test",
                            "For admission to EMRS institutions"
                        )}
                        {renderExamItem(
                            "Kendriya Vidyalaya (KV) Admission Test",
                            "Direct admission is given in most cases, but special cases may require an entrance test"
                        )}
                        {renderExamItem(
                            "State-Sponsored Merit Scholarship Exams",
                            "Various states conduct their own entrance tests for meritorious students"
                        )}
                    </ListGroup>
                </Col>
            </Row>

            {/* Third Row - Scholarship & Talent Search Section */}
            <Row>
                <Col>
                    <h2 className="exam-section-title">State-Sponsored Scholarship & Talent Search Exams</h2>
                    
                    {/* National Talent Search Section */}
                    <div className="scholarship-section">
                        <h3 className="scholarship-category-title">National Talent Search Exams</h3>
                        <ListGroup className="exam-list">
                            {renderExamItem(
                                "National Talent Search Examination (NTSE)",
                                "Conducted by NCERT for Class 10 students. Provides scholarships for higher education. (Discontinued after 2021 but may restart.)"
                            )}
                            {renderExamItem(
                                "Kishore Vaigyanik Protsahan Yojana (KVPY)",
                                "Integrated with INSPIRE scheme for Science stream students"
                            )}
                        </ListGroup>
                    </div>

                    {/* State-Specific Section */}
                    <div className="scholarship-section">
                        <h3 className="scholarship-category-title">State-Specific Talent Search & Scholarship Exams</h3>
                        
                        <ListGroup className="exam-list">
                            {/* North India Section */}
                            <ListGroup.Item className="region-header main-region">North India</ListGroup.Item>
                            {renderExamItem(
                                "Uttar Pradesh National Means-Cum-Merit Scholarship (UP NMMS)",
                                null
                            )}
                            {renderExamItem(
                                "Bihar NMMS & Mukhyamantri Medha Chhatravriti Yojana",
                                null
                            )}
                            {renderExamItem(
                                "Rajasthan NTSE & State Talent Search Examination (STSE Rajasthan)",
                                null
                            )}
                            {renderExamItem(
                                "Delhi NMMS Scholarship Exam",
                                null
                            )}
                            {renderExamItem(
                                "Punjab Meritorious School Admission Test",
                                null
                            )}
                            {renderExamItem(
                                "Haryana NTSE & Super 100 Scholarship Scheme",
                                null
                            )}

                            {/* South India Section */}
                            <ListGroup.Item className="region-header main-region">South India</ListGroup.Item>
                            {renderExamItem(
                                "Tamil Nadu NMMS & Vidyadhan Scholarship",
                                null
                            )}
                            {renderExamItem(
                                "Andhra Pradesh NMMS & Vikram Sarabhai Scholarship",
                                null
                            )}
                            {renderExamItem(
                                "Karnataka Pratibha Puraskar & NMMS",
                                null
                            )}
                            {renderExamItem(
                                "Kerala State Talent Search Exam (KTSE) & NMMS",
                                null
                            )}

                            {/* East & Northeast India Section */}
                            <ListGroup.Item className="region-header main-region">East & Northeast India</ListGroup.Item>
                            {renderExamItem(
                                "West Bengal NMMS & Swami Vivekananda Merit-Cum-Means Scholarship",
                                null
                            )}
                            {renderExamItem(
                                "Odisha NMMS & Biju Patnaik Talent Search Exam",
                                null
                            )}
                            {renderExamItem(
                                "Assam NMMS & Combined Merit Scholarship",
                                null
                            )}
                            {renderExamItem(
                                "Meghalaya & Other NE State NMMS Scholarships",
                                null
                            )}

                            {/* West & Central India Section */}
                            <ListGroup.Item className="region-header main-region">West & Central India</ListGroup.Item>
                            {renderExamItem(
                                "Maharashtra NTSE & State Talent Search Examination (STSE Maharashtra)",
                                null
                            )}
                            {renderExamItem(
                                "Madhya Pradesh NMMS & Vikramaditya Scholarship",
                                null
                            )}
                            {renderExamItem(
                                "Chhattisgarh NMMS & Pre-Matric Merit Scholarship",
                                null
                            )}
                            {renderExamItem(
                                "Gujarat NMMS & Gyan Sadhana Scholarship",
                                null
                            )}
                        </ListGroup>
                    </div>

                    {/* Special Category Section */}
                    <div className="scholarship-section">
                        <h3 className="scholarship-category-title">Special Category Scholarships & Exams</h3>
                        <ListGroup className="exam-list">
                            {renderExamItem(
                                "Eklavya Model Residential School (EMRS) Admission Test",
                                "For tribal students in EMRS schools"
                            )}
                            {renderExamItem(
                                "INSPIRE Scholarship",
                                "For students interested in pure sciences"
                            )}
                            {renderExamItem(
                                "Dr. APJ Abdul Kalam Scholarship (State-Specific Variants Exist)",
                                "Awarded in multiple states for meritorious students"
                            )}
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}