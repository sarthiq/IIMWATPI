import { Navigate, Route, Routes } from "react-router-dom";
import { TestHome } from "./TestHome/TestHome";
import { TestQuestion } from "./TestQuestion/TestQuestion";

export const TwelthTest = () => {   
   
   return (
    <Routes>
        <Route path="/" element={<TestHome />} />
        <Route path="test-question" element={<TestQuestion />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
   );
};