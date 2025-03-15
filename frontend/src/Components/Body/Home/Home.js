import { Navigate, Route, Routes } from "react-router-dom";
import "./home.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import { HomeScreen } from "./HomeScreen/HomeScreen";
import { Quiz } from "./HomeScreen/Quiz/Quiz";

import { About } from "./About/About";
import { Dashboard } from "./HomeScreen/Dashboard/Dashboard";
import { Auth } from "./HomeScreen/Auth/Auth";

export const Home = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        <Routes>
          {/* Default route for homepage */}

          <Route path="/" element={<HomeScreen />} />
         
          <Route path="about" element={<About />} />

          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="auth/*" element={<Auth />} />

          <Route path="quiz/*" element={<Quiz />} />
          {/* Catch-all for invalid routes, redirecting to homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
