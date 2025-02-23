import { apiRequest, handleErrors } from "../../../../../../Utils/apiHandler";

export const quizHandler = async (formData, url, setIsLoading, showAlert) => {
    //above authentication will be here --
    const obj = formData;
    const url = `/admin/quiz/${url}`;
  
    setIsLoading(true);
  
    try {
      const token = localStorage.getItem("adminToken");
      const result = await apiRequest(url, obj, token, "post");
      const data = result.data;
  
      return data;
    } catch (e) {
      handleErrors(e, showAlert);
    } finally {
      setIsLoading(false);
    }
  };
  
  

  
    