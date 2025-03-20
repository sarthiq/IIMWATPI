const nationalExamData = [
  {
    id: 1,
    exam_name: "Sainik Schools Entrance Exam (AISSEE)",
    conducting_body: "National Testing Agency (NTA)",
    eligibility:
      "Boys and girls aged 10-12 years for Class 6; 13-15 years for Class 9",
    exam_date: "2025-01-15",
    application_start_date: "2024-09-01",
    application_end_date: "2024-10-31",
    application_link: "https://aissee.nta.nic.in/",
    exam_mode: "Offline",
    exam_level: "National",
    subjects: ["Mathematics", "Intelligence", "Language", "General Knowledge"],
    exam_pattern: {
      total_marks: 300,
      duration: "2.5 hours",
      negative_marking: false,
      sections: [
        { name: "Mathematics", marks: 150, questions: 50 },
        { name: "Intelligence", marks: 50, questions: 25 },
        { name: "Language", marks: 50, questions: 25 },
        { name: "General Knowledge", marks: 50, questions: 25 },
      ],
    },
    syllabus: [
      "Class 5 and Class 8 syllabus for respective entrance levels",
      "Basic Mathematics",
      "English Grammar",
      "Logical Reasoning",
      "General Science & Social Studies",
    ],
    admit_card_release_date: "2024-12-15",
    result_date: "2025-02-28",
    selection_process: "Written Exam + Medical Test",
    official_notification_link: "https://aissee.nta.nic.in/",
    status: "Upcoming",
  },
  {
    id: 2,
    exam_name: "Jawahar Navodaya Vidyalaya Selection Test (JNVST)",
    conducting_body: "Navodaya Vidyalaya Samiti",
    eligibility: "Students studying in Class 5 for Class 6 admission",
    exam_date: "2025-02-01",
    application_start_date: "2024-09-15",
    application_end_date: "2024-11-15",
    application_link: "https://navodaya.gov.in/",
    exam_mode: "Offline",
    exam_level: "National",
    subjects: ["Mental Ability", "Arithmetic", "Language"],
    exam_pattern: {
      total_marks: 100,
      duration: "2 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability", marks: 50, questions: 50 },
        { name: "Arithmetic", marks: 25, questions: 25 },
        { name: "Language", marks: 25, questions: 25 }
      ]
    },
    syllabus: [
      "Class 5 level Mathematics",
      "Mental Ability & Reasoning",
      "Language Comprehension",
    ],
    admit_card_release_date: "2025-01-15",
    result_date: "2025-03-31",
    selection_process: "Written Exam",
    official_notification_link: "https://navodaya.gov.in/",
    status: "Upcoming"
  },
  {
    id: 3,
    exam_name: "Rashtriya Indian Military College (RIMC) Entrance Exam",
    conducting_body: "Ministry of Defense",
    eligibility: "Boys aged 11.5-13 years",
    exam_date: "2025-06-01",
    application_start_date: "2025-01-15",
    application_end_date: "2025-03-31",
    application_link: "https://www.rimc.gov.in/",
    exam_mode: "Offline",
    exam_level: "National",
    subjects: ["English", "Mathematics", "General Knowledge", "Interview"],
    exam_pattern: {
      total_marks: 400,
      duration: "3 hours per paper",
      negative_marking: false,
      sections: [
        { name: "English", marks: 125, questions: 50 },
        { name: "Mathematics", marks: 125, questions: 50 },
        { name: "General Knowledge", marks: 125, questions: 50 },
        { name: "Interview", marks: 25, questions: null }
      ]
    },
    syllabus: [
      "Class 7 level academics",
      "Current Affairs",
      "Logical Reasoning",
      "Basic Sciences"
    ],
    admit_card_release_date: "2025-05-15",
    result_date: "2025-07-31",
    selection_process: "Written Exam + Interview + Medical Test",
    official_notification_link: "https://www.rimc.gov.in/",
    status: "Upcoming"
  },
  {
    id: 4,
    exam_name: "Rashtriya Military Schools (RMS) Entrance Exam",
    conducting_body: "Ministry of Defense",
    eligibility: "Boys and girls aged 10-12 years for Class 6; 13-15 years for Class 9",
    exam_date: "2025-03-15",
    application_start_date: "2024-10-01",
    application_end_date: "2024-12-15",
    application_link: "https://rashtriyamilitaryschools.edu.in/",
    exam_mode: "Offline",
    exam_level: "National",
    subjects: ["Intelligence", "Mathematics", "Language", "General Knowledge"],
    exam_pattern: {
      total_marks: 225,
      duration: "2.5 hours",
      negative_marking: false,
      sections: [
        { name: "Intelligence", marks: 50, questions: 25 },
        { name: "Mathematics", marks: 100, questions: 50 },
        { name: "Language", marks: 50, questions: 25 },
        { name: "General Knowledge", marks: 25, questions: 25 }
      ]
    },
    syllabus: [
      "Class 5/8 level Mathematics",
      "Basic English",
      "General Knowledge",
      "Mental Ability"
    ],
    admit_card_release_date: "2025-02-28",
    result_date: "2025-04-30",
    selection_process: "Written Exam + Medical Test",
    official_notification_link: "https://rashtriyamilitaryschools.edu.in/",
    status: "Upcoming"
  },
  {
    id: 5,
    exam_name: "Indira Gandhi Rashtriya Uran Akademi (IGRUA) Entrance Test",
    conducting_body: "IGRUA",
    eligibility: "Students who have completed Class 12 with Physics and Mathematics",
    exam_date: "2025-05-20",
    application_start_date: "2025-01-10",
    application_end_date: "2025-03-31",
    application_link: "https://www.igrua.gov.in/",
    exam_mode: "Online",
    exam_level: "National",
    subjects: ["Physics", "Mathematics", "English", "Logical Reasoning"],
    exam_pattern: {
      total_marks: 200,
      duration: "2 hours",
      negative_marking: true,
      sections: [
        { name: "Physics", marks: 50, questions: 25 },
        { name: "Mathematics", marks: 50, questions: 25 },
        { name: "English", marks: 50, questions: 25 },
        { name: "Logical Reasoning", marks: 50, questions: 25 }
      ]
    },
    syllabus: [
      "Class 12 Physics",
      "Class 12 Mathematics",
      "English Comprehension",
      "Logical Reasoning and Aptitude"
    ],
    admit_card_release_date: "2025-05-10",
    result_date: "2025-06-15",
    selection_process: "Written Exam + Interview + Medical Test",
    official_notification_link: "https://www.igrua.gov.in/",
    status: "Upcoming"
  },
  {
    id: 6,
    exam_name: "National Talent Search Examination (NTSE) Stage 2",
    conducting_body: "NCERT",
    eligibility: "Students who have cleared NTSE Stage 1",
    exam_date: "2025-06-15",
    application_start_date: "2025-02-01",
    application_end_date: "2025-03-31",
    application_link: "https://ncert.nic.in/ntse.php",
    exam_mode: "Offline",
    exam_level: "National",
    subjects: ["Mental Ability Test (MAT)", "Scholastic Aptitude Test (SAT)"],
    exam_pattern: {
      total_marks: 200,
      duration: "2 hours per paper",
      negative_marking: true,
      sections: [
        { name: "MAT", marks: 100, questions: 100 },
        { name: "SAT", marks: 100, questions: 100 }
      ]
    },
    syllabus: [
      "Mental Ability & Reasoning",
      "Science up to Class 10",
      "Social Science up to Class 10",
      "Mathematics up to Class 10"
    ],
    admit_card_release_date: "2025-06-01",
    result_date: "2025-07-31",
    selection_process: "Written Exam",
    official_notification_link: "https://ncert.nic.in/ntse.php",
    status: "Upcoming"
  },
];

