import { Routes, Route, Navigate } from "react-router-dom";
import { SchollarshipHome } from "./SchollarshipHome/SchollarshipHome";

export const Schollarship = () => {
    
    return(
        <Routes>
            <Route path="/" element={<SchollarshipHome />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>   
    )
}