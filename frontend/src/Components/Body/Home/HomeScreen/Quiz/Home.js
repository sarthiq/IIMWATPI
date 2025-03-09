import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { QuizHome } from "./Home/Home";
import { Question } from "./Question/Question";
import { Result } from "./Result/Result";
import { useEffect, useState } from "react";
import { useAlert } from "../../../../UI/Alert/AlertContext";
import { fetchQuestionsHandler } from "./apiHandler";
import { PersonalityQuestion } from "./Question/PersonalityQuestion";
import { CreativityQuestion } from "./Question/CreativityQuestion";
import Certificate from "./Certificate/Certificate";

export const Home = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const { showAlert } = useAlert();
  const [userAnswer, setUserAnswer] = useState({});
  const [userPersonalityAnswer, setUserPersonalityAnswer] = useState([]);
  const [userCreativityAnswer, setUserCreativityAnswer] = useState({});
  const [questions, setQuestions] = useState([]);
  const [timeDuration, setTimeDuration] = useState({});
  const [quizInfo, setQuizInfo] = useState({});
  const [userData, setUserData] = useState({name: "", email: "", age: "",token: ""});
  const [result, setResult] = useState(null); // State to store quiz result


  const params = useParams();

  const id = params.id;
  //console.log(userPersonalityAnswer);
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetchQuestionsHandler(
        id,
        setIsDataLoading,
        showAlert
      );

      if (response) {
        setQuestions(response.data);
        setQuizInfo(response.quiz);
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
              quizInfo={quizInfo}
              setTimeDuration={setTimeDuration}
              isDataLoading={isDataLoading}
            />
          }
        />

        <Route
          path="question"
          element={
            quizInfo.typeId === "personality" ? (
              <PersonalityQuestion
                questions={questions}
                setTimeDuration={setTimeDuration}
                setUserPersonalityAnswer={setUserPersonalityAnswer}
              />
            ) : quizInfo.typeId === "creativity" ? (
              <CreativityQuestion
                questions={questions}
                setTimeDuration={setTimeDuration}
                setUserCreativityAnswer={setUserCreativityAnswer}
              />
            ) : (
              <Question
                questions={questions}
                setTimeDuration={setTimeDuration}
                setUserAnswer={setUserAnswer}
              />
            )
          }
        />

        <Route
          path="result"
          element={
            <Result
              userAnswer={userAnswer}
              userPersonalityAnswer={userPersonalityAnswer}
              userCreativityAnswer={userCreativityAnswer}
              timeDuration={timeDuration}
              quizInfo={quizInfo}
              setResult={setResult}
              result={result}
              setUserData={setUserData}
              userData={userData}
            />
          }
        />
        <Route path="certificate" element={<Certificate quizInfo={quizInfo} userData={userData} setUserData={setUserData} result={result} />} />
        {/* Catch-all for invalid routes, redirecting to homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
