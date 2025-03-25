import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./home.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import { HomeScreen } from "./HomeScreen/HomeScreen";
import { Quiz } from "./HomeScreen/Quiz/Quiz";

import { About } from "./About/About";
import { Dashboard } from "./HomeScreen/Dashboard/Dashboard";
import { Auth } from "./HomeScreen/Auth/Auth";
import { PrivacyPolicy } from "./PrivacyPolicy/PrivacyPolicy";
import { RefundPolicy } from "./RefundPolicy/RefundPolicy";
import { Schollarship } from "./Schollarship/Schollarship";
import { EntranceTestDetails } from "./EntranceTestDetails/EntranceTestDetails";
import { Blog } from "./Blog/Blog";
import { Institute } from "./Institute/Institute";

export const Home = () => {
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn); // Access adminAuth state

  return (
    <div className="app-container">
      <Header />
      <div>
        <Routes>
          {/* Default route for homepage */}

          <Route path="/" element={<HomeScreen />} />
         
          <Route path="about" element={<About />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="schollarship/*" element={<Schollarship />} />
          <Route path="institute/*" element={<Institute />} />
          <Route path="blog/*" element={<Blog />} />

          <Route
            path="dashboard/*"
            element={
              isLoggedIn ? <Dashboard /> : <Navigate to="/auth/*" replace />
            }
          />
          <Route path="entrance-test-details/*" element={<EntranceTestDetails />} />
          <Route
            path="auth/*"
            element={
              !isLoggedIn ? <Auth /> : <Navigate to="/dashboard/*" replace />
            }
          />

          <Route path="quiz/*" element={<Quiz />} />
          {/* Catch-all for invalid routes, redirecting to homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
