import { Navigate, Route, Routes } from "react-router-dom";
import { QuizHome } from "./Home/Home";
import { Question } from "./Question/Question";
import { Result } from "./Result/Result";
import { useEffect, useState } from "react";
import { useAlert } from "../../../../UI/Alert/AlertContext";
import { fetchQuestionsHandler } from "./apiHandler";

export const Home = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const { showAlert } = useAlert();
  const [userAnswer, setUserAnswer] = useState({});
  const [questions, setQuestions] = useState([]);
  const [timeDuration, setTimeDuration] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetchQuestionsHandler(setIsDataLoading, showAlert);

      if (response) {
        setQuestions(response.data);
      }
    };

    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <QuizHome
              setTimeDuration={setTimeDuration}
              isDataLoading={isDataLoading}
            />
          }
        />

        <Route
          path="question"
          element={
            <Question
              questions={questions}
              setTimeDuration={setTimeDuration}
              setUserAnswer={setUserAnswer}
            />
          }
        />

        <Route
          path="result"
          element={
            <Result userAnswer={userAnswer} timeDuration={timeDuration} />
          }
        />
        {/* Catch-all for invalid routes, redirecting to homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
