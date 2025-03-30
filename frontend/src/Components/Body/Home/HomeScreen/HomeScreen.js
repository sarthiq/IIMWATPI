import React, { useEffect } from "react";
import "./HomeScreen.css"; // Unique CSS for this page
import { Banner } from "./Banner/Banner"
import { TestSection } from "./TestSection/TestSection";
import { About } from "../About/About";
//import { Career} from "./Career/Career";
import { EntranceExamSummary } from "./EntranceExamSummary/EntranceExamSummary";
import { ScholarshipSummary } from "./SchollarshipSummary/SchollarshipSummary";
import { AILiteracySummary } from "./AILiteracySummary/AILiteracySummary";


export const HomeScreen = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Run once when component mounts

  return (
    <div className="quiz-selection-page">
      <Banner/>
      <TestSection/>
      <div className="summary-sections">
        <EntranceExamSummary/>
        <ScholarshipSummary/>
        <AILiteracySummary/>
      </div>
      {/* <Career/> */}
      <About/>

     
     
    </div>
  );
};
