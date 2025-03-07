import "bootstrap-icons/font/bootstrap-icons.css";
import { Navigate, Route, Routes, NavLink } from "react-router-dom";
import "./Dashboard.css";
import { useState } from "react";
import { Home } from "./Home/Home";
import { Quiz } from "./Quiz/Quiz";

export const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="admin-page">
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <ul className="tabs-list">
          <li>
            <NavLink
              to="./"
              className={({ isActive }) =>
                isActive ? "tab-link active-tab" : "tab-link"
              }
            >
              <i className="tab-icon bi bi-speedometer2"></i>
              {!collapsed && <span>Dashboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="./quiz"
              className={({ isActive }) =>
                isActive ? "tab-link active-tab" : "tab-link"
              }
            >
              <i className="tab-icon bi bi-question-circle"></i>
              {!collapsed && <span>Quiz</span>}
            </NavLink>
          </li>
          
        </ul>

        <button className="toggle-button" onClick={toggleSidebar}>
          {collapsed ? "❯" : "❮"}
        </button>
      </div>
      <div className="content">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="quiz/*" element={<Quiz />} />{" "}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
      </div>
    </div>
  );
};




