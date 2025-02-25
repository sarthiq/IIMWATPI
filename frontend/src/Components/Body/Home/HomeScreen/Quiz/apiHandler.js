import { apiRequest, handleErrors } from "../../../../../Utils/apiHandler";

export const fetchQuestionsHandler = async (setIsLoading, showAlert) => {
    //above authentication will be here --
    const obj = {quizId:"1"};
    const url = "/user/quiz/getQuestions";
  
    setIsLoading(true);
  
    try {
      
      const result = await apiRequest(url, obj, "", "post");
      const data = result.data;
  
      return data;
    } catch (e) {
      
      handleErrors(e, showAlert);
    } finally {
      setIsLoading(false);
    }
  };

  export const submitAnswersHandler = async (answers,setIsLoading, showAlert) => {
    //above authentication will be here --
    const obj = {quizId:"1",...answers};
    const url = "/user/quiz/submitQuiz";
  
    setIsLoading(true);
  
    try {
      
      const result = await apiRequest(url, obj, "", "post");
      const data = result.data;
  
      return data;
    } catch (e) {
      handleErrors(e, showAlert);
    } finally {
      setIsLoading(false);
    }
  };
  