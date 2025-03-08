import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";


export const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1>
          <span className="purple-text">Empowering Students Together for a Brighter Future!</span>
        </h1>
        {/* <h1>
          <span className="blue-text">Together for a Brighter Future!</span>
        </h1> */}
        <p className="description">
             
              <Typewriter
            words={[
              'Complementing educational institutions with AI-driven learning and management solutions.',
            ]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>
        <button className="coming-soon-btn">Coming Soon...</button>
      </div>
    </div>
  );
};


