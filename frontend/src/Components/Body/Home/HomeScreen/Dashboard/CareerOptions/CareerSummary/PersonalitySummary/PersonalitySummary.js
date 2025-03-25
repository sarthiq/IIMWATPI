import React from "react";
import { Card, Container } from "react-bootstrap";
import "./PersonalitySummary.css";

const personalityData = {
  Extroverts: {
    careers: [
      "Marketing Manager/HR",
      "Teacher/Motivational Speaker",
      "Public Relations Officer",
      "Politician",
      "Flight Attendant/Event Manager/Hotel Manager",
    ],
    advice: "Get involved in extracurricular activities: College events.",
  },
  Introverts: {
    careers: [
      "Research Scientist/Mathematician/Physicist",
      "Poet/Author",
      "Computer Programmer",
      "Graphic Designer",
      "Librarian/Archivist",
    ],
    advice:
      "Get involved in literary/scientific clubs or events during college",
  },
  Organized: {
    careers: [
      "Pilot",
      "Civil Services (IAS/IPS/IFS)",
      "Surgeon",
      "Charted Accountant/Financial Planner",
      "Project Manager/Operation Manager/Business Manager",
      "Data Scientist/Software Developer",
    ],
    advice:
      "Get involved in taking responsibilities: Class/section rep. SAC/mess committee. Other leadership responsibilities",
  },
  Unorganised: {
    careers: [
      "Actor/performer",
      "Radio Jockey",
      "Standup Comedian",
      "Content Creator/Social Media Influencer",
      "Event planner",
      "Career in Tourism",
    ],
    advice: "See if you like traveling and blogging in your college time.",
  },
  Altruist: {
    careers: [
      "Doctor",
      "Teacher",
      "Social Worker",
      "Psychologist/Psychiatrist/Therapist/counselor",
      "HR Manager",
      "Nurse/Animal Welfare Specialist",
    ],
    advice:
      "Should get involved in NGOs to help underprivileged/needy or animal welfare activities in college",
  },
  "Self-Centered": {
    careers: [
      "Business Consultant/Entrepreneur/CEO",
      "Corporate Lawyer",
      "Investigative Journalist",
      "Police Officer/Military Strategist",
      "Stock Market Trader/Political Analyst/Private Investigator",
    ],
    advice:
      "Get involved in business-related activities, such as being a club/event treasurer. Should get involved in business-related activities.",
  },
  "Emotionally Stable": {
    careers: [
      "Judge",
      "Surgeon",
      "Airline Pilot",
      "Investment Banker",
      "Military Commander",
      "Air Traffic Controller/Firefighter",
      "Civil Engineer/Project Manager",
      "Civil Services (IAS/IPS/IFS)",
    ],
    advice:
      "Focus on developing leadership skills and stress management techniques during college.",
  },
  Emotional: {
    careers: [
      "Yoga Instructor/Therapist",
      "Psychologist",
      "Music Composer",
      "Fiction Writer",
      "Poet/Artist",
      "Mental Health Advocate",
    ],
    advice:
      "Get involved in Yoga/Spiritualism and related activities in college.",
  },
  Openness: {
    careers: [
      "Research Scientist",
      "Entrepreneurs",
      "Fashion Designer",
      "Journalist/Archaeology/Geography",
      "Filmmaker/Travel Blogger",
      "Innovative Consultant",
      "UX Designer",
      "Artist/Writer/Musician/Photographer",
    ],
    advice:
      "Get involved in college events (Fashion Show/Photography) and travel during college breaks.",
  },
  Rigid: {
    careers: [
      "Data Scientist",
      "Accountant",
      "Tax Consultant/Quality Control",
      "Law Enforcement",
      "Manufacturing/Production job",
      "Officer",
      "Bank Clerk/Data Entry",
      "Factory Supervisor",
    ],
    advice:
      "Focus on developing technical skills and maintaining structured study routines during college.",
  },
};

export const PersonalitySummary = () => {
  const personalityPairs = [
    ['Extroverts', 'Introverts'],
    ['Organized', 'Unorganised'],
    ['Altruist', 'Self-Centered'],
    ['Emotionally Stable', 'Emotional'],
    ['Openness', 'Rigid']
  ];

  return (
    <Container className="personality-summary-container">
      {personalityPairs.map((pair, pairIndex) => (
        <Card key={pairIndex} className="personality-comparison-card">
          <div className="personality-flex-container">
            {pair.map((type, index) => (
              <div key={type} className="personality-section">
                <div className="personality-header">
                  <h3>{type}</h3>
                </div>
                <div className="personality-content">
                  <ul className="personality-career-list">
                    {personalityData[type].careers.map((career, idx) => (
                      <li key={idx}>{career}</li>
                    ))}
                  </ul>
                  <div className="personality-note">
                    <h4>Recommendation:</h4>
                    <p>{personalityData[type].advice}</p>
                  </div>
                </div>
                {index === 0 && pair.length > 1 && (
                  <div className="personality-vertical-divider" />
                )}
              </div>
            ))}
          </div>
        </Card>
      ))}
    </Container>
  );
};
