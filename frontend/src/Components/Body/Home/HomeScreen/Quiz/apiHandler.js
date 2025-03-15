import { apiRequest, handleErrors } from "../../../../../Utils/apiHandler";

export const fetchQuestionsHandler = async (id, setIsLoading, showAlert) => {
  //above authentication will be here --
  const obj = { quizId: id };
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
export const fetchQuizzesHandler = async (setIsLoading, showAlert) => {
  //above authentication will be here --
  const obj = {};
  const url = "/user/quiz/getQuizzes";

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

export const submitAnswersHandler = async (
  data,
  urlPath,
  token,
  setIsLoading,
  showAlert
) => {
  //above authentication will be here --
  const obj = data;
  //console.log(obj);
  const url = `/user/quiz/${urlPath}`;

  setIsLoading(true);

  try {
    const result = await apiRequest(url, obj, token, "post");
    const data = result.data;

    return data;
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};

export const updateStudentDetailsHandler = async (
  data,
  setIsLoading,
  showAlert
) => {
  //above authentication will be here --
  const obj = data;
  const url = "/user/quiz/updateStudentDetails";

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

export const verifyTokenHandler = async (token, setIsLoading, showAlert) => {
  const url = "/user/verify";
  const obj = {};
  setIsLoading(true);

  try {
    const result = await apiRequest(url, obj, token, "get");
    return result;
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};
