import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Store } from "./Store";
import { AlertProvider } from "./Components/UI/Alert/AlertContext";
import { setAdminAuthToken, adminLogin } from "./Store/Admin/auth";
import { setUserAuthToken, userLogin } from "./Store/User/auth";
const root = ReactDOM.createRoot(document.getElementById("root"));

const RootComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const env = process.env.REACT_APP_ENV;
  
  useEffect(() => {
    const initializeApp = async () => {
      const adminToken = localStorage.getItem("adminToken");
      const userToken = localStorage.getItem("token");

      if (adminToken) {
        // Dispatch to Redux store to set authentication state
        Store.dispatch(adminLogin()); // Update Redux state (isLoggedIn = true)
        Store.dispatch(setAdminAuthToken(adminToken)); // Update Redux token
      }

      if (userToken) {
        Store.dispatch(userLogin());
        Store.dispatch(setUserAuthToken(userToken)); // Update Redux token
      }

      // Add a 2-second delay to ensure the spinner shows for a minimum time
      setTimeout(() => {
        setIsInitializing(false); // Initialization complete
      }, env==='testing' ? 500 : 4000);
    };

    initializeApp();
  }, []);

  if (isInitializing) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "#FCFCFF",
        }}
      >
        <video
          src="/Logo.webm"
          autoPlay
          loop
          muted
          style={{
            width: "200px",
            marginBottom: "20px",
          }}
        />
      </div>
    );
  }

  return (
    <React.StrictMode>
      <Provider store={Store}>
        <AlertProvider>
          <App />
        </AlertProvider>
      </Provider>
    </React.StrictMode>
  );
};

root.render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
