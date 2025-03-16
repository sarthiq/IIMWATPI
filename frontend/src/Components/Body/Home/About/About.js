import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";

export const About = () => {
  return (
    <div className="about-section">
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col>
            <h1 className="section-title">About Us</h1>
            <p>
              At SarthiQ, we collaborate with educational institutions to
              empower students for the AI age. In today's rapidly evolving
              world, students need more than just traditional career
              counselling—they need AI literacy, career awareness, and
              interest-based career paths to be industry-ready by the time they
              graduate.
            </p>
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="section-title">Our Mission</h2>
            <p>
              We aim to equip students with the skills, knowledge, and career
              clarity they need to succeed in the modern workforce, complemented
              by essential AI skills. By partnering with schools and colleges,
              we ensure that students are not just selecting careers but
              actively preparing for the future based on their strengths and
              interests.
            </p>
          </Col>
        </Row>

        {/* What We Do Section */}
        <Row className="mb-4">
          <Col>
            <h2 className="section-title">What We Do</h2>
            <p className="mb-3">
              SarthiQ is an AI-powered career guidance platform designed to help
              students make informed academic and career decisions from class
              10th to graduation and beyond.
            </p>
            <h3 className="sub-title">We focus on four core areas:</h3>
            <ul className="feature-list">
              <li>
                <h4>AI Literacy</h4>
                <p>
                  Teaching students how to leverage AI tools to stay ahead in
                  their careers.
                </p>
              </li>
              <li>
                <h4>Career Awareness</h4>
                <p>
                  Providing structured insights into emerging career
                  opportunities.
                </p>
              </li>
              <li>
                <h4>Interest-Based Career Mapping</h4>
                <p>
                  Helping students discover career options that align with their
                  passions and preferences.
                </p>
              </li>
              <li>
                <h4>Personalized Career Recommendations</h4>
                <p>
                  Using IQ, personality, and interest assessments to map the
                  best-fit career paths.
                </p>
              </li>
            </ul>
          </Col>
        </Row>

        {/* How We Do It Section */}
        <Row className="mb-4">
          <Col>
            <h2 className="section-title">How We Do It</h2>
            <p>
              We integrate our platform into schools and colleges, offering
              students:
            </p>
            <ul className="feature-list">
              <li>A deep understanding of AI's impact on careers</li>
              <li>
                Insights into career options aligned with their strengths and
                interests
              </li>
              <li>The development of essential future-ready skills</li>
              <li>
                Guidance to discover their career pathway to achieving their
                dreams
              </li>
            </ul>
          </Col>
        </Row>

        {/* Vision Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="section-title">Our Vision</h2>
            <p>
              To make AI literacy as fundamental as reading, ensuring that every
              student is future-ready and equipped to thrive in an AI-driven
              world.
            </p>
            <p className="call-to-action">
              Join us in reshaping students' futures.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