const stateExamData = [
  {
    id: 1,
    exam_name: "State Board Residential Schools Entrance Exams",
    conducting_body: "State Education Boards",
    eligibility: "Students completing Class 5/7/8 (varies by state)",
    exam_date: "2025-03-15",
    application_start_date: "2024-12-01",
    application_end_date: "2025-01-31",
    application_link: "Varies by state",
    exam_mode: "Offline",
    exam_level: "State",
    subjects: ["Mathematics", "Science", "Social Studies", "Language"],
    exam_pattern: {
      total_marks: 100,
      duration: "2 hours",
      negative_marking: false,
      sections: [
        { name: "Mathematics", marks: 25, questions: 25 },
        { name: "Science", marks: 25, questions: 25 },
        { name: "Social Studies", marks: 25, questions: 25 },
        { name: "Language", marks: 25, questions: 25 }
      ]
    },
    syllabus: [
      "State Board Curriculum up to Class 5/7/8",
      "Basic Mathematics",
      "General Science",
      "Social Studies",
      "State Language and English"
    ],
    admit_card_release_date: "2025-03-01",
    result_date: "2025-04-15",
    selection_process: "Written Exam + Merit List",
    official_notification_link: "Check respective state education board websites",
    status: "Upcoming"
  },
  {
    id: 2,
    exam_name: "Eklavya Model Residential School (EMRS) Admission Test",
    conducting_body: "Ministry of Tribal Affairs & State Tribal Welfare Departments",
    eligibility: "Tribal students completing Class 5/6/7 (varies by state)",
    exam_date: "2025-04-10",
    application_start_date: "2024-12-15",
    application_end_date: "2025-02-15",
    application_link: "https://tribal.gov.in/emrs",
    exam_mode: "Offline",
    exam_level: "State",
    subjects: ["Mathematics", "Science", "English", "General Knowledge"],
    exam_pattern: {
      total_marks: 100,
      duration: "2.5 hours",
      negative_marking: false,
      sections: [
        { name: "Mathematics", marks: 30, questions: 30 },
        { name: "Science", marks: 30, questions: 30 },
        { name: "English", marks: 20, questions: 20 },
        { name: "General Knowledge", marks: 20, questions: 20 }
      ]
    },
    syllabus: [
      "Elementary Mathematics",
      "Basic Science Concepts",
      "English Language Skills",
      "General Awareness",
      "Tribal Culture and Heritage"
    ],
    admit_card_release_date: "2025-03-25",
    result_date: "2025-05-15",
    selection_process: "Written Exam + Document Verification",
    official_notification_link: "https://tribal.gov.in/emrs",
    status: "Upcoming"
  },
  {
    id: 3,
    exam_name: "Kendriya Vidyalaya (KV) Admission Test",
    conducting_body: "Kendriya Vidyalaya Sangathan",
    eligibility: "Students seeking admission to Class 2 and above (except Class 11)",
    exam_date: "2025-02-20",
    application_start_date: "2024-12-01",
    application_end_date: "2025-01-15",
    application_link: "https://kvsonlineadmission.kvs.gov.in",
    exam_mode: "Offline",
    exam_level: "State",
    subjects: ["Mathematics", "English", "Hindi", "General Awareness"],
    exam_pattern: {
      total_marks: 100,
      duration: "2 hours",
      negative_marking: false,
      sections: [
        { name: "Mathematics", marks: 30, questions: 30 },
        { name: "English", marks: 30, questions: 30 },
        { name: "Hindi", marks: 20, questions: 20 },
        { name: "General Awareness", marks: 20, questions: 20 }
      ]
    },
    syllabus: [
      "Previous Class Level Mathematics",
      "Basic English Grammar",
      "Hindi Language Skills",
      "Environmental Studies",
      "General Knowledge"
    ],
    admit_card_release_date: "2025-02-10",
    result_date: "2025-03-15",
    selection_process: "Written Exam + Merit List Based Admission",
    official_notification_link: "https://kvsangathan.nic.in",
    status: "Upcoming"
  },
  {
    id: 4,
    exam_name: "State-Sponsored Merit Scholarship Exams",
    conducting_body: "State Education Departments",
    eligibility: "Students of Class 5/8/10 (varies by state)",
    exam_date: "2025-03-30",
    application_start_date: "2024-11-15",
    application_end_date: "2025-01-31",
    application_link: "Check respective state education department websites",
    exam_mode: "Offline",
    exam_level: "State",
    subjects: ["Mathematics", "Science", "Social Studies", "Language", "Mental Ability"],
    exam_pattern: {
      total_marks: 150,
      duration: "2.5 hours",
      negative_marking: false,
      sections: [
        { name: "Mathematics", marks: 40, questions: 40 },
        { name: "Science", marks: 30, questions: 30 },
        { name: "Social Studies", marks: 30, questions: 30 },
        { name: "Language", marks: 25, questions: 25 },
        { name: "Mental Ability", marks: 25, questions: 25 }
      ]
    },
    syllabus: [
      "State Board Curriculum",
      "Advanced Mathematics",
      "Science and Technology",
      "Social Sciences",
      "Language Proficiency",
      "Logical Reasoning"
    ],
    admit_card_release_date: "2025-03-15",
    result_date: "2025-05-15",
    selection_process: "Written Exam + Merit Based Selection",
    official_notification_link: "Check respective state education department websites",
    status: "Upcoming"
  }
];

