export const categories = [
    {
        id: 1,
        title: "Higher Education Entrance Exams",
        exams: [
            {
                id: "GATE2025",
                name: "Graduate Aptitude Test in Engineering (GATE)",
                conducting_body: "IIT/IISc Consortium",
                eligibility: "B.Tech/B.E. graduates or final year students",
                exam_date: "February 2025",
                application_start_date: "2024-08-30",
                application_end_date: "2024-10-15",
                application_link: "https://gate.iitk.ac.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: [
                    "Engineering Mathematics",
                    "Core Engineering Subjects",
                    "General Aptitude"
                ],
                exam_pattern: {
                    total_marks: 100,
                    duration: "3 hours",
                    negative_marking: true,
                    sections: [
                        { name: "General Aptitude", marks: 15, questions: 10 },
                        { name: "Core Subject", marks: 85, questions: 55 }
                    ]
                },
                syllabus: [
                    "Engineering Mathematics",
                    "Branch Specific Topics",
                    "General Aptitude",
                    "Current Affairs in Technology"
                ],
                admit_card_release_date: "January 2025",
                result_date: "March 2025",
                counseling_dates: "April-May 2025",
                selection_process: "Merit Based + PSU Recruitment",
                official_notification_link: "https://gate.iitk.ac.in",
                status: "Upcoming"
            },
            {
                id: "CAT2024",
                name: "Common Admission Test (CAT)",
                conducting_body: "Indian Institute of Management (IIM)",
                eligibility: "Bachelor's degree with minimum 50% marks (45% for reserved categories)",
                exam_date: "November 2024",
                application_start_date: "2024-08-01",
                application_end_date: "2024-09-15",
                application_link: "https://iimcat.ac.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: [
                    "Verbal Ability and Reading Comprehension",
                    "Data Interpretation and Logical Reasoning",
                    "Quantitative Ability"
                ],
                exam_pattern: {
                    total_marks: 300,
                    duration: "3 hours",
                    negative_marking: true,
                    sections: [
                        { name: "VARC", marks: 100, questions: 34 },
                        { name: "DILR", marks: 100, questions: 32 },
                        { name: "Quantitative Ability", marks: 100, questions: 34 }
                    ]
                },
                syllabus: [
                    "Reading Comprehension",
                    "Verbal Reasoning",
                    "Data Interpretation",
                    "Logical Reasoning",
                    "Quantitative Aptitude",
                    "Mathematical Skills"
                ],
                admit_card_release_date: "October 2024",
                result_date: "January 2025",
                counseling_dates: "February-March 2025",
                selection_process: "Written Test + WAT + GD + PI",
                official_notification_link: "https://iimcat.ac.in",
                status: "Upcoming"
            },
            {
                id: "GMAT2024",
                name: "Graduate Management Admission Test (GMAT)",
                conducting_body: "Graduate Management Admission Council (GMAC)",
                eligibility: "Bachelor's degree in any discipline",
                exam_date: "Available year-round",
                application_start_date: "Rolling admissions",
                application_end_date: "Rolling admissions",
                application_link: "https://www.mba.com/exams/gmat",
                exam_mode: "Computer Adaptive Test (CAT)",
                exam_level: "International",
                subjects: [
                    "Quantitative Reasoning",
                    "Verbal Reasoning",
                    "Integrated Reasoning",
                    "Analytical Writing Assessment"
                ],
                exam_pattern: {
                    total_marks: 800,
                    duration: "3 hours 7 minutes",
                    negative_marking: false,
                    sections: [
                        { name: "Quantitative Reasoning", marks: 200, questions: 31, duration: "62 minutes" },
                        { name: "Verbal Reasoning", marks: 200, questions: 36, duration: "65 minutes" },
                        { name: "Integrated Reasoning", marks: 8, questions: 12, duration: "30 minutes" },
                        { name: "Analytical Writing Assessment", marks: 6, questions: 1, duration: "30 minutes" }
                    ]
                },
                syllabus: [
                    "Problem Solving",
                    "Data Sufficiency",
                    "Reading Comprehension",
                    "Critical Reasoning",
                    "Sentence Correction",
                    "Integrated Reasoning",
                    "Essay Writing"
                ],
                admit_card_release_date: "Immediate upon scheduling",
                result_date: "Within 7 days of exam",
                counseling_dates: "Varies by Business School",
                selection_process: "GMAT Score + Academic Profile + Work Experience + Essays + Interviews",
                official_notification_link: "https://www.mba.com/exams/gmat",
                status: "Ongoing"
            },
            {
                id: "UGCNET2025",
                name: "UGC NET",
                conducting_body: "National Testing Agency (NTA)",
                eligibility: "Master's degree with minimum 55% marks (50% for reserved categories)",
                exam_date: "June 2025",
                application_start_date: "2025-03-01",
                application_end_date: "2025-03-31",
                application_link: "https://ugcnet.nta.nic.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: [
                    "Paper 1: Teaching and Research Aptitude",
                    "Paper 2: Subject Specific Paper"
                ],
                exam_pattern: {
                    total_marks: 300,
                    duration: "3 hours",
                    negative_marking: false,
                    sections: [
                        { 
                            name: "Paper 1", 
                            marks: 100, 
                            questions: 50,
                            duration: "90 minutes",
                            topics: [
                                "Teaching Aptitude",
                                "Research Aptitude",
                                "Comprehension",
                                "Communication",
                                "Mathematical Reasoning",
                                "Logical Reasoning",
                                "Data Interpretation",
                                "Information & Communication Technology",
                                "People, Development & Environment",
                                "Higher Education System"
                            ]
                        },
                        { 
                            name: "Paper 2", 
                            marks: 200, 
                            questions: 100,
                            duration: "90 minutes",
                            description: "Subject Specific Paper"
                        }
                    ]
                },
                syllabus: [
                    "Research Methodology",
                    "Teaching Aptitude",
                    "Subject Specific Knowledge",
                    "Academic Aptitude",
                    "General Awareness",
                    "Current Affairs in Education"
                ],
                admit_card_release_date: "May 2025",
                result_date: "July 2025",
                counseling_dates: "Not Applicable",
                selection_process: "Merit Based Qualification",
                official_notification_link: "https://ugcnet.nta.nic.in",
                status: "Upcoming"
            }
        ]
    },
    {
        id: 2,
        title: "Government Job Examinations",
        exams: [
            {
                id: "UPSCCSE2025",
                name: "Civil Services Examination (UPSC CSE)",
                conducting_body: "Union Public Service Commission",
                eligibility: "Graduates from any discipline, age between 21-32 years",
                exam_date: "May 2025 - March 2026",
                application_start_date: "2025-02-01",
                application_end_date: "2025-02-28",
                application_link: "https://www.upsc.gov.in",
                exam_mode: "Written (Offline) + Interview",
                exam_level: "National",
                exam_pattern: {
                    total_marks: 2025,
                    duration: "2 hours per paper",
                    negative_marking: true,
                    sections: [
                        { name: "Prelims - GS Paper I", marks: 200, questions: 100 },
                        { name: "Prelims - CSAT Paper II", marks: 200, questions: 80 },
                        { name: "Mains - Essay", marks: 250, questions: 2 },
                        { name: "Mains - General Studies I", marks: 250, questions: 20 },
                        { name: "Mains - General Studies II", marks: 250, questions: 20 },
                        { name: "Mains - General Studies III", marks: 250, questions: 20 },
                        { name: "Mains - General Studies IV", marks: 250, questions: 20 },
                        { name: "Mains - Optional Subject I", marks: 250, questions: 20 },
                        { name: "Mains - Optional Subject II", marks: 250, questions: 20 },
                        { name: "Interview", marks: 275, questions: 1 }
                    ]
                },
                syllabus: [
                    "Indian Polity & Governance",
                    "Economic & Social Development",
                    "International Relations",
                    "Environmental Ecology & Biodiversity",
                    "General Science & Technology",
                    "Indian History & Culture",
                    "Geography of India & World",
                    "Current Affairs",
                    "Optional Subject"
                ],
                admit_card_release_date: "May 2025 (Prelims), August 2025 (Mains)",
                result_date: "July 2025 (Prelims), December 2025 (Mains), March-April 2026 (Final)",
                selection_process: "Three Stages: Prelims + Mains + Interview",
                official_notification_link: "https://www.upsc.gov.in",
                status: "Upcoming"
            },
            {
                id: "SSCCGL2025",
                name: "Staff Selection Commission (SSC CGL)",
                conducting_body: "Staff Selection Commission",
                eligibility: "Bachelor's degree from recognized university",
                exam_date: "March 2025 - September 2025",
                application_start_date: "2024-12-01",
                application_end_date: "2024-12-31",
                application_link: "https://ssc.nic.in",
                exam_mode: "Computer Based Test (CBT) + Descriptive + Skill Test",
                exam_level: "National",
                exam_pattern: {
                    total_marks: 800,
                    duration: "2 hours per tier",
                    negative_marking: true,
                    sections: [
                        { name: "Tier I - General Intelligence & Reasoning", marks: 50, questions: 25 },
                        { name: "Tier I - General Awareness", marks: 50, questions: 25 },
                        { name: "Tier I - Quantitative Aptitude", marks: 50, questions: 25 },
                        { name: "Tier I - English Language", marks: 50, questions: 25 },
                        { name: "Tier II - Quantitative Abilities", marks: 200, questions: 100 },
                        { name: "Tier II - English Language", marks: 200, questions: 200 },
                        { name: "Tier II - Statistics", marks: 200, questions: 100 },
                        { name: "Tier III - Descriptive Paper", marks: 100, questions: 3 }
                    ]
                },
                syllabus: [
                    "General Intelligence & Reasoning",
                    "General Awareness",
                    "Quantitative Aptitude",
                    "English Language",
                    "Statistics",
                    "Computer Knowledge",
                    "Current Affairs"
                ],
                admit_card_release_date: "February 2025 (Tier 1) - August 2025 (Tier 4)",
                result_date: "May 2025 (Tier 1) - October 2025 (Final)",
                selection_process: "Four Tier Examination System + Document Verification",
                official_notification_link: "https://ssc.nic.in",
                status: "Upcoming"
            },
            {
                id: "BANKPO2024",
                name: "Banking Examinations (IBPS PO/SBI PO)",
                conducting_body: "Institute of Banking Personnel Selection/State Bank of India",
                eligibility: "Graduates from any discipline, age between 20-30 years",
                exam_date: "October 2024 - February 2025",
                application_start_date: "2024-08-01",
                application_end_date: "2024-08-31",
                application_link: "https://www.ibps.in",
                exam_mode: "Computer Based Test (CBT) + Interview",
                exam_level: "National",
                exam_pattern: {
                    total_marks: 300,
                    duration: "3 hours",
                    negative_marking: true,
                    sections: [
                        { name: "Prelims - English Language", marks: 30, questions: 30 },
                        { name: "Prelims - Quantitative Aptitude", marks: 35, questions: 35 },
                        { name: "Prelims - Reasoning Ability", marks: 35, questions: 35 },
                        { name: "Mains - Reasoning & Computer Aptitude", marks: 60, questions: 45 },
                        { name: "Mains - Data Analysis & Interpretation", marks: 60, questions: 35 },
                        { name: "Mains - General/Economy/Banking Awareness", marks: 40, questions: 35 },
                        { name: "Mains - English Language", marks: 40, questions: 35 },
                        { name: "Interview", marks: 100, questions: 1 }
                    ]
                },
                syllabus: [
                    "Banking & Financial Awareness",
                    "General English",
                    "Quantitative Aptitude",
                    "Reasoning & Computer Knowledge",
                    "Current Affairs",
                    "Data Analysis",
                    "Professional Knowledge of Banking"
                ],
                admit_card_release_date: "September 2024 (Prelims), November 2024 (Mains)",
                result_date: "November 2024 (Prelims), January 2025 (Mains), February 2025 (Final)",
                selection_process: "Three Stages: Prelims + Mains + Interview",
                official_notification_link: "https://www.ibps.in",
                status: "Upcoming"
            }
        ]
    },
    {
        id: 3,
        title: "Professional Certification Exams",
        exams: [
            {
                id: "CA2025",
                name: "Chartered Accountancy (CA)",
                conducting_body: "Institute of Chartered Accountants of India (ICAI)",
                eligibility: "Commerce graduates or equivalent",
                exam_date: "May and November 2025",
                application_start_date: "Rolling basis",
                application_end_date: "2 months before exam",
                application_link: "https://www.icai.org",
                exam_mode: "Pen and Paper Based",
                exam_level: "National",
                exam_pattern: {
                    total_marks: 800,
                    duration: "3 hours per paper",
                    negative_marking: false,
                    sections: [
                        { name: "Foundation - Principles of Accounting", marks: 100, questions: 100 },
                        { name: "Foundation - Business Laws & Correspondence", marks: 100, questions: 100 },
                        { name: "Foundation - Business Mathematics & Statistics", marks: 100, questions: 100 },
                        { name: "Foundation - Business Economics & Knowledge", marks: 100, questions: 100 },
                        { name: "Intermediate Group 1 - Accounting", marks: 100, questions: 100 },
                        { name: "Intermediate Group 1 - Corporate Laws", marks: 100, questions: 100 },
                        { name: "Intermediate Group 1 - Cost & Management Accounting", marks: 100, questions: 100 },
                        { name: "Intermediate Group 1 - Taxation", marks: 100, questions: 100 },
                        { name: "Intermediate Group 2 - Advanced Accounting", marks: 100, questions: 100 },
                        { name: "Intermediate Group 2 - Auditing & Assurance", marks: 100, questions: 100 },
                        { name: "Intermediate Group 2 - Enterprise Information Systems", marks: 100, questions: 100 },
                        { name: "Intermediate Group 2 - Financial Management & Economics", marks: 100, questions: 100 }
                    ]
                },
                syllabus: [
                    "Accounting Standards",
                    "Auditing",
                    "Taxation",
                    "Corporate Laws",
                    "Cost Management",
                    "Financial Management",
                    "Business Mathematics",
                    "Information Technology"
                ],
                practical_training: "3 years articleship required",
                result_date: "Within 2 months of exam",
                selection_process: "Three levels: Foundation + Intermediate + Final + Practical Training",
                official_notification_link: "https://www.icai.org",
                status: "Ongoing"
            },
            {
                id: "CS2025",
                name: "Company Secretary (CS)",
                conducting_body: "Institute of Company Secretaries of India (ICSI)",
                eligibility: "10+2 pass for Foundation, Graduates for Executive Program",
                exam_date: "June and December 2025",
                application_start_date: "Rolling basis",
                application_end_date: "2 months before exam",
                application_link: "https://www.icsi.edu",
                exam_mode: "Computer Based Test (CBT) for Foundation, Pen and Paper for others",
                exam_level: "National",
                exam_pattern: {
                    total_marks: 1100,
                    duration: "3 hours per paper",
                    negative_marking: false,
                    sections: [
                        { name: "Foundation - Business Environment & Law", marks: 100, questions: 100 },
                        { name: "Foundation - Business Management & Ethics", marks: 100, questions: 100 },
                        { name: "Foundation - Business Economics", marks: 100, questions: 100 },
                        { name: "Foundation - Fundamentals of Accounting & Auditing", marks: 100, questions: 100 },
                        { name: "Executive Module 1 - Corporate Laws", marks: 100, questions: 100 },
                        { name: "Executive Module 1 - Tax Laws", marks: 100, questions: 100 },
                        { name: "Executive Module 1 - Corporate & Management Accounting", marks: 100, questions: 100 },
                        { name: "Executive Module 1 - Economic & Commercial Laws", marks: 100, questions: 100 },
                        { name: "Executive Module 2 - Company Accounts & Auditing", marks: 100, questions: 100 },
                        { name: "Executive Module 2 - Capital Markets & Securities Laws", marks: 100, questions: 100 },
                        { name: "Executive Module 2 - Industrial & Labour Laws", marks: 100, questions: 100 }
                    ]
                },
                syllabus: [
                    "Corporate Law",
                    "Securities Law",
                    "Economic Law",
                    "Tax Laws",
                    "Governance & Compliance",
                    "Financial Management",
                    "Company Accounts",
                    "Business Ethics"
                ],
                practical_training: "15 months training required after Executive Programme",
                result_date: "Within 2 months of exam",
                selection_process: "Three stages: Foundation + Executive + Professional + Practical Training",
                official_notification_link: "https://www.icsi.edu",
                status: "Ongoing"
            },
            
            {
                id: "CMA2025",
                name: "Cost and Management Accountant (CMA)",
                conducting_body: "Institute of Cost Accountants of India (ICAI)",
                eligibility: "Graduates from any discipline or Foundation pass",
                exam_date: "June and December 2025",
                application_start_date: "Rolling basis",
                application_end_date: "2 months before exam",
                application_link: "https://icmai.in",
                exam_mode: "Computer Based Test (CBT) for Foundation, Pen and Paper for others",
                exam_level: "National",
                exam_pattern: {
                    total_marks: 1200,
                    duration: "3 hours per paper",
                    negative_marking: false,
                    sections: [
                        { name: "Foundation - Economics & Management", marks: 100, questions: 100 },
                        { name: "Foundation - Fundamentals of Accounting", marks: 100, questions: 100 },
                        { name: "Foundation - Laws & Ethics", marks: 100, questions: 100 },
                        { name: "Foundation - Business Mathematics & Statistics", marks: 100, questions: 100 },
                        { name: "Intermediate Group 1 - Financial Accounting", marks: 100, questions: 100 },
                        { name: "Intermediate Group 1 - Laws & Ethics", marks: 100, questions: 100 },
                        { name: "Intermediate Group 1 - Direct Taxation", marks: 100, questions: 100 },
                        { name: "Intermediate Group 1 - Cost Accounting", marks: 100, questions: 100 },
                        { name: "Intermediate Group 2 - Cost & Management Accounting", marks: 100, questions: 100 },
                        { name: "Intermediate Group 2 - Operations Management", marks: 100, questions: 100 },
                        { name: "Intermediate Group 2 - Indirect Taxation", marks: 100, questions: 100 },
                        { name: "Intermediate Group 2 - Company Accounts & Audit", marks: 100, questions: 100 }
                    ]
                },
                syllabus: [
                    "Cost Accounting",
                    "Management Accounting",
                    "Financial Management",
                    "Direct & Indirect Taxation",
                    "Corporate Laws",
                    "Business Strategy",
                    "Performance Management",
                    "Business Mathematics"
                ],
                practical_training: "3 years practical training required",
                result_date: "Within 2 months of exam",
                selection_process: "Three levels: Foundation + Intermediate + Final + Practical Training",
                official_notification_link: "https://icmai.in",
                status: "Ongoing"
            }
        ]
    }
];