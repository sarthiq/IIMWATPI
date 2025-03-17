import { Navigate, Route, Routes } from "react-router-dom";
import { InterestHome } from "./InterestHome/InterestHome";
import { TenthTest } from "./TenthTest/TenthTest";
import { TwelthTest } from "./TwelthTest/TwelthTest";

export const Interest = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InterestHome />} />
        <Route path="tenth-test/*" element={<TenthTest />} />
        <Route path="twelth-test/*" element={<TwelthTest />} />
        <Route path="*" element={<Navigate to="../" replace />} />
      </Routes>
    </>
  );
};