const scholarshipExamData = [
  {
    id: 1,
    exam_name: "National Talent Search Examination (NTSE)",
    exam_level: "National",
    conducting_body: "NCERT",
    eligibility: "Students studying in Class 10",
    exam_date: "2025-05-10",
    application_start_date: "2024-12-01",
    application_end_date: "2025-01-31",
    application_link: "https://ncert.nic.in/ntse.php",
    exam_mode: "Offline",
    subjects: ["Mental Ability Test (MAT)", "Scholastic Aptitude Test (SAT)"],
    exam_pattern: {
      total_marks: 200,
      duration: "2 hours per paper",
      negative_marking: true,
      sections: [
        { name: "MAT", marks: 100, questions: 100 },
        { name: "SAT", marks: 100, questions: 100 }
      ]
    },
    syllabus: [
      "Mental Ability & Reasoning",
      "Science up to Class 10",
      "Social Science up to Class 10",
      "Mathematics up to Class 10"
    ],
    admit_card_release_date: "2025-04-25",
    result_date: "2025-06-30",
    selection_process: "Two-stage selection: State level followed by National level",
    official_notification_link: "https://ncert.nic.in/ntse.php",
    status: "Upcoming"
  },
  {
    id: 2,
    exam_name: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
    exam_level: "National",
    conducting_body: "Indian Institute of Science (IISc)",
    eligibility: "Students in Class 11, 12 and First year B.Sc/B.Stat/B.Math/Int. M.Sc",
    exam_date: "2025-04-15",
    application_start_date: "2024-11-15",
    application_end_date: "2025-01-15",
    application_link: "https://kvpy.iisc.ac.in",
    exam_mode: "Online",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    exam_pattern: {
      total_marks: 200,
      duration: "3 hours",
      negative_marking: true,
      sections: [
        { name: "Physics", marks: 50, questions: 25 },
        { name: "Chemistry", marks: 50, questions: 25 },
        { name: "Mathematics", marks: 50, questions: 25 },
        { name: "Biology", marks: 50, questions: 25 }
      ]
    },
    syllabus: [
      "Physics up to Class 12",
      "Chemistry up to Class 12",
      "Mathematics up to Class 12",
      "Biology up to Class 12"
    ],
    admit_card_release_date: "2025-04-01",
    result_date: "2025-06-15",
    selection_process: "Written Test + Interview",
    official_notification_link: "https://kvpy.iisc.ac.in",
    status: "Upcoming"
  },
  {
    id: 3,
    exam_name: "Uttar Pradesh National Means-Cum-Merit Scholarship (UP NMMS)",
    exam_level: "State",
    conducting_body: "UP State Education Board",
    eligibility: "Students studying in Class 8 in government schools",
    exam_date: "2025-03-20",
    application_start_date: "2024-12-15",
    application_end_date: "2025-01-31",
    application_link: "https://upmsp.edu.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability Test", "Scholastic Aptitude Test"],
    exam_pattern: {
      total_marks: 180,
      duration: "3 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability Test", marks: 90, questions: 90 },
        { name: "Scholastic Aptitude Test", marks: 90, questions: 90 }
      ]
    },
    syllabus: [
      "Mental Ability & Reasoning",
      "Mathematics up to Class 8",
      "Science up to Class 8",
      "Social Science up to Class 8"
    ],
    admit_card_release_date: "2025-03-10",
    result_date: "2025-04-30",
    selection_process: "Written Exam + Family Income Criteria",
    official_notification_link: "https://upmsp.edu.in/nmms",
    status: "Upcoming"
  },
  {
    id: 4,
    exam_name: "Bihar NMMS & Mukhyamantri Medha Chhatravriti Yojana",
    exam_level: "State",
    conducting_body: "Bihar School Examination Board",
    eligibility: "Students of Class 8 with family income below 1.5 lakhs per annum",
    exam_date: "2025-04-05",
    application_start_date: "2025-01-10",
    application_end_date: "2025-02-28",
    application_link: "https://bihar.gov.in/education",
    exam_mode: "Offline",
    subjects: ["Mental Ability Test", "Language Test", "Mathematics", "Science"],
    exam_pattern: {
      total_marks: 150,
      duration: "2.5 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability Test", marks: 50, questions: 50 },
        { name: "Language Test", marks: 30, questions: 30 },
        { name: "Mathematics", marks: 35, questions: 35 },
        { name: "Science", marks: 35, questions: 35 }
      ]
    },
    syllabus: [
      "Logical Reasoning",
      "Basic Language Skills",
      "Mathematics up to Class 8",
      "Science Concepts up to Class 8"
    ],
    admit_card_release_date: "2025-03-25",
    result_date: "2025-05-15",
    selection_process: "Written Exam + Income Certificate Verification",
    official_notification_link: "https://bihar.gov.in/education/scholarships",
    status: "Upcoming"
  },
  {
    id: 5,
    exam_name: "Rajasthan NTSE & State Talent Search Examination (STSE Rajasthan)",
    exam_level: "State",
    conducting_body: "Rajasthan Board of Secondary Education",
    eligibility: "Students studying in Class 10 in Rajasthan schools",
    exam_date: "2025-03-25",
    application_start_date: "2024-12-10",
    application_end_date: "2025-01-20",
    application_link: "https://rajeduboard.rajasthan.gov.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability Test", "Scholastic Aptitude Test"],
    exam_pattern: {
      total_marks: 200,
      duration: "2.5 hours",
      negative_marking: true,
      sections: [
        { name: "Mental Ability Test", marks: 100, questions: 100 },
        { name: "Scholastic Aptitude Test", marks: 100, questions: 100 }
      ]
    },
    syllabus: [
      "Logical Reasoning & Mental Ability",
      "Science up to Class 10",
      "Mathematics up to Class 10",
      "Social Studies up to Class 10"
    ],
    admit_card_release_date: "2025-03-15",
    result_date: "2025-05-10",
    selection_process: "Written Exam + Merit List",
    official_notification_link: "https://rajeduboard.rajasthan.gov.in/stse",
    status: "Upcoming"
  },
  {
    id: 6,
    exam_name: "Delhi NMMS Scholarship Exam",
    exam_level: "State",
    conducting_body: "Delhi Directorate of Education",
    eligibility: "Class 8 students from government/aided schools in Delhi",
    exam_date: "2025-04-12",
    application_start_date: "2025-01-05",
    application_end_date: "2025-02-15",
    application_link: "http://www.edudel.nic.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability Test", "Scholastic Aptitude Test", "Language"],
    exam_pattern: {
      total_marks: 180,
      duration: "3 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability Test", marks: 90, questions: 90 },
        { name: "Scholastic Aptitude Test", marks: 60, questions: 60 },
        { name: "Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Logical Reasoning",
      "Mathematics up to Class 8",
      "Science up to Class 8",
      "Social Science up to Class 8",
      "Language Comprehension"
    ],
    admit_card_release_date: "2025-04-01",
    result_date: "2025-05-30",
    selection_process: "Written Exam + Income Verification",
    official_notification_link: "http://www.edudel.nic.in/nmms",
    status: "Upcoming"
  },
  {
    id: 7,
    exam_name: "Punjab Meritorious School Admission Test",
    exam_level: "State",
    conducting_body: "Punjab Education Board",
    eligibility: "Students of Class 8 from government schools in Punjab",
    exam_date: "2025-03-28",
    application_start_date: "2024-12-20",
    application_end_date: "2025-02-10",
    application_link: "http://www.ssapunjab.org",
    exam_mode: "Offline",
    subjects: ["Mathematics", "Science", "Social Studies", "Mental Ability"],
    exam_pattern: {
      total_marks: 160,
      duration: "2.5 hours",
      negative_marking: false,
      sections: [
        { name: "Mathematics", marks: 50, questions: 50 },
        { name: "Science", marks: 40, questions: 40 },
        { name: "Social Studies", marks: 35, questions: 35 },
        { name: "Mental Ability", marks: 35, questions: 35 }
      ]
    },
    syllabus: [
      "Mathematics up to Class 8",
      "Science Concepts",
      "Social Studies",
      "Logical Reasoning",
      "Current Affairs"
    ],
    admit_card_release_date: "2025-03-15",
    result_date: "2025-04-30",
    selection_process: "Written Exam + Merit Based Selection",
    official_notification_link: "http://www.ssapunjab.org/scholarships",
    status: "Upcoming"
  },
  {
    id: 8,
    exam_name: "Haryana NTSE & Super 100 Scholarship Scheme",
    exam_level: "State",
    conducting_body: "Haryana Board of School Education",
    eligibility: "Students of Class 10 studying in Haryana schools",
    exam_date: "2025-04-08",
    application_start_date: "2025-01-15",
    application_end_date: "2025-02-28",
    application_link: "http://www.bseh.org.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability Test", "Scholastic Aptitude Test", "Language"],
    exam_pattern: {
      total_marks: 200,
      duration: "3 hours",
      negative_marking: true,
      sections: [
        { name: "Mental Ability Test", marks: 100, questions: 100 },
        { name: "Scholastic Aptitude Test", marks: 70, questions: 70 },
        { name: "Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Logical Reasoning & Mental Ability",
      "Science up to Class 10",
      "Mathematics up to Class 10",
      "Social Studies up to Class 10",
      "Language Proficiency"
    ],
    admit_card_release_date: "2025-03-25",
    result_date: "2025-05-20",
    selection_process: "Written Exam + Interview for Super 100",
    official_notification_link: "http://www.bseh.org.in/scholarships",
    status: "Upcoming"
  },
  {
    id: 9,
    exam_name: "Tamil Nadu NMMS & Vidyadhan Scholarship",
    exam_level: "State",
    conducting_body: "Tamil Nadu State Education Board",
    eligibility: "Students of Class 8 from government/aided schools in Tamil Nadu",
    exam_date: "2025-03-10",
    application_start_date: "2024-12-15",
    application_end_date: "2025-01-31",
    application_link: "http://www.dge.tn.gov.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability Test", "Scholastic Aptitude Test", "Tamil Language"],
    exam_pattern: {
      total_marks: 180,
      duration: "3 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability Test", marks: 90, questions: 90 },
        { name: "Scholastic Aptitude Test", marks: 60, questions: 60 },
        { name: "Tamil Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Logical Reasoning",
      "Mathematics up to Class 8",
      "Science up to Class 8",
      "Social Science up to Class 8",
      "Tamil Language Skills"
    ],
    admit_card_release_date: "2025-02-25",
    result_date: "2025-04-15",
    selection_process: "Written Exam + Income Criteria",
    official_notification_link: "http://www.dge.tn.gov.in/scholarships",
    status: "Upcoming"
  },
  {
    id: 10,
    exam_name: "Andhra Pradesh NMMS & Vikram Sarabhai Scholarship",
    exam_level: "State",
    conducting_body: "AP State Education Board",
    eligibility: "Students of Class 8 from government schools in Andhra Pradesh",
    exam_date: "2025-03-18",
    application_start_date: "2024-12-10",
    application_end_date: "2025-01-25",
    application_link: "https://bse.ap.gov.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability", "Academic Aptitude", "Telugu/English"],
    exam_pattern: {
      total_marks: 150,
      duration: "2.5 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability", marks: 50, questions: 50 },
        { name: "Academic Aptitude", marks: 70, questions: 70 },
        { name: "Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Mental Ability & Reasoning",
      "Mathematics up to Class 8",
      "Science & Social Studies",
      "Language Proficiency",
      "Current Affairs"
    ],
    admit_card_release_date: "2025-03-05",
    result_date: "2025-04-20",
    selection_process: "Written Exam + Merit List",
    official_notification_link: "https://bse.ap.gov.in/scholarships",
    status: "Upcoming"
  },
  {
    id: 11,
    exam_name: "Karnataka Pratibha Puraskar & NMMS",
    exam_level: "State",
    conducting_body: "Karnataka Secondary Education Board",
    eligibility: "Students of Class 8 from government/aided schools in Karnataka",
    exam_date: "2025-03-22",
    application_start_date: "2024-12-15",
    application_end_date: "2025-02-10",
    application_link: "https://kseeb.kar.nic.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability", "Scholastic Aptitude", "Kannada/English"],
    exam_pattern: {
      total_marks: 150,
      duration: "2.5 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability", marks: 50, questions: 50 },
        { name: "Scholastic Aptitude", marks: 70, questions: 70 },
        { name: "Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Logical Reasoning",
      "Mathematics up to Class 8",
      "Science Concepts",
      "Social Studies",
      "Language Skills"
    ],
    admit_card_release_date: "2025-03-10",
    result_date: "2025-04-25",
    selection_process: "Written Exam + Merit Based Selection",
    official_notification_link: "https://kseeb.kar.nic.in/scholarships",
    status: "Upcoming"
  },
  {
    id: 12,
    exam_name: "Kerala State Talent Search Exam (KTSE) & NMMS",
    exam_level: "State",
    conducting_body: "Kerala State Education Board",
    eligibility: "Students of Class 8 studying in Kerala schools",
    exam_date: "2025-04-05",
    application_start_date: "2025-01-10",
    application_end_date: "2025-02-28",
    application_link: "https://keralapareekshabhavan.gov.in",
    exam_mode: "Offline",
    subjects: ["Scholastic Aptitude Test", "Mental Ability Test", "Malayalam/English"],
    exam_pattern: {
      total_marks: 180,
      duration: "3 hours",
      negative_marking: true,
      sections: [
        { name: "Scholastic Aptitude Test", marks: 90, questions: 90 },
        { name: "Mental Ability Test", marks: 60, questions: 60 },
        { name: "Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Science up to Class 8",
      "Mathematics up to Class 8",
      "Social Science",
      "Mental Ability",
      "Language Proficiency"
    ],
    admit_card_release_date: "2025-03-25",
    result_date: "2025-05-15",
    selection_process: "Written Exam + Interview",
    official_notification_link: "https://keralapareekshabhavan.gov.in/scholarships",
    status: "Upcoming"
  },
  {
    id: 13,
    exam_name: "West Bengal NMMS & Swami Vivekananda Merit-Cum-Means Scholarship",
    exam_level: "State",
    conducting_body: "West Bengal Board of Secondary Education",
    eligibility: "Students of Class 8 from government/aided schools in West Bengal",
    exam_date: "2025-03-15",
    application_start_date: "2024-12-10",
    application_end_date: "2025-01-31",
    application_link: "https://wbbse.wb.gov.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability Test", "Scholastic Aptitude Test", "Bengali/English"],
    exam_pattern: {
      total_marks: 180,
      duration: "3 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability Test", marks: 90, questions: 90 },
        { name: "Scholastic Aptitude Test", marks: 60, questions: 60 },
        { name: "Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Logical Reasoning",
      "Mathematics up to Class 8",
      "Science Concepts",
      "Social Studies",
      "Language Skills"
    ],
    admit_card_release_date: "2025-03-01",
    result_date: "2025-04-30",
    selection_process: "Written Exam + Family Income Verification",
    official_notification_link: "https://wbbse.wb.gov.in/scholarships",
    status: "Upcoming"
  },
  {
    id: 14,
    exam_name: "Odisha NMMS & Biju Patnaik Talent Search Exam",
    exam_level: "State",
    conducting_body: "Board of Secondary Education, Odisha",
    eligibility: "Students of Class 8 from government schools in Odisha",
    exam_date: "2025-03-25",
    application_start_date: "2024-12-15",
    application_end_date: "2025-02-10",
    application_link: "http://www.bseodisha.ac.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability", "Language", "Mathematics", "Science"],
    exam_pattern: {
      total_marks: 150,
      duration: "2.5 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability", marks: 50, questions: 50 },
        { name: "Language", marks: 30, questions: 30 },
        { name: "Mathematics", marks: 35, questions: 35 },
        { name: "Science", marks: 35, questions: 35 }
      ]
    },
    syllabus: [
      "Mental Ability & Reasoning",
      "Odia/English Language",
      "Mathematics up to Class 8",
      "Science up to Class 8"
    ],
    admit_card_release_date: "2025-03-15",
    result_date: "2025-05-10",
    selection_process: "Written Exam + Merit List",
    official_notification_link: "http://www.bseodisha.ac.in/scholarships",
    status: "Upcoming"
  },
  {
    id: 15,
    exam_name: "Assam NMMS & Combined Merit Scholarship",
    exam_level: "State",
    conducting_body: "Board of Secondary Education, Assam",
    eligibility: "Students of Class 8 from government/aided schools in Assam",
    exam_date: "2025-04-05",
    application_start_date: "2025-01-10",
    application_end_date: "2025-02-28",
    application_link: "http://sebaonline.org",
    exam_mode: "Offline",
    subjects: ["Mental Ability Test", "Scholastic Aptitude Test", "Assamese/English"],
    exam_pattern: {
      total_marks: 180,
      duration: "3 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability Test", marks: 90, questions: 90 },
        { name: "Scholastic Aptitude Test", marks: 60, questions: 60 },
        { name: "Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Logical Reasoning",
      "Mathematics up to Class 8",
      "Science Concepts",
      "Social Studies",
      "Language Proficiency"
    ],
    admit_card_release_date: "2025-03-25",
    result_date: "2025-05-20",
    selection_process: "Written Exam + Merit Based Selection",
    official_notification_link: "http://sebaonline.org/scholarships",
    status: "Upcoming"
  },
  {
    id: 16,
    exam_name: "Meghalaya & Other NE State NMMS Scholarships",
    exam_level: "State",
    conducting_body: "Meghalaya Board of School Education",
    eligibility: "Students of Class 8 from government schools in Meghalaya and other NE states",
    exam_date: "2025-03-30",
    application_start_date: "2024-12-15",
    application_end_date: "2025-02-15",
    application_link: "http://mbose.edu.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability", "Scholastic Aptitude", "English/Local Language"],
    exam_pattern: {
      total_marks: 150,
      duration: "2.5 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability", marks: 60, questions: 60 },
        { name: "Scholastic Aptitude", marks: 60, questions: 60 },
        { name: "Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Logical Reasoning & Mental Ability",
      "Mathematics up to Class 8",
      "Science & Social Studies",
      "Language Skills",
      "Local Knowledge"
    ],
    admit_card_release_date: "2025-03-15",
    result_date: "2025-05-10",
    selection_process: "Written Exam + Document Verification",
    official_notification_link: "http://mbose.edu.in/scholarships",
    status: "Upcoming"
  },
  {
    id: 17,
    exam_name: "Maharashtra NTSE & State Talent Search Examination (STSE Maharashtra)",
    exam_level: "State",
    conducting_body: "Maharashtra State Council of Educational Research and Training",
    eligibility: "Students of Class 10 from Maharashtra schools",
    exam_date: "2025-03-20",
    application_start_date: "2024-12-01",
    application_end_date: "2025-01-31",
    application_link: "https://mscert.maharashtra.gov.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability Test", "Scholastic Aptitude Test", "Marathi/English"],
    exam_pattern: {
      total_marks: 200,
      duration: "3 hours",
      negative_marking: true,
      sections: [
        { name: "Mental Ability Test", marks: 100, questions: 100 },
        { name: "Scholastic Aptitude Test", marks: 70, questions: 70 },
        { name: "Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Logical Reasoning & Mental Ability",
      "Science up to Class 10",
      "Mathematics up to Class 10",
      "Social Studies up to Class 10",
      "Language Skills"
    ],
    admit_card_release_date: "2025-03-05",
    result_date: "2025-04-30",
    selection_process: "Written Exam + Merit List",
    official_notification_link: "https://mscert.maharashtra.gov.in/scholarships",
    status: "Upcoming"
  },
  {
    id: 18,
    exam_name: "Madhya Pradesh NMMS & Vikramaditya Scholarship",
    exam_level: "State",
    conducting_body: "MP Board of Secondary Education",
    eligibility: "Students of Class 8 from government schools in Madhya Pradesh",
    exam_date: "2025-04-10",
    application_start_date: "2025-01-05",
    application_end_date: "2025-02-28",
    application_link: "http://mpbse.nic.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability", "Academic Aptitude", "Hindi/English"],
    exam_pattern: {
      total_marks: 180,
      duration: "3 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability", marks: 90, questions: 90 },
        { name: "Academic Aptitude", marks: 60, questions: 60 },
        { name: "Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Mental Ability & Reasoning",
      "Mathematics up to Class 8",
      "Science & Social Studies",
      "Language Proficiency",
      "General Knowledge"
    ],
    admit_card_release_date: "2025-03-25",
    result_date: "2025-05-15",
    selection_process: "Written Exam + Document Verification",
    official_notification_link: "http://mpbse.nic.in/scholarships",
    status: "Upcoming"
  },
  {
    id: 19,
    exam_name: "Chhattisgarh NMMS & Pre-Matric Merit Scholarship",
    exam_level: "State",
    conducting_body: "Chhattisgarh Board of Secondary Education",
    eligibility: "Students of Class 8 from government schools in Chhattisgarh",
    exam_date: "2025-03-28",
    application_start_date: "2024-12-15",
    application_end_date: "2025-02-10",
    application_link: "http://cgbse.nic.in",
    exam_mode: "Offline",
    subjects: ["Mental Ability", "Scholastic Aptitude", "Hindi/English"],
    exam_pattern: {
      total_marks: 180,
      duration: "3 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability", marks: 90, questions: 90 },
        { name: "Scholastic Aptitude", marks: 60, questions: 60 },
        { name: "Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Logical Reasoning",
      "Mathematics up to Class 8",
      "Science & Social Studies",
      "Language Skills",
      "General Knowledge"
    ],
    admit_card_release_date: "2025-03-15",
    result_date: "2025-05-10",
    selection_process: "Written Exam + Income Certificate Verification",
    official_notification_link: "http://cgbse.nic.in/scholarships",
    status: "Upcoming"
  },
  {
    id: 20,
    exam_name: "Gujarat NMMS & Gyan Sadhana Scholarship",
    exam_level: "State",
    conducting_body: "Gujarat Secondary Education Board",
    eligibility: "Students of Class 8 from government/aided schools in Gujarat",
    exam_date: "2025-04-15",
    application_start_date: "2025-01-10",
    application_end_date: "2025-02-28",
    application_link: "https://www.gseb.org",
    exam_mode: "Offline",
    subjects: ["Mental Ability Test", "Scholastic Aptitude Test", "Gujarati/English"],
    exam_pattern: {
      total_marks: 180,
      duration: "3 hours",
      negative_marking: false,
      sections: [
        { name: "Mental Ability Test", marks: 90, questions: 90 },
        { name: "Scholastic Aptitude Test", marks: 60, questions: 60 },
        { name: "Language", marks: 30, questions: 30 }
      ]
    },
    syllabus: [
      "Mental Ability & Reasoning",
      "Mathematics up to Class 8",
      "Science Concepts",
      "Social Studies",
      "Language Proficiency"
    ],
    admit_card_release_date: "2025-04-01",
    result_date: "2025-05-30",
    selection_process: "Written Exam + Merit Based Selection",
    official_notification_link: "https://www.gseb.org/scholarships",
    status: "Upcoming"
  },
  {
    id: 21,
    exam_name: "Eklavya Model Residential School (EMRS) Admission Test",
    exam_level: "National",
    conducting_body: "Ministry of Tribal Affairs",
    eligibility: "Tribal students completing Class 5/6 for admission",
    exam_date: "2025-04-20",
    application_start_date: "2025-01-15",
    application_end_date: "2025-03-10",
    application_link: "https://tribal.gov.in/emrs",
    exam_mode: "Offline",
    subjects: ["Mathematics", "Science", "English", "General Knowledge"],
    exam_pattern: {
      total_marks: 100,
      duration: "2 hours",
      negative_marking: false,
      sections: [
        { name: "Mathematics", marks: 30, questions: 30 },
        { name: "Science", marks: 30, questions: 30 },
        { name: "English", marks: 20, questions: 20 },
        { name: "General Knowledge", marks: 20, questions: 20 }
      ]
    },
    syllabus: [
      "Basic Mathematics",
      "Elementary Science",
      "English Language Skills",
      "General Awareness",
      "Tribal Culture and Heritage"
    ],
    admit_card_release_date: "2025-04-10",
    result_date: "2025-05-25",
    selection_process: "Written Exam + Interview + Document Verification",
    official_notification_link: "https://tribal.gov.in/emrs/admissions",
    status: "Upcoming"
  },
  {
    id: 22,
    exam_name: "INSPIRE Scholarship",
    exam_level: "National",
    conducting_body: "Department of Science & Technology",
    eligibility: "Top 1% students in Class 10 board exams",
    exam_date: "Merit-based selection",
    application_start_date: "2025-02-01",
    application_end_date: "2025-03-31",
    application_link: "https://www.online-inspire.gov.in",
    exam_mode: "Merit-based",
    subjects: ["Science", "Mathematics"],
    exam_pattern: {
      total_marks: "Based on Class 10 marks",
      duration: "Not Applicable",
      negative_marking: false,
      sections: [
        { name: "Academic Merit", marks: "Based on Class 10 percentage", questions: null }
      ]
    },
    syllabus: [
      "Class 10 Science",
      "Class 10 Mathematics",
      "Academic Excellence",
      "Innovation Aptitude"
    ],
    admit_card_release_date: "Not Applicable",
    result_date: "2025-06-15",
    selection_process: "Merit-based selection from Class 10 board results",
    official_notification_link: "https://www.online-inspire.gov.in",
    status: "Upcoming"
  },
  {
    id: 23,
    exam_name: "Dr. APJ Abdul Kalam Scholarship",
    exam_level: "State",
    conducting_body: "Various State Education Boards",
    eligibility: "Students from Class 11 with excellence in Science & Mathematics",
    exam_date: "2025-05-01",
    application_start_date: "2025-02-15",
    application_end_date: "2025-03-31",
    application_link: "Check respective state education board websites",
    exam_mode: "Offline",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    exam_pattern: {
      total_marks: 200,
      duration: "3 hours",
      negative_marking: true,
      sections: [
        { name: "Physics", marks: 50, questions: 50 },
        { name: "Chemistry", marks: 50, questions: 50 },
        { name: "Mathematics", marks: 50, questions: 50 },
        { name: "Biology", marks: 50, questions: 50 }
      ]
    },
    syllabus: [
      "Class 10 Physics",
      "Class 10 Chemistry",
      "Class 10 Mathematics",
      "Class 10 Biology",
      "Scientific Aptitude"
    ],
    admit_card_release_date: "2025-04-20",
    result_date: "2025-06-10",
    selection_process: "Written Exam + Academic Performance + Interview",
    official_notification_link: "Check respective state education board websites",
    status: "Upcoming"
  }
];

export { nationalExamData, stateExamData, scholarshipExamData };
