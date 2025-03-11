import { apiRequest, handleErrors } from "../../../../../Utils/apiHandler";

// New Profile API Handlers
export const getProfileHandler = async (setIsLoading, showAlert) => {
  const url = "/user/profile/get";

  setIsLoading(true);
  const token = localStorage.getItem("token");
  try {
    const result = await apiRequest(url, null, token, "get");
    const data = result.data;

    return data;
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};

export const updateProfileHandler = async (data, setIsLoading, showAlert) => {
  const url = "/user/profile/update";
  const obj = data;

  setIsLoading(true);

  try {
    const token = localStorage.getItem("token");
    const result = await apiRequest(url, obj, token, "post");
    const data = result.data;

    return data;
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};

export const getTestResultsHandler = async (setIsLoading, showAlert) => {
  const url = "/user/result/getUserResult";

  setIsLoading(true);
  const token = localStorage.getItem("token");

  try {
    const result = await apiRequest(url, null, token, "get");
    const data = result.data;

    return data;
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};

export const getUserProfileHandler = async (setIsLoading, showAlert) => {
  const url = "/user/profile/getUserProfile";

  setIsLoading(true);
  const token = localStorage.getItem("token");

  try {
    const result = await apiRequest(url, null, token, "get");
    const data = result.data;

    return data;
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};

export const updateUserProfileHandler = async (
  data,
  setIsLoading,
  showAlert
) => {
  const url = "/user/profile/updateUserProfile";
  const obj = data;

  setIsLoading(true);

  try {
    const token = localStorage.getItem("token");
    const result = await apiRequest(url, obj, token, "post");
    const data = result.data;

    return data;
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};
