// Add a separate array for all possible categories
export const allCategories = [
  "Engineering",
  "Technology",
  "Medical",
  "Healthcare",
  "Sciences",
  "Research",
  "Law",
  "Business",
  "Management",
  "Arts",
  "Humanities",
  "Commerce",
  "Design",
  "Architecture",
  "Fashion",
  "Media",
  "Communication",
  "Agriculture",
  "Pharmacy",
  "Maritime",
  "Hotel Management",
  "Mass Communication",
  "Fine Arts",
  "Dental",
  "Crafts",
  "Economics",
  "Aviation",
  "Rehabilitation",
  "Special Education"
];

export const collegeData = [
  {
    id: 1,
    name: "Indian Institute of Technology Bombay (IIT Bombay)",
    routes: "iit-bombay",
    categories: ["Engineering", "Technology", "Research", "Sciences"],
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
    categories: ["Medical", "Healthcare", "Research"],
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
    categories: ["Engineering", "Technology", "Research", "Sciences"],
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
    categories: ["Sciences", "Research", "Engineering", "Technology"],
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
    categories: ["Engineering", "Technology", "Sciences", "Pharmacy"],
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
    categories: ["Law", "Legal Studies"],
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
    categories: ["Engineering", "Technology", "Research"],
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
    categories: ["Humanities", "Arts"],
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
    categories: ["Engineering", "Technology", "Research"],
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
    categories: ["Engineering", "Technology", "Research"],
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
    categories: ["Design", "Fashion"],
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
    categories: ["Design", "Research"],
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
    categories: ["Business", "Management"],
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
    categories: ["Engineering", "Technology", "Research"],
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
    categories: ["Humanities", "Arts"],
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
    categories: ["Research", "Sciences"],
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
    categories: ["Humanities", "Sciences"],
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
    categories: ["Humanities", "Arts"],
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
    categories: ["Media", "Communication"],
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
    categories: ["Commerce", "Business"],
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
    categories: ["Pharmacy", "Healthcare"],
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
    categories: ["Humanities", "Arts"],
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
    categories: ["Humanities", "Arts"],
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
    categories: ["Hotel Management", "Hospitality"],
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
    categories: ["Agriculture", "Research"],
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
    categories: ["Design", "Arts"],
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
    categories: ["Maritime", "Research"],
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
  },
  {
    id: 29,
    name: "Indian School of Business (ISB Hyderabad)",
    routes: "isb-hyderabad",
    categories: ["Business", "Management"],
    courses: [
      "Post Graduate Program in Management",
      "Executive MBA",
      "Management Program for Family Business",
      "Advanced Management Programs",
    ],
    entranceExams: [
      {
        name: "GMAT/GRE",
        description: "International Management Admission Test",
        minPercentile: 95,
      },
    ],
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Gachibowli, Hyderabad 500032",
    },
    eligibility: {
      academicCriteria: "Bachelor's degree with minimum 50%",
      entranceRequirement: "GMAT/GRE score + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 1,
      category: "Private B-Schools",
      qsWorld: 151,
    },
    infrastructure: {
      campus: "Modern 260-acre campus",
      facilities: [
        "Learning Resource Center",
        "Bloomberg terminals",
        "Startup incubator",
        "Recreation center",
      ],
    },
    placement: {
      averagePackage: "₹34 LPA",
      highestPackage: "₹1.8 Cr",
      recruiters: ["McKinsey", "BCG", "Google", "Microsoft"],
    },
    fees: {
      tuition: "₹40 Lakhs (program)",
      hostel: "Included in tuition",
    },
  },
  {
    id: 30,
    name: "Jamia Millia Islamia",
    routes: "jamia-millia",
    categories: ["Engineering", "Humanities", "Arts", "Media"],
    courses: [
      "B.Tech in Computer Engineering",
      "BA (Hons) Mass Communication",
      "B.Arch",
      "BBA",
      "B.Ed",
    ],
    entranceExams: [
      {
        name: "JEE Main",
        description: "For Engineering courses",
        minPercentile: 75,
      },
      {
        name: "CUET",
        description: "For other courses",
        minPercentile: 80,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Jamia Nagar, New Delhi 110025",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in 12th standard",
      entranceRequirement: "JEE Main/CUET qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 12,
      category: "University",
    },
    infrastructure: {
      campus: "Sprawling urban campus",
      facilities: [
        "Central Library",
        "Media studios",
        "Sports complex",
        "Innovation center",
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["TCS", "Wipro", "Media Houses", "NDTV"],
    },
    fees: {
      tuition: "₹80,000 per year",
      hostel: "₹50,000 per year",
    },
  },
  {
    id: 31,
    name: "Tata Institute of Social Sciences (TISS)",
    routes: "tiss-mumbai",
    categories: ["Humanities", "Social Sciences", "Management"],
    courses: [
      "BA in Social Work",
      "MA in Human Resource Management",
      "MA in Social Work",
      "MA in Development Studies",
      "MBA in Social Entrepreneurship",
    ],
    entranceExams: [
      {
        name: "TISSNET",
        description: "TISS National Entrance Test",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "V.N. Purav Marg, Mumbai 400088",
    },
    eligibility: {
      academicCriteria: "Bachelor's degree with 50%",
      entranceRequirement: "TISSNET + PI-WAT",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 32,
      category: "University",
    },
    infrastructure: {
      campus: "Urban campus with modern facilities",
      facilities: [
        "Research centers",
        "Digital library",
        "Conference halls",
        "Hostel facilities",
      ],
    },
    placement: {
      averagePackage: "₹12 LPA",
      highestPackage: "₹28 LPA",
      recruiters: ["UN Organizations", "NGOs", "Corporate CSR", "Consulting firms"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 32,
    name: "Army Institute of Technology (AIT Pune)",
    routes: "ait-pune",
    categories: ["Engineering", "Technology"],
    courses: [
      "B.E. in Computer Engineering",
      "B.E. in Electronics and Telecommunication",
      "B.E. in Information Technology",
      "B.E. in Mechanical Engineering",
    ],
    entranceExams: [
      {
        name: "JEE Main",
        description: "For Engineering admission",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Dighi Hills, Pune 411015",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCM in 12th standard",
      entranceRequirement: "JEE Main qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 150,
      category: "Engineering",
    },
    infrastructure: {
      campus: "Well-equipped defense institution campus",
      facilities: [
        "Technical laboratories",
        "Digital library",
        "Sports facilities",
        "Military training ground",
      ],
    },
    placement: {
      averagePackage: "₹7.5 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["TCS", "Infosys", "L&T", "Tech Mahindra"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 33,
    name: "National Institute of Mental Health and Neurosciences (NIMHANS)",
    routes: "nimhans-bangalore",
    categories: ["Medical", "Healthcare", "Research"],
    courses: [
      "MBBS in Psychiatry",
      "M.Sc in Neuroscience",
      "M.Phil in Clinical Psychology",
      "Ph.D in Neurology",
      "DM in Neurology",
    ],
    entranceExams: [
      {
        name: "NIMHANS Entrance Test",
        description: "Institute specific entrance exam",
        minPercentile: 90,
      },
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Hosur Road, Bangalore 560029",
    },
    eligibility: {
      academicCriteria: "MBBS/relevant Master's degree",
      entranceRequirement: "NIMHANS entrance test",
      ageLimit: "35 years for most courses",
    },
    rankings: {
      nirf: 1,
      category: "Medical Research",
    },
    infrastructure: {
      campus: "Specialized medical campus",
      facilities: [
        "Advanced research labs",
        "Specialized hospitals",
        "Brain research center",
        "Telemedicine facilities",
      ],
    },
    placement: {
      averagePackage: "Government scales",
      highestPackage: "Academic positions",
      recruiters: ["Government Hospitals", "Research Institutions", "Private Hospitals"],
    },
    fees: {
      tuition: "₹50,000 per year",
      hostel: "₹40,000 per year",
    },
  },
  {
    id: 34,
    name: "Film and Television Institute of India (FTII)",
    routes: "ftii-pune",
    categories: ["Media", "Arts", "Communication"],
    courses: [
      "Film Direction and Screenplay Writing",
      "Film Cinematography",
      "Film Editing",
      "Film Sound Recording",
      "TV Direction",
    ],
    entranceExams: [
      {
        name: "FTII JET",
        description: "Joint Entrance Test",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Law College Road, Pune 411004",
    },
    eligibility: {
      academicCriteria: "Bachelor's degree in any discipline",
      entranceRequirement: "JET + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 1,
      category: "Film Institute",
    },
    infrastructure: {
      campus: "Historic film studio campus",
      facilities: [
        "Professional studios",
        "Film shooting floors",
        "Editing suites",
        "Preview theatres",
      ],
    },
    placement: {
      averagePackage: "Project based",
      highestPackage: "Industry standard",
      recruiters: ["Film Industry", "TV Channels", "OTT Platforms", "Production Houses"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹60,000 per year",
    },
  },
  {
    id: 35,
    name: "Indian Institute of Foreign Trade (IIFT)",
    routes: "iift-delhi",
    categories: ["Business", "Management", "Commerce"],
    courses: [
      "MBA in International Business",
      "MA in Economics",
      "Certificate in Export Management",
      "PhD in International Business",
    ],
    entranceExams: [
      {
        name: "IIFT Entrance Exam",
        description: "National level MBA entrance",
        minPercentile: 90,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "IIFT Bhawan, Qutab Institutional Area, New Delhi 110016",
    },
    eligibility: {
      academicCriteria: "Graduate degree with 60%",
      entranceRequirement: "IIFT Exam + GD + PI",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 25,
      category: "Management",
    },
    infrastructure: {
      campus: "Modern business school campus",
      facilities: [
        "Trading room",
        "International resource center",
        "Conference facilities",
        "Research labs",
      ],
    },
    placement: {
      averagePackage: "₹20 LPA",
      highestPackage: "₹75 LPA",
      recruiters: ["World Bank", "Goldman Sachs", "Amazon", "Microsoft"],
    },
    fees: {
      tuition: "₹19 Lakhs (program)",
      hostel: "₹1.5 Lakhs per year",
    },
  },
  {
    id: 36,
    name: "National Institute of Nutrition (NIN)",
    routes: "nin-hyderabad",
    categories: ["Medical", "Research", "Healthcare"],
    courses: [
      "M.Sc in Applied Nutrition",
      "M.Sc in Food Science",
      "Post Graduate Diploma in Nutrition",
      "Ph.D in Nutritional Sciences",
    ],
    entranceExams: [
      {
        name: "NIN Entrance Test",
        description: "Institute specific exam",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Tarnaka, Hyderabad 500007",
    },
    eligibility: {
      academicCriteria: "B.Sc in relevant field with 60%",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 1,
      category: "Nutrition Research",
    },
    infrastructure: {
      campus: "Research-focused campus",
      facilities: [
        "Nutrition labs",
        "Food testing facilities",
        "Research centers",
        "Clinical facilities",
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Research Organizations", "Food Companies", "Hospitals", "NGOs"],
    },
    fees: {
      tuition: "₹75,000 per year",
      hostel: "₹50,000 per year",
    },
  },
  {
    id: 37,
    name: "Footwear Design & Development Institute (FDDI)",
    routes: "fddi-noida",
    categories: ["Design", "Fashion", "Management"],
    courses: [
      "B.Des in Footwear Design",
      "MBA in Retail Management",
      "B.Des in Fashion Design",
      "M.Des in Footwear Technology",
    ],
    entranceExams: [
      {
        name: "AIST",
        description: "All India Selection Test",
        minPercentile: 75,
      },
    ],
    location: {
      city: "Noida",
      state: "Uttar Pradesh",
      address: "Sector 24, Noida 201301",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "AIST + Design aptitude test",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 15,
      category: "Design",
    },
    infrastructure: {
      campus: "Industry-integrated campus",
      facilities: [
        "Design studios",
        "Production units",
        "CAD/CAM labs",
        "Material testing labs",
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Adidas", "Nike", "Puma", "Bata"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 38,
    name: "Indian Institute of Packaging (IIP)",
    routes: "iip-mumbai",
    categories: ["Technology", "Design", "Management"],
    courses: [
      "B.Tech in Packaging Technology",
      "Post Graduate Diploma in Packaging",
      "M.Tech in Packaging Technology",
      "Certificate in Packaging Design",
    ],
    entranceExams: [
      {
        name: "IIPET",
        description: "IIP Entrance Test",
        minPercentile: 70,
      },
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "E.M. Bypass, Mumbai 400093",
    },
    eligibility: {
      academicCriteria: "12th with PCM/Graduate degree",
      entranceRequirement: "IIPET qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 1,
      category: "Packaging Technology",
    },
    infrastructure: {
      campus: "Technical campus",
      facilities: [
        "Testing laboratories",
        "Design studio",
        "Pilot plant",
        "Research center",
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["ITC", "Hindustan Unilever", "Nestle", "P&G"],
    },
    fees: {
      tuition: "₹2 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 39,
    name: "Indian Institute of Space Science and Technology (IIST)",
    routes: "iist-thiruvananthapuram",
    categories: ["Engineering", "Technology", "Sciences", "Research"],
    courses: [
      "B.Tech in Aerospace Engineering",
      "B.Tech in Avionics",
      "Dual Degree in Engineering Physics",
      "M.Tech in Space Technology",
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "Main entrance exam",
        minPercentile: 95,
      },
    ],
    location: {
      city: "Thiruvananthapuram",
      state: "Kerala",
      address: "Valiamala, Thiruvananthapuram 695547",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "JEE Advanced qualification",
      ageLimit: "25 years",
    },
    rankings: {
      nirf: 45,
      category: "Engineering",
    },
    infrastructure: {
      campus: "Space research oriented campus",
      facilities: [
        "Space technology labs",
        "Astronomical observatory",
        "Satellite ground station",
        "Advanced computing facility",
      ],
    },
    placement: {
      averagePackage: "₹12 LPA",
      highestPackage: "₹30 LPA",
      recruiters: ["ISRO", "DRDO", "HAL", "Boeing"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 40,
    name: "National Institute of Food Technology Entrepreneurship and Management (NIFTEM)",
    routes: "niftem-sonipat",
    categories: ["Technology", "Management", "Research"],
    courses: [
      "B.Tech in Food Technology",
      "M.Tech in Food Processing",
      "MBA in Food Business Management",
      "Ph.D in Food Science",
    ],
    entranceExams: [
      {
        name: "JEE Main",
        description: "For B.Tech programs",
        minPercentile: 75,
      },
      {
        name: "NIFTEM MPAT",
        description: "For Management programs",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Sonipat",
      state: "Haryana",
      address: "Plot No 97, Sector 56, Kundli 131028",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCM/PCB in 12th standard",
      entranceRequirement: "JEE Main/MPAT qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 50,
      category: "Technology",
    },
    infrastructure: {
      campus: "Food technology focused campus",
      facilities: [
        "Food processing pilot plants",
        "Research laboratories",
        "Business incubation center",
        "Sensory evaluation lab",
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹18 LPA",
      recruiters: ["Nestle", "ITC Foods", "Britannia", "Parle"],
    },
    fees: {
      tuition: "₹2 Lakhs per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 41,
    name: "Indian Institute of Craft and Design (IICD)",
    routes: "iicd-jaipur",
    categories: ["Design", "Arts", "Crafts"],
    courses: [
      "B.Des in Hard Material Design",
      "B.Des in Soft Material Design",
      "M.Des in Craft Design",
      "Diploma in Craft Innovation",
    ],
    entranceExams: [
      {
        name: "IICD DAT",
        description: "Design Aptitude Test",
        minPercentile: 70,
      },
    ],
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      address: "J-8 Jhalana Institutional Area, Jaipur 302004",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "Design aptitude test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 20,
      category: "Design",
    },
    infrastructure: {
      campus: "Craft-centric campus",
      facilities: [
        "Craft workshops",
        "Design studios",
        "Material library",
        "Exhibition space",
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Craft organizations", "Design studios", "Export houses", "NGOs"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 42,
    name: "Indian Institute of Petroleum and Energy (IIPE)",
    routes: "iipe-visakhapatnam",
    categories: ["Engineering", "Technology", "Research"],
    courses: [
      "B.Tech in Petroleum Engineering",
      "B.Tech in Chemical Engineering",
      "M.Tech in Energy Systems",
      "Ph.D in Petroleum Technology",
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "Main entrance exam",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      address: "AU College of Engineering Campus, Visakhapatnam 530003",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "JEE Advanced qualification",
      ageLimit: "25 years",
    },
    rankings: {
      nirf: 60,
      category: "Engineering",
    },
    infrastructure: {
      campus: "Petroleum technology focused campus",
      facilities: [
        "Petroleum labs",
        "Research centers",
        "Simulation facilities",
        "Industry collaboration center",
      ],
    },
    placement: {
      averagePackage: "₹10 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["ONGC", "Indian Oil", "Reliance", "Shell"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 43,
    name: "National Institute of Speech and Hearing (NISH)",
    routes: "nish-thiruvananthapuram",
    categories: ["Healthcare", "Medical", "Research"],
    courses: [
      "B.Sc in Speech and Hearing",
      "B.Sc in Audiology",
      "Master in Speech-Language Pathology",
      "Diploma in Early Intervention",
    ],
    entranceExams: [
      {
        name: "NISH Entrance Test",
        description: "Institute specific exam",
        minPercentile: 75,
      },
    ],
    location: {
      city: "Thiruvananthapuram",
      state: "Kerala",
      address: "NISH Road, Sreekaryam, Thiruvananthapuram 695017",
    },
    eligibility: {
      academicCriteria: "12th pass with Biology",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 15,
      category: "Medical",
    },
    infrastructure: {
      campus: "Specialized medical campus",
      facilities: [
        "Speech therapy labs",
        "Audiology clinics",
        "Research center",
        "Early intervention center",
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Hospitals", "Rehabilitation Centers", "Research Institutes", "Schools"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹60,000 per year",
    },
  },
  {
    id: 44,
    name: "Indian Institute of Aeronautical Engineering (IIAE)",
    routes: "iiae-dehradun",
    categories: ["Engineering", "Technology", "Aviation"],
    courses: [
      "B.Tech in Aeronautical Engineering",
      "B.Tech in Aircraft Maintenance",
      "M.Tech in Aerospace Engineering",
      "Diploma in Aviation Technology",
    ],
    entranceExams: [
      {
        name: "JEE Main",
        description: "For B.Tech programs",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Dehradun",
      state: "Uttarakhand",
      address: "Aviation Complex, Dehradun 248001",
    },
    eligibility: {
      academicCriteria: "Minimum 70% in PCM in 12th standard",
      entranceRequirement: "JEE Main qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 75,
      category: "Engineering",
    },
    infrastructure: {
      campus: "Aviation-focused campus",
      facilities: [
        "Aircraft hangar",
        "Flight simulators",
        "Aerodynamics lab",
        "Aviation workshop",
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹20 LPA",
      recruiters: ["Air India", "IndiGo", "Boeing India", "HAL"],
    },
    fees: {
      tuition: "₹3.5 Lakhs per year",
      hostel: "₹1 Lakh per year",
    },
  },
  {
    id: 45,
    name: "National Institute of Ayurveda (NIA)",
    routes: "nia-jaipur",
    categories: ["Medical", "Healthcare", "Research"],
    courses: [
      "BAMS (Bachelor of Ayurvedic Medicine)",
      "MD in Ayurveda",
      "Ph.D in Ayurvedic Studies",
      "Diploma in Panchakarma",
    ],
    entranceExams: [
      {
        name: "NEET",
        description: "National Eligibility Entrance Test",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      address: "Jorawar Singh Gate, Jaipur 302002",
    },
    eligibility: {
      academicCriteria: "12th with PCB (60%)",
      entranceRequirement: "NEET qualification",
      ageLimit: "25 years",
    },
    rankings: {
      nirf: 10,
      category: "AYUSH",
    },
    infrastructure: {
      campus: "Traditional medicine campus",
      facilities: [
        "Ayurvedic hospital",
        "Herb garden",
        "Research laboratories",
        "Traditional treatment centers",
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Ayurvedic Hospitals", "Research Centers", "Wellness Centers", "Pharma Companies"],
    },
    fees: {
      tuition: "₹1 Lakh per year",
      hostel: "₹50,000 per year",
    },
  },
  {
    id: 46,
    name: "Indian Institute of Gems and Jewellery (IIGJ)",
    routes: "iigj-mumbai",
    categories: ["Design", "Arts", "Technology"],
    courses: [
      "B.Des in Jewellery Design",
      "Diploma in Jewellery Manufacturing",
      "Certificate in Gemology",
      "Advanced CAD for Jewellery",
    ],
    entranceExams: [
      {
        name: "IIGJ Entrance Test",
        description: "Design aptitude test",
        minPercentile: 70,
      },
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "SEEPZ, Andheri East, Mumbai 400096",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "Entrance test + Portfolio",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 25,
      category: "Design",
    },
    infrastructure: {
      campus: "Industry-integrated campus",
      facilities: [
        "Design studios",
        "Gemology lab",
        "Manufacturing unit",
        "CAD center",
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Tanishq", "CaratLane", "Kalyan Jewellers", "Export Houses"],
    },
    fees: {
      tuition: "₹3 Lakhs per year",
      hostel: "₹90,000 per year",
    },
  },
  {
    id: 47,
    name: "Indian Institute of Tourism and Travel Management (IITTM)",
    routes: "iittm-gwalior",
    categories: ["Management", "Tourism", "Hospitality"],
    courses: [
      "BBA in Tourism Management",
      "MBA in Tourism & Travel",
      "Diploma in Adventure Tourism",
      "Certificate in Tour Operations",
    ],
    entranceExams: [
      {
        name: "IITTM-PAT",
        description: "Professional Admission Test",
        minPercentile: 75,
      },
    ],
    location: {
      city: "Gwalior",
      state: "Madhya Pradesh",
      address: "Govindpuri, Gwalior 474011",
    },
    eligibility: {
      academicCriteria: "Graduation with 50%",
      entranceRequirement: "PAT + GD + PI",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 40,
      category: "Management",
    },
    infrastructure: {
      campus: "Tourism-focused campus",
      facilities: [
        "Travel lab",
        "GDS training center",
        "Language lab",
        "Adventure sports facility",
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Thomas Cook", "MakeMyTrip", "Cox & Kings", "Taj Hotels"],
    },
    fees: {
      tuition: "₹1.8 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 48,
    name: "National Institute of Plant Health Management (NIPHM)",
    routes: "niphm-hyderabad",
    categories: ["Agriculture", "Research", "Management"],
    courses: [
      "PG Diploma in Plant Health Management",
      "M.Sc in Plant Health Management",
      "Certificate in Pesticide Management",
      "Diploma in Bio-control Management",
    ],
    entranceExams: [
      {
        name: "NIPHM Entrance",
        description: "Institute specific exam",
        minPercentile: 70,
      },
    ],
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Rajendranagar, Hyderabad 500030",
    },
    eligibility: {
      academicCriteria: "B.Sc Agriculture/Life Sciences",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 30,
      category: "Agriculture",
    },
    infrastructure: {
      campus: "Research-oriented campus",
      facilities: [
        "Plant health labs",
        "Biocontrol labs",
        "Demonstration fields",
        "Research stations",
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Agriculture Departments", "Research Institutes", "Agri-businesses", "NGOs"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹60,000 per year",
    },
  },
  {
    id: 49,
    name: "Indian Institute of Science Education and Research (IISER Pune)",
    routes: "iiser-pune",
    categories: ["Sciences", "Research"],
    courses: [
      "BS-MS Dual Degree in Physics",
      "BS-MS Dual Degree in Chemistry",
      "BS-MS Dual Degree in Biology",
      "BS-MS Dual Degree in Mathematics",
      "Integrated PhD Programs"
    ],
    entranceExams: [
      {
        name: "IISER Aptitude Test",
        description: "Main entrance exam for all IISERs",
        minPercentile: 98,
      },
      {
        name: "JEE Advanced",
        description: "Alternative entry path",
        minPercentile: 90,
      }
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Dr. Homi Bhabha Road, Pune 411008",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM/PCB in 12th standard",
      entranceRequirement: "IAT or JEE Advanced qualification",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 25,
      category: "Research Institution",
    },
    infrastructure: {
      campus: "Modern 98-acre research campus",
      facilities: [
        "Advanced research laboratories",
        "Central instrumentation facility",
        "Computational facilities",
        "Scientific library"
      ],
    },
    placement: {
      averagePackage: "Research-oriented",
      highestPackage: "Academic positions",
      recruiters: ["Research Institutions", "Universities", "R&D Organizations", "Tech Companies"],
    },
    fees: {
      tuition: "₹25,000 per semester",
      hostel: "₹40,000 per year",
    },
  },
  {
    id: 50,
    name: "Symbiosis Law School (SLS Pune)",
    routes: "sls-pune",
    categories: ["Law", "Legal Studies"],
    courses: [
      "BA LLB (Hons.)",
      "BBA LLB (Hons.)",
      "LLM Corporate Law",
      "LLM International Business Law"
    ],
    entranceExams: [
      {
        name: "SLAT",
        description: "Symbiosis Law Admission Test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Viman Nagar, Pune 411014",
    },
    eligibility: {
      academicCriteria: "Minimum 45% in 12th standard",
      entranceRequirement: "SLAT qualification + PI-WAT",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 15,
      category: "Law",
    },
    infrastructure: {
      campus: "Modern law school campus",
      facilities: [
        "Moot court halls",
        "Legal aid clinic",
        "Law library",
        "Conference center"
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["Law Firms", "Corporate Legal Departments", "PSUs", "Judiciary"],
    },
    fees: {
      tuition: "₹3.5 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 51,
    name: "Indian Institute of Management (IIM Kozhikode)",
    routes: "iim-kozhikode",
    categories: ["Business", "Management"],
    courses: [
      "Post Graduate Programme in Management",
      "Executive Post Graduate Programme",
      "PhD Programme in Management",
      "MBA in Liberal Studies and Management"
    ],
    entranceExams: [
      {
        name: "CAT",
        description: "Common Admission Test",
        minPercentile: 95,
      }
    ],
    location: {
      city: "Kozhikode",
      state: "Kerala",
      address: "IIMK Campus P.O., Kozhikode 673570",
    },
    eligibility: {
      academicCriteria: "Bachelor's degree with 50%",
      entranceRequirement: "CAT + GD + PI",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 6,
      category: "Management",
      qsWorld: 251,
    },
    infrastructure: {
      campus: "Hillside 112-acre campus",
      facilities: [
        "Bloomberg terminals",
        "Management library",
        "Amphitheatre",
        "Sports complex"
      ],
    },
    placement: {
      averagePackage: "₹28.7 LPA",
      highestPackage: "₹86.9 LPA",
      recruiters: ["McKinsey", "Goldman Sachs", "Amazon", "Microsoft"],
    },
    fees: {
      tuition: "₹23 Lakhs (program)",
      hostel: "Included in tuition",
    },
  },
  {
    id: 52,
    name: "School of Planning and Architecture (SPA Delhi)",
    routes: "spa-delhi",
    categories: ["Architecture", "Design", "Planning"],
    courses: [
      "Bachelor of Architecture",
      "Bachelor of Planning",
      "Master of Urban Design",
      "Master of Landscape Architecture",
      "Master of Conservation"
    ],
    entranceExams: [
      {
        name: "JEE Main Paper 2",
        description: "Architecture Aptitude Test",
        minPercentile: 90,
      },
      {
        name: "NATA",
        description: "National Aptitude Test in Architecture",
        minPercentile: 85,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "I.P. Estate, New Delhi 110002",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in PCM in 12th standard",
      entranceRequirement: "JEE Main Paper 2/NATA + Portfolio",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 1,
      category: "Architecture",
    },
    infrastructure: {
      campus: "Urban design-focused campus",
      facilities: [
        "Design studios",
        "Model making workshop",
        "Material museum",
        "Conservation laboratory"
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹18 LPA",
      recruiters: ["Leading Architecture Firms", "Urban Development Authorities", "MNCs", "Government Organizations"],
    },
    fees: {
      tuition: "₹1.25 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 53,
    name: "AJK Mass Communication Research Centre (MCRC Jamia)",
    routes: "mcrc-jamia",
    categories: ["Mass Communication", "Media", "Journalism"],
    courses: [
      "MA in Mass Communication",
      "MA in Visual Effects and Animation",
      "PG Diploma in Broadcast Technology",
      "MA in Development Communication",
      "PhD in Media Studies"
    ],
    entranceExams: [
      {
        name: "MCRC Entrance Test",
        description: "Written test and interview",
        minPercentile: 85,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Jamia Millia Islamia, New Delhi 110025",
    },
    eligibility: {
      academicCriteria: "Bachelor's degree with 50%",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 2,
      category: "Mass Communication",
    },
    infrastructure: {
      campus: "State-of-the-art media campus",
      facilities: [
        "TV studios",
        "Radio station",
        "Post-production suites",
        "Animation lab",
        "Digital newsroom"
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["BBC", "CNN-IBN", "Netflix India", "Prime Video", "Major Production Houses"],
    },
    fees: {
      tuition: "₹95,000 per year",
      hostel: "₹65,000 per year",
    },
  },
  {
    id: 54,
    name: "Faculty of Fine Arts, MS University (MSU Baroda)",
    routes: "msu-baroda-fine-arts",
    categories: ["Fine Arts", "Visual Arts", "Design"],
    courses: [
      "BFA in Painting",
      "BFA in Sculpture",
      "BFA in Applied Arts",
      "BFA in Art History",
      "MFA Programs"
    ],
    entranceExams: [
      {
        name: "MSU Fine Arts Entrance",
        description: "Practical test and portfolio review",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Vadodara",
      state: "Gujarat",
      address: "Pratapgunj, Vadodara 390002",
    },
    eligibility: {
      academicCriteria: "12th pass in any stream",
      entranceRequirement: "Portfolio + Practical test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 3,
      category: "Fine Arts",
    },
    infrastructure: {
      campus: "Historic arts campus",
      facilities: [
        "Art galleries",
        "Studios for each specialization",
        "Bronze casting facility",
        "Print making workshop",
        "Digital arts lab"
      ],
    },
    placement: {
      averagePackage: "Project-based/Freelance",
      highestPackage: "Based on artistic recognition",
      recruiters: ["Art Galleries", "Museums", "Design Studios", "Educational Institutions"],
    },
    fees: {
      tuition: "₹25,000 per year",
      hostel: "₹45,000 per year",
    },
  },
  {
    id: 55,
    name: "Sir JJ School of Art",
    routes: "jj-school-art",
    categories: ["Fine Arts", "Visual Arts", "Design"],
    courses: [
      "BFA in Painting",
      "BFA in Sculpture",
      "BFA in Interior Decoration",
      "BFA in Textile Design",
      "Diploma in Fine Arts"
    ],
    entranceExams: [
      {
        name: "JJ Entrance Test",
        description: "Aptitude test and portfolio review",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Dr DN Road, Fort, Mumbai 400001",
    },
    eligibility: {
      academicCriteria: "12th pass with 45%",
      entranceRequirement: "Entrance test + Portfolio review",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 5,
      category: "Fine Arts",
    },
    infrastructure: {
      campus: "Heritage campus with modern facilities",
      facilities: [
        "Specialized art studios",
        "Exhibition gallery",
        "Material workshop",
        "Digital media lab",
        "Heritage library"
      ],
    },
    placement: {
      averagePackage: "Project-based",
      highestPackage: "Based on artistic merit",
      recruiters: ["Art Galleries", "Animation Studios", "Design Firms", "Advertising Agencies"],
    },
    fees: {
      tuition: "₹30,000 per year",
      hostel: "₹50,000 per year",
    },
  },
  {
    id: 56,
    name: "Xavier Institute of Management and Entrepreneurship (XIME)",
    routes: "xime-bangalore",
    categories: ["Business", "Management"],
    courses: [
      "PGDM in Business Management",
      "PGDM in Business Analytics",
      "PGDM in Marketing",
      "Executive PGDM"
    ],
    entranceExams: [
      {
        name: "XAT/CAT/GMAT",
        description: "Any of these entrance exams",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Electronics City Phase II, Bangalore 560100",
    },
    eligibility: {
      academicCriteria: "Graduate degree with 50%",
      entranceRequirement: "Entrance exam + GD + PI",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 65,
      category: "Management",
    },
    infrastructure: {
      campus: "Modern business campus",
      facilities: [
        "Bloomberg lab",
        "Digital library",
        "Conference halls",
        "Sports facilities"
      ],
    },
    placement: {
      averagePackage: "₹12 LPA",
      highestPackage: "₹28 LPA",
      recruiters: ["Deloitte", "EY", "Amazon", "Goldman Sachs"],
    },
    fees: {
      tuition: "₹16 Lakhs (program)",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 57,
    name: "National Institute of Design (NID Bangalore)",
    routes: "nid-bangalore",
    categories: ["Design", "Arts"],
    courses: [
      "B.Des in Product Design",
      "B.Des in Digital Game Design",
      "B.Des in Information Design",
      "B.Des in User Experience Design"
    ],
    entranceExams: [
      {
        name: "NID DAT",
        description: "Design Aptitude Test",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "12th Main, Yelahanka, Bangalore 560064",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "DAT + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 8,
      category: "Design",
    },
    infrastructure: {
      campus: "Modern design campus",
      facilities: [
        "Design studios",
        "Prototyping lab",
        "Digital fabrication lab",
        "Material library"
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹24 LPA",
      recruiters: ["Google", "Microsoft", "Philips", "Samsung"],
    },
    fees: {
      tuition: "₹3 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 58,
    name: "Army College of Medical Sciences",
    routes: "acms-delhi",
    categories: ["Medical", "Healthcare"],
    courses: [
      "MBBS",
      "MD/MS Programs",
      "Super Specialty Courses",
      "Paramedical Programs"
    ],
    entranceExams: [
      {
        name: "NEET-UG",
        description: "National Eligibility Entrance Test",
        minPercentile: 90,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Delhi Cantt, New Delhi 110010",
    },
    eligibility: {
      academicCriteria: "12th with PCB (60%)",
      entranceRequirement: "NEET qualification",
      ageLimit: "25 years",
    },
    rankings: {
      nirf: 45,
      category: "Medical",
    },
    infrastructure: {
      campus: "Military medical campus",
      facilities: [
        "Advanced hospitals",
        "Research labs",
        "Simulation centers",
        "Sports complex"
      ],
    },
    placement: {
      averagePackage: "Government scales",
      highestPackage: "Based on specialization",
      recruiters: ["Military Hospitals", "Government Hospitals", "Private Hospitals"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 59,
    name: "Indian Institute of Information Technology (IIIT Bangalore)",
    routes: "iiit-bangalore",
    categories: ["Engineering", "Technology"],
    courses: [
      "B.Tech in Computer Science",
      "B.Tech in Electronics and Communication",
      "M.Tech in AI and ML",
      "Integrated M.Tech Programs"
    ],
    entranceExams: [
      {
        name: "JEE Main",
        description: "Main entrance exam",
        minPercentile: 90,
      }
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "26/C, Electronics City, Bangalore 560100",
    },
    eligibility: {
      academicCriteria: "12th with PCM (75%)",
      entranceRequirement: "JEE Main qualification",
      ageLimit: "25 years",
    },
    rankings: {
      nirf: 62,
      category: "Engineering",
    },
    infrastructure: {
      campus: "Modern IT campus",
      facilities: [
        "Research labs",
        "Innovation center",
        "Incubation hub",
        "Digital library"
      ],
    },
    placement: {
      averagePackage: "₹18 LPA",
      highestPackage: "₹45 LPA",
      recruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹1 Lakh per year",
    },
  },
  {
    id: 60,
    name: "Symbiosis Institute of Design (SID)",
    routes: "sid-pune",
    categories: ["Design", "Arts"],
    courses: [
      "B.Des in Product Design",
      "B.Des in Communication Design",
      "B.Des in Fashion Design",
      "B.Des in Interior Design"
    ],
    entranceExams: [
      {
        name: "SEED",
        description: "Symbiosis Entrance Exam for Design",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Viman Nagar, Pune 411014",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "SEED + Portfolio",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 18,
      category: "Design",
    },
    infrastructure: {
      campus: "Creative design campus",
      facilities: [
        "Design studios",
        "Material library",
        "Digital lab",
        "Workshop spaces"
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Design firms", "Fashion houses", "Tech companies", "Startups"],
    },
    fees: {
      tuition: "₹3.8 Lakhs per year",
      hostel: "₹1.4 Lakhs per year",
    },
  },
  {
    id: 61,
    name: "Presidency University",
    routes: "presidency-kolkata",
    categories: ["Sciences", "Humanities", "Research"],
    courses: [
      "BSc in Physics",
      "BSc in Chemistry",
      "BA in Economics",
      "BA in History",
      "MA in Literature"
    ],
    entranceExams: [
      {
        name: "PUBDET",
        description: "Presidency University Bachelor's Degree Entrance Test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "86/1 College Street, Kolkata 700073",
    },
    eligibility: {
      academicCriteria: "12th with 60%",
      entranceRequirement: "PUBDET qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 18,
      category: "University",
    },
    infrastructure: {
      campus: "Historic heritage campus",
      facilities: [
        "Research laboratories",
        "Heritage library",
        "Museum",
        "Seminar halls"
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Research Institutions", "Think Tanks", "Corporate Sector", "Academia"],
    },
    fees: {
      tuition: "₹30,000 per year",
      hostel: "₹45,000 per year",
    },
  },
  {
    id: 62,
    name: "Chandigarh University",
    routes: "chandigarh-university",
    categories: ["Engineering", "Management", "Arts", "Sciences"],
    courses: [
      "B.Tech in AI & ML",
      "BBA in Digital Marketing",
      "B.Arch",
      "BSc in Agriculture",
      "BA in Journalism"
    ],
    entranceExams: [
      {
        name: "CUCET",
        description: "Chandigarh University Common Entrance Test",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Mohali",
      state: "Punjab",
      address: "NH-95 Chandigarh-Ludhiana Highway, Mohali 140413",
    },
    eligibility: {
      academicCriteria: "12th with 55%",
      entranceRequirement: "CUCET qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 52,
      category: "University",
    },
    infrastructure: {
      campus: "Modern 250-acre campus",
      facilities: [
        "Innovation center",
        "Research park",
        "Sports complex",
        "Entrepreneurship cell"
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹42 LPA",
      recruiters: ["Microsoft", "Amazon", "IBM", "Infosys"],
    },
    fees: {
      tuition: "₹2.8 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 63,
    name: "Bharati Vidyapeeth College of Architecture",
    routes: "bvca-pune",
    categories: ["Architecture", "Design", "Planning"],
    courses: [
      "Bachelor of Architecture",
      "M.Arch in Urban Design",
      "M.Arch in Landscape",
      "PG Diploma in Interior Design"
    ],
    entranceExams: [
      {
        name: "NATA",
        description: "National Aptitude Test in Architecture",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Dhankawadi, Pune 411043",
    },
    eligibility: {
      academicCriteria: "12th with PCM (50%)",
      entranceRequirement: "NATA qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 28,
      category: "Architecture",
    },
    infrastructure: {
      campus: "Architecture-focused campus",
      facilities: [
        "Design studios",
        "Model making workshop",
        "Construction yard",
        "Digital lab"
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Architecture Firms", "Construction Companies", "Design Studios"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 64,
    name: "Pearl Academy",
    routes: "pearl-academy",
    categories: ["Design", "Fashion", "Media", "Business"],
    courses: [
      "B.Des in Fashion Design",
      "B.Des in Interior Design",
      "BA in Fashion Business",
      "B.Des in Communication Design",
      "BA in Media & Communication"
    ],
    entranceExams: [
      {
        name: "PEARL Entrance",
        description: "Creative Aptitude Test",
        minPercentile: 65,
      }
    ],
    location: {
      city: "Delhi",
      state: "Delhi",
      address: "Naraina Industrial Area, Delhi 110028",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "Entrance test + Portfolio",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Design & Fashion",
    },
    infrastructure: {
      campus: "Industry-integrated campus",
      facilities: [
        "Design studios",
        "Fashion labs",
        "MAC labs",
        "Resource center",
        "Exhibition spaces"
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Fashion brands", "Design houses", "Media companies", "Retail brands"],
    },
    fees: {
      tuition: "₹4.5 Lakhs per year",
      hostel: "₹1.8 Lakhs per year",
    },
  },
  {
    id: 65,
    name: "Goa Institute of Management (GIM)",
    routes: "gim-goa",
    categories: ["Business", "Management"],
    courses: [
      "PGDM in Business Management",
      "PGDM in Healthcare Management",
      "PGDM in Banking & Financial Services",
      "PGDM in Big Data Analytics"
    ],
    entranceExams: [
      {
        name: "CAT/XAT/GMAT",
        description: "Any of these entrance exams",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Sanquelim",
      state: "Goa",
      address: "Poriem, Sattari, Goa 403505",
    },
    eligibility: {
      academicCriteria: "Graduate degree with 50%",
      entranceRequirement: "Entrance exam + GD + PI",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 35,
      category: "Management",
    },
    infrastructure: {
      campus: "50-acre green campus",
      facilities: [
        "Bloomberg lab",
        "Digital library",
        "Sports complex",
        "Amphitheatre"
      ],
    },
    placement: {
      averagePackage: "₹12 LPA",
      highestPackage: "₹32 LPA",
      recruiters: ["Amazon", "Microsoft", "HDFC Bank", "Deloitte"],
    },
    fees: {
      tuition: "₹19 Lakhs (program)",
      hostel: "₹1.5 Lakhs per year",
    },
  },
  {
    id: 66,
    name: "Manipal College of Dental Sciences (MCODS)",
    routes: "mcods-manipal",
    categories: ["Medical", "Healthcare", "Dental"],
    courses: [
      "BDS",
      "MDS in Orthodontics",
      "MDS in Oral Surgery",
      "PG Diploma in Clinical Dentistry",
      "PhD in Dental Sciences"
    ],
    entranceExams: [
      {
        name: "NEET",
        description: "National Eligibility cum Entrance Test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Manipal",
      state: "Karnataka",
      address: "Madhav Nagar, Manipal 576104",
    },
    eligibility: {
      academicCriteria: "12th with PCB (60%)",
      entranceRequirement: "NEET qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 8,
      category: "Dental",
    },
    infrastructure: {
      campus: "Modern dental campus",
      facilities: [
        "Advanced dental clinics",
        "Simulation labs",
        "Research center",
        "Digital library"
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹20 LPA",
      recruiters: ["Dental Hospitals", "Research Institutions", "Private Clinics"],
    },
    fees: {
      tuition: "₹5 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 67,
    name: "Indian Institute of Craft and Design (IICD)",
    routes: "iicd-jaipur",
    categories: ["Design", "Arts", "Crafts"],
    courses: [
      "B.Des in Hard Material Design",
      "B.Des in Soft Material Design",
      "B.Des in Fashion Design",
      "M.Des in Craft Design",
      "Diploma in Craft Design"
    ],
    entranceExams: [
      {
        name: "IICD Entrance Test",
        description: "Design aptitude test",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      address: "J-8 Jhalana Institutional Area, Jaipur 302004",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "Entrance test + Portfolio",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Craft and Design",
    },
    infrastructure: {
      campus: "Craft-focused campus",
      facilities: [
        "Craft workshops",
        "Material labs",
        "Design studios",
        "Exhibition space"
      ],
    },
    placement: {
      averagePackage: "₹4.5 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["Craft Organizations", "Design Studios", "Export Houses", "NGOs"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 68,
    name: "Symbiosis School of Economics (SSE)",
    routes: "sse-pune",
    categories: ["Economics", "Business", "Research"],
    courses: [
      "BSc Economics (Hons)",
      "MSc Economics",
      "MA in Public Policy",
      "PhD in Economics"
    ],
    entranceExams: [
      {
        name: "SET",
        description: "Symbiosis Entrance Test",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Senapati Bapat Road, Pune 411004",
    },
    eligibility: {
      academicCriteria: "12th with Mathematics (60%)",
      entranceRequirement: "SET + PI-WAT",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 45,
      category: "Economics",
    },
    infrastructure: {
      campus: "Modern economics campus",
      facilities: [
        "Research center",
        "Bloomberg terminal",
        "Computer lab",
        "Digital library"
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹18 LPA",
      recruiters: ["World Bank", "RBI", "Think Tanks", "Consulting Firms"],
    },
    fees: {
      tuition: "₹3.5 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 69,
    name: "Indian Institute of Aeronautical Engineering (IIAE)",
    routes: "iiae-hyderabad",
    categories: ["Engineering", "Aviation", "Technology"],
    courses: [
      "B.Tech in Aeronautical Engineering",
      "B.Tech in Aerospace Engineering",
      "M.Tech in Aircraft Design",
      "Diploma in Aviation"
    ],
    entranceExams: [
      {
        name: "JEE Main",
        description: "Joint Entrance Examination",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Dundigal, Hyderabad 500043",
    },
    eligibility: {
      academicCriteria: "12th with PCM (70%)",
      entranceRequirement: "JEE Main qualification",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 82,
      category: "Engineering",
    },
    infrastructure: {
      campus: "Aviation-focused campus",
      facilities: [
        "Aircraft hangar",
        "Flight simulators",
        "Wind tunnel",
        "Avionics lab"
      ],
    },
    placement: {
      averagePackage: "₹6.5 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["HAL", "Boeing", "Airbus", "Air India"],
    },
    fees: {
      tuition: "₹2.8 Lakhs per year",
      hostel: "₹1 Lakh per year",
    },
  },
  {
    id: 70,
    name: "National Institute of Speech and Hearing (NISH)",
    routes: "nish-trivandrum",
    categories: ["Healthcare", "Rehabilitation", "Research"],
    courses: [
      "Bachelor in Audiology & Speech Language Pathology",
      "B.Sc in Hearing, Language & Communication",
      "Diploma in Early Intervention",
      "Master in Audiology"
    ],
    entranceExams: [
      {
        name: "NISH Entrance",
        description: "Institute specific test",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Thiruvananthapuram",
      state: "Kerala",
      address: "NISH Road, Trivandrum 695017",
    },
    eligibility: {
      academicCriteria: "12th with Science (55%)",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Special Education",
    },
    infrastructure: {
      campus: "Specialized healthcare campus",
      facilities: [
        "Audiology labs",
        "Speech therapy units",
        "Research center",
        "Early intervention center"
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Hospitals", "Rehabilitation Centers", "Research Institutions", "Schools"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 71,
    name: "Whistling Woods International",
    routes: "whistling-woods-mumbai",
    categories: ["Media", "Film", "Communication"],
    courses: [
      "BA in Filmmaking",
      "BA in Acting",
      "BSc in Animation",
      "BA in Media & Communication",
      "Diploma in Film Production"
    ],
    entranceExams: [
      {
        name: "WWI Entrance Test",
        description: "Creative aptitude test",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Film City Complex, Goregaon East, Mumbai 400065",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Film & Media",
    },
    infrastructure: {
      campus: "Film city campus",
      facilities: [
        "Film studios",
        "Post-production suites",
        "Recording studios",
        "Acting workshops"
      ],
    },
    placement: {
      averagePackage: "Project-based",
      highestPackage: "Industry-standard",
      recruiters: ["Production Houses", "Media Companies", "OTT Platforms", "TV Channels"],
    },
    fees: {
      tuition: "₹15 Lakhs per year",
      hostel: "₹2.5 Lakhs per year",
    },
  },
  {
    id: 72,
    name: "Indian Institute of Public Health (IIPH)",
    routes: "iiph-gandhinagar",
    categories: ["Healthcare", "Research", "Public Health"],
    courses: [
      "Master of Public Health",
      "B.Sc in Public Health",
      "PG Diploma in Public Health Management",
      "PhD in Public Health"
    ],
    entranceExams: [
      {
        name: "IIPH Entrance",
        description: "Institute specific test",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Gandhinagar",
      state: "Gujarat",
      address: "Opp. Air Force HQ, Gandhinagar 382042",
    },
    eligibility: {
      academicCriteria: "Bachelor's degree with 55%",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Public Health",
    },
    infrastructure: {
      campus: "Modern healthcare campus",
      facilities: [
        "Research centers",
        "Health informatics lab",
        "Library",
        "Conference facilities"
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["WHO", "UNICEF", "Government Organizations", "NGOs"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 73,
    name: "National Institute of Construction Management and Research (NICMAR)",
    routes: "nicmar-pune",
    categories: ["Engineering", "Management", "Construction"],
    courses: [
      "B.Tech in Construction Engineering",
      "PGP in Project Engineering & Management",
      "PGP in Infrastructure Development & Management",
      "Advanced Construction Management"
    ],
    entranceExams: [
      {
        name: "NICMAR Test",
        description: "Construction Management Aptitude Test",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "NIA Post Office, Pune 411044",
    },
    eligibility: {
      academicCriteria: "Bachelor's in Engineering/Architecture",
      entranceRequirement: "Entrance test + GD + PI",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Construction Management",
    },
    infrastructure: {
      campus: "Industry-integrated campus",
      facilities: [
        "Construction yard",
        "Project labs",
        "Material testing lab",
        "Design studio"
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹16 LPA",
      recruiters: ["L&T", "Shapoorji Pallonji", "TATA Projects", "DLF"],
    },
    fees: {
      tuition: "₹4.5 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 74,
    name: "Indian Institute of Packaging (IIP)",
    routes: "iip-mumbai",
    categories: ["Technology", "Design", "Engineering"],
    courses: [
      "B.Tech in Packaging Technology",
      "Post Graduate Diploma in Packaging",
      "Certificate in Packaging Design",
      "Executive Program in Packaging"
    ],
    entranceExams: [
      {
        name: "IIP Entrance",
        description: "Technical aptitude test",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "E-2, MIDC, Andheri East, Mumbai 400093",
    },
    eligibility: {
      academicCriteria: "12th with PCM (55%)",
      entranceRequirement: "Entrance test",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Packaging Technology",
    },
    infrastructure: {
      campus: "Industry-focused campus",
      facilities: [
        "Packaging labs",
        "Testing center",
        "Design studio",
        "Research facility"
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["FMCG Companies", "Pharmaceutical Companies", "Design Firms"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 75,
    name: "Footwear Design & Development Institute (FDDI)",
    routes: "fddi-noida",
    categories: ["Design", "Fashion", "Management"],
    courses: [
      "B.Des in Footwear Design",
      "MBA in Retail & Fashion Merchandise",
      "B.Des in Leather Goods Design",
      "Diploma in Footwear Technology"
    ],
    entranceExams: [
      {
        name: "AIST",
        description: "All India Selection Test",
        minPercentile: 65,
      }
    ],
    location: {
      city: "Noida",
      state: "Uttar Pradesh",
      address: "Sector 24, Noida 201301",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "AIST + Design aptitude test",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Footwear & Design",
    },
    infrastructure: {
      campus: "Design-focused campus",
      facilities: [
        "Design studios",
        "Production units",
        "CAD/CAM lab",
        "Material testing lab"
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Adidas", "Nike", "Bata", "Relaxo"],
    },
    fees: {
      tuition: "₹2.8 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 76,
    name: "Indian Maritime University (IMU)",
    routes: "imu-chennai",
    categories: ["Maritime", "Engineering", "Management"],
    courses: [
      "B.Tech Marine Engineering",
      "B.Sc Nautical Science",
      "B.Sc Ship Building",
      "MBA in Port & Shipping Management"
    ],
    entranceExams: [
      {
        name: "IMUCET",
        description: "IMU Common Entrance Test",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "East Coast Road, Uthandi, Chennai 600119",
    },
    eligibility: {
      academicCriteria: "12th with PCM (60%)",
      entranceRequirement: "IMUCET qualification",
      ageLimit: "25 years",
    },
    rankings: {
      category: "Maritime Education",
    },
    infrastructure: {
      campus: "Waterfront campus",
      facilities: [
        "Ship-in-campus",
        "Marine workshops",
        "Navigation simulators",
        "Maritime research center"
      ],
    },
    placement: {
      averagePackage: "₹12 LPA",
      highestPackage: "₹30 LPA",
      recruiters: ["Shipping Companies", "Port Authorities", "Marine Industries"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 77,
    name: "National Institute of Mental Health and Neurosciences (NIMHANS)",
    routes: "nimhans-bangalore",
    categories: ["Medical", "Healthcare", "Research"],
    courses: [
      "B.Sc in Nursing (Psychiatric)",
      "M.Phil in Clinical Psychology",
      "M.Sc in Neuroscience",
      "DM in Neurology"
    ],
    entranceExams: [
      {
        name: "NIMHANS Entrance",
        description: "Institute specific examination",
        minPercentile: 90,
      }
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Hosur Road, Bangalore 560029",
    },
    eligibility: {
      academicCriteria: "Varies by program",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Mental Health",
    },
    infrastructure: {
      campus: "Specialized medical campus",
      facilities: [
        "Neuroimaging center",
        "Research laboratories",
        "Psychiatric units",
        "Brain bank"
      ],
    },
    placement: {
      averagePackage: "Government scales",
      highestPackage: "Based on specialization",
      recruiters: ["Hospitals", "Research Institutions", "Mental Health Centers"],
    },
    fees: {
      tuition: "₹50,000 per year",
      hostel: "₹60,000 per year",
    },
  },
  {
    id: 78,
    name: "Indian Institute of Hotel Management (IHM Mumbai)",
    routes: "ihm-mumbai",
    categories: ["Hotel Management", "Hospitality"],
    courses: [
      "B.Sc in Hospitality & Hotel Administration",
      "Diploma in Food Production",
      "Diploma in Bakery & Confectionery",
      "Certificate in Front Office Operations"
    ],
    entranceExams: [
      {
        name: "NCHMCT JEE",
        description: "Joint entrance examination",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Veer Savarkar Marg, Dadar, Mumbai 400028",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "NCHMCT JEE",
      ageLimit: "22 years",
    },
    rankings: {
      nirf: 12,
      category: "Hotel Management",
    },
    infrastructure: {
      campus: "Industry-integrated campus",
      facilities: [
        "Training restaurants",
        "Professional kitchens",
        "Housekeeping labs",
        "Front office lab"
      ],
    },
    placement: {
      averagePackage: "₹4.5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Taj Hotels", "Oberoi", "Marriott", "ITC Hotels"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 79,
    name: "National Institute of Agricultural Extension Management (MANAGE)",
    routes: "manage-hyderabad",
    categories: ["Agriculture", "Management"],
    courses: [
      "PGDM in Agri-Business Management",
      "Diploma in Agricultural Extension",
      "MBA in Agriculture",
      "Executive PGDM in Agri-Business"
    ],
    entranceExams: [
      {
        name: "MANAGE Entrance",
        description: "Agriculture management test",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Rajendranagar, Hyderabad 500030",
    },
    eligibility: {
      academicCriteria: "Graduate degree in Agriculture/related field",
      entranceRequirement: "Entrance test + GD + PI",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Agricultural Management",
    },
    infrastructure: {
      campus: "Green campus",
      facilities: [
        "Agri-business incubator",
        "Research center",
        "Demo farms",
        "Digital library"
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹16 LPA",
      recruiters: ["Agri-businesses", "Food Processing Companies", "Government Sector"],
    },
    fees: {
      tuition: "₹3.5 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 80,
    name: "Srishti Institute of Art, Design and Technology",
    routes: "srishti-bangalore",
    categories: ["Design", "Arts", "Technology"],
    courses: [
      "BFA in Contemporary Art Practice",
      "B.Des in Communication Design",
      "B.Des in Industrial Design",
      "Professional Diploma in Experience Design"
    ],
    entranceExams: [
      {
        name: "Srishti Entrance",
        description: "Creative aptitude test",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Yelahanka New Town, Bangalore 560064",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "Portfolio + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Art & Design",
    },
    infrastructure: {
      campus: "Creative arts campus",
      facilities: [
        "Art studios",
        "Design labs",
        "Digital fabrication lab",
        "Exhibition spaces"
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Design Studios", "Tech Companies", "Art Galleries", "Media Houses"],
    },
    fees: {
      tuition: "₹4.2 Lakhs per year",
      hostel: "₹1.5 Lakhs per year",
    },
  },
  {
    id: 81,
    name: "National Institute of Fashion Technology (NIFT Mumbai)",
    routes: "nift-mumbai",
    categories: ["Fashion", "Design", "Management"],
    courses: [
      "B.Des in Fashion Design",
      "B.Des in Fashion Communication",
      "B.FTech in Apparel Production",
      "M.Des in Fashion Management"
    ],
    entranceExams: [
      {
        name: "NIFT Entrance",
        description: "Design aptitude test",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Plot No.15, Sector-4, Kharghar, Navi Mumbai 410210",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "Entrance test + Situation test",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Fashion Design",
    },
    infrastructure: {
      campus: "Modern design campus",
      facilities: [
        "Design studios",
        "Pattern making labs",
        "Textile labs",
        "Resource center"
      ],
    },
    placement: {
      averagePackage: "₹6.5 LPA",
      highestPackage: "₹18 LPA",
      recruiters: ["Zara", "H&M", "Aditya Birla Fashion", "Reliance Trends"],
    },
    fees: {
      tuition: "₹2.8 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 82,
    name: "Indian Institute of Mass Communication (IIMC)",
    routes: "iimc-delhi",
    categories: ["Mass Communication", "Journalism", "Media"],
    courses: [
      "PG Diploma in Journalism (English)",
      "PG Diploma in Radio & TV Journalism",
      "PG Diploma in Advertising & PR",
      "PG Diploma in Digital Media"
    ],
    entranceExams: [
      {
        name: "IIMC Entrance",
        description: "Written test and interview",
        minPercentile: 85,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Aruna Asaf Ali Marg, New Delhi 110067",
    },
    eligibility: {
      academicCriteria: "Graduate in any discipline",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Mass Communication",
    },
    infrastructure: {
      campus: "Media-focused campus",
      facilities: [
        "TV studio",
        "Radio station",
        "Media lab",
        "Press room"
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Times Group", "NDTV", "Republic", "Bloomberg"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 83,
    name: "National Institute of Rehabilitation Training and Research (NIRTAR)",
    routes: "nirtar-odisha",
    categories: ["Healthcare", "Rehabilitation", "Special Education"],
    courses: [
      "Bachelor in Physiotherapy",
      "Bachelor in Occupational Therapy",
      "Bachelor in Prosthetics & Orthotics",
      "Diploma in Rehabilitation"
    ],
    entranceExams: [
      {
        name: "NIRTAR Entrance",
        description: "Institute specific test",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Cuttack",
      state: "Odisha",
      address: "Olatpur, Cuttack 754010",
    },
    eligibility: {
      academicCriteria: "12th with Science (50%)",
      entranceRequirement: "Entrance test",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Rehabilitation Sciences",
    },
    infrastructure: {
      campus: "Specialized rehabilitation campus",
      facilities: [
        "Rehabilitation center",
        "Therapy units",
        "Prosthetics lab",
        "Research facility"
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["Hospitals", "Rehabilitation Centers", "NGOs", "Research Centers"],
    },
    fees: {
      tuition: "₹80,000 per year",
      hostel: "₹50,000 per year",
    },
  },
  {
    id: 84,
    name: "Indian Institute of Tourism and Travel Management (IITTM)",
    routes: "iittm-gwalior",
    categories: ["Tourism", "Management", "Hospitality"],
    courses: [
      "BBA in Tourism & Travel",
      "MBA in Tourism & Leisure",
      "Diploma in Tourism Management",
      "Certificate in Tour Operations"
    ],
    entranceExams: [
      {
        name: "IITTM-JET",
        description: "Joint entrance test",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Gwalior",
      state: "Madhya Pradesh",
      address: "Govindpuri, Gwalior 474011",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "Entrance test + GD + PI",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Tourism Management",
    },
    infrastructure: {
      campus: "Tourism-focused campus",
      facilities: [
        "Travel lab",
        "GDS training center",
        "Language lab",
        "Conference hall"
      ],
    },
    placement: {
      averagePackage: "₹4.5 LPA",
      highestPackage: "₹8 LPA",
      recruiters: ["Travel Companies", "Airlines", "Hotels", "Tourism Boards"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 85,
    name: "Film and Television Institute of India (FTII)",
    routes: "ftii-pune",
    categories: ["Media", "Film", "Television"],
    courses: [
      "Film Direction & Screenplay Writing",
      "Cinema Photography",
      "Sound Recording & Sound Design",
      "Film Editing",
      "Acting"
    ],
    entranceExams: [
      {
        name: "FTII JET",
        description: "Joint entrance test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Law College Road, Pune 411004",
    },
    eligibility: {
      academicCriteria: "Graduate in any discipline",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Film & Television",
    },
    infrastructure: {
      campus: "Historic film campus",
      facilities: [
        "Film studios",
        "Editing suites",
        "Sound stages",
        "Preview theatres"
      ],
    },
    placement: {
      averagePackage: "Project-based",
      highestPackage: "Industry-standard",
      recruiters: ["Film Industry", "TV Channels", "Production Houses", "OTT Platforms"],
    },
    fees: {
      tuition: "₹1.8 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 86,
    name: "National Institute of Food Technology Entrepreneurship and Management (NIFTEM)",
    routes: "niftem-sonipat",
    categories: ["Food Technology", "Management", "Research"],
    courses: [
      "B.Tech in Food Technology",
      "M.Tech in Food Processing",
      "MBA in Food Business Management",
      "Ph.D in Food Science"
    ],
    entranceExams: [
      {
        name: "NIFTEM JEE",
        description: "Joint entrance examination",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Sonipat",
      state: "Haryana",
      address: "Plot No 97, Sector-56, HSIIDC, Kundli 131028",
    },
    eligibility: {
      academicCriteria: "12th with PCM/PCB (60%)",
      entranceRequirement: "JEE Main/NIFTEM JEE",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Food Technology",
    },
    infrastructure: {
      campus: "Modern food tech campus",
      facilities: [
        "Food processing pilot plants",
        "Research laboratories",
        "Sensory evaluation lab",
        "Incubation center"
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹16 LPA",
      recruiters: ["Nestle", "ITC Foods", "Britannia", "Parle"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 87,
    name: "National Institute of Pharmaceutical Education and Research (NIPER)",
    routes: "niper-mohali",
    categories: ["Pharmacy", "Research", "Healthcare"],
    courses: [
      "B.Pharm",
      "M.Pharm in Drug Discovery",
      "M.Pharm in Pharmaceutics",
      "Ph.D in Pharmaceutical Sciences"
    ],
    entranceExams: [
      {
        name: "NIPER JEE",
        description: "Joint entrance examination",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Mohali",
      state: "Punjab",
      address: "Sector 67, SAS Nagar, Mohali 160062",
    },
    eligibility: {
      academicCriteria: "B.Pharm with 60%",
      entranceRequirement: "NIPER JEE",
      ageLimit: "No age limit",
    },
    rankings: {
      nirf: 4,
      category: "Pharmacy",
    },
    infrastructure: {
      campus: "Research-oriented campus",
      facilities: [
        "Advanced research labs",
        "Drug testing facility",
        "Central instrumentation lab",
        "Medicinal plants garden"
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹18 LPA",
      recruiters: ["Sun Pharma", "Dr. Reddy's", "Cipla", "GSK"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹72,000 per year",
    },
  },
  {
    id: 88,
    name: "Indian Institute of Gems and Jewellery (IIGJ)",
    routes: "iigj-mumbai",
    categories: ["Design", "Crafts", "Business"],
    courses: [
      "Bachelor in Jewellery Design",
      "Diploma in Jewellery Manufacturing",
      "Certificate in Gem Identification",
      "Advanced CAD for Jewellery"
    ],
    entranceExams: [
      {
        name: "IIGJ Entrance",
        description: "Design aptitude test",
        minPercentile: 65,
      }
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Tower 1, Seepz++, Andheri East, Mumbai 400096",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "Entrance test + Portfolio",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Jewellery Design",
    },
    infrastructure: {
      campus: "Industry-integrated campus",
      facilities: [
        "Jewellery workshop",
        "CAD/CAM lab",
        "Gemology lab",
        "Design studio"
      ],
    },
    placement: {
      averagePackage: "₹4.5 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["Tanishq", "CaratLane", "Reliance Jewels", "Boutique Studios"],
    },
    fees: {
      tuition: "₹3.2 Lakhs per year",
      hostel: "₹95,000 per year",
    },
  },
  {
    id: 89,
    name: "Indian Institute of Carpet Technology (IICT)",
    routes: "iict-bhadohi",
    categories: ["Technology", "Design", "Management"],
    courses: [
      "B.Tech in Carpet & Textile Technology",
      "Diploma in Carpet Manufacturing",
      "Certificate in Carpet Design",
      "PG Diploma in Carpet Management"
    ],
    entranceExams: [
      {
        name: "IICT Entrance",
        description: "Technical aptitude test",
        minPercentile: 60,
      }
    ],
    location: {
      city: "Bhadohi",
      state: "Uttar Pradesh",
      address: "Chauri Road, Bhadohi 221401",
    },
    eligibility: {
      academicCriteria: "12th with PCM (50%)",
      entranceRequirement: "Entrance test",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Specialized Technology",
    },
    infrastructure: {
      campus: "Industry-focused campus",
      facilities: [
        "Carpet production unit",
        "Design studio",
        "Testing laboratory",
        "Dyeing facility"
      ],
    },
    placement: {
      averagePackage: "₹4 LPA",
      highestPackage: "₹8 LPA",
      recruiters: ["Carpet Exporters", "Manufacturing Units", "Design Houses"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹60,000 per year",
    },
  },
  {
    id: 90,
    name: "National Institute of Solar Energy (NISE)",
    routes: "nise-gurgaon",
    categories: ["Energy", "Technology", "Research"],
    courses: [
      "B.Tech in Solar Energy",
      "M.Tech in Renewable Energy",
      "PG Diploma in Solar Technology",
      "Certificate in Solar Installation"
    ],
    entranceExams: [
      {
        name: "NISE Entrance",
        description: "Technical knowledge test",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Gurgaon",
      state: "Haryana",
      address: "Gwal Pahari, Gurgaon 122003",
    },
    eligibility: {
      academicCriteria: "12th with PCM (60%)",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Renewable Energy",
    },
    infrastructure: {
      campus: "Solar technology campus",
      facilities: [
        "Solar research lab",
        "Testing center",
        "Demonstration units",
        "Training facility"
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Solar Companies", "Power Corporations", "Research Organizations"],
    },
    fees: {
      tuition: "₹1.8 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 91,
    name: "Indian Institute of Drones (IID)",
    routes: "iid-bangalore",
    categories: ["Technology", "Aviation", "Engineering"],
    courses: [
      "B.Tech in Drone Technology",
      "Diploma in Drone Manufacturing",
      "Certificate in Drone Operations",
      "PG Diploma in Drone Applications"
    ],
    entranceExams: [
      {
        name: "IID-DAT",
        description: "Drone Aptitude Test",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Electronic City Phase 1, Bangalore 560100",
    },
    eligibility: {
      academicCriteria: "12th with PCM (60%)",
      entranceRequirement: "Entrance test + Practical test",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Emerging Technology",
    },
    infrastructure: {
      campus: "Tech-focused campus",
      facilities: [
        "Drone testing facility",
        "Simulation lab",
        "Manufacturing unit",
        "Flight training area"
      ],
    },
    placement: {
      averagePackage: "₹6.5 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Drone Startups", "Defense Organizations", "Agricultural Tech Companies"],
    },
    fees: {
      tuition: "₹3.5 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 92,
    name: "National Institute of Ayurveda (NIA)",
    routes: "nia-jaipur",
    categories: ["Medical", "Ayurveda", "Research"],
    courses: [
      "BAMS (Bachelor of Ayurvedic Medicine)",
      "MD in Ayurveda",
      "Ph.D in Ayurvedic Studies",
      "Diploma in Panchakarma"
    ],
    entranceExams: [
      {
        name: "NEET-UG",
        description: "National Eligibility Entrance Test",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      address: "Jorawar Singh Gate, Amer Road, Jaipur 302002",
    },
    eligibility: {
      academicCriteria: "12th with PCB (60%)",
      entranceRequirement: "NEET qualification",
      ageLimit: "25 years",
    },
    rankings: {
      category: "Ayurvedic Education",
    },
    infrastructure: {
      campus: "Traditional medicine campus",
      facilities: [
        "Ayurvedic hospital",
        "Herb garden",
        "Research laboratories",
        "Treatment centers"
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Ayurvedic Hospitals", "Research Centers", "Wellness Centers"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹65,000 per year",
    },
  },
  {
    id: 93,
    name: "Indian Institute of Heritage Conservation (IIHC)",
    routes: "iihc-delhi",
    categories: ["Conservation", "Heritage", "Research"],
    courses: [
      "B.Sc in Heritage Conservation",
      "MA in Heritage Management",
      "PG Diploma in Monument Conservation",
      "Certificate in Art Conservation"
    ],
    entranceExams: [
      {
        name: "IIHC-CAT",
        description: "Conservation Aptitude Test",
        minPercentile: 75,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Tughlakabad Fort Area, New Delhi 110062",
    },
    eligibility: {
      academicCriteria: "12th pass with 55%",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Heritage Conservation",
    },
    infrastructure: {
      campus: "Heritage integrated campus",
      facilities: [
        "Conservation laboratory",
        "Material testing center",
        "Documentation center",
        "Heritage library"
      ],
    },
    placement: {
      averagePackage: "₹5.5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Archaeological Survey", "Museums", "Conservation Centers"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 94,
    name: "National Institute of Water Sports (NIWS)",
    routes: "niws-goa",
    categories: ["Sports", "Adventure", "Management"],
    courses: [
      "BSc in Water Sports Management",
      "Diploma in Sailing",
      "Certificate in Scuba Diving",
      "Adventure Sports Management"
    ],
    entranceExams: [
      {
        name: "NIWS Entrance",
        description: "Sports aptitude test",
        minPercentile: 65,
      }
    ],
    location: {
      city: "Panaji",
      state: "Goa",
      address: "Dr. Salim Ali Road, Caranzalem, Goa 403002",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "Physical fitness test + Interview",
      ageLimit: "25 years",
    },
    rankings: {
      category: "Water Sports",
    },
    infrastructure: {
      campus: "Waterfront campus",
      facilities: [
        "Water sports center",
        "Training pool",
        "Boat house",
        "Safety training facility"
      ],
    },
    placement: {
      averagePackage: "₹4.5 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["Resorts", "Sports Academies", "Adventure Companies"],
    },
    fees: {
      tuition: "₹2.8 Lakhs per year",
      hostel: "₹95,000 per year",
    },
  },
  {
    id: 95,
    name: "Indian Institute of Handloom Technology (IIHT)",
    routes: "iiht-varanasi",
    categories: ["Textiles", "Technology", "Design"],
    courses: [
      "B.Tech in Handloom Technology",
      "Diploma in Handloom & Textile",
      "Certificate in Weaving Technology",
      "Design Development Program"
    ],
    entranceExams: [
      {
        name: "IIHT-JEE",
        description: "Joint entrance examination",
        minPercentile: 60,
      }
    ],
    location: {
      city: "Varanasi",
      state: "Uttar Pradesh",
      address: "Chowkaghat, Varanasi 221002",
    },
    eligibility: {
      academicCriteria: "12th with PCM (50%)",
      entranceRequirement: "Entrance test",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Textile Technology",
    },
    infrastructure: {
      campus: "Traditional textile campus",
      facilities: [
        "Weaving workshop",
        "Design studio",
        "Textile testing lab",
        "Documentation center"
      ],
    },
    placement: {
      averagePackage: "₹4 LPA",
      highestPackage: "₹8 LPA",
      recruiters: ["Textile Industries", "Handloom Sectors", "Export Houses"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹60,000 per year",
    },
  },
  {
    id: 96,
    name: "National Institute of Mountaineering (NIM)",
    routes: "nim-uttarkashi",
    categories: ["Adventure", "Sports", "Training"],
    courses: [
      "Advanced Mountaineering Course",
      "Search and Rescue Training",
      "Adventure Sports Management",
      "High Altitude Guide Training"
    ],
    entranceExams: [
      {
        name: "NIM-PAT",
        description: "Physical Aptitude Test",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Uttarkashi",
      state: "Uttarakhand",
      address: "Garwal Himalayas, Uttarkashi 249193",
    },
    eligibility: {
      academicCriteria: "12th pass",
      entranceRequirement: "Physical fitness test + Medical test",
      ageLimit: "35 years",
    },
    rankings: {
      category: "Adventure Sports",
    },
    infrastructure: {
      campus: "Mountain training campus",
      facilities: [
        "Indoor climbing wall",
        "Survival training area",
        "Equipment center",
        "High altitude training zone"
      ],
    },
    placement: {
      averagePackage: "₹4.5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Adventure Companies", "Defense Forces", "Tourism Sector"],
    },
    fees: {
      tuition: "₹1.8 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 97,
    name: "Indian Institute of Logistics (IIL)",
    routes: "iil-chennai",
    categories: ["Logistics", "Management", "Supply Chain"],
    courses: [
      "BBA in Logistics Management",
      "MBA in Supply Chain Management",
      "PG Diploma in Port Management",
      "Certificate in Warehouse Management"
    ],
    entranceExams: [
      {
        name: "IIL-MAT",
        description: "Management Aptitude Test",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "East Coast Road, Chennai 600119",
    },
    eligibility: {
      academicCriteria: "12th pass with 50%",
      entranceRequirement: "Entrance test + GD + PI",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Logistics Management",
    },
    infrastructure: {
      campus: "Modern logistics campus",
      facilities: [
        "Simulation center",
        "Warehouse lab",
        "Supply chain lab",
        "Transportation hub"
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Amazon", "DHL", "Maersk", "FedEx"],
    },
    fees: {
      tuition: "₹3.2 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 98,
    name: "National Institute of Speech and Hearing (NISH)",
    routes: "nish-kerala",
    categories: ["Healthcare", "Special Education", "Rehabilitation"],
    courses: [
      "B.Sc in Speech and Hearing",
      "Bachelor in Audiology",
      "Diploma in Sign Language",
      "PG in Speech Therapy"
    ],
    entranceExams: [
      {
        name: "NISH-NET",
        description: "National Entrance Test",
        minPercentile: 65,
      }
    ],
    location: {
      city: "Thiruvananthapuram",
      state: "Kerala",
      address: "NISH Road, Trivandrum 695017",
    },
    eligibility: {
      academicCriteria: "12th with Science (55%)",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Special Education",
    },
    infrastructure: {
      campus: "Healthcare campus",
      facilities: [
        "Audiology labs",
        "Speech therapy units",
        "Research center",
        "Early intervention center"
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["Hospitals", "Rehabilitation Centers", "Special Schools"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 99,
    name: "Indian Institute of Petroleum and Energy (IIPE)",
    routes: "iipe-vizag",
    categories: ["Energy", "Technology", "Engineering"],
    courses: [
      "B.Tech in Petroleum Engineering",
      "B.Tech in Energy Engineering",
      "M.Tech in Petrochemicals",
      "Ph.D in Energy Studies"
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "Joint Entrance Examination",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      address: "AU College of Engineering Campus, Vizag 530003",
    },
    eligibility: {
      academicCriteria: "12th with PCM (70%)",
      entranceRequirement: "JEE Advanced",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Petroleum Engineering",
    },
    infrastructure: {
      campus: "Energy research campus",
      facilities: [
        "Petroleum labs",
        "Energy research center",
        "Simulation facility",
        "Industry training center"
      ],
    },
    placement: {
      averagePackage: "₹12 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["ONGC", "Reliance", "Shell", "BP"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 100,
    name: "National Institute of Traditional Medicine (NITM)",
    routes: "nitm-belagavi",
    categories: ["Medical", "Traditional Medicine", "Research"],
    courses: [
      "Bachelor in Traditional Medicine",
      "M.Sc in Medicinal Plants",
      "PG Diploma in Yoga Therapy",
      "Ph.D in Traditional Healthcare"
    ],
    entranceExams: [
      {
        name: "NITM-NET",
        description: "National Eligibility Test",
        minPercentile: 70,
      }
    ],
    location: {
      city: "Belagavi",
      state: "Karnataka",
      address: "ICMR Complex, Belagavi 590010",
    },
    eligibility: {
      academicCriteria: "12th with Science (60%)",
      entranceRequirement: "Entrance test + Interview",
      ageLimit: "No age limit",
    },
    rankings: {
      category: "Traditional Medicine",
    },
    infrastructure: {
      campus: "Research-oriented campus",
      facilities: [
        "Herbal garden",
        "Research laboratories",
        "Traditional medicine center",
        "Documentation center"
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Research Institutes", "Wellness Centers", "Pharmaceutical Companies"],
    },
    fees: {
      tuition: "₹1.8 Lakhs per year",
      hostel: "₹65,000 per year",
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
