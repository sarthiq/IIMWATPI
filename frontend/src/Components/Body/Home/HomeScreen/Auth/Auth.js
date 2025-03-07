import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";

export const Auth = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
};