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
import "./EntranceTestDetails.css";

export const EntranceTestDetails = () => {
  const [activeTab, setActiveTab] = useState("intermediate");
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    {
      id: "intermediate",
      label: "School Admission Entrance Exams",
      component: <IntermediateExam />,
      path: "intermediate",
    },
    {
      id: "graduation",
      label: "College Admission Entrance Exams",
      component: <GraduationExam />,
      path: "graduation",
    },
    {
      id: "after-graduation",
      label: "Entrance Exams for Higher Studies",
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
    <Container className="entrance-test-container py-5" id="entrance-test-container">
      <h2 className="entrance-test-title text-center mb-4">
        Entrance Exams in India
      </h2>
      <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
        <Nav variant="tabs" className="entrance-test-tabs mb-4 justify-content-center">
          {tabs.map((tab) => (
            <Nav.Item key={tab.id}>
              <Nav.Link
                eventKey={tab.id}
                className="entrance-test-tab text-center"
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
