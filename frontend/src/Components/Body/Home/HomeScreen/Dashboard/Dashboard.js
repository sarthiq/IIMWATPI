import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Profile } from "./Profile/Profile";
import { TestResults } from "./TestResults/TestResults";
import { CareerRecommendations } from "./CareerRecommendations/CareerRecommendations";
import { AILiteracy } from "./AILiteracy/AILiteracy";
import { CareerAwareness } from "./CareerAwareness/CareerAwareness";
import "./Dashboard.css";

export const Dashboard = () => {
  const location = useLocation();

  return (
    <Container fluid className="dashboard-container">
      <Row>
        {/* Left Panel Navigation */}
        <Col md={3} lg={2} className="dashboard-sidebar">
          <Nav className="flex-column sidebar-nav">
            <Nav.Link
              as={Link}
              to="profile"
              className={`sidebar-link ${
                location.pathname.includes("/profile") ? "active" : ""
              }`}
            >
              Profile
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="results"
              className={`sidebar-link ${
                location.pathname.includes("/results") ? "active" : ""
              }`}
            >
              Test Results
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="ai-literacy"
              className={`sidebar-link ${
                location.pathname.includes("/ai-literacy") ? "active" : ""
              }`}
            >
              AI Literacy
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="career-awareness"
              className={`sidebar-link ${
                location.pathname.includes("/career-awareness") ? "active" : ""
              }`}
            >
              Career Awareness
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="recommendations"
              className={`sidebar-link ${
                location.pathname.includes("/recommendations") ? "active" : ""
              }`}
            >
              Career Recommendations
            </Nav.Link>
          </Nav>
        </Col>

        {/* Main Content Area */}
        <Col md={9} lg={10} className="dashboard-content">
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="results" element={<TestResults />} />
            <Route path="ai-literacy" element={<AILiteracy />} />
            <Route path="career-awareness/*" element={<CareerAwareness />} />
            <Route path="recommendations/*" element={<CareerRecommendations />} />
            <Route path="*" element={<Navigate to="profile" replace />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};
