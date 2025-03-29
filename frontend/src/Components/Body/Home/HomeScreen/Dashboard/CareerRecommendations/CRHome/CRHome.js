import styles from './CRHome.module.css';
import { Link } from 'react-router-dom';
import { FaBrain, FaUserCircle, FaSearch } from 'react-icons/fa';
import { useAlert } from '../../../../../../UI/Alert/AlertContext';
import { useEffect, useState } from 'react';
import { getTestResultsHandler } from '../../apiHandler';
import { stem_careers, medical_careers, biz_econ_finance_careers, social_science_careers, arts_media_comm_careers } from './data';


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
                category: `${mappedCategory} - ${trait}`,
                careers: careers
              });
            }
          });
        }
      });
    }

    return recommendations;
  };

  const renderResults = () => {
    if (isLoading) {
      return <div className={styles.loader}>Loading...</div>;
    }

    if (!iqResults || !personalityResults || !interestResults) {
      return (
        <div className={styles.noResults}>
          Please complete all assessments to view your results
        </div>
      );
    }

    const careerRecommendations = getCareerRecommendations(
      iqResults, 
      personalityResults, 
      interestResults
    );

    return (
      <>
        <section className={styles.resultsSection}>
          <h2 className={styles.sectionTitle}>Your Assessment Results</h2>
          
          <div className={styles.resultCards}>
            {/* IQ Results */}
            <div className={styles.resultCard}>
              <h3>IQ Assessment</h3>
              <div className={styles.iqScore}>
                <span className={styles.score}>{iqResults?.result?.label || 'N/A'}</span>
              </div>
            </div>

            {/* Personality Results */}
            <div className={styles.resultCard}>
              <h3>Personality Profile</h3>
              <div className={styles.traitsList}>
                {personalityResults?.result && (
                  <>
                    <div className={styles.traitItem}>
                      <div className={styles.traitHeader}>
                        <span>Extraversion</span>
                        <span>{personalityResults.result.extraversion.toFixed(2)}%</span>
                      </div>
                      <div className={styles.traitBar}>
                        <div className={styles.traitProgress} style={{width: `${personalityResults.result.extraversion.toFixed(2)}%`}}></div>
                      </div>
                      <div className={styles.traitPoles}>
                        <span>Introvert</span>
                        <span>Extrovert</span>
                      </div>
                    </div>

                    <div className={styles.traitItem}>
                      <div className={styles.traitHeader}>
                        <span>Agreeableness</span>
                        <span>{personalityResults.result.agreeableness.toFixed(2)}%</span>
                      </div>
                      <div className={styles.traitBar}>
                        <div className={styles.traitProgress} style={{width: `${personalityResults.result.agreeableness.toFixed(2)}%`}}></div>
                      </div>
                      <div className={styles.traitPoles}>
                        <span>Self-Centered</span>
                        <span>Empathetic</span>
                      </div>
                    </div>

                    <div className={styles.traitItem}>
                      <div className={styles.traitHeader}>
                        <span>Conscientiousness</span>
                        <span>{personalityResults.result.conscientiousness.toFixed(2)}%</span>
                      </div>
                      <div className={styles.traitBar}>
                        <div className={styles.traitProgress} style={{width: `${personalityResults.result.conscientiousness.toFixed(2)}%`}}></div>
                      </div>
                      <div className={styles.traitPoles}>
                        <span>Unorganized</span>
                        <span>Organized</span>
                      </div>
                    </div>

                    <div className={styles.traitItem}>
                      <div className={styles.traitHeader}>
                        <span>Neuroticism</span>
                        <span>{personalityResults.result.neuroticism.toFixed(2)}%</span>
                      </div>
                      <div className={styles.traitBar}>
                        <div className={styles.traitProgress} style={{width: `${personalityResults.result.neuroticism.toFixed(2)}%`}}></div>
                      </div>
                      <div className={styles.traitPoles}>
                        <span>Emotionally Stable</span>
                        <span>Emotional</span>
                      </div>
                    </div>

                    <div className={styles.traitItem}>
                      <div className={styles.traitHeader}>
                        <span>Openness</span>
                        <span>{personalityResults.result.openness.toFixed(2)}%</span>
                      </div>
                      <div className={styles.traitBar}>
                        <div className={styles.traitProgress} style={{width: `${personalityResults.result.openness.toFixed(2)}%`}}></div>
                      </div>
                      <div className={styles.traitPoles}>
                        <span>Rigid</span>
                        <span>Early Adopter</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Interests Results */}
            <div className={styles.resultCard}>
              <h3>Interest Areas</h3>
              {interestResults?.['16'] ? (
                <div className={styles.interestsList}>
                  {Array.isArray(interestResults['16']) ? (
                    // Display as simple list when data is an array
                    interestResults['16'].map((interest, index) => (
                      <div key={index} className={styles.interestItem}>
                        <span>{interest}</span>
                      </div>
                    ))
                  ) : (
                    // Display with progress bars when data has scores
                    Object.entries(interestResults['16']).map(([subject, score], index) => (
                      <div key={index} className={styles.interestItem}>
                        <span>{subject}</span>
                        <div className={styles.interestBar}>
                          <div className={styles.interestProgress} style={{width: `${score}%`}}></div>
                        </div>
                        <span>{score}%</span>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <div className={styles.noResults}>Please complete the interest assessment</div>
              )}
            </div>
          </div>
        </section>

        <section className={styles.recommendationsSection}>
          <h2 className={styles.sectionTitle}>Recommended Career Paths</h2>
          <div className={styles.recommendationsTable}>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Recommended Careers</th>
                </tr>
              </thead>
              <tbody>
                {careerRecommendations.map((category, index) => (
                  <tr key={index}>
                    <td>{category.category}</td>
                    <td>
                      <ol className={styles.careersList}>
                        {category.careers.map((career, careerIndex) => (
                          <li key={careerIndex}>{career}</li>
                        ))}
                      </ol>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
  };

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
      {renderResults()}
    </div>
  );
};

