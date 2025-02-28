import React from "react";
import "./HomeScreen.css"; // Unique CSS for this page
import { Banner } from "./Banner/Banner"
import { TestSection } from "./TestSection/TestSection";
import { Career} from "./Career/Career";




export const HomeScreen = () => {
  return (
    <div className="quiz-selection-page">
      <Banner/>
      <TestSection/>
      <Career/>
     
     
    </div>
  );
};
