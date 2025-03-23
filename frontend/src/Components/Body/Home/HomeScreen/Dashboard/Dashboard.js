import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Profile } from "./Profile/Profile";
import { TestResults } from "./TestResults/TestResults";
import { CareerRecommendations } from "./CareerRecommendations/CareerRecommendations";
import { AILiteracy } from "./AILiteracy/AILiteracy";
import { Interest } from "./Interest/Interest";
import "./Dashboard.css";

import { CareerReport } from "./CareerReport/CareerReport";
import { CareerOptions } from "./CareerOptions/CareerOptions";

export const Dashboard = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = React.useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Container fluid className="dashboard-container">
      <Row>
        {/* Mobile Toggle Button */}
        <div className="d-md-none mobile-toggle-container">
          <button className="mobile-sidebar-toggle" onClick={toggleSidebar}>
            {showSidebar ? "✕" : "☰"} Menu
          </button>
        </div>

        {/* Left Panel Navigation */}
        <Col 
          md={3} 
          lg={2} 
          className={`dashboard-sidebar ${showSidebar ? 'show-mobile-sidebar' : 'hide-mobile-sidebar'}`}
        >
          <Nav className="flex-column sidebar-nav">
            <Nav.Link
              as={Link}
              to="profile"
              className={`sidebar-link ${
                location.pathname.includes("/profile") ? "active" : ""
              }`}
              onClick={() => setShowSidebar(false)}
            >
              Profile
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="results"
              className={`sidebar-link ${
                location.pathname.includes("/results") ? "active" : ""
              }`}
              onClick={() => setShowSidebar(false)}
            >
              Test Results
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="ai-literacy"
              className={`sidebar-link ${
                location.pathname.includes("/ai-literacy") ? "active" : ""
              }`}
              onClick={() => setShowSidebar(false)}
            >
              AI Literacy
            </Nav.Link>
            
            <Nav.Link
              as={Link}
              to="recommendations"
              className={`sidebar-link ${
                location.pathname.includes("/recommendations") ? "active" : ""
              }`}
              onClick={() => setShowSidebar(false)}
            >
              Career Recommendations
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="career-report"
              className={`sidebar-link ${
                location.pathname.includes("/career-report") ? "active" : ""
              }`}
              onClick={() => setShowSidebar(false)}
            >
              Career Report
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="interest"
              className={`sidebar-link ${
                location.pathname.includes("/interest") ? "active" : ""
              }`}
              onClick={() => setShowSidebar(false)}
            >
              Interest
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="career-options/summary"
              className={`sidebar-link ${
                location.pathname.includes("/career-options") ? "active" : ""
              }`}
              onClick={() => setShowSidebar(false)}
            >
              Career Options
            </Nav.Link>
          </Nav>
        </Col>

        {/* Main Content Area */}
        <Col md={9} lg={10} className="dashboard-content">
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="results" element={<TestResults />} />
            <Route path="ai-literacy/*" element={<AILiteracy />} />
            
            <Route
              path="recommendations/*"
              element={<CareerRecommendations />}
            />
            <Route path="career-report" element={<CareerReport />} />
            <Route path="interest/*" element={<Interest />} />

            <Route path="career-options/*" element={<CareerOptions />} />

            <Route path="*" element={<Navigate to="profile" replace />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};
