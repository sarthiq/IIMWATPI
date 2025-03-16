import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

export const About = () => {
  return (
    <div className="about-section">
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col>
            <h1 className="text-center mb-4">About Us</h1>
            <p className="lead text-center">
              At SarthiQ, we collaborate with educational institutions to empower students for the AI age. In today's rapidly evolving world, students need more than just traditional career counselling—they need AI literacy, career awareness, and interest-based career paths to be industry-ready by the time they graduate.
            </p>
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="mb-5">
          <Col>
            <Card className="mission-card">
              <Card.Body>
                <h2 className="section-title">Our Mission</h2>
                <p>
                  We aim to equip students with the skills, knowledge, and career clarity they need to succeed in the modern workforce, complemented by essential AI skills. By partnering with schools and colleges, we ensure that students are not just selecting careers but actively preparing for the future based on their strengths and interests.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* What We Do Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="section-title">What We Do</h2>
            <p className="mb-4">
              SarthiQ is an AI-powered career guidance platform designed to help students make informed academic and career decisions from class 10th to graduation and beyond.
            </p>
            <h3 className="sub-title">We focus on four core areas:</h3>
            <div className="core-areas">
              <Card className="core-area-card">
                <Card.Body>
                  <h4>AI Literacy</h4>
                  <p>Teaching students how to leverage AI tools to stay ahead in their careers.</p>
                </Card.Body>
              </Card>
              <Card className="core-area-card">
                <Card.Body>
                  <h4>Career Awareness</h4>
                  <p>Providing structured insights into emerging career opportunities.</p>
                </Card.Body>
              </Card>
              <Card className="core-area-card">
                <Card.Body>
                  <h4>Interest-Based Career Mapping</h4>
                  <p>Helping students discover career options that align with their passions and preferences.</p>
                </Card.Body>
              </Card>
              <Card className="core-area-card">
                <Card.Body>
                  <h4>Personalized Career Recommendations</h4>
                  <p>Using IQ, personality, and interest assessments to map the best-fit career paths.</p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* How We Do It Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="section-title">How We Do It</h2>
            <p>We integrate our platform into schools and colleges, offering students:</p>
            <ul className="feature-list">
              <li>A deep understanding of AI's impact on careers</li>
              <li>Insights into career options aligned with their strengths and interests</li>
              <li>The development of essential future-ready skills</li>
              <li>Guidance to discover their career pathway to achieving their dreams</li>
            </ul>
          </Col>
        </Row>

        {/* Vision Section */}
        <Row className="mb-5">
          <Col>
            <Card className="vision-card">
              <Card.Body>
                <h2 className="section-title">Our Vision</h2>
                <p>
                  To make AI literacy as fundamental as reading, ensuring that every student is future-ready and equipped to thrive in an AI-driven world.
                </p>
                <p className="text-center mt-4 call-to-action">
                  Join us in reshaping students' futures.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
