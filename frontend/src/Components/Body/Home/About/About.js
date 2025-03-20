import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

export const About = () => {
  return (
    <div className="about-section">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="about-title">About Us</h1>
            <p className="about-text-bold">
              Educating, enabling, and empowering students to achieve their dreams in the AI-driven world!
            </p>
            <p className="about-text">
              We help students select courses based on their strengths, interests, and aspirations. We guide them to achieve the best education in their field of interest; simultaneously, we educate and equip students with AI skills to enhance their capabilities to become future-ready professionals.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
