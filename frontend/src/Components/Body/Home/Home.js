import { Navigate, Route, Routes } from "react-router-dom";
import "./home.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { TestSection } from "./TestSection/TestSection";
import { VideoSection } from "./VideoSection/VideoSection";
import { HomeScreen } from "./HomeScreen/HomeScreen";
import { Quiz } from "./HomeScreen/Quiz/Quiz";


export const Home = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        <Routes>
          {/* Default route for homepage */}
          {/* <Route path="/" element={<Banner />} /> */}
          <Route path="/" element={<TestSection />} />
          <Route path="/" element={<VideoSection />} />


          <Route path="/" element={<HomeScreen />} />

          <Route path="quiz/*" element={<Quiz />} />
          {/* Catch-all for invalid routes, redirecting to homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
