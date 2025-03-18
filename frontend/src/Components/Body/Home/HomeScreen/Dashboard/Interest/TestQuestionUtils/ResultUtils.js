import { useEffect, useState } from "react";
import { useAlert } from "../../../../../../UI/Alert/AlertContext";
import { addInterestHandler } from "../../apiHandler";

export const ResultUtils = ({ results, grade }) => {
  const {showAlert}=useAlert();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    addInterestHandler({
      result: results,
      type: grade,
    }, setIsLoading, showAlert);
  }, [results, grade]);
  
  return (
    <div className="results-container">
      <h2 className="text-center mb-4">Your Career Recommendations</h2>
      <div className="recommendations">
        {results.map((result, index) => (
          <div key={index} className="recommendation-card mb-3 p-4 border rounded">
            <h3 className="recommendation-title">
              Recommendation {index + 1}
            </h3>
            <p className="recommendation-text">
              {result}
            </p>
            {index === 0 && (
              <div className="primary-recommendation mt-2">
                <strong>
                  {grade === 10 && "Recommended Stream for Class 10"}
                  {grade === 12 && "Recommended Stream for Class 12"}
                  {grade === 16 && "Recommended Career Path for Graduation"}
                </strong>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};