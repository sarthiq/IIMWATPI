import { useState, useEffect } from "react";
import { Tab, Nav, Container } from "react-bootstrap";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { EntranceHome } from "./EntranceHome/EntranceHome";
import { IntermediateExam } from "./IntermediateExam/IntermediateExam";
import { GraduationExam } from "./GraduationExam/GraduationExam";
import { AfterGraduation } from "./AfterGraduation/AfterGraduation";

export const EntranceTestDetails = () => {
  const [activeTab, setActiveTab] = useState("intermediate");
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    {
      id: "intermediate",
      label: "Intermediate",
      component: <IntermediateExam />,
      path: "intermediate",
    },
    {
      id: "graduation",
      label: "Graduation",
      component: <GraduationExam />,
      path: "graduation",
    },
    {
      id: "after-graduation",
      label: "After Graduation",
      component: <AfterGraduation />,
      path: "after-graduation",
    },
  ];

  // Set active tab based on current route when component mounts
  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    const currentTab = tabs.find((tab) => tab.path === currentPath);
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [location.pathname]);

  const handleTabSelect = (key) => {
    setActiveTab(key);
    const selectedTab = tabs.find((tab) => tab.id === key);
    navigate(`/entrance-test-details/${selectedTab.path}`);
  };

  return (
    <Container className="grad-exam-container py-5">
      <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
        <Nav variant="tabs" className="grad-exam-tabs mb-4">
          {tabs.map((tab) => (
            <Nav.Item key={tab.id}>
              <Nav.Link
                eventKey={tab.id}
                className="grad-exam-tab"
                active={activeTab === tab.id}
              >
                {tab.label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content>
          <Routes>
            {tabs.map((tab) => (
              <Route
                key={tab.id}
                path={`${tab.path}/*`}
                element={<Tab.Pane eventKey={tab.id}>{tab.component}</Tab.Pane>}
              />
            ))}
            <Route path="/" element={<Navigate to="intermediate" replace />} />
          </Routes>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};
