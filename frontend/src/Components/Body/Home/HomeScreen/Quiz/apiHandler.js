import { apiRequest, handleErrors } from "../../../../../Utils/apiHandler";

export const fetchQuestionsHandler = async (id,setIsLoading, showAlert) => {
    //above authentication will be here --
    const obj = {quizId:id};
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

  export const submitAnswersHandler = async (data,urlPath,setIsLoading, showAlert) => {
    //above authentication will be here --
    const obj = data;
    //console.log(obj);
    const url = `/user/quiz/${urlPath}`;
  
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
  