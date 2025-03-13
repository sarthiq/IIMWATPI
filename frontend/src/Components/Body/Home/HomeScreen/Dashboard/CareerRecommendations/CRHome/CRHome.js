import styles from './CRHome.module.css';
import { Link } from 'react-router-dom';
export const CRHome = () => {
  return (
    <div className={styles.careerAwarenessContainer}>
      <h1 className={styles.mainTitle}>Career Awareness</h1>
      
      <div className={styles.sectionsGrid}>
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h2>IQ Assessment</h2>
            <p>Evaluate your cognitive abilities and problem-solving skills</p>
            <button className={styles.actionButton}>
              Take IQ Test
            </button>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h2>Personality Test</h2>
            <p>Discover your personality type and work preferences</p>
            <button className={styles.actionButton}>
              Start Personality Test
            </button>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <h2>Interest Analysis</h2>
            <p>Explore your interests and potential career paths</p>
            <Link to="../interest-secQuestion" className={styles.actionButton}>
              Begin Interest Analysis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

