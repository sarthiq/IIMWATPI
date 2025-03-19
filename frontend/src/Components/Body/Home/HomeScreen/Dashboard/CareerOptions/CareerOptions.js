import { Routes, Route, Navigate } from "react-router-dom";
import { CareerHome } from "./CareerHome/CareerHome";
import { CareerSummary } from "./CareerSummary/CareerSummary";
import { CareerTree } from "./CareerTree/CareerTree";

export const CareerOptions=()=>{
    return(
        <Routes>
            <Route path="/" element={<CareerHome />} />
            <Route path="summary" element={<CareerSummary />} />
            <Route path="tree" element={<CareerTree />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>   
    )
}