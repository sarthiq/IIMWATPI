import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Profile } from "./Profile/Profile";

export const Dashboard = () => {
  return (
    <Routes>
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="profile" replace />} />
    </Routes>
  );
};
