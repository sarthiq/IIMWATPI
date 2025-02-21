import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home";

export const Quiz = () => {
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
