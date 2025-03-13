import { Routes, Route, Navigate } from "react-router-dom";
import { InterestHome } from "./InterestHome/InterestHome";

export const Interest = () => {
  return (
    <Routes>
      <Route path="/" element={<InterestHome />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
