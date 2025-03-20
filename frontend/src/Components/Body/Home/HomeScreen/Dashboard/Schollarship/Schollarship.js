import { Routes, Route, Navigate } from "react-router-dom";
import { SchollarshipHome } from "./SchollarshipHome/SchollarshipHome";
import { SchollarshipDetails } from "./SchollarshipDetails/SchollarshipDetails";

export const Schollarship = () => {
    
    return(
        <Routes>
            <Route path="/" element={<SchollarshipHome />} />
            <Route path="route/:route" element={<SchollarshipDetails />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>   
    )
}