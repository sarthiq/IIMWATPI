import { Routes, Route, Navigate } from "react-router-dom";
import { GraduationExamHome } from "./GraduationExamHome/GraduationExamHome";
import { examCategories } from "./Data/examData";
import { ExamDetails } from "../UI/ExamDetails/ExamDetails";

export const GraduationExam = () => {
  return (
    <Routes>
      <Route path="/" element={<GraduationExamHome />} />
      <Route path="/exam-details/:examId" element={<ExamDetails categories={examCategories} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
