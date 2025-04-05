import styles from "./CRHome.module.css";
import { Link } from "react-router-dom";
import {
  FaBrain,
  FaUserCircle,
  FaSearch,
  FaChevronRight,
} from "react-icons/fa";
import { useAlert } from "../../../../../../UI/Alert/AlertContext";
import { useEffect, useState } from "react";
import { getTestResultsHandler } from "../../apiHandler";

import data from "./data-v2.json";

const CommonPersonalityTypes = data["Common Personality Types"];

let CareerRecommendations = [];

try {
  CareerRecommendations = data["Career Recommendations"] || [];
} catch (error) {
  console.error("Error loading data from JSON:", error);
}




const getPersonalityLabel = (trait, score) => {
  const labels = {
    extraversion: { low: "Introvert", high: "Extrovert" },
    agreeableness: { low: "Self-Centered", high: "Empathetic" },
    conscientiousness: { low: "Unorganized", high: "Organized" },
    neuroticism: { low: "Emotionally Stable", high: "Emotional" },
    openness: { low: "Rigid", high: "Early Adopter" },
  };

  return score > 50 ? labels[trait].high : labels[trait].low;
};

const calculatePersonalityTypeMatch = (personalityResults) => {
  if (!personalityResults?.result) {
    console.log("No personality results found");
    return [];
  }

  // Check if CommonPersonalityTypes exists
  if (!CommonPersonalityTypes) {
    console.error("CommonPersonalityTypes is not defined");
    return [];
  }

  // Define the trait mappings with their corresponding scores
  const traitMappings = {
    extraversion: {
      left: "Introvert",
      right: "Extrovert",
      score: personalityResults.result.extraversion
    },
    agreeableness: {
      left: "Self-Centered",
      right: "Altruist",
      score: personalityResults.result.agreeableness
    },
    conscientiousness: {
      left: "Unorganized",
      right: "Organized",
      score: personalityResults.result.conscientiousness
    },
    neuroticism: {
      left: "Emotionally Stable",
      right: "Emotional",
      score: personalityResults.result.neuroticism
    },
    openness: {
      left: "Rigid",
      right: "Early Adopter",
      score: personalityResults.result.openness
    }
  };

  //console.log("Trait Mappings:", traitMappings);

  try {
    // Calculate match score for each personality type
    const personalityTypeScores = Object.entries(CommonPersonalityTypes).map(([type, traits]) => {
      let matchScore = 0;
      
      //console.log(`Calculating score for ${type} with traits:`, traits);
      
      // For each trait in the personality type
      traits.forEach(trait => {
        // Find which trait dimension this trait belongs to
        for (const [dimension, mapping] of Object.entries(traitMappings)) {
          if (trait === mapping.left || trait === mapping.right) {
            // If the trait is on the "left" side, subtract from 100
            if (trait === mapping.left) {
              const traitScore = 100 - mapping.score;
              matchScore += traitScore;
              //console.log(`  - ${trait} (${dimension}): ${traitScore} (100 - ${mapping.score})`);
            } else {
              // If the trait is on the "right" side, use the score directly
              matchScore += mapping.score;
              //console.log(`  - ${trait} (${dimension}): ${mapping.score}`);
            }
            break;
          }
        }
      });
      
      //console.log(`  Total score for ${type}: ${matchScore}`);
      return { type, matchScore };
    });

    //console.log("Personality Type Scores:", personalityTypeScores);

    // Sort by match score and get top 3
    const topTypes = personalityTypeScores
      .sort((a, b) => {
        // First sort by score (descending)
        if (b.matchScore !== a.matchScore) {
          return b.matchScore - a.matchScore;
        }
        // If scores are equal, sort alphabetically by type name
        return a.type.localeCompare(b.type);
      })
      .slice(0, 3)
      .map(score => score.type);

    //console.log("Top 3 Personality Types:", topTypes);
    
    // Ensure we always return 3 personality types
    // If we have fewer than 3, add the remaining personality types from personalityTypeArray
    if (topTypes.length < 3) {
      //  console.log(`Only found ${topTypes.length} personality types, adding more from personalityTypeArray`);
      const remainingTypes = data["personalityTypeArray"].filter(type => !topTypes.includes(type));
      //console.log("Remaining types:", remainingTypes);
      topTypes.push(...remainingTypes.slice(0, 3 - topTypes.length));
      //console.log("Final top types:", topTypes);
    }
    
    return topTypes;
  } catch (error) {
    console.error("Error in calculatePersonalityTypeMatch:", error);
    return [];
  }
};

