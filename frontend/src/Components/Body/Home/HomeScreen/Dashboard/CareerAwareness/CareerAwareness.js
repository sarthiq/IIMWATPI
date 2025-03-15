import { Routes, Route, Navigate } from "react-router-dom";
import { CAwarenessHome } from "./CAwarenessHome/CAwarenessHome";
// Import the new components for each route
import NinthGrade from "./NingthGrade/NinthGrade";
import EleventhGrade from "./EleventhGrade/EleventhGrade";
import Graduation from "./Graducation/Graduation";
import PostGraduation from "./PostGraduation/PostGraduation";
import AdvancedStudies from "./AdvancedStudies/AdvancedStudies";
import BaseUIModel from "./BaseUIModel/BaseUIModel";

export const CareerAwareness = () => {
  return (
    <Routes>
      <Route path="/" element={<CAwarenessHome />} />
      <Route path="9th" element={<NinthGrade />} />
      <Route path="11th" element={<EleventhGrade />} />
      <Route path="graduation" element={<Graduation />} />
      <Route path="post-graduation" element={<PostGraduation />} />
      <Route path="advanced-studies" element={<AdvancedStudies />} /> 
      <Route path="base-ui-model" element={<BaseUIModel />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes> 
  );
};

