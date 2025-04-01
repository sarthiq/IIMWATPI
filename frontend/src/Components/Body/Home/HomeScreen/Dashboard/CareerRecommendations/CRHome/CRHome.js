import styles from './CRHome.module.css';
import { Link } from 'react-router-dom';
import { FaBrain, FaUserCircle, FaSearch, FaChevronRight } from 'react-icons/fa';
import { useAlert } from '../../../../../../UI/Alert/AlertContext';
import { useEffect, useState } from 'react';
import { getTestResultsHandler } from '../../apiHandler';
import { stem_careers, medical_careers, biz_econ_finance_careers, social_science_careers, arts_media_comm_careers } from './data';

const getPersonalityLabel = (trait, score) => {
  const labels = {
    extraversion: { low: 'Introvert', high: 'Extrovert' },
    agreeableness: { low: 'Self-Centered', high: 'Empathetic' },
    conscientiousness: { low: 'Unorganized', high: 'Organized' },
    neuroticism: { low: 'Emotionally Stable', high: 'Emotional' },
    openness: { low: 'Rigid', high: 'Early Adopter' }
  };
  
  return score > 50 ? labels[trait].high : labels[trait].low;
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

    if (response && response.success && response.data && response.data.results) {
      // Safely access nested properties with optional chaining
      setIqResults(response.data.results?.iq?.detailedResult || null);
      setPersonalityResults(response.data.results?.personality?.detailedResult || null);
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
    //console.log(iqResults);
    // Get IQ category (treat below 70 as 0-80 range)
    //iqResults.result.label='Below Average'
    //console.log(iqResults);
    const iqScore = iqResults?.result?.label ? (!isNaN(iqResults.result.label) ? Number(iqResults.result.label) : 0) : 0;
    //console.log("iqScore",iqScore);
    const iqCategory = [
      iqScore < 80 ? 0 : iqScore < 90 ? 80 : 
      iqScore < 100 ? 90 : iqScore < 120 ? 100 : 120,
      iqScore < 80 ? 80 : iqScore < 90 ? 90 : 
      iqScore < 100 ? 100 : iqScore < 120 ? 120 : 1000
    ];
    

    // Get top 3 personality traits with exact matching to data.js values
    const personalityTraits = personalityResults?.result ? 
      Object.entries({
        extraversion: personalityResults.result.extraversion,
        agreeableness: personalityResults.result.agreeableness,
        conscientiousness: personalityResults.result.conscientiousness,
        neuroticism: personalityResults.result.neuroticism,
        openness: personalityResults.result.openness
      })
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([trait, score]) => {
        // Ensure exact matches with data.js personality types
        const traitMappings = {
          extraversion: score > 50 ? "Extrovert" : "Introvert",
          agreeableness: score > 50 ? "Altruist" : "Self-Centered",
          conscientiousness: score > 50 ? "Organized" : "Unorganized",
          neuroticism: score > 50 ? "Emotional" : "Emotionally Stable",
          openness: score > 50 ? "Openness" : "Rigid"
        };
        return traitMappings[trait];
      }) : [];
      
      // Add subject category mapping
      const subjectToCategory = {
        // STEM category
        'Science': 'STEM',
        'Technology': 'STEM',
        'Engineering': 'STEM',
        'Mathematics': 'STEM',
        'STEM': 'STEM',
        'Computer Science': 'STEM',
        'Information Technology': 'STEM',
        'Physics': 'STEM',
        'Chemistry': 'STEM',
        'Biology': 'STEM',
        
        // Medical category
        'Medical': 'Medical',
        'Healthcare': 'Medical',
        'Life Sciences': 'Medical',
        'Medicine': 'Medical',
        'Nursing': 'Medical',
        'Pharmacy': 'Medical',
        
        // Business category
        'Business': 'Business',
        'Economics': 'Business',
        'Finance': 'Business',
        'Management': 'Business',
        'Accounting': 'Business',
        'Marketing': 'Business',
        
        // Social Sciences category
        'Social': 'Social',
        'Political': 'Social',
        'Psychology': 'Social',
        'Sociology': 'Social',
        'History': 'Social',
        'Philosophy': 'Social',
        'Humanities': 'Social',
        
        // Arts & Media category
        'Arts': 'Arts',
        'Media': 'Arts',
        'Communication': 'Arts',
        'Journalism': 'Arts',
        'Design': 'Arts',
        'Music': 'Arts',
        'Theatre': 'Arts'
      };

    // Map categories to career data arrays
    const careerDataMap = {
      'STEM': stem_careers,
      'Medical': medical_careers,
      'Business': biz_econ_finance_careers,
      'Social': social_science_careers,
      'Arts': arts_media_comm_careers
    };

    const recommendations = [];

    if (interestResults?.['16']) {
      const interests = Array.isArray(interestResults['16']) ? 
        interestResults['16'] : 
        Object.entries(interestResults['16'])
          .sort(([,a], [,b]) => b - a)
          .map(([subject]) => subject);

      interests.forEach(interest => {
        // Simplified category mapping based on keyword presence
        let mappedCategory;
        if (interest.toLowerCase().includes('stem')) {
          mappedCategory = 'STEM';
        } else if (interest.toLowerCase().includes('medical') || 
                   interest.toLowerCase().includes('health') || 
                   interest.toLowerCase().includes('life sciences')) {
          mappedCategory = 'Medical';
        } else if (interest.toLowerCase().includes('business') || 
                   interest.toLowerCase().includes('economics') || 
                   interest.toLowerCase().includes('finance')) {
          mappedCategory = 'Business';
        } else if (interest.toLowerCase().includes('social') || 
                   interest.toLowerCase().includes('political') || 
                   interest.toLowerCase().includes('humanities')) {
          mappedCategory = 'Social';
        } else if (interest.toLowerCase().includes('art') || 
                   interest.toLowerCase().includes('media') || 
                   interest.toLowerCase().includes('communication')) {
          mappedCategory = 'Arts';
        }
        
        const careerData = mappedCategory ? careerDataMap[mappedCategory] : null;
        
        if (careerData) {
          personalityTraits.forEach(trait => {
            // Find exact matching careers based on IQ category and personality type
            const matchingCareers = careerData.find(
              c => c["IQ Category"][0] === iqCategory[0] && 
                  c["IQ Category"][1] === iqCategory[1] && 
                  c["Personality Type"] === trait
            );
            
            if (matchingCareers) {
              const careers = matchingCareers["Top 5 Career Recommendations"].split(", ");
              
              recommendations.push({
                category: `${mappedCategory} - ${trait.replace('Altruist', 'Empathetic').replace('Openness', 'Early Adopter')}`,
                careers: careers
              });
            }
          });
        }
      });
    }

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
                <div className={styles.iqScore}>
                  {iqResults.result.label}
                </div>
                
              </div>
              <Link to="/quiz/1" className={styles.retakeButton}>Take Test Again</Link>
            </div>
          ) : (
            <div className={styles.emptyContent}>
              <div className={styles.testDescription}>
                <h3>Comprehensive IQ Assessment</h3>
                <p>45-minute test measuring cognitive abilities across multiple domains</p>
              </div>
              <ul className={styles.testPoints}>
                <li>Logical Reasoning</li>
                <li>Pattern Recognition</li>
                <li>Numerical Ability</li>
                <li>Spatial Visualization</li>
              </ul>
              <Link to="/quiz/1" className={styles.startButton}>Start Test</Link>
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
                {Object.entries(personalityResults.result).map(([trait, score]) => (
                  <div key={trait} className={styles.traitContainer}>
                    <div className={styles.traitHeader}>
                      <span className={styles.traitTitle}>
                        {trait.charAt(0).toUpperCase() + trait.slice(1)}
                      </span>
                      <span 
                        className={styles.traitScoreAnimated}
                        style={{ 
                          '--score-width': `${score}%`,
                          '--score-number': Math.round(score)
                        }}
                      />
                    </div>
                    <div className={styles.traitBar}>
                      <div 
                        className={styles.traitProgress} 
                        style={{ '--score-width': `${score}%` }}
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
                ))}
              </div>
              <Link to="/quiz/2" className={styles.retakeButton}>Take Test Again</Link>
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
              <Link to="/quiz/2" className={styles.startButton}>Start Test</Link>
            </div>
          )}
        </div>

        {/* Interest Assessment Card */}
        <div className={styles.assessmentCard}>
          <div className={styles.cardHeader}>
            <FaSearch className={styles.cardIcon} />
            <h2>Interest Analysis</h2>
          </div>
          
          {interestResults && interestResults['16'] ? (
            <div className={styles.resultContent}>
              <div className={styles.interestAreas}>
                {(Array.isArray(interestResults['16']) ? 
                  interestResults['16'].map(subject => ({ subject })) : 
                  Object.entries(interestResults['16']).map(([subject, score]) => ({ subject }))
                ).map(({ subject }, index) => (
                  <div key={subject} className={styles.interestItem}>
                    <span className={styles.interestNumber}>{index + 1}.</span>
                    <span className={styles.interestName}>{subject}</span>
                  </div>
                ))}
              </div>
              <Link to="/dashboard/interest/graduation-test" className={styles.retakeButton}>
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
              <Link to="/dashboard/interest/graduation-test" className={styles.startButton}>
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
              .map((category, index) => (
                <div key={index} className={styles.careerCard}>
                  <h3 className={styles.categoryTitle}>{category.category}</h3>
                  <div className={styles.careerList}>
                    {category.careers.map((career, idx) => (
                      <div key={idx} className={styles.careerItem}>
                        <span className={styles.careerRank}>{idx + 1}</span>
                        <span className={styles.careerName}>{career}</span>
                      </div>
                    ))}
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

