import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { verifyTokenHandler } from "./apiHandler";
import { Spinner } from "react-bootstrap";
import { useAlert } from "../../../../UI/Alert/AlertContext";

export const Quiz = () => {
  
  const token = useSelector((state) => state.userAuth.token);
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    verifyUser();
  }, []);
  
  const verifyUser = async()=>{
    
    if(token){
      const response = await verifyTokenHandler(token, setIsLoading, showAlert);
     if(response && response.status != 200){
    navigate("/auth");
     }
    }
    else{
      navigate("/auth");
    }
    
  }
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Verifying user details...</span>
        </Spinner>
        <span className="ms-2">Verifying user details...</span>
      </div>
    );
  }
  return (
    <>
      <Routes>
        <Route path=":id/*" element={<Home />} />

        {/* Catch-all for invalid routes, redirecting to homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
