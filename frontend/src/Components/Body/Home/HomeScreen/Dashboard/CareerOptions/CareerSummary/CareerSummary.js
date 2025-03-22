import React, { useState } from "react";
import { Container, Badge, Table, Nav } from "react-bootstrap";
import { careerData } from "./careerData";
import "./CareerSummary.css";
import { PersonalitySummary } from "./PersonalitySummary/PersonalitySummary";
import { IQSummary } from "./IQSummary/IQSummary";
import { CareerAwareness } from "../CareerAwareness/CareerAwareness";

export const CareerSummary = () => {
  const [activeTab, setActiveTab] = useState("careers");

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
      case "careers":
        return renderCareerTable(careerData.careers);
      case "personality":
        return <PersonalitySummary />;
      case "iq":
        return <IQSummary />;
      case "awareness":
        return <CareerAwareness />;
      default:
        return null;
    }
  };

  return (
    <Container className="career-summary-container">
      <Nav variant="tabs" className="mb-4">
        <Nav.Item>
          <Nav.Link
            active={activeTab === "awareness"}
            onClick={() => setActiveTab("awareness")}
          >
            Career Summary
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active={activeTab === "careers"}
            onClick={() => setActiveTab("careers")}
          >
            Top 100 Career Options
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active={activeTab === "personality"}
            onClick={() => setActiveTab("personality")}
          >
            Career Based on Personality
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active={activeTab === "iq"}
            onClick={() => setActiveTab("iq")}
          >
            Career Based on IQ
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
