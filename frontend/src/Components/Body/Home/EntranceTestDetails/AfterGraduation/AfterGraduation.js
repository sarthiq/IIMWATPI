import { Routes, Route, Navigate } from "react-router-dom";
import { AfterGraduationHome } from "./AfterGraduationHome/AfterGraduationHome";
import { ExamDetails } from "../UI/ExamDetails/ExamDetails";
import { categories } from "./Data/examData";

export const AfterGraduation = () => {
  return (
    <Routes>
      <Route path="/" element={<AfterGraduationHome />} />
      <Route path="exam-details/:examId" element={<ExamDetails categories={categories} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
