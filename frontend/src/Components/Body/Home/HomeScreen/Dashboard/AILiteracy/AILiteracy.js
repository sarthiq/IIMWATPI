import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { AItheory } from "./Theory/AItheory";
import { ToolTask } from "./ToolTask/ToolTask";
import "./AILiteracy.css"; // You'll need to create this CSS file

export const AILiteracy = () => {
  const [activeTab, setActiveTab] = useState("theory"); // Default to theory tab

  return (
    <Container fluid className="ai-literacy-container">
      <Nav
        variant="tabs"
        className="mb-4 justify-content-center ai-literacy-tabs"
      >
        <Nav.Item>
          <Nav.Link
            active={activeTab === "theory"}
            onClick={() => setActiveTab("theory")}
            className="text-center"
          >
            AI Theory
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active={activeTab === "tools-tasks"}
            onClick={() => setActiveTab("tools-tasks")}
            className="text-center"
          >
            Tools & Tasks
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {activeTab === "theory" ? <AItheory /> : <ToolTask />}
    </Container>
  );
};
