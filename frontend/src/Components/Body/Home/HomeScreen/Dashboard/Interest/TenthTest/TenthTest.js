import { Navigate, Route, Routes } from "react-router-dom";
import { TestHome } from "./TestHome/TestHome";
import { TestQuestion } from "./TestQuestion/TestQuestion";
import { ResultUtils } from "../TestQuestionUtils/ResultUtils";
import { useState } from "react";

export const TenthTest = () => {   
    const [results,setResults]=useState([])
   
   return (
    <Routes>
        <Route path="/" element={<TestHome />} />
        <Route path="test-question" element={<TestQuestion setResults={setResults} />} />
        <Route path="result" element={<ResultUtils results={results} grade={10} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
   );
};