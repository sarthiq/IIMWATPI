export const examCategories = [
    {
        id: 1,
        title: "Science, Technology, Engineering, and Mathematics (STEM)",
        exams: [
            {
                id: "STEM-001",
                name: "Joint Entrance Examination (JEE) Main",
                conducting_body: "National Testing Agency (NTA)",
                eligibility: "12th pass with minimum 75% marks or top 20 percentile",
                exam_date: "2025-04-15",
                application_start_date: "2025-01-01",
                application_end_date: "2025-01-31",
                application_link: "https://jeemain.nta.nic.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: ["Physics", "Chemistry", "Mathematics"],
                exam_pattern: {
                    total_marks: 300,
                    duration: "3 hours",
                    negative_marking: true,
                    sections: [
                        { name: "Physics", marks: 100, questions: 25 },
                        { name: "Chemistry", marks: 100, questions: 25 },
                        { name: "Mathematics", marks: 100, questions: 25 }
                    ]
                },
                syllabus: [
                    "11th & 12th Physics",
                    "11th & 12th Chemistry",
                    "11th & 12th Mathematics"
                ],
                admit_card_release_date: "2025-03-30",
                result_date: "2025-05-15",
                counseling_dates: "June-July 2025",
                selection_process: "Merit Based + JoSAA Counselling",
                official_notification_link: "https://jeemain.nta.nic.in",
                status: "Upcoming"
            },
            {
                id: "STEM-002",
                name: "Joint Entrance Examination (JEE) Advanced",
                conducting_body: "Indian Institute of Technology (IIT)",
                eligibility: "Must qualify JEE Main and be among top 2,50,000 candidates",
                exam_date: "2025-06-15",
                application_start_date: "2025-05-10",
                application_end_date: "2025-05-25",
                application_link: "https://jeeadv.ac.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: ["Physics", "Chemistry", "Mathematics"],
                exam_pattern: {
                    total_marks: 396,
                    duration: "6 hours (2 papers)",
                    negative_marking: true,
                    sections: [
                        { name: "Physics Paper 1", marks: 66, questions: 18 },
                        { name: "Chemistry Paper 1", marks: 66, questions: 18 },
                        { name: "Mathematics Paper 1", marks: 66, questions: 18 },
                        { name: "Physics Paper 2", marks: 66, questions: 18 },
                        { name: "Chemistry Paper 2", marks: 66, questions: 18 },
                        { name: "Mathematics Paper 2", marks: 66, questions: 18 }
                    ]
                },
                syllabus: [
                    "Advanced Physics concepts from 11th & 12th",
                    "Advanced Chemistry concepts from 11th & 12th",
                    "Advanced Mathematics concepts from 11th & 12th"
                ],
                admit_card_release_date: "2025-06-01",
                result_date: "2025-06-30",
                counseling_dates: "July 2025",
                selection_process: "Merit Based + JoSAA Counselling",
                official_notification_link: "https://jeeadv.ac.in",
                status: "Upcoming"
            },
            {
                id: "STEM-003",
                name: "Birla Institute of Technology and Science Admission Test (BITSAT)",
                conducting_body: "Birla Institute of Technology and Science (BITS)",
                eligibility: "12th pass with minimum 75% in PCM (Physics, Chemistry, Mathematics)",
                exam_date: "May 2025",
                application_start_date: "2025-02-01",
                application_end_date: "2025-03-31",
                application_link: "https://www.bits-pilani.ac.in/bitsat",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: ["Physics", "Chemistry", "Mathematics", "English", "Logical Reasoning"],
                exam_pattern: {
                    total_marks: 450,
                    duration: "3 hours",
                    negative_marking: true,
                    sections: [
                        { name: "Physics", marks: 120, questions: 40 },
                        { name: "Chemistry", marks: 120, questions: 40 },
                        { name: "Mathematics", marks: 120, questions: 40 },
                        { name: "English and Logical Reasoning", marks: 90, questions: 30 }
                    ]
                },
                syllabus: [
                    "11th & 12th Physics",
                    "11th & 12th Chemistry",
                    "11th & 12th Mathematics",
                    "English Proficiency",
                    "Logical Reasoning"
                ],
                admit_card_release_date: "2025-04-20",
                result_date: "June 2025",
                counseling_dates: "July 2025",
                selection_process: "Merit Based + Online Counselling",
                official_notification_link: "https://www.bits-pilani.ac.in/bitsat",
                status: "Upcoming"
            },
            {
                id: "STEM-004",
                name: "VIT Engineering Entrance Examination (VITEEE)",
                conducting_body: "Vellore Institute of Technology",
                eligibility: "12th pass with minimum 60% in PCM (Physics, Chemistry, Mathematics)",
                exam_date: "April 2025",
                application_start_date: "2024-11-01",
                application_end_date: "2025-03-31",
                application_link: "https://viteee.vit.ac.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: ["Physics", "Chemistry", "Mathematics", "English"],
                exam_pattern: {
                    total_marks: 125,
                    duration: "2.5 hours",
                    negative_marking: false,
                    sections: [
                        { name: "Physics", marks: 40, questions: 40 },
                        { name: "Chemistry", marks: 35, questions: 35 },
                        { name: "Mathematics", marks: 40, questions: 40 },
                        { name: "English & General Aptitude", marks: 10, questions: 10 }
                    ]
                },
                syllabus: [
                    "11th & 12th Physics",
                    "11th & 12th Chemistry",
                    "11th & 12th Mathematics",
                    "English Comprehension",
                    "General Aptitude"
                ],
                admit_card_release_date: "2025-03-15",
                result_date: "May 2025",
                counseling_dates: "May-June 2025",
                selection_process: "Merit Based + Online Counselling",
                official_notification_link: "https://viteee.vit.ac.in",
                status: "Upcoming"
            },
            {
                id: "STEM-005",
                name: "Consortium of Medical, Engineering and Dental Colleges of Karnataka (COMEDK UGET)",
                conducting_body: "Consortium of Medical, Engineering and Dental Colleges of Karnataka",
                eligibility: "12th pass with minimum 45% in PCM (Physics, Chemistry, Mathematics)",
                exam_date: "10th May 2025",
                application_start_date: "2025-02-01",
                application_end_date: "2025-04-15",
                application_link: "https://www.comedk.org",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "State",
                subjects: ["Physics", "Chemistry", "Mathematics"],
                exam_pattern: {
                    total_marks: 180,
                    duration: "3 hours",
                    negative_marking: false,
                    sections: [
                        { name: "Physics", marks: 60, questions: 60 },
                        { name: "Chemistry", marks: 60, questions: 60 },
                        { name: "Mathematics", marks: 60, questions: 60 }
                    ]
                },
                syllabus: [
                    "11th & 12th Physics",
                    "11th & 12th Chemistry",
                    "11th & 12th Mathematics"
                ],
                admit_card_release_date: "2025-05-01",
                result_date: "May 2025",
                counseling_dates: "June 2025",
                selection_process: "Merit Based + Document Verification",
                official_notification_link: "https://www.comedk.org",
                status: "Upcoming"
            },
            {
                id: "STEM-006",
                name: "Aligarh Muslim University Engineering Entrance Test (AMUEEE)",
                conducting_body: "Aligarh Muslim University",
                eligibility: "12th pass with minimum 60% in PCM (Physics, Chemistry, Mathematics)",
                exam_date: "May 2025",
                application_start_date: "2025-03-01",
                application_end_date: "2025-04-15",
                application_link: "https://www.amucontrollerexams.com",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: ["Physics", "Chemistry", "Mathematics"],
                exam_pattern: {
                    total_marks: 150,
                    duration: "3 hours",
                    negative_marking: true,
                    sections: [
                        { name: "Physics", marks: 50, questions: 50 },
                        { name: "Chemistry", marks: 50, questions: 50 },
                        { name: "Mathematics", marks: 50, questions: 50 }
                    ]
                },
                syllabus: [
                    "11th & 12th Physics",
                    "11th & 12th Chemistry",
                    "11th & 12th Mathematics",
                    "Basic Numerical Ability",
                    "Logical Reasoning"
                ],
                admit_card_release_date: "2025-04-25",
                result_date: "June 2025",
                counseling_dates: "July 2025",
                selection_process: "Merit Based + Document Verification",
                official_notification_link: "https://www.amucontrollerexams.com",
                status: "Upcoming"
            },
            {
                id: "STEM-007",
                name: "Jamia Millia Islamia Engineering Entrance Test (JMI EEE)",
                conducting_body: "Jamia Millia Islamia University",
                eligibility: "12th pass with minimum 60% in PCM (Physics, Chemistry, Mathematics)",
                exam_date: "June 2025",
                application_start_date: "2025-03-01",
                application_end_date: "2025-04-15",
                application_link: "https://www.jmi.ac.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: ["Physics", "Chemistry", "Mathematics"],
                exam_pattern: {
                    total_marks: 200,
                    duration: "3 hours",
                    negative_marking: true,
                    sections: [
                        { name: "Physics", marks: 70, questions: 35 },
                        { name: "Chemistry", marks: 60, questions: 30 },
                        { name: "Mathematics", marks: 70, questions: 35 }
                    ]
                },
                syllabus: [
                    "11th & 12th Physics",
                    "11th & 12th Chemistry",
                    "11th & 12th Mathematics",
                    "Basic Numerical Ability",
                    "Analytical Skills"
                ],
                admit_card_release_date: "2025-05-20",
                result_date: "July 2025",
                counseling_dates: "August 2025",
                selection_process: "Merit Based + Document Verification",
                official_notification_link: "https://www.jmi.ac.in",
                status: "Upcoming"
            },
            {
                id: "STEM-008",
                name: "SRM Joint Engineering Entrance Examination (SRMJEEE)",
                conducting_body: "SRM Institute of Science and Technology",
                eligibility: "12th pass with minimum 50% in PCM (Physics, Chemistry, Mathematics)",
                exam_date: "April 2025",
                application_start_date: "2024-11-15",
                application_end_date: "2025-03-31",
                application_link: "https://www.srmist.edu.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: ["Physics", "Chemistry", "Mathematics", "English"],
                exam_pattern: {
                    total_marks: 150,
                    duration: "2.5 hours",
                    negative_marking: false,
                    sections: [
                        { name: "Physics", marks: 50, questions: 35 },
                        { name: "Chemistry", marks: 50, questions: 35 },
                        { name: "Mathematics", marks: 50, questions: 35 },
                        { name: "English & Aptitude", marks: 25, questions: 25 }
                    ]
                },
                syllabus: [
                    "11th & 12th Physics",
                    "11th & 12th Chemistry",
                    "11th & 12th Mathematics",
                    "English Language Skills",
                    "Aptitude and Reasoning"
                ],
                admit_card_release_date: "2025-03-25",
                result_date: "May 2025",
                counseling_dates: "June 2025",
                selection_process: "Merit Based + Online Counselling",
                official_notification_link: "https://www.srmist.edu.in",
                status: "Upcoming"
            }
        ]
    },
    {
        id: 2,
        title: "Medical, Healthcare, and Life Sciences",
        exams: [
            {
                id: "MED-001",
                name: "National Eligibility cum Entrance Test (NEET-UG)",
                conducting_body: "National Testing Agency (NTA)",
                eligibility: "12th pass with minimum 50% in PCB (Physics, Chemistry, Biology)",
                exam_date: "4th May 2025",
                application_start_date: "2025-01-01",
                application_end_date: "2025-02-28",
                application_link: "https://neet.nta.nic.in",
                exam_mode: "Offline (Pen and Paper)",
                exam_level: "National",
                subjects: ["Physics", "Chemistry", "Biology (Botany & Zoology)"],
                exam_pattern: {
                    total_marks: 720,
                    duration: "3 hours 20 minutes",
                    negative_marking: true,
                    sections: [
                        { name: "Physics", marks: 180, questions: 45 },
                        { name: "Chemistry", marks: 180, questions: 45 },
                        { name: "Botany", marks: 180, questions: 45 },
                        { name: "Zoology", marks: 180, questions: 45 }
                    ]
                },
                syllabus: [
                    "11th & 12th Physics",
                    "11th & 12th Chemistry",
                    "11th & 12th Biology (Botany & Zoology)",
                    "NCERT Curriculum"
                ],
                admit_card_release_date: "2025-04-20",
                result_date: "June 2025",
                counseling_dates: "July-August 2025",
                selection_process: "Merit Based + State/Central Counselling",
                official_notification_link: "https://neet.nta.nic.in",
                status: "Upcoming"
            },
            {
                id: "MED-002",
                name: "All India Institute of Medical Sciences Entrance Exam (AIIMS)",
                conducting_body: "All India Institute of Medical Sciences",
                eligibility: "12th pass with minimum 60% in PCB (Physics, Chemistry, Biology) and English",
                exam_date: "1st June 2025",
                application_start_date: "2025-02-01",
                application_end_date: "2025-03-15",
                application_link: "https://www.aiimsexams.ac.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: ["Physics", "Chemistry", "Biology", "General Knowledge", "Aptitude", "English"],
                exam_pattern: {
                    total_marks: 200,
                    duration: "3 hours 30 minutes",
                    negative_marking: true,
                    sections: [
                        { name: "Physics", marks: 40, questions: 40 },
                        { name: "Chemistry", marks: 40, questions: 40 },
                        { name: "Biology", marks: 80, questions: 80 },
                        { name: "General Knowledge", marks: 20, questions: 20 },
                        { name: "Aptitude & Logical Thinking", marks: 20, questions: 20 }
                    ]
                },
                syllabus: [
                    "11th & 12th Physics",
                    "11th & 12th Chemistry",
                    "11th & 12th Biology",
                    "General Knowledge & Current Affairs",
                    "Logical Reasoning & Scientific Aptitude",
                    "English Language Comprehension"
                ],
                admit_card_release_date: "2025-05-15",
                result_date: "June 2025",
                counseling_dates: "July 2025",
                selection_process: "CBT + Document Verification + Medical Examination",
                official_notification_link: "https://www.aiimsexams.ac.in",
                status: "Upcoming"
            },
            {
                id: "MED-003",
                name: "Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER) MBBS Entrance Exam",
                conducting_body: "JIPMER",
                eligibility: "12th pass with minimum 60% in PCB (Physics, Chemistry, Biology) and English",
                exam_date: "June 2025",
                application_start_date: "2025-03-01",
                application_end_date: "2025-04-15",
                application_link: "https://jipmer.edu.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: ["Physics", "Chemistry", "Biology", "English", "Logic & Reasoning"],
                exam_pattern: {
                    total_marks: 200,
                    duration: "2 hours 30 minutes",
                    negative_marking: true,
                    sections: [
                        { name: "Physics", marks: 60, questions: 30 },
                        { name: "Chemistry", marks: 60, questions: 30 },
                        { name: "Biology", marks: 60, questions: 30 },
                        { name: "English and Logic", marks: 20, questions: 10 }
                    ]
                },
                syllabus: [
                    "11th & 12th Physics",
                    "11th & 12th Chemistry",
                    "11th & 12th Biology",
                    "English Language",
                    "Logical Reasoning",
                    "Quantitative Ability"
                ],
                admit_card_release_date: "2025-05-20",
                result_date: "June 2025",
                counseling_dates: "July 2025",
                selection_process: "CBT + Document Verification + Medical Examination",
                official_notification_link: "https://jipmer.edu.in",
                status: "Upcoming"
            },
            {
                id: "MED-004",
                name: "Global Allied Healthcare Entrance Test (GAHET)",
                conducting_body: "Association of Allied Healthcare Institutions",
                eligibility: "12th pass with minimum 50% in PCB (Physics, Chemistry, Biology)",
                exam_date: "May 2025",
                application_start_date: "2025-02-01",
                application_end_date: "2025-03-31",
                application_link: "https://www.gahet.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: ["Biology", "Chemistry", "Physics", "General Aptitude", "English"],
                exam_pattern: {
                    total_marks: 400,
                    duration: "2 hours 30 minutes",
                    negative_marking: true,
                    sections: [
                        { name: "Biology", marks: 150, questions: 50 },
                        { name: "Chemistry", marks: 100, questions: 25 },
                        { name: "Physics", marks: 100, questions: 25 },
                        { name: "General Aptitude & English", marks: 50, questions: 25 }
                    ]
                },
                syllabus: [
                    "11th & 12th Biology",
                    "11th & 12th Chemistry",
                    "11th & 12th Physics",
                    "Basic Healthcare Knowledge",
                    "English Communication",
                    "General Aptitude"
                ],
                admit_card_release_date: "2025-04-15",
                result_date: "June 2025",
                counseling_dates: "July 2025",
                selection_process: "CBT + Interview + Document Verification",
                official_notification_link: "https://www.gahet.in",
                status: "Upcoming"
            }
        ]
    },
    {
        id: 3,
        title: "Business, Economics, and Finance",
        exams: [
            {
                id: "BUS-001",
                name: "Common University Entrance Test (CUET) for UG Programs",
                conducting_body: "National Testing Agency (NTA)",
                eligibility: "12th pass from any recognized board",
                exam_date: "8th May - 1st June 2025",
                application_start_date: "2025-03-01",
                application_end_date: "2025-03-31",
                application_link: "https://cuet.samarth.ac.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: [
                    "General Test",
                    "Domain Specific Subjects",
                    "Languages"
                ],
                exam_pattern: {
                    total_marks: 800,
                    duration: "3 hours 15 minutes",
                    negative_marking: true,
                    sections: [
                        { name: "Language", marks: 300, questions: 75 },
                        { name: "Domain Specific Subjects", marks: 400, questions: 100 },
                        { name: "General Test", marks: 100, questions: 25 }
                    ]
                },
                syllabus: [
                    "General Knowledge",
                    "Current Affairs",
                    "Business Studies",
                    "Accountancy",
                    "Economics",
                    "Quantitative Aptitude",
                    "Logical Reasoning"
                ],
                admit_card_release_date: "2025-04-25",
                result_date: "June 2025",
                counseling_dates: "July 2025",
                selection_process: "Merit Based + University-specific Counselling",
                official_notification_link: "https://cuet.samarth.ac.in",
                status: "Upcoming"
            },
            {
                id: "BUS-002",
                name: "Symbiosis Entrance Test (SET)",
                conducting_body: "Symbiosis International University",
                eligibility: "12th pass with minimum 50% marks (45% for reserved categories)",
                exam_date: "May 2025",
                application_start_date: "2025-02-01",
                application_end_date: "2025-04-15",
                application_link: "https://www.set-test.org",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: [
                    "General English",
                    "Quantitative Aptitude",
                    "General Awareness",
                    "Analytical & Logical Reasoning"
                ],
                exam_pattern: {
                    total_marks: 200,
                    duration: "2 hours 30 minutes",
                    negative_marking: true,
                    sections: [
                        { name: "General English", marks: 60, questions: 30 },
                        { name: "Quantitative Aptitude", marks: 60, questions: 30 },
                        { name: "General Awareness", marks: 40, questions: 20 },
                        { name: "Analytical & Logical Reasoning", marks: 40, questions: 20 }
                    ]
                },
                syllabus: [
                    "English Grammar and Comprehension",
                    "Mathematics up to 10th Standard",
                    "Current Affairs and General Knowledge",
                    "Logical and Analytical Reasoning",
                    "Data Interpretation"
                ],
                admit_card_release_date: "2025-04-20",
                result_date: "May 2025",
                counseling_dates: "June 2025",
                selection_process: "SET Score + Personal Interview + Writing Ability Test",
                official_notification_link: "https://www.set-test.org",
                status: "Upcoming"
            },
            {
                id: "BUS-003",
                name: "Narsee Monjee Institute of Management Studies (NMIMS) NPAT",
                conducting_body: "NMIMS University",
                eligibility: "12th pass with minimum 60% in any stream",
                exam_date: "May 2025",
                application_start_date: "2024-12-15",
                application_end_date: "2025-04-30",
                application_link: "https://nmims.edu/npat",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: [
                    "Proficiency in English Language",
                    "Quantitative & Numerical Ability",
                    "Reasoning & General Intelligence",
                    "General Awareness"
                ],
                exam_pattern: {
                    total_marks: 150,
                    duration: "2 hours",
                    negative_marking: false,
                    sections: [
                        { name: "Proficiency in English Language", marks: 40, questions: 40 },
                        { name: "Quantitative & Numerical Ability", marks: 40, questions: 40 },
                        { name: "Reasoning & General Intelligence", marks: 40, questions: 40 },
                        { name: "General Awareness", marks: 30, questions: 30 }
                    ]
                },
                syllabus: [
                    "English Grammar and Vocabulary",
                    "Reading Comprehension",
                    "Mathematical Concepts up to 10th Standard",
                    "Logical Reasoning",
                    "Current Affairs",
                    "Business Awareness"
                ],
                admit_card_release_date: "2025-04-25",
                result_date: "June 2025",
                counseling_dates: "July 2025",
                selection_process: "NPAT Score + Merit List Based Admission",
                official_notification_link: "https://nmims.edu/npat",
                status: "Upcoming"
            },
            {
                id: "BUS-004",
                name: "Tata Institute of Social Sciences Bachelor's Admission Test (TISS-BAT)",
                conducting_body: "Tata Institute of Social Sciences",
                eligibility: "12th pass with minimum 50% marks from any recognized board",
                exam_date: "April 2025",
                application_start_date: "2024-12-01",
                application_end_date: "2025-02-28",
                application_link: "https://www.tiss.edu",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: [
                    "General Knowledge",
                    "Current Affairs",
                    "Analytical Ability",
                    "English Proficiency",
                    "Social Awareness"
                ],
                exam_pattern: {
                    total_marks: 100,
                    duration: "2 hours",
                    negative_marking: true,
                    sections: [
                        { name: "General Knowledge & Current Affairs", marks: 25, questions: 25 },
                        { name: "Analytical & Logical Reasoning", marks: 25, questions: 25 },
                        { name: "English Proficiency", marks: 25, questions: 25 },
                        { name: "Social Awareness & Analysis", marks: 25, questions: 25 }
                    ]
                },
                syllabus: [
                    "Current Affairs - National & International",
                    "Social Issues & Development",
                    "Indian Constitution & Polity",
                    "Environmental Studies",
                    "Basic Mathematics & Data Interpretation",
                    "English Comprehension & Grammar",
                    "Logical Reasoning"
                ],
                admit_card_release_date: "2025-03-15",
                result_date: "May 2025",
                counseling_dates: "June 2025",
                selection_process: "Written Test + Personal Interview + Document Verification",
                official_notification_link: "https://www.tiss.edu/admissions",
                status: "Upcoming"
            }
        ]
    },
    {
        id: 4,
        title: "Arts, Media, and Communication",
        exams: [
            {
                id: "ARTS-001",
                name: "National School of Drama (NSD) Entrance Exam",
                conducting_body: "National School of Drama",
                eligibility: "Graduate in any discipline with experience in theatre",
                exam_date: "May 2025",
                application_start_date: "2025-01-15",
                application_end_date: "2025-03-15",
                application_link: "https://nsd.gov.in",
                exam_mode: "Three-Stage Process",
                exam_level: "National",
                subjects: [
                    "Theatre Knowledge",
                    "Acting Ability",
                    "Voice & Speech",
                    "Movement & Physical Expression",
                    "Cultural Awareness"
                ],
                exam_pattern: {
                    total_marks: 100,
                    duration: "Multiple Days",
                    negative_marking: false,
                    sections: [
                        { name: "Written Test", marks: 30, questions: "Essay & MCQ" },
                        { name: "Acting Workshop & Practical", marks: 40, format: "Performance" },
                        { name: "Interview", marks: 30, format: "Personal Interview" }
                    ]
                },
                syllabus: [
                    "History of Theatre",
                    "Indian & World Drama",
                    "Contemporary Theatre",
                    "Basic Acting Techniques",
                    "Cultural Studies",
                    "Theatre Terminology"
                ],
                admit_card_release_date: "2025-04-15",
                result_date: "June 2025",
                counseling_dates: "July 2025",
                selection_process: "Written Test + Workshop/Practical + Interview",
                official_notification_link: "https://nsd.gov.in/admission",
                status: "Upcoming"
            },
            {
                id: "ARTS-002",
                name: "Film and Television Institute of India (FTII) Joint Entrance Test (JET)",
                conducting_body: "Film and Television Institute of India",
                eligibility: "Graduate in any discipline or final year graduation",
                exam_date: "March 2025",
                application_start_date: "2025-01-15",
                application_end_date: "2025-02-15",
                application_link: "https://www.ftii.ac.in",
                exam_mode: "Multi-Stage Process",
                exam_level: "National",
                subjects: [
                    "Film Appreciation",
                    "Mass Media Knowledge",
                    "Creative Aptitude",
                    "General Knowledge",
                    "English Proficiency"
                ],
                exam_pattern: {
                    total_marks: 100,
                    duration: "Multiple Stages",
                    negative_marking: false,
                    sections: [
                        { name: "Written Test", marks: 50, format: "Objective & Subjective" },
                        { name: "Orientation & Interview", marks: 30, format: "Interactive" },
                        { name: "Creative Aptitude Test", marks: 20, format: "Practical" }
                    ]
                },
                syllabus: [
                    "Cinema and Television History",
                    "Current Affairs in Media",
                    "Basic Film Theory",
                    "Visual Arts and Aesthetics",
                    "Cultural Studies",
                    "Media Technology Basics"
                ],
                admit_card_release_date: "2025-02-25",
                result_date: "April 2025",
                counseling_dates: "May 2025",
                selection_process: "Written Test + Orientation + Interview + Aptitude Test",
                official_notification_link: "https://www.ftii.ac.in/admission",
                status: "Upcoming"
            },
            {
                id: "ARTS-003",
                name: "National Institute of Design (NID) Entrance Exam",
                conducting_body: "National Institute of Design",
                eligibility: "12th pass from any stream",
                exam_date: "January 2025",
                application_start_date: "2024-10-01",
                application_end_date: "2024-12-15",
                application_link: "https://admissions.nid.edu",
                exam_mode: "Two-Stage Process",
                exam_level: "National",
                subjects: [
                    "Design Aptitude Test",
                    "Creative Ability",
                    "Visual Perception",
                    "Environmental Awareness",
                    "General Knowledge",
                    "Analytical Skills"
                ],
                exam_pattern: {
                    total_marks: 100,
                    duration: "Multiple Stages",
                    negative_marking: false,
                    sections: [
                        { name: "DAT Prelims", marks: 40, format: "MCQ & Visual Questions" },
                        { name: "DAT Mains", marks: 60, format: "Studio Test & Interview" }
                    ]
                },
                syllabus: [
                    "Design Fundamentals",
                    "Material Studies",
                    "Color Theory",
                    "Visual Composition",
                    "Current Affairs in Design",
                    "Environmental Awareness",
                    "Logical Reasoning"
                ],
                admit_card_release_date: "2024-12-20",
                result_date: "February 2025",
                counseling_dates: "March 2025",
                selection_process: "DAT Prelims + DAT Mains + Studio Tests + Interview",
                official_notification_link: "https://admissions.nid.edu",
                status: "Upcoming"
            }
        ]
    },
    {
        id: 5,
        title: "Social Sciences, Humanities, and Political Studies",
        exams: [
            {
                id: "SOC-001",
                name: "Common University Entrance Test (CUET) for Social Sciences",
                conducting_body: "National Testing Agency (NTA)",
                eligibility: "12th pass from any recognized board",
                exam_date: "8th May - 1st June 2025",
                application_start_date: "2025-03-01",
                application_end_date: "2025-03-31",
                application_link: "https://cuet.samarth.ac.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: [
                    "General Test",
                    "Domain Specific Subjects",
                    "Languages",
                    "Social Sciences"
                ],
                exam_pattern: {
                    total_marks: 800,
                    duration: "3 hours 15 minutes",
                    negative_marking: true,
                    sections: [
                        { name: "Language", marks: 300, questions: 75 },
                        { name: "Domain Specific Subjects", marks: 400, questions: 100 },
                        { name: "General Test", marks: 100, questions: 25 }
                    ]
                },
                syllabus: [
                    "History",
                    "Political Science",
                    "Geography",
                    "Economics",
                    "Sociology",
                    "Psychology",
                    "Current Affairs",
                    "General Knowledge"
                ],
                admit_card_release_date: "2025-04-25",
                result_date: "June 2025",
                counseling_dates: "July 2025",
                selection_process: "Merit Based + University-specific Counselling",
                official_notification_link: "https://cuet.samarth.ac.in",
                status: "Upcoming"
            },
            {
                id: "SOC-002",
                name: "Banaras Hindu University Undergraduate Entrance Test (BHU UET)",
                conducting_body: "Banaras Hindu University",
                eligibility: "12th pass with minimum 50% marks (45% for reserved categories)",
                exam_date: "April 2025",
                application_start_date: "2025-02-01",
                application_end_date: "2025-03-31",
                application_link: "https://www.bhuonline.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: [
                    "General Knowledge",
                    "General English",
                    "Numerical Ability",
                    "Reasoning",
                    "Subject Specific Knowledge"
                ],
                exam_pattern: {
                    total_marks: 300,
                    duration: "2 hours",
                    negative_marking: true,
                    sections: [
                        { name: "General Knowledge", marks: 60, questions: 30 },
                        { name: "General English", marks: 60, questions: 30 },
                        { name: "Numerical Ability", marks: 60, questions: 30 },
                        { name: "Reasoning", marks: 60, questions: 30 },
                        { name: "Subject Specific", marks: 60, questions: 30 }
                    ]
                },
                syllabus: [
                    "Current Affairs - National & International",
                    "History & Culture of India",
                    "Indian Politics & Constitution",
                    "Basic Mathematics",
                    "English Language & Comprehension",
                    "Mental Ability & Reasoning",
                    "Subject Specific Topics"
                ],
                admit_card_release_date: "2025-03-20",
                result_date: "May 2025",
                counseling_dates: "June 2025",
                selection_process: "Written Test + Merit List Based Admission",
                official_notification_link: "https://www.bhuonline.in",
                status: "Upcoming"
            }
        ]
    },
    {
        id: 6,
        title: "Law",
        exams: [
            {
                id: "LAW-001",
                name: "Common Law Admission Test (CLAT)",
                conducting_body: "Consortium of National Law Universities",
                eligibility: "12th pass with minimum 45% marks (40% for reserved categories)",
                exam_date: "8th December 2024",
                application_start_date: "2024-08-01",
                application_end_date: "2024-11-30",
                application_link: "https://consortiumofnlus.ac.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: [
                    "English Language",
                    "Current Affairs & GK",
                    "Legal Reasoning",
                    "Logical Reasoning",
                    "Quantitative Techniques"
                ],
                exam_pattern: {
                    total_marks: 150,
                    duration: "2 hours",
                    negative_marking: true,
                    sections: [
                        { name: "English Language", marks: 30, questions: 30 },
                        { name: "Current Affairs & GK", marks: 30, questions: 30 },
                        { name: "Legal Reasoning", marks: 35, questions: 35 },
                        { name: "Logical Reasoning", marks: 35, questions: 35 },
                        { name: "Quantitative Techniques", marks: 20, questions: 20 }
                    ]
                },
                syllabus: [
                    "English Comprehension",
                    "Grammar & Vocabulary",
                    "Current Affairs",
                    "Legal Aptitude",
                    "Logical Reasoning",
                    "Basic Mathematics",
                    "General Knowledge"
                ],
                admit_card_release_date: "2024-12-01",
                result_date: "January 2025",
                counseling_dates: "January-March 2025",
                selection_process: "Merit Based + Centralized Counselling",
                official_notification_link: "https://consortiumofnlus.ac.in",
                status: "Upcoming"
            },
            {
                id: "LAW-002",
                name: "All India Law Entrance Test (AILET)",
                conducting_body: "National Law University, Delhi",
                eligibility: "12th pass with minimum 50% marks (45% for reserved categories)",
                exam_date: "7th December 2024",
                application_start_date: "2024-09-01",
                application_end_date: "2024-11-15",
                application_link: "https://nationallawuniversitydelhi.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: [
                    "English Language",
                    "Legal Aptitude",
                    "General Knowledge & Current Affairs",
                    "Reasoning",
                    "Mathematics"
                ],
                exam_pattern: {
                    total_marks: 150,
                    duration: "1 hour 30 minutes",
                    negative_marking: true,
                    sections: [
                        { name: "English Language", marks: 35, questions: 35 },
                        { name: "Legal Aptitude", marks: 35, questions: 35 },
                        { name: "General Knowledge", marks: 35, questions: 35 },
                        { name: "Reasoning", marks: 25, questions: 25 },
                        { name: "Mathematics", marks: 20, questions: 20 }
                    ]
                },
                syllabus: [
                    "English Grammar & Comprehension",
                    "Legal Knowledge & Reasoning",
                    "Static GK & Current Affairs",
                    "Logical Reasoning",
                    "Basic Mathematics",
                    "Analytical Ability"
                ],
                admit_card_release_date: "2024-12-01",
                result_date: "January 2025",
                counseling_dates: "January-March 2025",
                selection_process: "Merit Based + Document Verification",
                official_notification_link: "https://nationallawuniversitydelhi.in",
                status: "Upcoming"
            },
            {
                id: "LAW-003",
                name: "Law School Admission Test (LSAT) India",
                conducting_body: "Law School Admission Council (LSAC)",
                eligibility: "12th pass or appearing with minimum 45% marks",
                exam_date: "January 2025",
                application_start_date: "2024-09-15",
                application_end_date: "2024-12-15",
                application_link: "https://www.discoverlaw.in",
                exam_mode: "Computer Based Test (CBT)",
                exam_level: "National",
                subjects: [
                    "Analytical Reasoning",
                    "Logical Reasoning",
                    "Reading Comprehension",
                    "Legal Aptitude"
                ],
                exam_pattern: {
                    total_marks: 180,
                    duration: "2 hours 20 minutes",
                    negative_marking: false,
                    sections: [
                        { name: "Analytical Reasoning", marks: 45, questions: 23 },
                        { name: "Logical Reasoning I", marks: 45, questions: 23 },
                        { name: "Logical Reasoning II", marks: 45, questions: 23 },
                        { name: "Reading Comprehension", marks: 45, questions: 23 }
                    ]
                },
                syllabus: [
                    "Analytical Reasoning Skills",
                    "Critical Thinking",
                    "Reading Comprehension",
                    "Verbal Reasoning",
                    "Argumentative Analysis",
                    "Deductive Logic"
                ],
                admit_card_release_date: "2024-12-20",
                result_date: "February 2025",
                counseling_dates: "March-April 2025",
                selection_process: "Merit Based + Individual Law School Counselling",
                official_notification_link: "https://www.discoverlaw.in",
                status: "Upcoming"
            }
        ]
    }
];
