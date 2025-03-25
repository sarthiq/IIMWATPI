import { Route, Routes } from "react-router-dom";
import { InstituteHome } from "./InstituteHome/InstituteHome";
import { InstituteDetails } from "./InstituteDetails/InstituteDetails";
import { Navigate } from "react-router-dom";

export const Institute = () => {
  return (
    <Routes>
      <Route path="/" element={<InstituteHome />} />
      <Route path="route/:id" element={<InstituteDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
