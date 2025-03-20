import { Routes, Route, Navigate } from "react-router-dom";
import { EntranceHome } from "./EntranceHome/EntranceHome";
import { IntermediateExam } from "./IntermediateExam/IntermediateExam";
import { GraduationExam } from "./GraduationExam/GraduationExam";
import { AfterGraduation } from "./AfterGraduation/AfterGraduation";

export const EntranceTestDetails=()=>{
    return(
        
        <Routes>
            <Route path="/" element={<EntranceHome />} />
            <Route path="intermediate/*" element={<IntermediateExam />} />
            <Route path="graduation/*" element={<GraduationExam />} />
            <Route path="after-graduation/*" element={<AfterGraduation />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}