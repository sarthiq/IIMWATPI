import styles from './CRHome.module.css';
import { Link } from 'react-router-dom';
import { FaBrain, FaUserCircle, FaSearch } from 'react-icons/fa';
import { useAlert } from '../../../../../../UI/Alert/AlertContext';
import { useEffect, useState } from 'react';
import { getTestResultsHandler } from '../../apiHandler';


export const CRHome = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [iqResults, setIqResults] = useState(null);
  const [personalityResults, setPersonalityResults] = useState(null);
  const [interestResults, setInterestResults] = useState(null);
  const { showAlert } = useAlert();

  useEffect(() => {
    fetchTestResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const fetchTestResults = async () => {
    const response = await getTestResultsHandler(setIsLoading, showAlert);
 
    if (response && response.success) {
     setIqResults(response.data.results.iq.detailedResult);
     setPersonalityResults(response.data.results.personality.detailedResult);
      setInterestResults(response.data.interests);
    }
  };
  console.log("iqResults", iqResults);
  console.log("personalityResults",   personalityResults);
  console.log("interestResults", interestResults);

  // Simulated test results - in real app, this would come from your backend
  const testResults = {
    hasResults: true, // Toggle this based on whether user has taken tests
    iq: {
      score: 125,
      percentile: "93rd",
      category: "High IQ"
    },
    personality: {
      traits: [
        { name: "Extraversion", score: 81, poles: ["Self-Centered", "Empathetic"] },
        { name: "Agreeableness", score: 75, poles: ["Unorganized", "Organized"] },
        { name: "Conscientiousness", score: 74, poles: ["Emotionally stable", "Emotional"] },
        { name: "Neuroticism", score: 64, poles: ["Rigid", "Early Adopter"] }
      ]
    },
    interests: {
      topAreas: [
        { subject: "Technology", score: 92 },
        { subject: "Science", score: 88 },
        { subject: "Mathematics", score: 85 },
        { subject: "Engineering", score: 82 }
      ]
    }
  };

  const careerRecommendations = [
    {
      category: "High IQ + Extrovert",
      careers: [
        {
          title: "AI/ML Engineer",
          match: 95,
          description: "Design and implement machine learning models and AI systems",
          salary: "$120,000 - $180,000",
          growth: "34% (Much faster than average)"
        },
        {
          title: "Robotics Engineer",
          match: 92,
          description: "Design, build, and program robots for various applications",
          salary: "$110,000 - $160,000",
          growth: "29% (Much faster than average)"
        }
        // Add more careers as needed
      ]
    }
    // Add more categories based on combinations
  ];

  return (
    <div className={styles.container}>
      <section className={styles.assessmentSection}>
        <h1 className={styles.mainTitle}>Career Assessment Center</h1>
        <div className={styles.assessmentGrid}>
          <div className={styles.assessmentCard}>
            <div className={styles.assessmentIcon}>
              <FaBrain />
            </div>
            <h2>IQ Assessment</h2>
            <p>45-minute comprehensive cognitive ability test</p>
            <ul className={styles.testDetails}>
              <li>Logical Reasoning</li>
              <li>Pattern Recognition</li>
              <li>Numerical Ability</li>
              <li>Spatial Visualization</li>
            </ul>
            <Link to="/quiz/1" className={styles.startButton}>Start IQ Test</Link>
          </div>

          <div className={styles.assessmentCard}>
            <div className={styles.assessmentIcon}>
              <FaUserCircle />
            </div>
            <h2>Personality Assessment</h2>
            <p>30-minute personality profiling test</p>
            <ul className={styles.testDetails}>
              <li>Work Style Analysis</li>
              <li>Behavioral Patterns</li>
              <li>Team Dynamics</li>
              <li>Stress Management</li>
            </ul>
            <Link to="/quiz/2" className={styles.startButton}>Start Personality Test</Link>
          </div>

          <div className={styles.assessmentCard}>
            <div className={styles.assessmentIcon}>
              <FaSearch />
            </div>
            <h2>Interest Analysis</h2>
            <p>25-minute career interest inventory</p>
            <ul className={styles.testDetails}>
              <li>Subject Preferences</li>
              <li>Work Environment</li>
              <li>Career Goals</li>
              <li>Industry Interests</li>
            </ul>
            <Link to="/dashboard/interest/graduation-test" className={styles.startButton}>Start Interest Test</Link>
          </div>
        </div>
      </section>

      {testResults.hasResults && (
        <>
          <section className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>Your Assessment Results</h2>
            
            {/* IQ Results */}
            <div className={styles.resultCards}>
              <div className={styles.resultCard}>
                <h3>IQ Assessment</h3>
                <div className={styles.iqScore}>
                  <span className={styles.score}>{testResults.iq.score}</span>
                  <span className={styles.percentile}>{testResults.iq.percentile} Percentile</span>
                </div>
                <div className={styles.category}>{testResults.iq.category}</div>
              </div>

              {/* Personality Results */}
              <div className={styles.resultCard}>
                <h3>Personality Profile</h3>
                <div className={styles.traitsList}>
                  {testResults.personality.traits.map((trait, index) => (
                    <div key={index} className={styles.traitItem}>
                      <div className={styles.traitHeader}>
                        <span>{trait.name}</span>
                        <span>{trait.score}%</span>
                      </div>
                      <div className={styles.traitBar}>
                        <div 
                          className={styles.traitProgress} 
                          style={{width: `${trait.score}%`}}
                        ></div>
                      </div>
                      <div className={styles.traitPoles}>
                        <span>{trait.poles[0]}</span>
                        <span>{trait.poles[1]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests Results */}
              <div className={styles.resultCard}>
                <h3>Interest Areas</h3>
                <div className={styles.interestsList}>
                  {testResults.interests.topAreas.map((area, index) => (
                    <div key={index} className={styles.interestItem}>
                      <span>{area.subject}</span>
                      <div className={styles.interestBar}>
                        <div 
                          className={styles.interestProgress} 
                          style={{width: `${area.score}%`}}
                        ></div>
                      </div>
                      <span>{area.score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.recommendationsSection}>
            <h2 className={styles.sectionTitle}>Recommended Career Paths</h2>
            <div className={styles.recommendationsGrid}>
              {careerRecommendations.map((category, index) => (
                <div key={index} className={styles.categorySection}>
                  <h3>{category.category}</h3>
                  <div className={styles.careersList}>
                    {category.careers.map((career, careerIndex) => (
                      <div key={careerIndex} className={styles.careerCard}>
                        <div className={styles.matchScore}>{career.match}% Match</div>
                        <h4>{career.title}</h4>
                        <p>{career.description}</p>
                        <div className={styles.careerDetails}>
                          <span>Salary: {career.salary}</span>
                          <span>Growth: {career.growth}</span>
                        </div>
                        <button className={styles.exploreButton}>
                          Explore Career
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

