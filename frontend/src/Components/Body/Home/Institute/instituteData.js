export const collegeData = [
  {
    id: 1,
    name: "Indian Institute of Technology Bombay (IIT Bombay)",
    routes: "iit-bombay",
    courses: [
      "B.Tech in Computer Science and Engineering",
      "B.Tech in Electrical Engineering",
      "B.Tech in Mechanical Engineering",
      "B.Tech in Chemical Engineering",
      "B.Tech in Civil Engineering",
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "Main entrance exam for all IITs",
        minPercentile: 90,
      },
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Powai, Mumbai, Maharashtra 400076",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Advanced",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 1,
      qsWorld: 177,
    },
    infrastructure: {
      campus: "Sprawling 550-acre campus",
      facilities: [
        "World-class laboratories",
        "Central library",
        "Sports complex",
        "Medical center",
      ],
    },
    placement: {
      averagePackage: "₹25 LPA",
      highestPackage: "₹1.5 Cr",
      recruiters: ["Google", "Microsoft", "Apple", "Goldman Sachs"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 2,
    name: "All India Institute of Medical Sciences (AIIMS Delhi)",
    routes: "aiims-delhi",
    courses: [
      "MBBS",
      "B.Sc Nursing",
      "B.Sc (Hons.) in Medical Technology",
      "Paramedical Courses",
    ],
    entranceExams: [
      {
        name: "NEET-UG",
        description: "National Eligibility cum Entrance Test",
        minPercentile: 95,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Ansari Nagar East, New Delhi, Delhi 110029",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCB in 12th standard",
      entranceRequirement: "NEET qualification mandatory",
      ageLimit: "17-25 years",
    },
    rankings: {
      nirf: 1,
      category: "Medical",
    },
    infrastructure: {
      campus: "Modern 100-acre medical campus",
      facilities: [
        "Advanced research laboratories",
        "Super-specialty treatments",
        "24x7 emergency services",
        "Digital library",
      ],
    },
    placement: {
      residencyPrograms: true,
      researchOpportunities: true,
      hospitalAffiliations: ["AIIMS Hospital", "Major Government Hospitals"],
    },
    fees: {
      tuition: "₹6,000 per year (subsidized)",
      hostel: "₹40,000 per year",
    },
  },
  {
    id: 3,
    name: "Indian Institute of Technology Delhi (IIT Delhi)",
    routes: "iit-delhi",
    courses: [
      "B.Tech in Computer Science and Engineering",
      "B.Tech in Artificial Intelligence",
      "B.Tech in Electrical Engineering",
      "B.Tech in Mechanical Engineering",
      "B.Tech in Civil Engineering",
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "Main entrance exam for all IITs",
        minPercentile: 90,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Hauz Khas, New Delhi, Delhi 110016",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Advanced",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 2,
      qsWorld: 185,
    },
    infrastructure: {
      campus: "325-acre campus",
      facilities: [
        "Research laboratories",
        "Central library",
        "Sports complex",
        "Healthcare center",
      ],
    },
    placement: {
      averagePackage: "₹22 LPA",
      highestPackage: "₹1.8 Cr",
      recruiters: ["Google", "Microsoft", "Amazon", "Intel"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 4,
    name: "Indian Institute of Science (IISc Bangalore)",
    routes: "iisc-bangalore",
    courses: [
      "B.Tech in Mathematics and Computing",
      "B.S. in Physics",
      "B.S. in Chemistry",
      "B.S. in Environmental Science",
    ],
    entranceExams: [
      {
        name: "KVPY",
        description: "Kishore Vaigyanik Protsahan Yojana",
        minPercentile: 95,
      },
      {
        name: "JEE Advanced",
        description: "Alternative entry path",
        minPercentile: 90,
      },
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "CV Raman Road, Bangalore, Karnataka 560012",
    },
    eligibility: {
      academicCriteria: "Minimum 80% in PCM in 12th standard",
      entranceRequirement: "KVPY or JEE Advanced qualification",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 1,
      qsWorld: 155,
    },
    infrastructure: {
      campus: "400-acre research campus",
      facilities: [
        "Advanced research centers",
        "Scientific laboratories",
        "Innovation hub",
        "Supercomputer facility",
      ],
    },
    placement: {
      averagePackage: "₹24 LPA",
      highestPackage: "₹1.2 Cr",
      recruiters: ["Intel", "IBM Research", "ISRO", "DRDO"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 5,
    name: "Birla Institute of Technology and Science (BITS Pilani)",
    routes: "bits-pilani",
    courses: [
      "B.E. in Computer Science",
      "B.E. in Electronics and Communication",
      "B.E. in Mechanical Engineering",
      "B.Pharma",
      "M.Sc. in Mathematics",
    ],
    entranceExams: [
      {
        name: "BITSAT",
        description: "BITS Admission Test",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Pilani",
      state: "Rajasthan",
      address: "Vidya Vihar, Pilani, Rajasthan 333031",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "BITSAT qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 17,
      qsWorld: 801,
    },
    infrastructure: {
      campus: "328-acre campus",
      facilities: [
        "Innovation labs",
        "Technology innovation center",
        "Sports facilities",
        "Modern library",
      ],
    },
    placement: {
      averagePackage: "₹18 LPA",
      highestPackage: "₹1.1 Cr",
      recruiters: ["Microsoft", "Goldman Sachs", "Oracle", "Adobe"],
    },
    fees: {
      tuition: "₹4.5 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 6,
    name: "National Law School of India University (NLSIU Bangalore)",
    routes: "nlsiu-bangalore",
    courses: [
      "B.A. LL.B (Hons.)",
      "LL.M.",
      "Ph.D in Law",
      "Master of Public Policy",
    ],
    entranceExams: [
      {
        name: "CLAT",
        description: "Common Law Admission Test",
        minPercentile: 95,
      },
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Nagarbhavi, Bangalore, Karnataka 560072",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in 12th standard",
      entranceRequirement: "CLAT qualification",
      ageLimit: "Less than 20 years for UG",
    },
    rankings: {
      nirf: 1,
      category: "Law",
    },
    infrastructure: {
      campus: "23-acre campus",
      facilities: [
        "Moot court halls",
        "Legal databases",
        "Digital library",
        "Sports facilities",
      ],
    },
    placement: {
      averagePackage: "₹15 LPA",
      highestPackage: "₹45 LPA",
      recruiters: ["Top Law Firms", "Corporate Legal Departments", "Judiciary"],
    },
    fees: {
      tuition: "₹2.3 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },

  {
    id: 8,
    name: "National Institute of Technology Trichy (NIT Trichy)",
    routes: "nit-trichy",
    courses: [
      "B.Tech in Computer Science and Engineering",
      "B.Tech in Electronics and Communication",
      "B.Tech in Mechanical Engineering",
      "B.Tech in Chemical Engineering",
      "B.Tech in Production Engineering",
    ],
    entranceExams: [
      {
        name: "JEE Main",
        description: "Main entrance exam for NITs",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Tiruchirappalli",
      state: "Tamil Nadu",
      address: "Tanjore Main Road, Trichy, Tamil Nadu 620015",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "JEE Main qualification",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 9,
      qsWorld: 801,
    },
    infrastructure: {
      campus: "800-acre campus",
      facilities: [
        "Modern laboratories",
        "Central computing facility",
        "Indoor stadium",
        "Tech incubation center",
      ],
    },
    placement: {
      averagePackage: "₹16 LPA",
      highestPackage: "₹82 LPA",
      recruiters: ["Amazon", "Microsoft", "Samsung", "Qualcomm"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 9,
    name: "St. Stephen's College, Delhi University",
    routes: "st-stephens-delhi",
    courses: [
      "B.A. (Hons.) Economics",
      "B.A. (Hons.) English",
      "B.Sc. (Hons.) Mathematics",
      "B.Sc. (Hons.) Physics",
      "B.Sc. (Hons.) Chemistry",
    ],
    entranceExams: [
      {
        name: "CUET",
        description: "Common University Entrance Test",
        minPercentile: 95,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "University Enclave, Delhi 110007",
    },
    eligibility: {
      academicCriteria: "Minimum 95% in 12th standard",
      entranceRequirement: "CUET score + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 11,
      category: "College",
    },
    infrastructure: {
      campus: "Historic campus",
      facilities: ["Research centers", "Sports complex", "Chapel", "Cafeteria"],
    },
    placement: {
      averagePackage: "₹10 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["Deutsche Bank", "McKinsey", "BCG", "Civil Services"],
    },
    fees: {
      tuition: "₹30,000 per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 10,
    name: "Vellore Institute of Technology (VIT)",
    routes: "vit-vellore",
    courses: [
      "B.Tech in Computer Science",
      "B.Tech in Electronics",
      "B.Tech in Mechanical",
      "BBA",
      "B.Arch",
    ],
    entranceExams: [
      {
        name: "VITEEE",
        description: "VIT Engineering Entrance Examination",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Vellore",
      state: "Tamil Nadu",
      address: "Katpadi Road, Vellore, Tamil Nadu 632014",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCM in 12th standard",
      entranceRequirement: "VITEEE qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 13,
      qsWorld: 801,
    },
    infrastructure: {
      campus: "600-acre campus",
      facilities: [
        "Technology tower",
        "Innovation center",
        "Smart classrooms",
        "International hostels",
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹45 LPA",
      recruiters: ["Amazon", "TCS", "Infosys", "Accenture"],
    },
    fees: {
      tuition: "₹4 Lakhs per year",
      hostel: "₹1 Lakh per year",
    },
  },
  {
    id: 11,
    name: "Manipal Institute of Technology (MIT Manipal)",
    routes: "mit-manipal",
    courses: [
      "B.Tech in Data Science",
      "B.Tech in AI and ML",
      "B.Tech in Robotics",
      "B.Tech in Information Technology",
      "B.Tech in Biotechnology",
    ],
    entranceExams: [
      {
        name: "MET",
        description: "Manipal Entrance Test",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Manipal",
      state: "Karnataka",
      address: "MIT Campus, Manipal, Karnataka 576104",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCM in 12th standard",
      entranceRequirement: "MET qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 45,
      qsWorld: 1001,
    },
    infrastructure: {
      campus: "Modern 188-acre campus",
      facilities: [
        "Innovation center",
        "Research labs",
        "Food courts",
        "Medical facilities",
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹42 LPA",
      recruiters: ["Microsoft", "Amazon", "Mercedes-Benz", "Goldman Sachs"],
    },
    fees: {
      tuition: "₹5 Lakhs per year",
      hostel: "₹1.5 Lakhs per year",
    },
  },
  {
    id: 12,
    name: "National Institute of Fashion Technology (NIFT Delhi)",
    routes: "nift-delhi",
    courses: [
      "B.Des in Fashion Design",
      "B.Des in Leather Design",
      "B.Des in Accessory Design",
      "B.FTech in Apparel Production",
      "B.Des in Communication Design",
    ],
    entranceExams: [
      {
        name: "NIFT Entrance Exam",
        description: "Written test and situation test",
        minPercentile: 80,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "NIFT Campus, Hauz Khas, New Delhi 110016",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "NIFT entrance exam + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 1,
      category: "Fashion",
    },
    infrastructure: {
      campus: "Modern design campus",
      facilities: [
        "Design studios",
        "Resource center",
        "Material labs",
        "Exhibition spaces",
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["Louis Vuitton", "H&M", "Zara", "Myntra"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 13,
    name: "National Institute of Design (NID Ahmedabad)",
    routes: "nid-ahmedabad",
    courses: [
      "B.Des in Industrial Design",
      "B.Des in Communication Design",
      "B.Des in Textile Design",
      "B.Des in Digital Game Design",
      "B.Des in Animation Film Design",
    ],
    entranceExams: [
      {
        name: "NID DAT",
        description: "Design Aptitude Test",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Paldi, Ahmedabad, Gujarat 380007",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "NID DAT + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 1,
      category: "Design",
    },
    infrastructure: {
      campus: "Creative design campus",
      facilities: [
        "Design studios",
        "Prototyping labs",
        "Digital media labs",
        "Exhibition galleries",
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹24 LPA",
      recruiters: ["Apple", "Samsung", "Titan", "Microsoft Design"],
    },
    fees: {
      tuition: "₹3.5 Lakhs per year",
      hostel: "₹90,000 per year",
    },
  },
  {
    id: 14,
    name: "Xavier School of Management (XLRI Jamshedpur)",
    routes: "xlri-jamshedpur",
    courses: [
      "BM (Business Management)",
      "BBA",
      "Integrated BBA-MBA Program",
      "Global MBA",
    ],
    entranceExams: [
      {
        name: "XAT",
        description: "Xavier Aptitude Test",
        minPercentile: 90,
      },
    ],
    location: {
      city: "Jamshedpur",
      state: "Jharkhand",
      address: "Circuit House Area, Jamshedpur, Jharkhand 831001",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in 12th standard",
      entranceRequirement: "XAT/CAT score + GD & PI",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 4,
      category: "Management",
    },
    infrastructure: {
      campus: "Modern 40-acre campus",
      facilities: [
        "International center",
        "Bloomberg lab",
        "Learning center",
        "Sports facilities",
      ],
    },
    placement: {
      averagePackage: "₹25 LPA",
      highestPackage: "₹60 LPA",
      recruiters: ["BCG", "Microsoft", "Amazon", "P&G"],
    },
    fees: {
      tuition: "₹20 Lakhs (program)",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 15,
    name: "Symbiosis Institute of Technology (SIT Pune)",
    routes: "sit-pune",
    courses: [
      "B.Tech in AI and Machine Learning",
      "B.Tech in Robotics and Automation",
      "B.Tech in Electronics and Telecom",
      "B.Tech in Computer Science",
      "B.Tech in Mechanical Engineering",
    ],
    entranceExams: [
      {
        name: "SET",
        description: "Symbiosis Entrance Test",
        minPercentile: 75,
      },
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Lavale, Pune, Maharashtra 412115",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in PCM in 12th standard",
      entranceRequirement: "SET/JEE Main score",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 75,
      category: "Engineering",
    },
    infrastructure: {
      campus: "Modern hill-top campus",
      facilities: [
        "Innovation center",
        "Research labs",
        "International hostel",
        "Sports complex",
      ],
    },
    placement: {
      averagePackage: "₹6.5 LPA",
      highestPackage: "₹32 LPA",
      recruiters: ["TCS", "Infosys", "Cognizant", "Tech Mahindra"],
    },
    fees: {
      tuition: "₹4.2 Lakhs per year",
      hostel: "₹1.8 Lakhs per year",
    },
  },
  {
    id: 16,
    name: "Christ University",
    routes: "christ-university",
    courses: [
      "BBA",
      "B.Com (Hons)",
      "BA Economics (Hons)",
      "BCA",
      "BA Psychology",
    ],
    entranceExams: [
      {
        name: "CUET",
        description: "Christ University Entrance Test",
        minPercentile: 70,
      },
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Hosur Road, Bangalore, Karnataka 560029",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in 12th standard",
      entranceRequirement: "CUET + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 42,
      category: "University",
    },
    infrastructure: {
      campus: "Green campus",
      facilities: [
        "Digital library",
        "Research centers",
        "Auditorium",
        "Sports facilities",
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹18 LPA",
      recruiters: ["Deloitte", "EY", "KPMG", "Amazon"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 17,
    name: "Indian Statistical Institute (ISI Kolkata)",
    routes: "isi-kolkata",
    courses: [
      "B.Stat (Hons.)",
      "B.Math (Hons.)",
      "BS-MS in Data Science",
      "B.Math in Computer Science",
    ],
    entranceExams: [
      {
        name: "ISIAT",
        description: "ISI Admission Test",
        minPercentile: 95,
      },
    ],
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "203 B.T. Road, Kolkata, West Bengal 700108",
    },
    eligibility: {
      academicCriteria: "Minimum 80% in Mathematics in 12th standard",
      entranceRequirement: "ISIAT qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 5,
      category: "Research Institution",
    },
    infrastructure: {
      campus: "30-acre research campus",
      facilities: [
        "Advanced computing facility",
        "Statistical laboratory",
        "Research library",
        "Data science center",
      ],
    },
    placement: {
      averagePackage: "₹20 LPA",
      highestPackage: "₹80 LPA",
      recruiters: ["Google", "Amazon", "World Bank", "Reserve Bank of India"],
    },
    fees: {
      tuition: "₹15,000 per year",
      hostel: "₹60,000 per year",
    },
  },
  {
    id: 18,
    name: "Jawaharlal Nehru University (JNU)",
    routes: "jnu-delhi",
    courses: [
      "BA (Hons.) in Foreign Languages",
      "BSc in Biotechnology",
      "BA (Hons.) in Economics",
      "BSc in Environmental Sciences",
      "Integrated MSc in Computer Science",
    ],
    entranceExams: [
      {
        name: "CUET",
        description: "Common University Entrance Test",
        minPercentile: 90,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "New Mehrauli Road, New Delhi, Delhi 110067",
    },
    eligibility: {
      academicCriteria: "Minimum 55% in 12th standard",
      entranceRequirement: "CUET qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 3,
      category: "University",
    },
    infrastructure: {
      campus: "1000-acre green campus",
      facilities: [
        "Central library",
        "Language laboratories",
        "Convention center",
        "Sports complex",
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹30 LPA",
      recruiters: ["Think Tanks", "UN Organizations", "Research Institutions", "MNCs"],
    },
    fees: {
      tuition: "₹50,000 per year",
      hostel: "₹40,000 per year",
    },
  },
  {
    id: 19,
    name: "Lady Shri Ram College for Women (LSR)",
    routes: "lsr-delhi",
    courses: [
      "BA (Hons.) Economics",
      "BA (Hons.) Psychology",
      "BA (Hons.) Journalism",
      "BA (Hons.) Political Science",
      "B.Com (Hons.)",
    ],
    entranceExams: [
      {
        name: "CUET",
        description: "Common University Entrance Test",
        minPercentile: 95,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Lajpat Nagar IV, New Delhi, Delhi 110024",
    },
    eligibility: {
      academicCriteria: "Minimum 95% in 12th standard",
      entranceRequirement: "CUET score",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 8,
      category: "College",
    },
    infrastructure: {
      campus: "Modern women's college campus",
      facilities: [
        "Research centers",
        "Digital library",
        "Auditorium",
        "Sports facilities",
      ],
    },
    placement: {
      averagePackage: "₹9 LPA",
      highestPackage: "₹30 LPA",
      recruiters: ["McKinsey", "Boston Consulting", "Google", "Media Houses"],
    },
    fees: {
      tuition: "₹35,000 per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 20,
    name: "Indian Institute of Mass Communication (IIMC)",
    routes: "iimc-delhi",
    courses: [
      "PG Diploma in English Journalism",
      "PG Diploma in Hindi Journalism",
      "PG Diploma in Radio & TV Journalism",
      "PG Diploma in Advertising & PR",
      "PG Diploma in Digital Media",
    ],
    entranceExams: [
      {
        name: "IIMC Entrance Exam",
        description: "Written test and interview",
        minPercentile: 85,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Aruna Asaf Ali Marg, New Delhi 110067",
    },
    eligibility: {
      academicCriteria: "Bachelor's degree in any discipline",
      entranceRequirement: "Entrance exam + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 1,
      category: "Mass Communication",
    },
    infrastructure: {
      campus: "State-of-the-art media campus",
      facilities: [
        "Media labs",
        "TV studios",
        "Radio station",
        "Digital newsroom",
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹20 LPA",
      recruiters: ["Times Group", "NDTV", "CNN", "PR Firms"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 21,
    name: "Shri Ram College of Commerce (SRCC)",
    routes: "srcc-delhi",
    courses: [
      "B.Com (Hons.)",
      "B.A. (Hons.) Economics",
      "Global Business Operations",
    ],
    entranceExams: [
      {
        name: "CUET",
        description: "Common University Entrance Test",
        minPercentile: 98,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Maurice Nagar, Delhi 110007",
    },
    eligibility: {
      academicCriteria: "Minimum 98% in 12th standard",
      entranceRequirement: "CUET score",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 2,
      category: "Commerce",
    },
    infrastructure: {
      campus: "Premium commerce college campus",
      facilities: [
        "Trading lab",
        "Research center",
        "Seminar halls",
        "Sports complex",
      ],
    },
    placement: {
      averagePackage: "₹12 LPA",
      highestPackage: "₹31 LPA",
      recruiters: ["Bain & Company", "Goldman Sachs", "Deutsche Bank", "BCG"],
    },
    fees: {
      tuition: "₹25,000 per year",
      hostel: "₹90,000 per year",
    },
  },
  {
    id: 22,
    name: "National Institute of Pharmaceutical Education and Research (NIPER)",
    routes: "niper-mohali",
    courses: [
      "B.Pharm (Hons.)",
      "B.S. Pharmaceutical Chemistry",
      "B.Tech Biotechnology",
      "Integrated M.Pharm",
    ],
    entranceExams: [
      {
        name: "NIPER JEE",
        description: "Joint Entrance Examination",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Mohali",
      state: "Punjab",
      address: "Sector 67, SAS Nagar, Mohali 160062",
    },
    eligibility: {
      academicCriteria: "Minimum 70% in PCB/PCM in 12th standard",
      entranceRequirement: "NIPER JEE qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 1,
      category: "Pharmacy",
    },
    infrastructure: {
      campus: "130-acre pharmaceutical research campus",
      facilities: [
        "Advanced research laboratories",
        "Drug testing center",
        "Medicinal garden",
        "GMP facility",
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹16 LPA",
      recruiters: ["Sun Pharma", "Dr. Reddy's", "Cipla", "GSK"],
    },
    fees: {
      tuition: "₹1.8 Lakhs per year",
      hostel: "₹72,000 per year",
    },
  },
  {
    id: 23,
    name: "Miranda House, University of Delhi",
    routes: "miranda-house-delhi",
    courses: [
      "B.Sc (Hons.) Physics",
      "B.Sc (Hons.) Chemistry",
      "B.A. (Hons.) English",
      "B.Sc (Hons.) Mathematics",
      "B.A. (Hons.) History",
    ],
    entranceExams: [
      {
        name: "CUET",
        description: "Common University Entrance Test",
        minPercentile: 95,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Patel Chest, University Enclave, Delhi 110007",
    },
    eligibility: {
      academicCriteria: "Minimum 95% in 12th standard",
      entranceRequirement: "CUET score",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 1,
      category: "College",
    },
    infrastructure: {
      campus: "Historic women's college campus",
      facilities: [
        "Science laboratories",
        "Research centers",
        "Digital library",
        "Amphitheatre",
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["Google", "Microsoft", "ISRO", "Think Tanks"],
    },
    fees: {
      tuition: "₹25,000 per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 24,
    name: "Madras Christian College (MCC)",
    routes: "mcc-chennai",
    courses: [
      "B.Sc Computer Science",
      "B.Com (Hons.)",
      "B.A. English Literature",
      "B.Sc Mathematics",
      "B.Sc Zoology",
    ],
    entranceExams: [
      {
        name: "MCC Entrance Test",
        description: "College specific entrance test",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "East Tambaram, Chennai 600059",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in 12th standard",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 15,
      category: "College",
    },
    infrastructure: {
      campus: "365-acre ecological campus",
      facilities: [
        "Miller Memorial Library",
        "Research laboratories",
        "Botanical garden",
        "Heritage buildings",
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["TCS", "Wipro", "CTS", "HCL"],
    },
    fees: {
      tuition: "₹80,000 per year",
      hostel: "₹65,000 per year",
    },
  },
  {
    id: 25,
    name: "Indian Institute of Hotel Management (IHM Mumbai)",
    routes: "ihm-mumbai",
    courses: [
      "B.Sc in Hospitality and Hotel Administration",
      "B.Sc in Culinary Arts",
      "B.Sc in Hotel Management",
      "Diploma in Food Production",
      "Diploma in Bakery and Confectionery",
    ],
    entranceExams: [
      {
        name: "NCHMCT JEE",
        description: "National Council JEE",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Veer Savarkar Marg, Dadar, Mumbai 400028",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "NCHMCT JEE qualification",
      ageLimit: "22 years",
    },
    rankings: {
      nirf: 3,
      category: "Hotel Management",
    },
    infrastructure: {
      campus: "Modern hospitality campus",
      facilities: [
        "Training restaurants",
        "Professional kitchens",
        "Bakery labs",
        "Training hotel",
      ],
    },
    placement: {
      averagePackage: "₹4.5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Taj Hotels", "Oberoi", "Marriott", "Hyatt"],
    },
    fees: {
      tuition: "₹1 Lakh per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 26,
    name: "National Institute of Agricultural Extension Management (MANAGE)",
    routes: "manage-hyderabad",
    courses: [
      "B.Sc in Agricultural Business Management",
      "B.Sc in Agriculture",
      "B.Tech Agricultural Engineering",
      "B.Sc in Agri-Informatics",
    ],
    entranceExams: [
      {
        name: "MANAGE Entrance Test",
        description: "Institute specific test",
        minPercentile: 75,
      },
    ],
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Rajendranagar, Hyderabad 500030",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in 12th with PCB/PCM",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 5,
      category: "Agriculture",
    },
    infrastructure: {
      campus: "200-acre green campus",
      facilities: [
        "Smart classrooms",
        "Agricultural labs",
        "Demonstration farms",
        "Research stations",
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["ITC Agri", "Godrej Agrovet", "Bayer", "Syngenta"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹60,000 per year",
    },
  },
  {
    id: 27,
    name: "Srishti Institute of Art, Design and Technology",
    routes: "srishti-bangalore",
    courses: [
      "B.Des in Communication Design",
      "B.Des in Industrial Design",
      "B.F.A in Contemporary Art",
      "B.Des in Digital Experience Design",
      "B.Des in Fashion Design",
    ],
    entranceExams: [
      {
        name: "Srishti Entrance Test",
        description: "Design aptitude test",
        minPercentile: 75,
      },
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Yelahanka New Town, Bangalore 560064",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Portfolio + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 8,
      category: "Design",
    },
    infrastructure: {
      campus: "Creative design campus",
      facilities: [
        "Design studios",
        "Digital labs",
        "Art galleries",
        "Fabrication labs",
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹18 LPA",
      recruiters: ["Adobe", "Microsoft", "Philips", "Samsung Design"],
    },
    fees: {
      tuition: "₹4.5 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 28,
    name: "Indian Maritime University (IMU Chennai)",
    routes: "imu-chennai",
    courses: [
      "B.Tech Marine Engineering",
      "B.Sc Nautical Science",
      "B.Tech Naval Architecture",
      "B.Sc Maritime Science",
      "B.Sc Ship Building",
    ],
    entranceExams: [
      {
        name: "IMU CET",
        description: "Common Entrance Test",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "East Coast Road, Chennai 600119",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCM in 12th standard",
      entranceRequirement: "IMU CET qualification",
      ageLimit: "25 years",
    },
    rankings: {
      nirf: 4,
      category: "Maritime",
    },
    infrastructure: {
      campus: "Waterfront campus",
      facilities: [
        "Ship simulators",
        "Marine workshops",
        "Training vessels",
        "Navigation labs",
      ],
    },
    placement: {
      averagePackage: "₹12 LPA",
      highestPackage: "₹30 LPA",
      recruiters: ["Shipping Corporation of India", "Maersk", "MSC", "Shell"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹90,000 per year",
    },
  }
];

// You can add more colleges following the same structure
// This template includes comprehensive information about each institution
// Feel free to expand the list with more colleges like:
// - IIT Delhi
// - IISc Bangalore
// - NIT Trichy
// - BITS Pilani
// - Delhi University
// - VIT Vellore
// etc.
