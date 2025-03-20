import { Routes, Route, Navigate } from "react-router-dom";
import { ExamHome } from "./ExamHome/ExamHome";
import { ExamDetails } from "./ExamDetails/ExamDetails";

export const IntermediateExam = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ExamHome />} />
        <Route path="/:category/:id" element={<ExamDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
