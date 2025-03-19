import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaProjectDiagram, FaBookReader } from 'react-icons/fa';
import './CareerHome.css';

export const CareerHome = () => {
    return (
        <Container className="ch-container">
            <Row className="justify-content-center">
                <Col xs={12}>
                    <h1 className="ch-title">
                        Explore Your Career Path
                        <span className="ch-subtitle">Choose your journey to success</span>
                    </h1>
                </Col>
            </Row>
            
            <Row className="justify-content-center ch-cards-container">
                <Col xs={12} md={6} lg={5}>
                    <Link to="./tree" className="ch-card-link">
                        <Card className="ch-card ch-tree-card">
                            <Card.Body>
                                <div className="ch-card-icon">
                                    <FaProjectDiagram />
                                </div>
                                <Card.Title>Career Tree</Card.Title>
                                <Card.Text>
                                    Navigate through different career paths based on your education level
                                </Card.Text>
                                <ul className="ch-feature-list">
                                    <li>Interactive career progression tree</li>
                                    <li>Options after 10th standard</li>
                                    <li>Pathways after 11th & 12th</li>
                                </ul>
                                <div className="ch-card-footer">
                                    Explore Tree →
                                </div>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>

                <Col xs={12} md={6} lg={5}>
                    <Link to="./summary" className="ch-card-link">
                        <Card className="ch-card ch-summary-card">
                            <Card.Body>
                                <div className="ch-card-icon">
                                    <FaBookReader />
                                </div>
                                <Card.Title>Career Summary</Card.Title>
                                <Card.Text>
                                    In-depth information about various career opportunities
                                </Card.Text>
                                <ul className="ch-feature-list">
                                    <li>Detailed career descriptions</li>
                                    <li>Educational requirements</li>
                                    <li>Industry insights & prospects</li>
                                </ul>
                                <div className="ch-card-footer">
                                    View Summary →
                                </div>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};