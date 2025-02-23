import { Navigate, Route, Routes } from "react-router-dom";
import { QuestionHome } from "./Home/Home";
import {  AnswerHome } from "./Answer/Answer";

export const Question = () => {
  return (
    <>
    
    <Routes>
        <Route path="" element={<QuestionHome/>}/>
        <Route path="question/:id/*" element={<AnswerHome/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
};
