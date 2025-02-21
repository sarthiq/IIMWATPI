import { Navigate, Route, Routes } from "react-router-dom";
import { QuizHome } from "./Home/Home";
import { Question } from "./Question/Question";
import { Result } from "./Result/Result";

export const Home = () => {
  return <>
  <Routes>
    
    <Route path="/" element={<QuizHome/>}/>

    <Route path="question/:questionId" element={<Question />} />
    
        <Route path="result" element={<Result />} />
     {/* Catch-all for invalid routes, redirecting to homepage */}
     <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
  </>;
};
