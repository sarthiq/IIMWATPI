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
import {
  stem_careers,
  medical_careers,
  biz_econ_finance_careers,
  social_science_careers,
  arts_media_comm_careers,
} from "./data";
import data from "./data.json";

const CommonPersonalityTypes = data["Common Personality Types"];

let CareerRecommendations = [];

try {
  CareerRecommendations = data["Career Recommendations"] || [];
} catch (error) {
  console.error("Error loading data from JSON:", error);
}

console.log("Initial data load:", {
  CommonPersonalityTypes,
  CareerRecommendations
});

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

  console.log("CommonPersonalityTypes:", CommonPersonalityTypes);

  // Get the user's traits based on scores
  const userTraits = {
    extraversion: personalityResults.result.extraversion > 50 ? "Extrovert" : "Introvert",
    agreeableness: personalityResults.result.agreeableness > 50 ? "Altruist" : "Self-Centered",
    conscientiousness: personalityResults.result.conscientiousness > 50 ? "Organized" : "Unorganized",
    neuroticism: personalityResults.result.neuroticism > 50 ? "Emotional" : "Emotionally Stable",
    openness: personalityResults.result.openness > 50 ? "Early Adopter" : "Rigid"
  };

  console.log("User Traits:", userTraits);

  try {
    // Calculate match score for each personality type
    const personalityTypeScores = Object.entries(CommonPersonalityTypes).map(([type, traits]) => {
      let matchScore = 0;
      traits.forEach(trait => {
        if (Object.values(userTraits).includes(trait)) {
          matchScore++;
        }
      });
      return { type, matchScore };
    });

    console.log("Personality Type Scores:", personalityTypeScores);

    // Sort by match score and get top 3
    const topTypes = personalityTypeScores
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3)
      .map(score => score.type);

    console.log("Top 3 Personality Types:", topTypes);
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
    console.log("Starting getCareerRecommendations with:", {
      iqResults,
      personalityResults,
      interestResults
    });

    if (!CareerRecommendations || !CommonPersonalityTypes) {
      console.error("Required data is not loaded");
      return [];
    }

    // Get IQ category
    const iqScore = iqResults?.result?.label ? (!isNaN(iqResults.result.label) ? Number(iqResults.result.label) : 0) : 0;
    const iqCategory = [
      iqScore < 80 ? 0 : iqScore < 90 ? 80 : 
      iqScore < 100 ? 90 : iqScore < 120 ? 100 : 120,
      iqScore < 80 ? 80 : iqScore < 90 ? 90 : 
      iqScore < 100 ? 100 : iqScore < 120 ? 120 : 1000
    ];

    console.log("IQ Category:", iqCategory);

    // Get top 3 matching personality types
    const matchingPersonalityTypes = calculatePersonalityTypeMatch(personalityResults);
    console.log("Matching Personality Types:", matchingPersonalityTypes);

    const recommendations = [];

    if (interestResults?.['16']) {
      const interests = Array.isArray(interestResults['16']) ? 
        interestResults['16'] : 
        Object.entries(interestResults['16'])
          .sort(([,a], [,b]) => b - a)
          .map(([subject]) => subject);

      console.log("Processing interests:", interests);

      interests.forEach(interest => {
        CareerRecommendations.forEach(careerField => {
          // Get the field name and tables
          const fieldName = careerField.Field || Object.keys(careerField)[0];
          const tables = careerField.Tables || careerField[fieldName];

          // Check if this field matches the interest
          if (!fieldName.toLowerCase().includes(interest.toLowerCase())) {
            return;
          }

          console.log(`Processing ${fieldName} for interest: ${interest}`);

          if (!tables || !Array.isArray(tables)) {
            console.log(`No valid tables found for ${fieldName}`);
            return;
          }

          matchingPersonalityTypes.forEach(personalityType => {
            tables.forEach(table => {
              // Convert IQ ranges to numbers for comparison
              const tableIQStart = Number(table["IQ Range"][0]);
              const tableIQEnd = Number(table["IQ Range"][1]);
              const userIQStart = Number(iqCategory[0]);
              const userIQEnd = Number(iqCategory[1]);

              console.log("Comparing:", {
                personality: {
                  table: table["Personality Cluster"],
                  user: personalityType
                },
                iqRange: {
                  table: [tableIQStart, tableIQEnd],
                  user: [userIQStart, userIQEnd]
                }
              });

              // Check if IQ ranges and personality type match
              if (tableIQStart === userIQStart && 
                  tableIQEnd === userIQEnd && 
                  (table["Personality Cluster"] === personalityType || 
                   (personalityType === "The Leader" && table["Personality Cluster"] === "The Visionary Leader") ||
                   (personalityType === "The Innovator" && table["Personality Cluster"] === "The Creative Visionary") ||
                   (personalityType === "The Caregiver" && table["Personality Cluster"] === "The Practical Healer"))) {
                
                console.log("Found matching recommendation:", {
                  field: fieldName,
                  personality: personalityType,
                  iqRange: [tableIQStart, tableIQEnd]
                });

                recommendations.push({
                  category: `${fieldName} - ${personalityType}`,
                  fieldOfStudy: table["Recommended Field of Study"],
                  courses: table["Relevant Courses"].split(", "),
                  careers: table["Potential Career Pathways"].split(", ")
                });
              }
            });
          });
        });
      });
    }

    console.log("Final recommendations:", recommendations);
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
                    {recommendation.category}
                  </h3>
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
