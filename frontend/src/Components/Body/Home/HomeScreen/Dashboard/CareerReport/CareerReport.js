import React, { useState, useEffect } from "react";
import "./CareerReport.css";

// Simplified dummy data
const dummyStudentData = {
  studentName: "Alok Prajapati",
  schoolName: "St. Mary's High School",
  class: "12th Grade - Science"
};

export const CareerReport = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStudentData(dummyStudentData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="report-container">
      <h1>Student Assessment Report</h1>
      
      {loading ? (
        <div>Loading report...</div>
      ) : (
        <>
          <div>
            <h2>Basic Details of Student</h2>
            <div className="details">
              <p>Name : {studentData.studentName}</p>
              <p>School/College : {studentData.schoolName}</p>
              <p>Class/Course : {studentData.class}</p>
            </div>
          </div>

          <div>
            <h2>Recommendation</h2>
            <p>Recommendation details go here...</p>
          </div>

          <div>
            <h2>Action Plan</h2>
            <p>Action plan details go here...</p>
          </div>

          <div>
            <h2>IQ Test Result Explanation</h2>
            <p>IQ test results and explanation go here...</p>
          </div>

          <div>
            <h2>Interest Test Explanation</h2>
            <p>Interest test results and explanation go here...</p>
          </div>

          <div>
            <h2>Personality Test Explanation</h2>
            <p>Personality test results and explanation go here...</p>
          </div>

          <div>
            <button onClick={handleDownload}>Download Report</button>
          </div>
        </>
      )}
    </div>
  );
};

