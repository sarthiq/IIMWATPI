import React from "react";
import { Card, Container } from "react-bootstrap";
import "./IQSummary.css";

const iqData = {
  "High IQ (120+)": {
    careers: [
      "Research Scientist",
      "Mathematician/Physicist",
      "Corporate Lawyer",
      "Investigative Journalist",
      "Military Strategist",
      "Judge",
      "Surgeon",
      "Airline Pilot",
      "Investment Banker",
      "Psychologist",
    ],
    note: "This IQ range typically indicates strong analytical and problem-solving abilities.",
  },
  "Above Average IQ (100-120)": {
    careers: [
      "Software Developer/Data Scientist",
      "Chartered Accountant",
      "Business Consultant",
      "Political Analyst",
      "UX Designer",
      "Fashion Designer",
      "Civil Services (IAS/IPS/IFS)",
      "Filmmaker",
      "Archaeologist",
      "Stand-up Comedian",
    ],
    note: "This range shows good cognitive abilities suitable for professional careers.",
  },
  "Average IQ (90-100)": {
    careers: [
      "Entrepreneur",
      "Teacher/Motivational Speaker",
      "Marketing Manager",
      "Public Relations Officer",
      "Social Worker",
      "HR Manager",
      "Content Creator",
      "Journalist",
      "Event Manager",
      "Actor/Performer",
    ],
    note: "This common range demonstrates capabilities for various skilled professions.",
  },
  "Below Average IQ (80-90)": {
    careers: [
      "Graphic Designer",
      "Librarian/Archivist",
      "Tour Guide",
      "Hotel Manager",
      "Flight Attendant",
      "Police Officer",
      "Business Manager",
      "Operations Manager",
      "Event Planner",
      "Tourism Professional",
    ],
    note: "This range can excel in practical and creative fields.",
  },
  "Low IQ (70-80)": {
    careers: [
      "Factory Supervisor",
      "Bank Clerk",
      "Data Entry Operator",
      "Manufacturing Jobs",
      "Production Jobs",
      "Tax Consultant",
      "Quality Control",
    ],
    note: "This range is suited for structured and routine-based work.",
  },
  "Very Low IQ (Below 70)": {
    careers: ["Farming", "Basic Labor Jobs", "Small-scale Craftsmanship"],
    note: "This range may require additional support and guidance in career choices.",
  },
};

export const IQSummary = () => {
  // Create pairs of IQ ranges
  const iqPairs = Object.entries(iqData).reduce((pairs, entry, index) => {
    if (index % 2 === 0) {
      pairs.push([entry]);
    } else {
      pairs[pairs.length - 1].push(entry);
    }
    return pairs;
  }, []);

  return (
    <Container className="iq-summary-container">
      {iqPairs.map((pair, pairIndex) => (
        <Card key={pairIndex} className="iq-summary-comparison-card">
          <div className="iq-summary-flex-container">
            {pair.map(([range, data], index) => (
              <div key={range} className="iq-summary-section">
                <div className="iq-summary-header">
                  <h3>{range}</h3>
                </div>
                <div className="iq-summary-content">
                  <ul className="iq-summary-career-list">
                    {data.careers.map((career, idx) => (
                      <li key={idx}>{career}</li>
                    ))}
                  </ul>
                  <div className="iq-summary-note">
                    <h4>Note:</h4>
                    <p>{data.note}</p>
                  </div>
                </div>
                {index === 0 && pair.length > 1 && (
                  <div className="iq-summary-vertical-divider" />
                )}
              </div>
            ))}
          </div>
        </Card>
      ))}

      <div className="iq-summary-disclaimer">
        <h4>Important Note:</h4>
        <ul>
          <li>
            Jobs in Above-Average, Average, and Below-Average IQ categories can
            be interchangeable.
          </li>
          <li>
            IQ levels can change based on how a person operates and faces
            situations in life.
          </li>
          <li>Below-average IQ can improve to above average and vice versa.</li>
          <li>
            High and Very Low IQ categories typically show only slight changes
            over time.
          </li>
        </ul>
      </div>
    </Container>
  );
};