export const CRHome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [iqResults, setIqResults] = useState(null);
  const [personalityResults, setPersonalityResults] = useState(null);
  const [interestResults, setInterestResults] = useState(null);
  const { showAlert } = useAlert();
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    fetchTestResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTestResults = async () => {
    const response = await getTestResultsHandler(setIsLoading, showAlert);

    if (
      response &&
      response.success &&
      response.data &&
      response.data.results
    ) {
      // Safely access nested properties with optional chaining
      setIqResults(response.data.results?.iq?.detailedResult || null);
      setPersonalityResults(
        response.data.results?.personality?.detailedResult || null
      );
      setInterestResults(response.data?.interests || null);
    } else {
      // Set all results to null if no data is available
      setIqResults(null);
      setPersonalityResults(null);
      setInterestResults(null);
    }
  };

  useEffect(() => {
    if (personalityResults && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [personalityResults]);

  const getCareerRecommendations = (iqResults, personalityResults, interestResults) => {
    //console.log("Starting getCareerRecommendations with:", {
    //  iqResults,
    //  personalityResults,
    //  interestResults
    //});

    if (!CareerRecommendations || !CommonPersonalityTypes) {
      console.error("Required data is not loaded");
      return [];
    }

    // Get IQ category
    const iqScore = iqResults?.result?.label ? (!isNaN(iqResults.result.label) ? Number(iqResults.result.label) : 0) : 0;
    const iqCategory = iqScore < 80 ? 0 : 
                      iqScore < 90 ? 80 : 
                      iqScore < 100 ? 90 : 
                      iqScore < 120 ? 100 : 120;

    //console.log("IQ Category:", iqCategory);

    // Get top 3 matching personality types
    const matchingPersonalityTypes = calculatePersonalityTypeMatch(personalityResults);
    //console.log("Matching Personality Types:", matchingPersonalityTypes);

    // Map personality types to their IDs
    const personalityTypeToId = {};
    data["personalityTypeArray"].forEach((type, index) => {
      personalityTypeToId[type] = index + 1; // IDs start from 1
    });

    //console.log("Personality Type to ID mapping:", personalityTypeToId);

    const recommendations = [];

    if (interestResults?.['16']) {
      const interests = Array.isArray(interestResults['16']) ? 
        interestResults['16'] : 
        Object.entries(interestResults['16'])
          .sort(([,a], [,b]) => b - a)
          .map(([subject]) => subject);

      //console.log("Processing interests:", interests);

      // Process each career field in the CareerRecommendations array
      CareerRecommendations.forEach(careerField => {
        // Get the field name (e.g., "STEM (Science, Technology, Engineering, and Mathematics)")
        const fieldName = Object.keys(careerField)[0];
        const careerOptions = careerField[fieldName];

        // Extract the main category from the field name (e.g., "STEM" from "STEM (Science, Technology, Engineering, and Mathematics)")
        const mainCategory = fieldName.split(' ')[0].toLowerCase();
        
        // Check if any interest matches this field
        const matchingInterest = interests.find(interest => {
          // Get the first word of the interest
          const firstWord = interest.split(' ')[0].toLowerCase();
          
          // Simple matching based on first word
          if (mainCategory === 'stem' && 
              (firstWord === 'science' || 
               firstWord === 'technology' || 
               firstWord === 'engineering' || 
               firstWord === 'mathematics')) {
            return true;
          }
          
          if (mainCategory === 'medical' && 
              (firstWord === 'medical' || 
               firstWord === 'health' || 
               firstWord === 'medicine' || 
               firstWord === 'biology')) {
            return true;
          }
          
          if (mainCategory === 'business' && 
              (firstWord === 'business' || 
               firstWord === 'economics' || 
               firstWord === 'finance' || 
               firstWord === 'management')) {
            return true;
          }
          
          if (mainCategory === 'social' && 
              (firstWord === 'social' || 
               firstWord === 'psychology' || 
               firstWord === 'sociology' || 
               firstWord === 'anthropology')) {
            return true;
          }
          
          if (mainCategory === 'arts' && 
              (firstWord === 'arts' || 
               firstWord === 'humanities' || 
               firstWord === 'literature' || 
               firstWord === 'history')) {
            return true;
          }
          
          // Direct match with the main category
          return firstWord === mainCategory;
        });

        if (!matchingInterest) {
          return; // Skip this field if no matching interest
        }

        //console.log(`Processing ${fieldName} for interest: ${matchingInterest}`);

        if (!careerOptions || !Array.isArray(careerOptions)) {
          //console.log(`No valid career options found for ${fieldName}`);
          return;
        }
        //console.log("Career Options:", careerOptions);

        // Process each career option
        careerOptions.forEach(option => {
          // Get the personality ID for this option
          const personalityId = option.ID;
          
          // Check if this personality ID matches any of the user's personality types
          const matchingPersonality = matchingPersonalityTypes.find(type => {
            // Get the index of the personality type in the personalityTypeArray
            const personalityIndex = data["personalityTypeArray"].indexOf(type);
            // Add 1 to match the ID (since IDs start from 1)
            return personalityIndex + 1 === personalityId;
          });
          
          if (!matchingPersonality) {
            return; // Skip if personality doesn't match
          }
          //console.log("Matching Personality:", matchingPersonality);  
          // Check if IQ range matches
          const optionIQStart = option["IQ Range"][0];
          const optionIQEnd = option["IQ Range"][1];
          const userIQ = iqCategory;

          //console.log("Comparing:", {
          //  personality: {
          //    option: option["Personality Cluster"],
          //    user: matchingPersonality,
          //    id: option["ID"],
          //    user_id: data["personalityTypeArray"].indexOf(matchingPersonality) + 1
          //  },
          //  iqRange: {
          //    option: [optionIQStart, optionIQEnd],
          //    user: userIQ
          //  }
          //});

          // Check if IQ falls within range
          if (userIQ >= optionIQStart && userIQ <= optionIQEnd) {
            //console.log("Found matching recommendation:", {
            //  field: fieldName,
            //  personality: matchingPersonality,
            //  id: personalityId,
            //  iqRange: [optionIQStart, optionIQEnd]
            //});

            // Get the personality type name from personalityTypeArray based on ID
            const personalityTypeName = data["personalityTypeArray"][personalityId - 1];

            recommendations.push({
              fieldName: fieldName,
              personalityType: personalityTypeName,
              fieldOfStudy: option["Recommended Field of Study"],
              courses: option["Relevant Courses"].split(", "),
              careers: option["Potential Career Pathways"].split(", "),
              colleges: option["Recommended Colleges"] ? option["Recommended Colleges"].split(", ") : []
            });
          }
        });
      });
    }

    //console.log("Final recommendations:", recommendations);
    return recommendations;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Career Assessment Center</h1>

      <div className={styles.assessmentCards}>
        {/* IQ Assessment Card */}
        <div className={styles.assessmentCard}>
          <div className={styles.cardHeader}>
            <FaBrain className={styles.cardIcon} />
            <h2>IQ Assessment</h2>
          </div>

          {iqResults ? (
            <div className={styles.resultContent}>
              <div className={styles.iqResult}>
                <div className={styles.iqScore}>{iqResults.result.label}</div>
              </div>
              <Link to="/quiz/1" className={styles.retakeButton}>
                Take Test Again
              </Link>
            </div>
          ) : (
            <div className={styles.emptyContent}>
              <div className={styles.testDescription}>
                <h3>Comprehensive IQ Assessment</h3>
                <p>
                  45-minute test measuring cognitive abilities across multiple
                  domains
                </p>
              </div>
              <ul className={styles.testPoints}>
                <li>Logical Reasoning</li>
                <li>Pattern Recognition</li>
                <li>Numerical Ability</li>
                <li>Spatial Visualization</li>
              </ul>
              <Link to="/quiz/1" className={styles.startButton}>
                Start Test
              </Link>
            </div>
          )}
        </div>

        {/* Personality Assessment Card */}
        <div className={styles.assessmentCard}>
          <div className={styles.cardHeader}>
            <FaUserCircle className={styles.cardIcon} />
            <h2>Personality Assessment</h2>
          </div>

          {personalityResults ? (
            <div className={styles.resultContent}>
              <div className={styles.personalityTraits}>
                {Object.entries(personalityResults.result).map(
                  ([trait, score]) => (
                    <div key={trait} className={styles.traitContainer}>
                      <div className={styles.traitHeader}>
                        <span className={styles.traitTitle}>
                          {trait.charAt(0).toUpperCase() + trait.slice(1)}
                        </span>
                        <span
                          className={styles.traitScoreAnimated}
                          style={{
                            "--score-width": `${score}%`,
                            "--score-number": Math.round(score),
                          }}
                        />
                      </div>
                      <div className={styles.traitBar}>
                        <div
                          className={styles.traitProgress}
                          style={{ "--score-width": `${score}%` }}
                        />
                      </div>
                      <div className={styles.traitLabels}>
                        <span className={styles.lowLabel}>
                          {getPersonalityLabel(trait, 0)}
                        </span>
                        <span className={styles.highLabel}>
                          {getPersonalityLabel(trait, 100)}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
              <Link to="/quiz/2" className={styles.retakeButton}>
                Take Test Again
              </Link>
            </div>
          ) : (
            <div className={styles.emptyContent}>
              <div className={styles.testDescription}>
                <h3>Personality Profile Analysis</h3>
                <p>30-minute assessment of your personality dimensions</p>
              </div>
              <ul className={styles.testPoints}>
                <li>Work Style Analysis</li>
                <li>Behavioral Patterns</li>
                <li>Team Dynamics</li>
                <li>Stress Management</li>
              </ul>
              <Link to="/quiz/2" className={styles.startButton}>
                Start Test
              </Link>
            </div>
          )}
        </div>

        {/* Interest Assessment Card */}
        <div className={styles.assessmentCard}>
          <div className={styles.cardHeader}>
            <FaSearch className={styles.cardIcon} />
            <h2>Interest Analysis</h2>
          </div>

          {interestResults && interestResults["16"] ? (
            <div className={styles.resultContent}>
              <div className={styles.interestAreas}>
                {(Array.isArray(interestResults["16"])
                  ? interestResults["16"].map((subject) => ({ subject }))
                  : Object.entries(interestResults["16"]).map(
                      ([subject, score]) => ({ subject })
                    )
                ).map(({ subject }, index) => (
                  <div key={subject} className={styles.interestItem}>
                    <span className={styles.interestNumber}>{index + 1}.</span>
                    <span className={styles.interestName}>{subject}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/dashboard/interest/graduation-test"
                className={styles.retakeButton}
              >
                Take Test Again
              </Link>
            </div>
          ) : (
            <div className={styles.emptyContent}>
              <div className={styles.testDescription}>
                <h3>Career Interest Inventory</h3>
                <p>25-minute assessment to discover your career interests</p>
              </div>
              <ul className={styles.testPoints}>
                <li>Subject Preferences</li>
                <li>Work Environment</li>
                <li>Career Goals</li>
                <li>Industry Interests</li>
              </ul>
              <Link
                to="/dashboard/interest/graduation-test"
                className={styles.startButton}
              >
                Start Test
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Career Recommendations Section */}
      {(iqResults && personalityResults && interestResults) && (
        <div className={styles.recommendationsSection}>
          <h2 className={styles.sectionTitle}>Recommended Career Paths</h2>
          <div className={styles.careerGrid}>
            {getCareerRecommendations(iqResults, personalityResults, interestResults)
              .map((recommendation, index) => (
                <div key={index} className={styles.careerCard}>
                  <h3 className={styles.categoryTitle}>
                    {recommendation.fieldName}
                  </h3>
                  <div className={styles.personalityType}>
                    Recommended for: {recommendation.personalityType}
                  </div>
                  <div className={styles.recommendationContent}>
                    <div className={styles.fieldOfStudy}>
                      <h4>Recommended Field of Study</h4>
                      <p>{recommendation.fieldOfStudy}</p>
                    </div>
                    <div className={styles.courses}>
                      <h4>Relevant Courses</h4>
                      <ul>
                        {recommendation.courses.map((course, idx) => (
                          <li key={idx}>{course}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.careers}>
                      <h4>Potential Career Pathways</h4>
                      <ul>
                        {recommendation.careers.map((career, idx) => (
                          <li key={idx}>{career}</li>
                        ))}
                      </ul>
                    </div>
                    {recommendation.colleges && recommendation.colleges.length > 0 && (
                      <div className={styles.colleges}>
                        <h4>Recommended Colleges</h4>
                        <ul>
                          {recommendation.colleges.map((college, idx) => (
                            <li key={idx}>{college}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Exploration Links Section */}
      <div className={styles.explorationSection}>
        <h2 className={styles.sectionTitle}>Explore More Options</h2>
        <div className={styles.explorationLinks}>
          <Link to="/institute" className={styles.explorationCard}>
            <div className={styles.cardContent}>
              <div>
                <h3>Explore Colleges</h3>
                <p>Discover top institutions and find your perfect fit</p>
              </div>
              <span className={styles.arrowButton}>
                <FaChevronRight />
              </span>
            </div>
          </Link>
          <Link to="/entrance-test-details" className={styles.explorationCard}>
            <div className={styles.cardContent}>
              <div>
                <h3>Explore Entrance Exams</h3>
                <p>Learn about important entrance tests and preparation tips</p>
              </div>
              <span className={styles.arrowButton}>
                <FaChevronRight />
              </span>
            </div>
          </Link>
          <Link to="/dashboard/career-options/summary" className={styles.explorationCard}>
            <div className={styles.cardContent}>
              <div>
                <h3>Explore Career Options</h3>
                <p>Research various career paths and opportunities</p>
              </div>
              <span className={styles.arrowButton}>
                <FaChevronRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
