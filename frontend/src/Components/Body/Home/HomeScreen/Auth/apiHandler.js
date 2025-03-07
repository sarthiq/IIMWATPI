import { apiRequest, handleErrors } from "../../../../../Utils/apiHandler";

export const loginHandler = async (data, setIsLoading, showAlert) => {
  const url = "/user/auth/login";
  const obj = data;

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

export const signUpHandler = async (data, setIsLoading, showAlert) => {
  const url = "/user/auth/signUp";
  const obj = data;

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
