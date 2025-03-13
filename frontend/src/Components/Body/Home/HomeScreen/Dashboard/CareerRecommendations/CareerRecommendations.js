import { Routes, Route, Navigate } from "react-router-dom";
import { CRHome } from "./CRHome/CRHome";
import { CRResult } from "./CRResult/CareerRecommendations";
import { SecQuestion } from "./Interest/InterestHome/SecQuestion/SecQuestion";
import { Section } from "./Interest/InterestHome/Section/Section";


export const CareerRecommendations = () => {
  return (
   
    <Routes>
      <Route path="/" element={<CRHome />} />   
      <Route path="result" element={<CRResult />} />
      <Route path="interest-section" element={<Section />} />
      <Route path="interest-secQuestion" element={<SecQuestion />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

