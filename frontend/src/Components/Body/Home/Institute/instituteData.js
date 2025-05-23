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
    name: "Indian Institute of Technology Madras",
    routes: "iit-madras",
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
      city: "Chennai",
      state: "Tamil Nadu",
      address: "IIT P.O., Chennai, Tamil Nadu 600036",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Advanced",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 1,
      qsWorld: 250,
    },
    infrastructure: {
      campus: "Sprawling 620-acre campus",
      facilities: [
        "State-of-the-art laboratories",
        "Central library",
        "Sports complex",
        "Medical center",
      ],
    },
    placement: {
      averagePackage: "₹21.48 LPA",
      highestPackage: "₹1.98 Cr",
      recruiters: ["Google", "Microsoft", "Apple", "Goldman Sachs"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 2,
    name: "Indian Institute of Technology Delhi",
    routes: "iit-delhi",
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
      qsWorld: 197,
    },
    infrastructure: {
      campus: "Modern 325-acre campus",
      facilities: [
        "Advanced research laboratories",
        "Central library",
        "Sports complex",
        "Medical center",
      ],
    },
    placement: {
      averagePackage: "₹19.76 LPA",
      highestPackage: "₹1.8 Cr",
      recruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 3,
    name: "Indian Institute of Technology Bombay",
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
      nirf: 3,
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
      averagePackage: "₹20.34 LPA",
      highestPackage: "₹1.9 Cr",
      recruiters: ["Google", "Microsoft", "Apple", "Goldman Sachs"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 4,
    name: "Indian Institute of Technology Kanpur",
    routes: "iit-kanpur",
    categories: ["Engineering", "Technology", "Research", "Sciences"],
    courses: [
      "B.Tech in Computer Science and Engineering",
      "B.Tech in Electrical Engineering",
      "B.Tech in Mechanical Engineering",
      "B.Tech in Aerospace Engineering",
      "B.Tech in Materials Engineering",
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "Main entrance exam for all IITs",
        minPercentile: 90,
      },
    ],
    location: {
      city: "Kanpur",
      state: "Uttar Pradesh",
      address: "IIT Kanpur, Kalyanpur, Kanpur 208016",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Advanced",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 4,
      qsWorld: 264,
    },
    infrastructure: {
      campus: "Expansive 1055-acre campus",
      facilities: [
        "Advanced research laboratories",
        "P.K. Kelkar Library",
        "Sports complex",
        "Health center",
      ],
    },
    placement: {
      averagePackage: "₹19.5 LPA",
      highestPackage: "₹1.65 Cr",
      recruiters: ["Google", "Microsoft", "Apple", "Deutsche Bank"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 5,
    name: "Indian Institute of Technology Kharagpur",
    routes: "iit-kharagpur",
    categories: ["Engineering", "Technology", "Research", "Sciences"],
    courses: [
      "B.Tech in Computer Science and Engineering",
      "B.Tech in Electronics Engineering",
      "B.Tech in Mechanical Engineering",
      "B.Tech in Architecture",
      "B.Tech in Ocean Engineering",
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "Main entrance exam for all IITs",
        minPercentile: 90,
      },
    ],
    location: {
      city: "Kharagpur",
      state: "West Bengal",
      address: "IIT Kharagpur, Kharagpur 721302",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Advanced",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 5,
      qsWorld: 270,
    },
    infrastructure: {
      campus: "Largest IIT campus spanning 2100 acres",
      facilities: [
        "Central Research Facility",
        "Nehru Museum of Technology",
        "Sports complex",
        "B.C. Roy Technology Hospital",
      ],
    },
    placement: {
      averagePackage: "₹18.8 LPA",
      highestPackage: "₹2.4 Cr",
      recruiters: ["Google", "Microsoft", "Apple", "Shell"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹72,000 per year",
    },
  },
  {
    id: 6,
    name: "Indian Institute of Technology Roorkee",
    routes: "iit-roorkee",
    categories: ["Engineering", "Technology", "Research", "Sciences"],
    courses: [
      "B.Tech in Computer Science and Engineering",
      "B.Tech in Electronics Engineering",
      "B.Tech in Mechanical Engineering",
      "B.Tech in Civil Engineering",
      "B.Tech in Biotechnology",
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "Main entrance exam for all IITs",
        minPercentile: 90,
      },
    ],
    location: {
      city: "Roorkee",
      state: "Uttarakhand",
      address: "IIT Roorkee, Roorkee 247667",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Advanced",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 6,
      qsWorld: 369,
    },
    infrastructure: {
      campus: "Historic 365-acre campus",
      facilities: [
        "Mahatma Gandhi Central Library",
        "Advanced research labs",
        "Sports complex",
        "Hospital",
      ],
    },
    placement: {
      averagePackage: "₹17.9 LPA",
      highestPackage: "₹1.8 Cr",
      recruiters: ["Microsoft", "Google", "Amazon", "Intel"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 7,
    name: "Indian Institute of Technology Guwahati",
    routes: "iit-guwahati",
    categories: ["Engineering", "Technology", "Research", "Sciences"],
    courses: [
      "B.Tech in Computer Science and Engineering",
      "B.Tech in Electronics Engineering",
      "B.Tech in Mechanical Engineering",
      "B.Tech in Chemical Engineering",
      "B.Tech in Design",
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "Main entrance exam for all IITs",
        minPercentile: 90,
      },
    ],
    location: {
      city: "Guwahati",
      state: "Assam",
      address: "IIT Guwahati, North Guwahati 781039",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Advanced",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 7,
      qsWorld: 384,
    },
    infrastructure: {
      campus: "Scenic 700-acre campus",
      facilities: [
        "Central Library",
        "Conference center",
        "Sports complex",
        "Hospital",
      ],
    },
    placement: {
      averagePackage: "₹16.5 LPA",
      highestPackage: "₹1.54 Cr",
      recruiters: ["Google", "Microsoft", "Amazon", "Qualcomm"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹68,000 per year",
    },
  },
  {
    id: 8,
    name: "Indian Institute of Technology Hyderabad",
    routes: "iit-hyderabad",
    categories: ["Engineering", "Technology", "Research", "Sciences"],
    courses: [
      "B.Tech in Computer Science and Engineering",
      "B.Tech in Artificial Intelligence",
      "B.Tech in Electrical Engineering",
      "B.Tech in Chemical Engineering",
      "B.Tech in Engineering Physics",
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "Main entrance exam for all IITs",
        minPercentile: 90,
      },
    ],
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "IIT Hyderabad, Kandi, Sangareddy 502285",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Advanced",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 8,
      qsWorld: 591,
    },
    infrastructure: {
      campus: "Modern 576-acre campus",
      facilities: [
        "AI/ML Research Labs",
        "Central Library",
        "Innovation Center",
        "Medical Center",
      ],
    },
    placement: {
      averagePackage: "₹16.2 LPA",
      highestPackage: "₹1.7 Cr",
      recruiters: ["Google", "Apple", "Microsoft", "JP Morgan"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 9,
    name: "Indian Institute of Technology (ISM) Dhanbad",
    routes: "iit-dhanbad",
    categories: ["Engineering", "Technology", "Research", "Mining"],
    courses: [
      "B.Tech in Mining Engineering",
      "B.Tech in Computer Science",
      "B.Tech in Petroleum Engineering",
      "B.Tech in Mineral Engineering",
      "B.Tech in Environmental Engineering",
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "Main entrance exam for all IITs",
        minPercentile: 90,
      },
    ],
    location: {
      city: "Dhanbad",
      state: "Jharkhand",
      address: "IIT (ISM) Dhanbad, Dhanbad 826004",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Advanced",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 15,
      qsWorld: 651,
    },
    infrastructure: {
      campus: "Legacy 393-acre campus",
      facilities: [
        "Mining Labs",
        "Central Library",
        "Research Centers",
        "Sports Complex",
      ],
    },
    placement: {
      averagePackage: "₹15.5 LPA",
      highestPackage: "₹1.5 Cr",
      recruiters: ["Shell", "Microsoft", "Coal India", "ONGC"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 10,
    name: "Indian Institute of Technology Indore",
    routes: "iit-indore",
    categories: ["Engineering", "Technology", "Research", "Sciences"],
    courses: [
      "B.Tech in Computer Science and Engineering",
      "B.Tech in Electrical Engineering",
      "B.Tech in Mechanical Engineering",
      "B.Tech in Metallurgy",
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
      city: "Indore",
      state: "Madhya Pradesh",
      address: "IIT Indore, Simrol, Indore 453552",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Advanced",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 17,
      qsWorld: 720,
    },
    infrastructure: {
      campus: "Modern 500-acre campus",
      facilities: [
        "Research Labs",
        "Central Library",
        "Innovation Hub",
        "Sports Complex",
      ],
    },
    placement: {
      averagePackage: "₹15.2 LPA",
      highestPackage: "₹1.7 Cr",
      recruiters: ["Google", "Microsoft", "Amazon", "Intel"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 11,
    name: "Indian Institute of Technology Gandhinagar",
    routes: "iit-gandhinagar",
    categories: ["Engineering", "Technology", "Research", "Sciences"],
    courses: [
      "B.Tech in Computer Science and Engineering",
      "B.Tech in Chemical Engineering",
      "B.Tech in Mechanical Engineering",
      "B.Tech in Materials Engineering",
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
      city: "Gandhinagar",
      state: "Gujarat",
      address: "IIT Gandhinagar, Palaj, Gandhinagar 382355",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Advanced",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 18,
      qsWorld: 741,
    },
    infrastructure: {
      campus: "Modern sustainable 400-acre campus",
      facilities: [
        "Research Labs",
        "Central Library",
        "Innovation Center",
        "Sports Complex",
      ],
    },
    placement: {
      averagePackage: "₹15 LPA",
      highestPackage: "₹1.6 Cr",
      recruiters: ["Google", "Microsoft", "Apple", "Shell"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
    name: "All India Institute of Medical Sciences, New Delhi",
    routes: "aiims-delhi",
    categories: ["Medical", "Research", "Healthcare"],
    courses: [
      "MBBS",
      "MD/MS in various specializations",
      "DM/MCh Super Speciality",
      "BSc Nursing",
      "PhD Programs",
    ],
    entranceExams: [
      {
        name: "NEET-UG",
        description: "National Eligibility cum Entrance Test for MBBS",
        minPercentile: 98,
      },
      {
        name: "AIIMS MBBS",
        description: "AIIMS specific entrance exam",
        minPercentile: 95,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Ansari Nagar East, New Delhi 110029",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCB in 12th standard",
      entranceRequirement: "Must qualify NEET-UG",
      ageLimit: "17-25 years",
    },
    rankings: {
      nirf: 1,
      qsWorld: 231,
    },
    infrastructure: {
      campus: "160-acre medical campus",
      facilities: [
        "Advanced Research Labs",
        "Super Specialty Treatment Facilities",
        "Digital Library",
        "Simulation Labs",
        "24x7 Emergency Services"
      ],
    },
    placement: {
      averagePackage: "₹12-15 LPA (Starting salary for residents)",
      highestPackage: "Varies by specialization",
      recruiters: ["Government Hospitals", "Private Hospitals", "Research Institutions", "Global Healthcare Organizations"],
    },
    fees: {
      tuition: "₹6,900 per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 16,
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
    id: 17,
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
    id: 18,
    name: "Vellore Institute of Technology (VIT)",
    routes: "vit-vellore",
    categories: ["Engineering", "Technology", "Research"],
    courses: [
      "B.Tech Computer Science",
      "B.Tech Electronics",
      "B.Tech Mechanical",
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
    name: "Shri Ram College of Commerce",
    routes: "srcc-delhi",
    categories: ["Commerce", "Economics", "Business"],
    courses: [
      "B.Com (Hons)",
      "B.A. Economics (Hons)",
      "M.Com",
      "Global Business Operations",
      "Professional Courses"
    ],
    entranceExams: [
      {
        name: "CUET",
        description: "Common University Entrance Test",
        minPercentile: 98,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Maurice Nagar, University of Delhi, Delhi 110007",
    },
    eligibility: {
      academicCriteria: "Minimum 95% in 12th standard",
      entranceRequirement: "Must qualify CUET",
      subjects: "Mathematics/Business Mathematics in 12th",
    },
    rankings: {
      nirf: 1,
      naac: "A++",
    },
    infrastructure: {
      campus: "Premium college in North Campus",
      facilities: [
        "Research Center",
        "Commerce Lab",
        "Digital Library",
        "Seminar Halls",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹9.5 LPA",
      highestPackage: "₹31 LPA",
      recruiters: ["Deloitte", "PwC", "EY", "KPMG", "Goldman Sachs"],
    },
    fees: {
      tuition: "₹25,000 per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 30,
    name: "St. Xavier's College",
    routes: "st-xaviers-kolkata",
    categories: ["Commerce", "Business", "Economics"],
    courses: [
      "B.Com (Hons)",
      "B.Com Morning",
      "M.Com",
      "BBA",
      "Professional Studies"
    ],
    entranceExams: [
      {
        name: "SXCCAT",
        description: "St. Xavier's College Admission Test",
        minPercentile: 90,
      }
    ],
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "30, Mother Teresa Sarani, Kolkata 700016",
    },
    eligibility: {
      academicCriteria: "Minimum 85% in 12th standard",
      entranceRequirement: "Must qualify SXCCAT",
      subjects: "Commerce/Mathematics in 12th",
    },
    rankings: {
      nirf: 2,
      naac: "A++",
    },
    infrastructure: {
      campus: "Heritage campus with modern facilities",
      facilities: [
        "Commerce Block",
        "Computer Labs",
        "Central Library",
        "Auditorium",
        "Sports Facilities"
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["PwC", "Deloitte", "JP Morgan", "HSBC", "EY"],
    },
    fees: {
      tuition: "₹35,000 per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 31,
    name: "Loyola College",
    routes: "loyola-chennai",
    categories: ["Commerce", "Business", "Economics"],
    courses: [
      "B.Com (Hons)",
      "B.Com Corporate Secretaryship",
      "M.Com",
      "Professional Accounting",
      "Business Analytics"
    ],
    entranceExams: [
      {
        name: "Loyola Entrance Test",
        description: "College specific entrance exam",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Sterling Road, Nungambakkam, Chennai 600034",
    },
    eligibility: {
      academicCriteria: "Minimum 80% in 12th standard",
      entranceRequirement: "Must qualify Loyola Entrance Test",
      subjects: "Commerce/Accountancy in 12th",
    },
    rankings: {
      nirf: 3,
      naac: "A++",
    },
    infrastructure: {
      campus: "Sprawling green campus",
      facilities: [
        "Commerce Department Block",
        "Digital Library",
        "Computer Centers",
        "Placement Cell",
        "Sports Grounds"
      ],
    },
    placement: {
      averagePackage: "₹7.5 LPA",
      highestPackage: "₹22 LPA",
      recruiters: ["Deloitte", "TCS", "Accenture", "KPMG", "HCL"],
    },
    fees: {
      tuition: "₹45,000 per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
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
    id: 39,
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
    id: 40,
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
    id: 41,
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
    id: 42,
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
    id: 43,
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
    id: 44,
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
    id: 45,
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
    id: 46,
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
    id: 47,
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
    id: 48,
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
    id: 49,
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
    id: 50,
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
    id: 51,
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
    id: 52,
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
    id: 53,
    name: "Indian Institute of Ayurveda (NIA)",
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
    id: 54,
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
    id: 55,
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
    id: 56,
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
    id: 57,
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
    id: 58,
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
    id: 59,
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
    id: 60,
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
      address: "4, Block B, I.P. Estate, New Delhi 110002",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Main Paper 2/NATA",
      subjects: "Mathematics mandatory in 12th",
    },
    rankings: {
      nirf: 1,
      naac: "A+",
    },
    infrastructure: {
      campus: "Urban campus with modern facilities",
      facilities: [
        "Design Studios",
        "Model Making Workshop",
        "Material Museum",
        "Digital Library",
        "Computer Labs"
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹18 LPA",
      recruiters: ["Architect Hafeez Contractor", "Morphogenesis", "CPWD", "DDA", "Leading Architecture Firms"],
    },
    fees: {
      tuition: "₹85,000 per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 61,
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
    id: 62,
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
    id: 63,
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
    id: 64,
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
    id: 65,
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
    id: 66,
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
    id: 67,
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
    id: 68,
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
    id: 69,
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
    id: 70,
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
    id: 71,
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
    id: 72,
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
    id: 73,
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
    id: 74,
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
    id: 75,
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
    id: 76,
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
    id: 77,
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
    id: 78,
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
    id: 79,
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
    id: 80,
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
    id: 81,
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
    id: 82,
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
    id: 83,
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
    id: 84,
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
    id: 85,
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
    id: 86,
    name: "Vellore Institute of Technology",
    nirf_ranking: 13,
    routes: "vit-vellore",
    categories: ["Engineering", "Technology", "Research"],
    courses: [
      "B.Tech Computer Science",
      "B.Tech Electronics",
      "B.Tech Mechanical",
      "B.Tech Biotechnology",
      "Integrated M.Tech Programs"
    ],
    entranceExams: [
      {
        name: "VITEEE",
        description: "VIT Engineering Entrance Examination",
        minPercentile: 85,
      },
      {
        name: "JEE Main",
        description: "National level engineering entrance",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Vellore",
      state: "Tamil Nadu",
      address: "Katpadi Road, Vellore - 632014",
    },
    infrastructure: {
      campus: "Smart campus with modern amenities",
      facilities: [
        "Technology Tower",
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹7.5 LPA",
      highestPackage: "₹45 LPA",
      recruiters: ["Microsoft", "Amazon", "IBM", "Deloitte", "TCS"],
    },
    fees: {
      tuition: "₹4.2 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 87,
    name: "Jadavpur University",
    nirf_ranking: 14,
    routes: "jadavpur-university",
    categories: ["Engineering", "Technology", "Research", "Arts", "Science"],
    courses: [
      "B.Tech Computer Science",
      "B.Tech Electronics",
      "B.Tech Mechanical",
      "B.Tech Chemical",
      "M.Tech Programs"
    ],
    entranceExams: [
      {
        name: "WBJEE",
        description: "West Bengal Joint Entrance Examination",
        minPercentile: 90,
      },
      {
        name: "JEE Main",
        description: "National level engineering entrance",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "188, Raja S.C. Mallick Rd, Kolkata - 700032",
    },
    infrastructure: {
      campus: "Historic campus with modern facilities",
      facilities: [
        "Research Labs",
        "Central Library",
        "Innovation Center",
        "Workshop Complex",
        "Sports Ground"
      ],
    },
    placement: {
      averagePackage: "₹6.5 LPA",
      highestPackage: "₹38 LPA",
      recruiters: ["Google", "Microsoft", "TCS", "Wipro", "L&T"],
    },
    fees: {
      tuition: "₹25,000 per year",
      hostel: "₹45,000 per year",
    },
  },
  {
    id: 88,
    name: "S.R.M. Institute of Science and Technology",
    nirf_ranking: 29,
    routes: "srm-ist",
    categories: ["Engineering", "Technology", "Medical", "Management"],
    courses: [
      "B.Tech Computer Science",
      "B.Tech Electronics",
      "B.Tech Aerospace",
      "B.Tech Robotics",
      "M.Tech Programs"
    ],
    entranceExams: [
      {
        name: "SRMJEEE",
        description: "SRM Joint Engineering Entrance Examination",
        minPercentile: 80,
      },
      {
        name: "JEE Main",
        description: "National level engineering entrance",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Kattankulathur, Chennai - 603203",
    },
    infrastructure: {
      campus: "Modern campus with world-class facilities",
      facilities: [
        "Tech Park",
        "Research Centers",
        "Innovation Lab",
        "Central Library",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹41.6 LPA",
      recruiters: ["Amazon", "Infosys", "TCS", "Cognizant", "HCL"],
    },
    fees: {
      tuition: "₹3.75 Lakhs per year",
      hostel: "₹1.5 Lakhs per year",
    },
  },
  {
    id: 89,
    name: "Anna University",
    nirf_ranking: 16,
    routes: "anna-university",
    categories: ["Engineering", "Technology", "Research"],
    courses: [
      "B.Tech Computer Science",
      "B.Tech Electronics",
      "B.Tech Mechanical",
      "B.Tech Civil",
      "M.Tech Programs"
    ],
    entranceExams: [
      {
        name: "TNEA",
        description: "Tamil Nadu Engineering Admissions",
        minPercentile: 85,
      },
      {
        name: "GATE",
        description: "For PG admissions",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Sardar Patel Road, Guindy, Chennai - 600025",
    },
    infrastructure: {
      campus: "Historic campus with extensive facilities",
      facilities: [
        "Research Centers",
        "Central Library",
        "Knowledge Park",
        "Innovation Hub",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹6.2 LPA",
      highestPackage: "₹36 LPA",
      recruiters: ["TCS", "Infosys", "Wipro", "CTS", "HCL"],
    },
    fees: {
      tuition: "₹65,000 per year",
      hostel: "₹45,000 per year",
    },
  },
  {
    id: 90,
    name: "Indian Institute of Technology (Indian School of Mines) Dhanbad",
    nirf_ranking: 15,
    routes: "iit-ism-dhanbad",
    categories: ["Engineering", "Technology", "Mining", "Research"],
    courses: [
      "B.Tech in Mining Engineering",
      "B.Tech in Computer Science",
      "B.Tech in Petroleum Engineering",
      "B.Tech in Mineral Engineering",
      "B.Tech in Environmental Engineering",
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "National level engineering entrance",
        minPercentile: 98,
      }
    ],
    location: {
      city: "Dhanbad",
      state: "Jharkhand",
      address: "IIT (ISM) Dhanbad, Dhanbad - 826004",
    },
    infrastructure: {
      campus: "Legacy campus with modern facilities",
      facilities: [
        "Mining Labs",
        "Research Centers",
        "Advanced Computing Center",
        "Central Library",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹15 LPA",
      highestPackage: "₹50 LPA",
      recruiters: ["Shell", "Microsoft", "Coal India", "ONGC", "Schlumberger"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 91,
    name: "Indian Institute of Technology Indore",
    nirf_ranking: 17,
    routes: "iit-indore",
    categories: ["Engineering", "Technology", "Research", "Sciences"],
    courses: [
      "B.Tech in Computer Science and Engineering",
      "B.Tech in Electrical Engineering",
      "B.Tech in Mechanical Engineering",
      "B.Tech in Metallurgy",
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
      city: "Indore",
      state: "Madhya Pradesh",
      address: "IIT Indore, Simrol, Indore 453552",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Advanced",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 17,
      qsWorld: 720,
    },
    infrastructure: {
      campus: "Modern 500-acre campus",
      facilities: [
        "Research Labs",
        "Central Library",
        "Innovation Hub",
        "Sports Complex",
      ],
    },
    placement: {
      averagePackage: "₹15.2 LPA",
      highestPackage: "₹1.7 Cr",
      recruiters: ["Google", "Microsoft", "Amazon", "Intel"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 92,
    name: "National Institute of Technology Karnataka, Surathkal",
    nirf_ranking: 10,
    routes: "nitk-surathkal",
    categories: ["Engineering", "Technology", "Research"],
    courses: [
      "B.Tech Computer Science",
      "B.Tech Electronics",
      "B.Tech Mechanical",
      "B.Tech Chemical",
      "M.Tech Programs"
    ],
    entranceExams: [
      {
        name: "JEE Main",
        description: "National level engineering entrance",
        minPercentile: 95,
      }
    ],
    location: {
      city: "Surathkal",
      state: "Karnataka",
      address: "NH 66, Srinivasnagar, Surathkal, Mangalore - 575025",
    },
    infrastructure: {
      campus: "Scenic beach-side campus with modern facilities",
      facilities: [
        "Research Centers",
        "Central Library",
        "Innovation Hub",
        "Advanced Labs",
        "Beach-side Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹12.5 LPA",
      highestPackage: "₹45 LPA",
      recruiters: ["Microsoft", "Google", "Amazon", "Intel", "Goldman Sachs"],
    },
    fees: {
      tuition: "₹1.25 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 93,
    name: "Indian Institute of Technology Gandhinagar",
    nirf_ranking: 18,
    routes: "iit-gandhinagar",
    categories: ["Engineering", "Technology", "Research"],
    courses: [
      "B.Tech Computer Science",
      "B.Tech Mechanical Engineering",
      "B.Tech Chemical Engineering",
      "B.Tech Materials Engineering",
      "M.Tech Programs"
    ],
    entranceExams: [
      {
        name: "JEE Advanced",
        description: "National level engineering entrance",
        minPercentile: 98,
      }
    ],
    location: {
      city: "Gandhinagar",
      state: "Gujarat",
      address: "Palaj, Gandhinagar - 382355",
    },
    infrastructure: {
      campus: "Modern sustainable 400-acre campus",
      facilities: [
        "Research Labs",
        "Innovation Center",
        "Central Library",
        "Advanced Computing Facility",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹15.5 LPA",
      highestPackage: "₹52 LPA",
      recruiters: ["Google", "Microsoft", "Apple", "Shell", "BCG"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 94,
    name: "National Institute of Technology Rourkela",
    nirf_ranking: 19,
    routes: "nit-rourkela",
    categories: ["Engineering", "Technology", "Research"],
    courses: [
      "B.Tech Computer Science",
      "B.Tech Electronics",
      "B.Tech Mechanical",
      "B.Tech Mining",
      "M.Tech Programs"
    ],
    entranceExams: [
      {
        name: "JEE Main",
        description: "National level engineering entrance",
        minPercentile: 95,
      }
    ],
    location: {
      city: "Rourkela",
      state: "Odisha",
      address: "Sector 1, Rourkela - 769008",
    },
    infrastructure: {
      campus: "Large green campus with modern facilities",
      facilities: [
        "Research Centers",
        "Central Library",
        "Innovation Hub",
        "Technology Park",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹11 LPA",
      highestPackage: "₹45 LPA",
      recruiters: ["Microsoft", "Amazon", "TCS", "L&T", "TATA Steel"],
    },
    fees: {
      tuition: "₹1.25 Lakhs per year",
      hostel: "₹65,000 per year",
    },
  },
  {
    id: 95,
    name: "Post Graduate Institute of Medical Education and Research, Chandigarh",
    routes: "pgimer-chandigarh",
    categories: ["Medical", "Research", "Healthcare"],
    courses: [
      "MD/MS Programs",
      "DM/MCh Super Speciality",
      "MSc Medical Education",
      "PhD Programs",
      "Fellowship Programs"
    ],
    entranceExams: [
      {
        name: "PGIMER Entrance",
        description: "Institute specific entrance exam",
        minPercentile: 95,
      }
    ],
    location: {
      city: "Chandigarh",
      state: "Punjab",
      address: "Sector 12, Chandigarh 160012",
    },
    eligibility: {
      academicCriteria: "MBBS for MD/MS Programs",
      entranceRequirement: "Must qualify PGIMER Entrance",
      ageLimit: "Varies by program",
    },
    rankings: {
      nirf: 2,
      qsWorld: 401,
    },
    infrastructure: {
      campus: "Modern medical campus",
      facilities: [
        "Advanced Research Centers",
        "Specialty Clinics",
        "Digital Library",
        "Simulation Center",
        "Emergency Services"
      ],
    },
    placement: {
      averagePackage: "₹10-14 LPA (Starting salary)",
      highestPackage: "Varies by specialization",
      recruiters: ["Government Hospitals", "Private Healthcare", "Research Institutions", "Medical Universities"],
    },
    fees: {
      tuition: "₹12,000 per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 96,
    name: "Christian Medical College, Vellore",
    routes: "cmc-vellore",
    categories: ["Medical", "Research", "Healthcare"],
    courses: [
      "MBBS",
      "MD/MS Programs",
      "Super Specialty Courses",
      "BSc Nursing",
      "Allied Health Sciences"
    ],
    entranceExams: [
      {
        name: "NEET-UG",
        description: "National Eligibility cum Entrance Test",
        minPercentile: 95,
      },
      {
        name: "CMC Entrance",
        description: "Institute specific entrance exam",
        minPercentile: 90,
      }
    ],
    location: {
      city: "Vellore",
      state: "Tamil Nadu",
      address: "IDA Scudder Road, Vellore 632004",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCB in 12th standard",
      entranceRequirement: "Must qualify NEET-UG and CMC Entrance",
      ageLimit: "17-25 years",
    },
    rankings: {
      nirf: 3,
      qsWorld: 451,
    },
    infrastructure: {
      campus: "Historic medical campus",
      facilities: [
        "Tertiary Care Hospital",
        "Research Laboratories",
        "Medical Library",
        "Skill Labs",
        "Rural Service Centers"
      ],
    },
    placement: {
      averagePackage: "₹8-12 LPA (Starting salary)",
      highestPackage: "Varies by specialization",
      recruiters: ["Mission Hospitals", "Private Healthcare", "Government Institutions", "Global Health Organizations"],
    },
    fees: {
      tuition: "₹3.5 Lakhs per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 97,
    name: "Armed Forces Medical College, Pune",
    routes: "afmc-pune",
    categories: ["Medical", "Military Medicine", "Healthcare"],
    courses: [
      "MBBS",
      "MD/MS Programs",
      "DM/MCh Programs",
      "PhD in Medical Sciences",
      "Short Service Training"
    ],
    entranceExams: [
      {
        name: "NEET-UG",
        description: "National Eligibility cum Entrance Test",
        minPercentile: 95,
      },
      {
        name: "AFMC Entrance",
        description: "Institute specific entrance test",
        minPercentile: 90,
      }
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Southern Command, Pune 411040",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCB in 12th standard",
      entranceRequirement: "Must qualify NEET-UG and AFMC Entrance",
      ageLimit: "17-22 years",
    },
    rankings: {
      nirf: 4,
      qsWorld: 501,
    },
    infrastructure: {
      campus: "Military medical campus",
      facilities: [
        "Military Hospital",
        "Research Centers",
        "Specialized Labs",
        "Training Facilities",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "As per Armed Forces pay scale",
      highestPackage: "Based on rank and specialization",
      recruiters: ["Indian Armed Forces", "Military Hospitals", "Government Institutions"],
    },
    fees: {
      tuition: "₹32,000 per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 16,
    name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
    routes: "jipmer-puducherry",
    categories: ["Medical", "Research", "Healthcare"],
    courses: [
      "MBBS",
      "MD/MS Programs",
      "DM/MCh Super Speciality",
      "BSc Nursing",
      "PhD Medical Sciences"
    ],
    entranceExams: [
      {
        name: "NEET-UG",
        description: "National Eligibility cum Entrance Test",
        minPercentile: 95,
      },
      {
        name: "JIPMER MBBS",
        description: "Institute specific entrance exam",
        minPercentile: 90,
      }
    ],
    location: {
      city: "Puducherry",
      state: "Puducherry",
      address: "Dhanvantari Nagar, Puducherry 605006",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCB in 12th standard",
      entranceRequirement: "Must qualify NEET-UG",
      ageLimit: "17-25 years",
    },
    rankings: {
      nirf: 5,
      qsWorld: 551,
    },
    infrastructure: {
      campus: "Modern 195-acre campus",
      facilities: [
        "Super Specialty Block",
        "Advanced Research Labs",
        "Digital Library",
        "Simulation Center",
        "24x7 Emergency Care"
      ],
    },
    placement: {
      averagePackage: "₹10-13 LPA (Starting salary)",
      highestPackage: "Varies by specialization",
      recruiters: ["Government Hospitals", "Private Healthcare", "Research Institutions"],
    },
    fees: {
      tuition: "₹12,000 per year",
      hostel: "₹72,000 per year",
    },
  },
  {
    id: 17,
    name: "King George's Medical University",
    routes: "kgmu-lucknow",
    categories: ["Medical", "Dental", "Healthcare"],
    courses: [
      "MBBS",
      "BDS",
      "MD/MS Programs",
      "MDS Programs",
      "PhD Medical Sciences"
    ],
    entranceExams: [
      {
        name: "NEET-UG",
        description: "National Eligibility cum Entrance Test",
        minPercentile: 92,
      }
    ],
    location: {
      city: "Lucknow",
      state: "Uttar Pradesh",
      address: "Shah Mina Road, Lucknow 226003",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCB in 12th standard",
      entranceRequirement: "Must qualify NEET-UG",
      ageLimit: "17-25 years",
    },
    rankings: {
      nirf: 6,
      qsWorld: 601,
    },
    infrastructure: {
      campus: "Historic medical campus",
      facilities: [
        "Trauma Center",
        "Research Labs",
        "Central Library",
        "Skill Development Center",
        "Multi-Specialty Clinics"
      ],
    },
    placement: {
      averagePackage: "₹9-12 LPA (Starting salary)",
      highestPackage: "Varies by specialization",
      recruiters: ["Government Hospitals", "Private Clinics", "Research Centers"],
    },
    fees: {
      tuition: "₹25,000 per year",
      hostel: "₹65,000 per year",
    },
  },
  {
    id: 18,
    name: "AIIMS Bhubaneswar",
    routes: "aiims-bhubaneswar",
    categories: ["Medical", "Research", "Healthcare"],
    courses: [
      "MBBS",
      "MD/MS Programs",
      "DM/MCh Super Speciality",
      "BSc Nursing",
      "Paramedical Courses"
    ],
    entranceExams: [
      {
        name: "NEET-UG",
        description: "National Eligibility cum Entrance Test",
        minPercentile: 95,
      }
    ],
    location: {
      city: "Bhubaneswar",
      state: "Odisha",
      address: "Sijua, Patrapada, Bhubaneswar 751019",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCB in 12th standard",
      entranceRequirement: "Must qualify NEET-UG",
      ageLimit: "17-25 years",
    },
    rankings: {
      nirf: 7,
      qsWorld: 701,
    },
    infrastructure: {
      campus: "Modern 150-acre campus",
      facilities: [
        "Multi-Specialty Hospital",
        "Research Centers",
        "Digital Library",
        "Skills Lab",
        "Emergency Services"
      ],
    },
    placement: {
      averagePackage: "₹10-14 LPA (Starting salary)",
      highestPackage: "Varies by specialization",
      recruiters: ["Government Sector", "Private Hospitals", "Research Organizations"],
    },
    fees: {
      tuition: "₹6,900 per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 19,
    name: "Kasturba Medical College, Manipal",
    routes: "kmc-manipal",
    categories: ["Medical", "Research", "Healthcare"],
    courses: [
      "MBBS",
      "MD/MS Programs",
      "DM/MCh Programs",
      "MSc Medical Sciences",
      "PhD Programs"
    ],
    entranceExams: [
      {
        name: "NEET-UG",
        description: "National Eligibility cum Entrance Test",
        minPercentile: 90,
      }
    ],
    location: {
      city: "Manipal",
      state: "Karnataka",
      address: "Madhav Nagar, Manipal 576104",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCB in 12th standard",
      entranceRequirement: "Must qualify NEET-UG",
      ageLimit: "17-25 years",
    },
    rankings: {
      nirf: 8,
      qsWorld: 751,
    },
    infrastructure: {
      campus: "World-class medical campus",
      facilities: [
        "Teaching Hospital",
        "Research Labs",
        "Medical Library",
        "Clinical Skills Lab",
        "Sports Facilities"
      ],
    },
    placement: {
      averagePackage: "₹8-12 LPA (Starting salary)",
      highestPackage: "Varies by specialization",
      recruiters: ["Corporate Hospitals", "Government Sector", "Global Healthcare Organizations"],
    },
    fees: {
      tuition: "₹7.5 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 20,
    name: "National Law School of India University",
    routes: "nlsiu-bangalore",
    categories: ["Law", "Legal Studies", "Research"],
    courses: [
      "B.A. LL.B (Hons.)",
      "LL.M",
      "Master of Public Policy",
      "PhD in Law",
      "PG Diploma Programs"
    ],
    entranceExams: [
      {
        name: "CLAT",
        description: "Common Law Admission Test",
        minPercentile: 98,
      },
      {
        name: "NLAT",
        description: "NLS Admission Test",
        minPercentile: 95,
      }
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Nagarbhavi, Bangalore 560072",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in 12th standard",
      entranceRequirement: "Must qualify CLAT/NLAT",
      ageLimit: "Below 20 years for UG",
    },
    rankings: {
      nirf: 1,
      qsWorld: 251,
    },
    infrastructure: {
      campus: "23-acre green campus",
      facilities: [
        "Comprehensive Law Library",
        "Moot Court Halls",
        "Legal Aid Clinic",
        "Research Centers",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹18 LPA",
      highestPackage: "₹45 LPA",
      recruiters: ["Top Law Firms", "Corporate Legal Departments", "Judiciary", "International Organizations"],
    },
    fees: {
      tuition: "₹2.3 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 21,
    name: "National Law University, Delhi",
    routes: "nlu-delhi",
    categories: ["Law", "Legal Studies", "Research"],
    courses: [
      "B.A. LL.B (Hons.)",
      "LL.M",
      "PhD in Law",
      "PG Diploma in Law",
      "Executive Programs"
    ],
    entranceExams: [
      {
        name: "CLAT",
        description: "Common Law Admission Test",
        minPercentile: 98,
      },
      {
        name: "AILET",
        description: "All India Law Entrance Test",
        minPercentile: 95,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Sector 14, Dwarka, New Delhi 110078",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify CLAT/AILET",
      ageLimit: "Below 20 years for UG",
    },
    rankings: {
      nirf: 2,
      qsWorld: 301,
    },
    infrastructure: {
      campus: "Modern campus with state-of-the-art facilities",
      facilities: [
        "Justice T.P.S. Chawla Library",
        "Moot Court Complex",
        "Legal Aid Center",
        "Conference Halls",
        "Sports Facilities"
      ],
    },
    placement: {
      averagePackage: "₹16.5 LPA",
      highestPackage: "₹40 LPA",
      recruiters: ["Law Firms", "Corporate Houses", "PSUs", "International Organizations"],
    },
    fees: {
      tuition: "₹2.1 Lakhs per year",
      hostel: "₹1 Lakh per year",
    },
  },
  {
    id: 22,
    name: "NALSAR University of Law",
    routes: "nalsar-hyderabad",
    categories: ["Law", "Legal Studies", "Research"],
    courses: [
      "B.A. LL.B (Hons.)",
      "LL.M",
      "MBA in Legal Management",
      "PhD in Law",
      "PG Diploma Programs"
    ],
    entranceExams: [
      {
        name: "CLAT",
        description: "Common Law Admission Test",
        minPercentile: 97,
      }
    ],
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Justice City, Shameerpet, Hyderabad 500101",
    },
    eligibility: {
      academicCriteria: "Minimum 45% in 12th standard",
      entranceRequirement: "Must qualify CLAT",
      ageLimit: "Below 20 years for UG",
    },
    rankings: {
      nirf: 3,
      qsWorld: 401,
    },
    infrastructure: {
      campus: "Sprawling 55-acre campus",
      facilities: [
        "Extensive Law Library",
        "Moot Court Hall",
        "Legal Aid Clinic",
        "Research Centers",
        "Indoor Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹15 LPA",
      highestPackage: "₹35 LPA",
      recruiters: ["Top Law Firms", "Corporate Legal Teams", "Government Organizations"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹1.1 Lakhs per year",
    },
  },
  {
    id: 23,
    name: "West Bengal National University of Juridical Sciences",
    routes: "nujs-kolkata",
    categories: ["Law", "Legal Studies", "Research"],
    courses: [
      "B.A. LL.B (Hons.)",
      "LL.M",
      "PhD in Law",
      "Diploma in Business Laws",
      "Certificate Courses"
    ],
    entranceExams: [
      {
        name: "CLAT",
        description: "Common Law Admission Test",
        minPercentile: 96,
      }
    ],
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "12 LB Block, Salt Lake City, Kolkata 700098",
    },
    eligibility: {
      academicCriteria: "Minimum 45% in 12th standard",
      entranceRequirement: "Must qualify CLAT",
      ageLimit: "Below 20 years for UG",
    },
    rankings: {
      nirf: 4,
      qsWorld: 451,
    },
    infrastructure: {
      campus: "Modern urban campus",
      facilities: [
        "Digital Law Library",
        "Moot Court Complex",
        "Legal Aid Clinic",
        "Conference Center",
        "Sports Facilities"
      ],
    },
    placement: {
      averagePackage: "₹14.5 LPA",
      highestPackage: "₹32 LPA",
      recruiters: ["Law Firms", "Corporate Houses", "Legal Startups", "Government Bodies"],
    },
    fees: {
      tuition: "₹2 Lakhs per year",
      hostel: "₹90,000 per year",
    },
  },
  {
    id: 24,
    name: "Indian Institute of Management Ahmedabad",
    routes: "iim-ahmedabad",
    categories: ["Management", "Business", "Research"],
    courses: [
      "Post Graduate Programme (PGP)",
      "PGP-FABM (Food & Agri-Business)",
      "Executive MBA",
      "PhD Programme",
      "Executive Education"
    ],
    entranceExams: [
      {
        name: "CAT",
        description: "Common Admission Test",
        minPercentile: 99,
      }
    ],
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Vastrapur, Ahmedabad 380015",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in Bachelor's degree",
      entranceRequirement: "Must qualify CAT with high percentile",
      workExperience: "Preferred but not mandatory",
    },
    rankings: {
      nirf: 1,
      qsWorld: 37,
    },
    infrastructure: {
      campus: "Historic 67-acre campus",
      facilities: [
        "Harvard-style classrooms",
        "World-class Library",
        "Case Study Rooms",
        "Management Development Centre",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹32 LPA",
      highestPackage: "₹1.2 Cr",
      recruiters: ["McKinsey", "BCG", "Goldman Sachs", "Google", "Microsoft"],
    },
    fees: {
      tuition: "₹23 Lakhs (2 years)",
      hostel: "₹1.8 Lakhs per year",
    },
  },
  {
    id: 25,
    name: "Indian Institute of Management Bangalore",
    routes: "iim-bangalore",
    categories: ["Management", "Business", "Research"],
    courses: [
      "Post Graduate Programme in Management",
      "Executive Post Graduate Programme",
      "PhD Programme",
      "Executive Education",
      "Digital Business"
    ],
    entranceExams: [
      {
        name: "CAT",
        description: "Common Admission Test",
        minPercentile: 98,
      }
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Bannerghatta Road, Bangalore 560076",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in Bachelor's degree",
      entranceRequirement: "Must qualify CAT with high percentile",
      workExperience: "Preferred but not mandatory",
    },
    rankings: {
      nirf: 2,
      qsWorld: 45,
    },
    infrastructure: {
      campus: "Modern 100-acre green campus",
      facilities: [
        "Smart Classrooms",
        "Research Centers",
        "Innovation Lab",
        "Digital Library",
        "Executive Training Center"
      ],
    },
    placement: {
      averagePackage: "₹29.5 LPA",
      highestPackage: "₹1 Cr",
      recruiters: ["Amazon", "Microsoft", "Bain & Co", "JP Morgan", "Google"],
    },
    fees: {
      tuition: "₹22 Lakhs (2 years)",
      hostel: "₹1.6 Lakhs per year",
    },
  },
  {
    id: 26,
    name: "Indian Institute of Management Calcutta",
    routes: "iim-calcutta",
    categories: ["Management", "Business", "Research"],
    courses: [
      "Post Graduate Programme in Management",
      "Executive MBA",
      "PhD Programme",
      "Business Analytics",
      "Executive Education"
    ],
    entranceExams: [
      {
        name: "CAT",
        description: "Common Admission Test",
        minPercentile: 98,
      }
    ],
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "Diamond Harbour Road, Joka, Kolkata 700104",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in Bachelor's degree",
      entranceRequirement: "Must qualify CAT with high percentile",
      workExperience: "Preferred but not mandatory",
    },
    rankings: {
      nirf: 3,
      qsWorld: 51,
    },
    infrastructure: {
      campus: "135-acre lake-side campus",
      facilities: [
        "Financial Research Lab",
        "Management Library",
        "Analytics Center",
        "Auditorium",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹28 LPA",
      highestPackage: "₹90 LPA",
      recruiters: ["BCG", "McKinsey", "Goldman Sachs", "Amazon", "Microsoft"],
    },
    fees: {
      tuition: "₹21 Lakhs (2 years)",
      hostel: "₹1.5 Lakhs per year",
    },
  },
  {
    id: 27,
    name: "XLRI - Xavier School of Management",
    routes: "xlri-jamshedpur",
    categories: ["Management", "Business", "HR"],
    courses: [
      "Post Graduate Programme in Management - HRM",
      "Post Graduate Programme in Management - BM",
      "Executive MBA",
      "PhD Programme",
      "Global MBA"
    ],
    entranceExams: [
      {
        name: "XAT",
        description: "Xavier Aptitude Test",
        minPercentile: 95,
      },
      {
        name: "GMAT",
        description: "Graduate Management Admission Test",
        minPercentile: 90,
      }
    ],
    location: {
      city: "Jamshedpur",
      state: "Jharkhand",
      address: "Circuit House Area, Jamshedpur 831001",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in Bachelor's degree",
      entranceRequirement: "Must qualify XAT/GMAT",
      workExperience: "Preferred but not mandatory",
    },
    rankings: {
      nirf: 4,
      qsWorld: 251,
    },
    infrastructure: {
      campus: "Modern 50-acre campus",
      facilities: [
        "International Center",
        "HR Learning Center",
        "Digital Library",
        "Bloomberg Lab",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹25.5 LPA",
      highestPackage: "₹75 LPA",
      recruiters: ["Microsoft", "Amazon", "ITC", "P&G", "HUL"],
    },
    fees: {
      tuition: "₹23.5 Lakhs (2 years)",
      hostel: "₹1.4 Lakhs per year",
    },
  }
  ,{
    id: 28,
    name: "Shri Ram College of Commerce",
    routes: "srcc-delhi",
    categories: ["Commerce", "Economics", "Business"],
    courses: [
      "B.Com (Hons)",
      "B.A. Economics (Hons)",
      "M.Com",
      "Global Business Operations",
      "Professional Courses"
    ],
    entranceExams: [
      {
        name: "CUET",
        description: "Common University Entrance Test",
        minPercentile: 98,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Maurice Nagar, University of Delhi, Delhi 110007",
    },
    eligibility: {
      academicCriteria: "Minimum 95% in 12th standard",
      entranceRequirement: "Must qualify CUET",
      subjects: "Mathematics/Business Mathematics in 12th",
    },
    rankings: {
      nirf: 1,
      naac: "A++",
    },
    infrastructure: {
      campus: "Premium college in North Campus",
      facilities: [
        "Research Center",
        "Commerce Lab",
        "Digital Library",
        "Seminar Halls",
        "Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹9.5 LPA",
      highestPackage: "₹31 LPA",
      recruiters: ["Deloitte", "PwC", "EY", "KPMG", "Goldman Sachs"],
    },
    fees: {
      tuition: "₹25,000 per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 29,
    name: "St. Xavier's College",
    routes: "st-xaviers-kolkata",
    categories: ["Commerce", "Business", "Economics"],
    courses: [
      "B.Com (Hons)",
      "B.Com Morning",
      "M.Com",
      "BBA",
      "Professional Studies"
    ],
    entranceExams: [
      {
        name: "SXCCAT",
        description: "St. Xavier's College Admission Test",
        minPercentile: 90,
      }
    ],
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "30, Mother Teresa Sarani, Kolkata 700016",
    },
    eligibility: {
      academicCriteria: "Minimum 85% in 12th standard",
      entranceRequirement: "Must qualify SXCCAT",
      subjects: "Commerce/Mathematics in 12th",
    },
    rankings: {
      nirf: 2,
      naac: "A++",
    },
    infrastructure: {
      campus: "Heritage campus with modern facilities",
      facilities: [
        "Commerce Block",
        "Computer Labs",
        "Central Library",
        "Auditorium",
        "Sports Facilities"
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["PwC", "Deloitte", "JP Morgan", "HSBC", "EY"],
    },
    fees: {
      tuition: "₹35,000 per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 30,
    name: "Loyola College",
    routes: "loyola-chennai",
    categories: ["Commerce", "Business", "Economics"],
    courses: [
      "B.Com (Hons)",
      "B.Com Corporate Secretaryship",
      "M.Com",
      "Professional Accounting",
      "Business Analytics"
    ],
    entranceExams: [
      {
        name: "Loyola Entrance Test",
        description: "College specific entrance exam",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Sterling Road, Nungambakkam, Chennai 600034",
    },
    eligibility: {
      academicCriteria: "Minimum 80% in 12th standard",
      entranceRequirement: "Must qualify Loyola Entrance Test",
      subjects: "Commerce/Accountancy in 12th",
    },
    rankings: {
      nirf: 3,
      naac: "A++",
    },
    infrastructure: {
      campus: "Sprawling green campus",
      facilities: [
        "Commerce Department Block",
        "Digital Library",
        "Computer Centers",
        "Placement Cell",
        "Sports Grounds"
      ],
    },
    placement: {
      averagePackage: "₹7.5 LPA",
      highestPackage: "₹22 LPA",
      recruiters: ["Deloitte", "TCS", "Accenture", "KPMG", "HCL"],
    },
    fees: {
      tuition: "₹45,000 per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 31,
    name: "Christ University",
    routes: "christ-bangalore",
    categories: ["Commerce", "Business", "Economics"],
    courses: [
      "B.Com (Hons)",
      "B.Com Finance & Analytics",
      "B.Com Professional",
      "M.Com",
      "Integrated Commerce Programs"
    ],
    entranceExams: [
      {
        name: "CUET",
        description: "Christ University Entrance Test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Hosur Road, Bangalore 560029",
    },
    eligibility: {
      academicCriteria: "Minimum 75% in 12th standard",
      entranceRequirement: "Must qualify CUET",
      subjects: "Any stream with Mathematics",
    },
    rankings: {
      nirf: 4,
      naac: "A+",
    },
    infrastructure: {
      campus: "Modern multi-building campus",
      facilities: [
        "Bloomberg Lab",
        "Commerce Block",
        "Research Center",
        "Digital Library",
        "Indoor Sports Complex"
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹20 LPA",
      recruiters: ["EY", "KPMG", "Goldman Sachs", "Morgan Stanley", "Deutsche Bank"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹1 Lakh per year",
    },
  },
  {
    id: 32,
    name: "Indian Institute of Technology Roorkee - Department of Architecture",
    routes: "iit-roorkee-architecture",
    categories: ["Architecture", "Planning", "Design"],
    courses: [
      "Bachelor of Architecture",
      "Master of Architecture",
      "Master in Urban and Rural Planning",
      "PhD in Architecture",
      "Integrated Design Programs"
    ],
    entranceExams: [
      {
        name: "JEE Main Paper 2",
        description: "Architecture Aptitude Test",
        minPercentile: 95,
      }
    ],
    location: {
      city: "Roorkee",
      state: "Uttarakhand",
      address: "IIT Roorkee, Roorkee 247667",
    },
    eligibility: {
      academicCriteria: "Minimum 60% in PCM in 12th standard",
      entranceRequirement: "Must qualify JEE Main Paper 2",
      subjects: "Mathematics mandatory in 12th",
    },
    rankings: {
      nirf: 2,
      naac: "A++",
    },
    infrastructure: {
      campus: "Historic campus with modern architecture facilities",
      facilities: [
        "Advanced Design Studios",
        "Building Science Lab",
        "CAD Center",
        "Material Testing Lab",
        "Environmental Lab"
      ],
    },
    placement: {
      averagePackage: "₹9 LPA",
      highestPackage: "₹20 LPA",
      recruiters: ["Gensler", "HOK", "Aedas", "Top Architecture Firms"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 33,
    name: "Centre for Environmental Planning and Technology University",
    routes: "cept-ahmedabad",
    categories: ["Architecture", "Planning", "Design"],
    courses: [
      "Bachelor of Architecture",
      "Master of Architecture",
      "Urban Planning",
      "Interior Design",
      "Landscape Architecture"
    ],
    entranceExams: [
      {
        name: "CEPT Entrance Exam",
        description: "University specific entrance test",
        minPercentile: 85,
      },
      {
        name: "NATA",
        description: "National Aptitude Test in Architecture",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Kasturbhai Lalbhai Campus, University Road, Ahmedabad 380009",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify CEPT Entrance/NATA",
      subjects: "Mathematics in 12th",
    },
    rankings: {
      nirf: 3,
      naac: "A+",
    },
    infrastructure: {
      campus: "Iconic architecture campus",
      facilities: [
        "Design Studios",
        "Workshop",
        "Archives",
        "Research Center",
        "Exhibition Spaces"
      ],
    },
    placement: {
      averagePackage: "₹7.5 LPA",
      highestPackage: "₹16 LPA",
      recruiters: ["Leading Architecture Firms", "Urban Planning Consultancies", "Real Estate Developers"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹1 Lakh per year",
    },
  },
  {
    id: 34,
    name: "Sir J.J. College of Architecture",
    routes: "jj-architecture-mumbai",
    categories: ["Architecture", "Design"],
    courses: [
      "Bachelor of Architecture",
      "Master of Architecture",
      "Diploma in Architecture",
      "Conservation Studies",
      "Urban Design"
    ],
    entranceExams: [
      {
        name: "NATA",
        description: "National Aptitude Test in Architecture",
        minPercentile: 80,
      },
      {
        name: "MH-AAC-CET",
        description: "State Architecture Entrance",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "78/3, Dr DN Road, Fort, Mumbai 400001",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify NATA/MH-AAC-CET",
      subjects: "Mathematics mandatory in 12th",
    },
    rankings: {
      nirf: 4,
      naac: "A",
    },
    infrastructure: {
      campus: "Heritage campus in South Mumbai",
      facilities: [
        "Traditional Studios",
        "Model Making Workshop",
        "Material Library",
        "Computer Lab",
        "Exhibition Hall"
      ],
    },
    placement: {
      averagePackage: "₹6.5 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Top Architecture Firms", "Construction Companies", "Design Studios"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 36,
    name: "Indian Institute of Mass Communication",
    routes: "iimc-delhi",
    categories: [
      "Print Media & Journalism",
      "Broadcast Journalism",
      "Digital Media",
      "Advertising & PR",
      "Development Communication"
    ],
    communicationType: {
      print: ["Newspaper Journalism", "Magazine Writing", "Editorial Management"],
      broadcast: ["Television Production", "Radio Broadcasting", "News Anchoring"],
      digital: ["Online Journalism", "Social Media Management", "Content Strategy"],
      corporate: ["Public Relations", "Corporate Communications", "Brand Management"],
      development: ["Rural Communication", "Social Change Communication", "NGO Communication"]
    },
    courses: [
      "PG Diploma in English Journalism",
      "PG Diploma in Hindi Journalism",
      "PG Diploma in Radio & TV Journalism",
      "PG Diploma in Advertising & PR",
      "PG Diploma in Digital Media"
    ],
    specializations: [
      "News Writing & Reporting",
      "Television Production",
      "Digital Content Creation",
      "Strategic Communication",
      "Media Research"
    ],
    entranceExams: [
      {
        name: "IIMC Entrance Exam",
        description: "Institute's own entrance test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Aruna Asaf Ali Marg, JNU New Campus, New Delhi 110067",
    },
    eligibility: {
      academicCriteria: "Bachelor's degree in any discipline",
      entranceRequirement: "Must qualify IIMC Entrance",
      languages: "Proficiency in English/Hindi",
      skillsRequired: ["Writing", "Critical Thinking", "Media Understanding"]
    },
    rankings: {
      nirf: 1,
      industryRanking: "Top Media Institute",
    },
    infrastructure: {
      campus: "Modern media-focused campus",
      facilities: [
        "TV Studios",
        "Radio Station",
        "Digital Media Lab",
        "Media Library",
        "Editing Suites"
      ],
      specializedLabs: [
        "News Production Studio",
        "Digital Content Lab",
        "Audio Recording Studio",
        "Virtual Reality Lab",
        "Media Research Center"
      ]
    },
    industryConnections: {
      mediaPartners: ["Times Group", "NDTV", "Hindustan Times"],
      internshipPartners: ["Major News Channels", "PR Firms", "Digital Media Houses"],
      workshopProviders: ["Industry Experts", "Senior Journalists", "Media Professionals"]
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Times Group", "NDTV", "India Today", "Republic TV", "Network18"],
      careerPaths: [
        "News Reporter",
        "Content Strategist",
        "PR Manager",
        "Digital Media Manager",
        "Communication Consultant"
      ]
    },
    fees: {
      tuition: "₹1.45 Lakhs per year",
      hostel: "₹70,000 per year",
      additionalCosts: {
        equipmentCharges: "₹25,000",
        softwareLicenses: "₹15,000",
        fieldVisits: "₹10,000"
      }
    },
    researchFocus: [
      "Media Studies",
      "Communication Theory",
      "Digital Transformation",
      "Rural Communication",
      "Media Ethics"
    ]
  },
  {
    id: 37,
    name: "Symbiosis Institute of Media & Communication",
    routes: "simc-pune",
    categories: ["Mass Communication", "Media", "Journalism"],
    courses: [
      "MBA (Communication Management)",
      "MA (Mass Communication)",
      "BA (Mass Communication)",
      "PG Diploma in Media Studies",
      "Digital Communication"
    ],
    entranceExams: [
      {
        name: "SNAP",
        description: "Symbiosis National Aptitude Test",
        minPercentile: 85,
      },
      {
        name: "SIMC Entrance Test",
        description: "Institute specific test",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Viman Nagar Campus, Pune 411014",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in graduation",
      entranceRequirement: "Must qualify SNAP & SIMC Test",
      workExperience: "Preferred for MBA program",
    },
    rankings: {
      nirf: 2,
      industryRanking: "Top Private Media Institute",
    },
    infrastructure: {
      campus: "State-of-the-art media campus",
      facilities: [
        "Broadcast Studio",
        "Mac Lab",
        "Media Center",
        "Audio Studio",
        "Production House"
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Star India", "Sony", "Ogilvy", "JWT", "Google"],
    },
    fees: {
      tuition: "₹4.5 Lakhs per year",
      hostel: "₹1.8 Lakhs per year",
    },
  },
  {
    id: 38,
    name: "AJK Mass Communication Research Centre, Jamia",
    routes: "ajk-mcrc-jamia",
    categories: ["Mass Communication", "Media", "Film"],
    courses: [
      "MA Mass Communication",
      "MA Convergent Journalism",
      "PG Diploma in Development Communication",
      "MA Visual Effects & Animation",
      "PhD Program"
    ],
    entranceExams: [
      {
        name: "JAMIA Entrance Test",
        description: "University's entrance exam",
        minPercentile: 80,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Jamia Millia Islamia, New Delhi 110025",
    },
    eligibility: {
      academicCriteria: "Bachelor's degree with 50%",
      entranceRequirement: "Must qualify entrance test",
      languages: "English proficiency required",
    },
    rankings: {
      nirf: 3,
      naac: "A++",
    },
    infrastructure: {
      campus: "Specialized media center",
      facilities: [
        "Film Studio",
        "Edit Suites",
        "Sound Recording Studio",
        "Community Radio",
        "Animation Lab"
      ],
    },
    placement: {
      averagePackage: "₹5.5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["BBC", "Al Jazeera", "Reuters", "PTI", "Major News Channels"],
    },
    fees: {
      tuition: "₹85,000 per year",
      hostel: "₹65,000 per year",
    },
  },
  {
    id: 39,
    name: "Xavier Institute of Communications",
    routes: "xic-mumbai",
    categories: ["Mass Communication", "Media", "Advertising"],
    courses: [
      "Post Graduate Diploma in Communications",
      "Mass Media",
      "Advertising & Marketing",
      "Public Relations",
      "Digital Media Management"
    ],
    entranceExams: [
      {
        name: "XIC Entrance Test",
        description: "Institute's entrance exam",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "St. Xavier's College, 5, Mahapalika Marg, Mumbai 400001",
    },
    eligibility: {
      academicCriteria: "Graduate in any discipline",
      entranceRequirement: "Must qualify XIC entrance",
      languages: "English proficiency mandatory",
    },
    rankings: {
      nirf: 4,
      industryRanking: "Top Media School",
    },
    infrastructure: {
      campus: "Industry-integrated campus",
      facilities: [
        "Media Studios",
        "Digital Lab",
        "Audio-Visual Room",
        "Edit Bay",
        "Preview Theatre"
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["Ad Agencies", "PR Firms", "Media Houses", "Digital Platforms"],
    },
    fees: {
      tuition: "₹2.8 Lakhs per year",
      hostel: "Not Available",
    },
  },
  {
    id: 40,
    name: "Indian Agricultural Research Institute (IARI)",
    routes: "iari-delhi",
    categories: ["Agriculture", "Research", "Agricultural Sciences"],
    courses: [
      "M.Sc. Agriculture",
      "Ph.D. in Agricultural Sciences",
      "Post Graduate School Programs",
      "Agricultural Engineering",
      "Plant Protection"
    ],
    specializations: [
      "Genetics and Plant Breeding",
      "Soil Science and Agricultural Chemistry",
      "Plant Pathology",
      "Agricultural Economics",
      "Agronomy"
    ],
    entranceExams: [
      {
        name: "ICAR AIEEA-PG",
        description: "All India Entrance Examination for Admission",
        minPercentile: 90,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Pusa Campus, New Delhi 110012",
    },
    eligibility: {
      academicCriteria: "Bachelor's degree in Agriculture/related field",
      entranceRequirement: "Must qualify ICAR AIEEA",
      minPercentage: "60% in graduation",
    },
    rankings: {
      nirf: 1,
      icarRanking: "Premier Institute",
    },
    infrastructure: {
      campus: "1000+ acre research farm",
      facilities: [
        "Advanced Research Labs",
        "Experimental Fields",
        "Gene Bank",
        "Automated Greenhouses",
        "Soil Testing Labs"
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Agricultural Universities", "Research Institutes", "Agri-business Companies", "Government Sector"],
    },
    fees: {
      tuition: "₹50,000 per year",
      hostel: "₹45,000 per year",
    },
  },
  {
    id: 41,
    name: "Punjab Agricultural University",
    routes: "pau-ludhiana",
    categories: ["Agriculture", "Horticulture", "Forestry"],
    courses: [
      "B.Sc. Agriculture",
      "M.Sc. Agriculture",
      "Ph.D. Programs",
      "Agricultural Biotechnology",
      "Food Science & Technology"
    ],
    specializations: [
      "Crop Improvement",
      "Agricultural Engineering",
      "Food Technology",
      "Plant Protection",
      "Agricultural Extension"
    ],
    entranceExams: [
      {
        name: "PAU CET",
        description: "University's entrance test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Ludhiana",
      state: "Punjab",
      address: "Ferozepur Road, Ludhiana 141004",
    },
    eligibility: {
      academicCriteria: "10+2 with PCM/PCB for UG",
      entranceRequirement: "Must qualify PAU CET",
      minPercentage: "50% in qualifying exam",
    },
    rankings: {
      nirf: 2,
      icarRanking: "Top Agricultural University",
    },
    infrastructure: {
      campus: "1510-acre green campus",
      facilities: [
        "Research Farms",
        "Modern Labs",
        "Agricultural Museum",
        "Seed Testing Lab",
        "Weather Station"
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Agri-corporations", "Research Organizations", "Government Departments"],
    },
    fees: {
      tuition: "₹45,000 per year",
      hostel: "₹40,000 per year",
    },
  },
  {
    id: 42,
    name: "G.B. Pant University of Agriculture & Technology",
    routes: "gbpuat-pantnagar",
    categories: ["Agriculture", "Technology", "Veterinary Sciences"],
    courses: [
      "B.Sc. Agriculture",
      "B.Tech Agricultural Engineering",
      "M.Sc. Agriculture",
      "Ph.D. Programs",
      "Veterinary Sciences"
    ],
    specializations: [
      "Agricultural Sciences",
      "Veterinary Medicine",
      "Agricultural Engineering",
      "Fishery Sciences",
      "Home Science"
    ],
    entranceExams: [
      {
        name: "ICAR AIEEA",
        description: "National level entrance",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Pantnagar",
      state: "Uttarakhand",
      address: "Pantnagar, Udham Singh Nagar 263145",
    },
    eligibility: {
      academicCriteria: "10+2 with PCM/PCB",
      entranceRequirement: "ICAR AIEEA qualification",
      minPercentage: "55% in qualifying exam",
    },
    rankings: {
      nirf: 3,
      icarRanking: "Leading Agricultural Institution",
    },
    infrastructure: {
      campus: "10,000-acre campus",
      facilities: [
        "Experimental Farms",
        "Research Centers",
        "Dairy Farm",
        "Veterinary Hospital",
        "Agricultural Engineering Workshop"
      ],
    },
    placement: {
      averagePackage: "₹5.5 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["Agricultural Companies", "Research Institutes", "Government Sector"],
    },
    fees: {
      tuition: "₹55,000 per year",
      hostel: "₹42,000 per year",
    },
  },
  {
    id: 43,
    name: "Tamil Nadu Agricultural University",
    routes: "tnau-coimbatore",
    categories: ["Agriculture", "Horticulture", "Agricultural Engineering"],
    courses: [
      "B.Sc. Agriculture",
      "B.Tech Agricultural Engineering",
      "M.Sc. Agriculture",
      "Ph.D. Programs",
      "Diploma in Agriculture"
    ],
    specializations: [
      "Crop Production",
      "Plant Breeding",
      "Agricultural Economics",
      "Soil Science",
      "Plant Protection"
    ],
    entranceExams: [
      {
        name: "TNAU Entrance",
        description: "University entrance exam",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Coimbatore",
      state: "Tamil Nadu",
      address: "Lawley Road, Coimbatore 641003",
    },
    eligibility: {
      academicCriteria: "10+2 with Biology/Mathematics",
      entranceRequirement: "TNAU entrance qualification",
      minPercentage: "60% in qualifying exam",
    },
    rankings: {
      nirf: 4,
      icarRanking: "Top Southern Agricultural University",
    },
    infrastructure: {
      campus: "1000-acre research campus",
      facilities: [
        "Research Stations",
        "Model Farms",
        "Biotechnology Center",
        "Agricultural Engineering Labs",
        "Seed Processing Unit"
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹9 LPA",
      recruiters: ["Agri-business Companies", "Research Organizations", "State Agricultural Departments"],
    },
    fees: {
      tuition: "₹40,000 per year",
      hostel: "₹35,000 per year",
    },
  },
  {
    id: 44,
    name: "National Institute of Pharmaceutical Education and Research (NIPER)",
    routes: "niper-mohali",
    categories: ["Pharmacy", "Pharmaceutical Sciences", "Drug Research"],
    courses: [
      "M.Pharm",
      "M.S. (Pharm.)",
      "M.Tech (Pharm.)",
      "Ph.D in Pharmaceutical Sciences",
      "MBA (Pharm.)"
    ],
    specializations: [
      "Medicinal Chemistry",
      "Pharmaceutics",
      "Pharmacology",
      "Drug Discovery",
      "Clinical Research"
    ],
    entranceExams: [
      {
        name: "NIPER JEE",
        description: "Joint Entrance Examination",
        minPercentile: 90,
      }
    ],
    location: {
      city: "Mohali",
      state: "Punjab",
      address: "Sector 67, SAS Nagar, Mohali 160062",
    },
    eligibility: {
      academicCriteria: "B.Pharm with minimum 60%",
      entranceRequirement: "Must qualify NIPER JEE",
      workExperience: "Not mandatory",
    },
    rankings: {
      nirf: 1,
      naac: "A++",
    },
    infrastructure: {
      campus: "Modern research-oriented campus",
      facilities: [
        "Advanced Research Labs",
        "Drug Testing Center",
        "Central Instrumentation Lab",
        "Medicinal Plants Garden",
        "GMP Facility"
      ],
    },
    placement: {
      averagePackage: "₹8.5 LPA",
      highestPackage: "₹16 LPA",
      recruiters: ["Sun Pharma", "Dr. Reddy's", "Cipla", "GSK", "Pfizer"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹72,000 per year",
    },
  },
  {
    id: 45,
    name: "Institute of Chemical Technology (ICT Mumbai)",
    routes: "ict-mumbai",
    categories: ["Pharmacy", "Chemical Technology", "Pharmaceutical Technology"],
    courses: [
      "B.Pharm Tech",
      "M.Pharm",
      "M.Tech Pharmaceutical Technology",
      "Ph.D Programs",
      "Integrated M.Tech"
    ],
    specializations: [
      "Pharmaceutical Technology",
      "Industrial Pharmacy",
      "Pharmaceutical Chemistry",
      "Quality Assurance",
      "Drug Regulatory Affairs"
    ],
    entranceExams: [
      {
        name: "GPAT",
        description: "Graduate Pharmacy Aptitude Test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Nathalal Parekh Marg, Matunga, Mumbai 400019",
    },
    eligibility: {
      academicCriteria: "12th PCM/PCB with 60%",
      entranceRequirement: "GPAT/State CET",
      languages: "English proficiency required",
    },
    rankings: {
      nirf: 2,
      naac: "A++",
    },
    infrastructure: {
      campus: "State-of-the-art facilities",
      facilities: [
        "Pilot Plant Facility",
        "Research Laboratories",
        "Analytical Center",
        "Drug Development Lab",
        "Industrial Training Center"
      ],
    },
    placement: {
      averagePackage: "₹7.5 LPA",
      highestPackage: "₹14 LPA",
      recruiters: ["Johnson & Johnson", "Lupin", "Abbott", "AstraZeneca", "Novartis"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 46,
    name: "Jamia Hamdard",
    routes: "jamia-hamdard",
    categories: ["Pharmacy", "Healthcare", "Medical Sciences"],
    courses: [
      "B.Pharm",
      "M.Pharm",
      "Pharm.D",
      "Ph.D in Pharmacy",
      "D.Pharm"
    ],
    specializations: [
      "Clinical Pharmacy",
      "Pharmaceutics",
      "Pharmacology",
      "Quality Assurance",
      "Pharmaceutical Analysis"
    ],
    entranceExams: [
      {
        name: "GPAT",
        description: "Graduate Pharmacy Aptitude Test",
        minPercentile: 80,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Hamdard Nagar, New Delhi 110062",
    },
    eligibility: {
      academicCriteria: "12th PCB/PCM with 55%",
      entranceRequirement: "GPAT for PG courses",
      languages: "English medium instruction",
    },
    rankings: {
      nirf: 3,
      naac: "A",
    },
    infrastructure: {
      campus: "100-acre green campus",
      facilities: [
        "Modern Laboratories",
        "Herbal Garden",
        "Central Library",
        "Research Centers",
        "Computer Labs"
      ],
    },
    placement: {
      averagePackage: "₹6.5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Ranbaxy", "Biocon", "Mankind", "Zydus", "Glenmark"],
    },
    fees: {
      tuition: "₹1.8 Lakhs per year",
      hostel: "₹80,000 per year",
    },
  },
  {
    id: 47,
    name: "Manipal College of Pharmaceutical Sciences",
    routes: "mcops-manipal",
    categories: ["Pharmacy", "Pharmaceutical Sciences", "Healthcare"],
    courses: [
      "B.Pharm",
      "M.Pharm",
      "Pharm.D",
      "Ph.D Programs",
      "Certificate Courses"
    ],
    specializations: [
      "Industrial Pharmacy",
      "Pharmaceutical Quality Assurance",
      "Pharmaceutical Biotechnology",
      "Regulatory Affairs",
      "Clinical Research"
    ],
    entranceExams: [
      {
        name: "MU OET",
        description: "Manipal University Online Entrance Test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Manipal",
      state: "Karnataka",
      address: "MAHE, Madhav Nagar, Manipal 576104",
    },
    eligibility: {
      academicCriteria: "12th PCB/PCM with 60%",
      entranceRequirement: "MU OET/GPAT",
      languages: "English proficiency required",
    },
    rankings: {
      nirf: 4,
      naac: "A++",
    },
    infrastructure: {
      campus: "Modern campus with advanced facilities",
      facilities: [
        "Research Labs",
        "Drug Information Center",
        "Sophisticated Instrument Facility",
        "Industrial Pharmacy Lab",
        "Clinical Trial Center"
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Novartis", "GSK", "Cipla", "Sanofi", "Merck"],
    },
    fees: {
      tuition: "₹3.5 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 48,
    name: "Bombay College of Pharmacy",
    routes: "bcp-mumbai",
    categories: ["Pharmacy", "Pharmaceutical Sciences", "Research"],
    courses: [
      "B.Pharm",
      "M.Pharm",
      "Ph.D in Pharmaceutical Sciences",
      "PG Diploma in Pharmaceutical Management",
      "Certificate Programs"
    ],
    specializations: [
      "Pharmaceutics",
      "Pharmaceutical Chemistry",
      "Pharmacology",
      "Quality Assurance",
      "Drug Regulatory Affairs"
    ],
    entranceExams: [
      {
        name: "MHT-CET",
        description: "Maharashtra Common Entrance Test",
        minPercentile: 90,
      },
      {
        name: "GPAT",
        description: "Graduate Pharmacy Aptitude Test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Kalina, Santacruz East, Mumbai 400098",
    },
    eligibility: {
      academicCriteria: "12th PCM/PCB with 60%",
      entranceRequirement: "MHT-CET/GPAT",
      languages: "English proficiency required",
    },
    rankings: {
      nirf: 5,
      naac: "A+",
    },
    infrastructure: {
      campus: "Modern pharmaceutical campus",
      facilities: [
        "Advanced Research Labs",
        "Pilot Plant Facility",
        "Instrument Room",
        "Machine Room",
        "Pharmaceutical Museum"
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹14 LPA",
      recruiters: ["Cipla", "Sun Pharma", "Lupin", "Abbott", "GSK"],
    },
    fees: {
      tuition: "₹1.3 Lakhs per year",
      hostel: "₹90,000 per year",
    },
  },
  {
    id: 49,
    name: "JSS College of Pharmacy",
    routes: "jsscpm-mysore",
    categories: ["Pharmacy", "Clinical Research", "Healthcare"],
    courses: [
      "B.Pharm",
      "M.Pharm",
      "Pharm.D",
      "Ph.D Programs",
      "Clinical Research Programs"
    ],
    specializations: [
      "Clinical Pharmacy",
      "Pharmaceutical Analysis",
      "Pharmacognosy",
      "Industrial Pharmacy",
      "Pharmaceutical Biotechnology"
    ],
    entranceExams: [
      {
        name: "KCET",
        description: "Karnataka Common Entrance Test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Mysore",
      state: "Karnataka",
      address: "Sri Shivarathreeshwara Nagar, Mysuru 570015",
    },
    eligibility: {
      academicCriteria: "12th PCB/PCM with 55%",
      entranceRequirement: "KCET/GPAT",
      languages: "English medium instruction",
    },
    rankings: {
      nirf: 6,
      naac: "A",
    },
    infrastructure: {
      campus: "Sprawling campus with modern facilities",
      facilities: [
        "Drug Testing Lab",
        "Herbal Garden",
        "Clinical Research Center",
        "Central Instrumentation Facility",
        "Digital Library"
      ],
    },
    placement: {
      averagePackage: "₹6.5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Biocon", "Astra Zeneca", "Novartis", "Dr. Reddy's", "Mylan"],
    },
    fees: {
      tuition: "₹2 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 50,
    name: "L.M. College of Pharmacy",
    routes: "lmcp-ahmedabad",
    categories: ["Pharmacy", "Pharmaceutical Technology", "Research"],
    courses: [
      "B.Pharm",
      "M.Pharm",
      "Ph.D in Pharmacy",
      "Quality Assurance Programs",
      "Industrial Training"
    ],
    specializations: [
      "Pharmaceutical Technology",
      "Quality Assurance",
      "Pharmacology",
      "Pharmaceutical Analysis",
      "Clinical Research"
    ],
    entranceExams: [
      {
        name: "GUJCET",
        description: "Gujarat Common Entrance Test",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Navrangpura, Ahmedabad 380009",
    },
    eligibility: {
      academicCriteria: "12th Science with 55%",
      entranceRequirement: "GUJCET/GPAT",
      languages: "English medium instruction",
    },
    rankings: {
      nirf: 7,
      naac: "A",
    },
    infrastructure: {
      campus: "Well-equipped campus",
      facilities: [
        "Research Laboratories",
        "Pharmaceutical Technology Lab",
        "Computer Center",
        "Library",
        "Industrial Training Unit"
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹11 LPA",
      recruiters: ["Zydus", "Intas", "Torrent", "Cadila", "Sun Pharma"],
    },
    fees: {
      tuition: "₹1.1 Lakhs per year",
      hostel: "₹70,000 per year",
    },
  },
  {
    id: 51,
    name: "Poona College of Pharmacy",
    routes: "pcp-pune",
    categories: ["Pharmacy", "Drug Research", "Pharmaceutical Sciences"],
    courses: [
      "B.Pharm",
      "M.Pharm",
      "Pharm.D",
      "Ph.D Programs",
      "PG Diploma Courses"
    ],
    specializations: [
      "Pharmaceutics",
      "Drug Discovery",
      "Pharmaceutical Quality Assurance",
      "Pharmacology",
      "Industrial Pharmacy"
    ],
    entranceExams: [
      {
        name: "MHT-CET",
        description: "Maharashtra Common Entrance Test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Bharati Vidyapeeth Campus, Pune 411038",
    },
    eligibility: {
      academicCriteria: "12th PCM/PCB with 55%",
      entranceRequirement: "MHT-CET/GPAT",
      languages: "English proficiency required",
    },
    rankings: {
      nirf: 8,
      naac: "A",
    },
    infrastructure: {
      campus: "Modern research-oriented campus",
      facilities: [
        "Advanced Research Labs",
        "Drug Testing Facility",
        "Medicinal Garden",
        "Industry Collaboration Center",
        "Digital Library"
      ],
    },
    placement: {
      averagePackage: "₹5.8 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["Cipla", "Glenmark", "Emcure", "Serum Institute", "Lupin"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 52,
    name: "Indian Maritime University",
    routes: "imu-chennai",
    categories: ["Maritime", "Nautical Science", "Marine Engineering"],
    courses: [
      "B.Tech Marine Engineering",
      "B.Sc Nautical Science",
      "DNS (Diploma in Nautical Science)",
      "M.Tech Marine Engineering",
      "MBA in Maritime Management"
    ],
    specializations: [
      "Navigation",
      "Marine Engineering",
      "Naval Architecture",
      "Port & Shipping Management",
      "Maritime Logistics"
    ],
    entranceExams: [
      {
        name: "IMU-CET",
        description: "Common Entrance Test",
        minPercentile: 85,
      }
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "East Coast Road, Uthandi, Chennai 600119",
    },
    eligibility: {
      academicCriteria: "12th PCM with 60%",
      entranceRequirement: "IMU-CET qualification",
      physicalFitness: "Medical fitness as per DG Shipping norms",
    },
    rankings: {
      nirf: 1,
      dgShippingRank: "Premier Maritime Institution",
    },
    infrastructure: {
      campus: "Modern maritime campus",
      facilities: [
        "Ship-in-Campus",
        "Navigation Simulators",
        "Engine Room Simulators",
        "Marine Workshop",
        "Swimming Pool"
      ],
    },
    placement: {
      averagePackage: "₹15 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["Maersk Line", "MSC", "Shipping Corporation of India", "Anglo-Eastern"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 53,
    name: "AMET University",
    routes: "amet-chennai",
    categories: ["Maritime", "Marine Engineering", "Nautical Studies"],
    courses: [
      "B.Tech Marine Engineering",
      "B.Sc Nautical Science",
      "M.Tech Marine Engineering",
      "MBA Maritime Management",
      "Offshore Engineering"
    ],
    specializations: [
      "Ship Navigation",
      "Marine Engineering",
      "Offshore Technology",
      "Maritime Law",
      "Ship Management"
    ],
    entranceExams: [
      {
        name: "AMET Entrance",
        description: "University entrance test",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Kanathur, East Coast Road, Chennai 603112",
    },
    eligibility: {
      academicCriteria: "12th PCM with 55%",
      entranceRequirement: "AMET entrance qualification",
      physicalFitness: "DG Shipping medical standards",
    },
    rankings: {
      maritimeRank: 2,
      naac: "A",
    },
    infrastructure: {
      campus: "Waterfront campus",
      facilities: [
        "Marine Engineering Workshop",
        "Navigation Bridge Simulator",
        "Seamanship Lab",
        "Maritime Research Center",
        "Training Ship"
      ],
    },
    placement: {
      averagePackage: "₹12 LPA",
      highestPackage: "₹20 LPA",
      recruiters: ["Fleet Management", "Bernhard Schulte", "Wallem Group", "V.Ships"],
    },
    fees: {
      tuition: "₹3 Lakhs per year",
      hostel: "₹90,000 per year",
    },
  },
  {
    id: 54,
    name: "Tolani Maritime Institute",
    routes: "tmi-pune",
    categories: ["Maritime", "Marine Engineering", "Nautical Science"],
    courses: [
      "B.Tech Marine Engineering",
      "B.Sc Nautical Science",
      "DNS Course",
      "STCW Courses",
      "Maritime Safety Programs"
    ],
    specializations: [
      "Marine Engineering",
      "Navigation",
      "Maritime Safety",
      "Ship Operations",
      "Marine Control Systems"
    ],
    entranceExams: [
      {
        name: "TMI-JEE",
        description: "Institute entrance test",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Induri, Talegaon-Chakan Road, Pune 410507",
    },
    eligibility: {
      academicCriteria: "12th PCM with 60%",
      entranceRequirement: "TMI-JEE qualification",
      physicalFitness: "Medical fitness certificate",
    },
    rankings: {
      maritimeRank: 3,
      dgShippingRating: "A+",
    },
    infrastructure: {
      campus: "130-acre maritime campus",
      facilities: [
        "Ship Bridge Simulator",
        "Engine Room Workshop",
        "Safety Training Center",
        "Swimming Pool",
        "Marine Library"
      ],
    },
    placement: {
      averagePackage: "₹11 LPA",
      highestPackage: "₹18 LPA",
      recruiters: ["NYK Line", "K-Line", "MOL", "Great Eastern Shipping"],
    },
    fees: {
      tuition: "₹2.8 Lakhs per year",
      hostel: "₹85,000 per year",
    },
  },
  {
    id: 55,
    name: "Marine Engineering and Research Institute (MERI)",
    routes: "meri-kolkata",
    categories: ["Marine Engineering", "Maritime Studies", "Research"],
    courses: [
      "B.Tech Marine Engineering",
      "GME Course",
      "Maritime Research Programs",
      "STCW Courses",
      "Specialized Marine Courses"
    ],
    specializations: [
      "Marine Engineering",
      "Ship Design",
      "Maritime Safety",
      "Marine Control Systems",
      "Environmental Marine Technology"
    ],
    entranceExams: [
      {
        name: "JEE Main",
        description: "National level entrance",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "P-19 Taratala Road, Kolkata 700088",
    },
    eligibility: {
      academicCriteria: "12th PCM with 60%",
      entranceRequirement: "JEE Main qualification",
      physicalFitness: "DG Shipping medical norms",
    },
    rankings: {
      maritimeRank: 4,
      dgShippingRating: "A",
    },
    infrastructure: {
      campus: "Technical maritime campus",
      facilities: [
        "Engine Room Complex",
        "Simulation Center",
        "Workshop Facility",
        "Research Labs",
        "Training Vessel Access"
      ],
    },
    placement: {
      averagePackage: "₹10 LPA",
      highestPackage: "₹16 LPA",
      recruiters: ["Shipping Corporation of India", "Essar Shipping", "Maersk", "ASP Ship Management"],
    },
    fees: {
      tuition: "₹2.2 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 56,
    name: "Institute of Hotel Management, Catering & Nutrition (IHM)",
    routes: "ihm-pusa",
    categories: ["Hotel Management", "Hospitality", "Culinary Arts"],
    courses: [
      "B.Sc in Hospitality & Hotel Administration",
      "Post Graduate Diploma in Accommodation Management",
      "Diploma in Food Production",
      "Craft Course in Food & Beverage Service",
      "Certificate in Bakery & Confectionery"
    ],
    specializations: [
      "Food Production",
      "Food & Beverage Service",
      "Front Office Operations",
      "Housekeeping",
      "Hotel Administration"
    ],
    entranceExams: [
      {
        name: "NCHMCT JEE",
        description: "National Council JEE",
        minPercentile: 85,
      }
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Pusa Complex, New Delhi 110012",
    },
    eligibility: {
      academicCriteria: "12th with 50%",
      entranceRequirement: "NCHMCT JEE qualification",
      languages: "English proficiency required",
    },
    rankings: {
      nirf: 1,
      nchmctRank: "Premier Institute",
    },
    infrastructure: {
      campus: "State-of-the-art hospitality campus",
      facilities: [
        "Training Restaurants",
        "Professional Kitchens",
        "Bakery Lab",
        "Front Office Lab",
        "Housekeeping Lab"
      ],
    },
    placement: {
      averagePackage: "₹4.5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Taj Hotels", "Oberoi", "ITC Hotels", "Marriott", "Hyatt"],
    },
    fees: {
      tuition: "₹85,000 per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 57,
    name: "Welcomgroup Graduate School of Hotel Administration",
    routes: "wgsha-manipal",
    categories: ["Hotel Management", "Hospitality", "Culinary Arts"],
    courses: [
      "BA in Culinary Arts",
      "BHM (Bachelor in Hotel Management)",
      "MBA in Hotel Administration",
      "Diploma in Culinary Arts",
      "Certificate Programs"
    ],
    specializations: [
      "Culinary Arts",
      "Hotel Operations",
      "Restaurant Management",
      "Hospitality Marketing",
      "Event Management"
    ],
    entranceExams: [
      {
        name: "MAHE OET",
        description: "Manipal Online Entrance Test",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Manipal",
      state: "Karnataka",
      address: "MAHE Campus, Manipal 576104",
    },
    eligibility: {
      academicCriteria: "12th with 50%",
      entranceRequirement: "MAHE OET qualification",
      languages: "English proficiency required",
    },
    rankings: {
      hotelManagementRank: 2,
      naac: "A++",
    },
    infrastructure: {
      campus: "Modern hospitality campus",
      facilities: [
        "Training Hotel",
        "Specialty Restaurants",
        "Advanced Kitchens",
        "Wine Tasting Lab",
        "Hospitality Software Lab"
      ],
    },
    placement: {
      averagePackage: "₹4.2 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["ITC Hotels", "Taj Group", "Marriott International", "Hilton", "Accor"],
    },
    fees: {
      tuition: "₹3.5 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 58,
    name: "Institute of Hotel Management, Aurangabad",
    routes: "ihm-aurangabad",
    categories: ["Hotel Management", "Hospitality", "Tourism"],
    courses: [
      "B.Sc in Hospitality & Hotel Administration",
      "Diploma in Food Production",
      "Craft Course in F&B Service",
      "Certificate in Front Office",
      "Housekeeping Operations"
    ],
    specializations: [
      "Kitchen Operations",
      "F&B Service",
      "Rooms Division",
      "Hotel Administration",
      "Tourism Management"
    ],
    entranceExams: [
      {
        name: "NCHMCT JEE",
        description: "National Council JEE",
        minPercentile: 80,
      }
    ],
    location: {
      city: "Aurangabad",
      state: "Maharashtra",
      address: "CIDCO, Aurangabad 431003",
    },
    eligibility: {
      academicCriteria: "12th with 50%",
      entranceRequirement: "NCHMCT JEE qualification",
      languages: "English proficiency required",
    },
    rankings: {
      hotelManagementRank: 3,
      nchmctRank: "A+",
    },
    infrastructure: {
      campus: "Industry-integrated campus",
      facilities: [
        "Training Kitchens",
        "F&B Service Labs",
        "Front Office Lab",
        "Housekeeping Lab",
        "Computer Center"
      ],
    },
    placement: {
      averagePackage: "₹3.8 LPA",
      highestPackage: "₹8 LPA",
      recruiters: ["Taj Hotels", "Radisson", "Lemon Tree", "IHCL", "The Leela"],
    },
    fees: {
      tuition: "₹75,000 per year",
      hostel: "₹65,000 per year",
    },
  },
  {
    id: 59,
    name: "Christ University Institute of Hotel Management",
    routes: "christ-ihm-bangalore",
    categories: ["Hotel Management", "Hospitality", "Tourism"],
    courses: [
      "B.Sc in Hotel Management",
      "BA in Culinary Arts",
      "MBA in Tourism & Hospitality",
      "Diploma in Hotel Operations",
      "Certificate in F&B Service"
    ],
    specializations: [
      "Hotel Operations",
      "Culinary Management",
      "Tourism Management",
      "Event Management",
      "Hospitality Marketing"
    ],
    entranceExams: [
      {
        name: "CUET",
        description: "Christ University Entrance Test",
        minPercentile: 75,
      }
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Hosur Road, Bangalore 560029",
    },
    eligibility: {
      academicCriteria: "12th with 50%",
      entranceRequirement: "CUET qualification",
      languages: "English proficiency required",
    },
    rankings: {
      hotelManagementRank: 4,
      naac: "A+",
    },
    infrastructure: {
      campus: "Modern hospitality training facility",
      facilities: [
        "Training Restaurant",
        "Demo Kitchen",
        "Housekeeping Lab",
        "Front Office Simulation",
        "Food Science Lab"
      ],
    },
    placement: {
      averagePackage: "₹3.5 LPA",
      highestPackage: "₹7 LPA",
      recruiters: ["Marriott", "Hyatt", "Oberoi", "Taj Hotels", "The Leela"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹1 Lakh per year",
    },
  },
  {
    id: 6,
    name: "College of Art, New Delhi",
    routes: "college-of-art-delhi",
    categories: ["Fine Arts", "Arts", "Design"],
    courses: [
      "Bachelor of Fine Arts (Painting)",
      "Bachelor of Fine Arts (Applied Arts)",
      "Bachelor of Fine Arts (Sculpture)",
      "Bachelor of Fine Arts (Print Making)",
      "Bachelor of Fine Arts (Art History)",
    ],
    entranceExams: [
      {
        name: "College of Art Entrance Exam",
        description: "Institution-specific entrance examination",
        minPercentile: 85,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "20-22, Tilak Marg, New Delhi, Delhi 110001",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify College of Art Entrance Exam",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 1,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Historic campus in central Delhi",
      facilities: [
        "Art studios",
        "Exhibition galleries",
        "Art library",
        "Sculpture workshops",
        "Print making labs",
      ],
    },
    placement: {
      averagePackage: "₹4.5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Art galleries", "Museums", "Design studios", "Publishing houses"],
    },
    fees: {
      tuition: "₹45,000 per year",
      hostel: "₹30,000 per year",
    },
  },
  {
    id: 7,
    name: "Sir JJ School of Art, Mumbai",
    routes: "jj-school-of-art",
    categories: ["Fine Arts", "Arts", "Design"],
    courses: [
      "Bachelor of Fine Arts (Painting)",
      "Bachelor of Fine Arts (Applied Arts)",
      "Bachelor of Fine Arts (Sculpture)",
      "Bachelor of Fine Arts (Art History)",
      "Bachelor of Fine Arts (Ceramics)",
    ],
    entranceExams: [
      {
        name: "JJ School of Art Entrance Exam",
        description: "Institution-specific entrance examination",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Dr D N Road, Fort, Mumbai, Maharashtra 400001",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify JJ School of Art Entrance Exam",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 2,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Heritage campus in Fort area",
      facilities: [
        "Art studios",
        "Exhibition halls",
        "Art library",
        "Sculpture workshops",
        "Ceramics studio",
      ],
    },
    placement: {
      averagePackage: "₹4.2 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["Art galleries", "Design studios", "Advertising agencies", "Museums"],
    },
    fees: {
      tuition: "₹40,000 per year",
      hostel: "₹25,000 per year",
    },
  },
  {
    id: 8,
    name: "Government College of Fine Arts, Chennai",
    routes: "gcf-chennai",
    categories: ["Fine Arts", "Arts", "Design"],
    courses: [
      "Bachelor of Fine Arts (Painting)",
      "Bachelor of Fine Arts (Applied Arts)",
      "Bachelor of Fine Arts (Sculpture)",
      "Bachelor of Fine Arts (Art History)",
      "Bachelor of Fine Arts (Photography)",
    ],
    entranceExams: [
      {
        name: "GCF Entrance Exam",
        description: "Institution-specific entrance examination",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Poonamallee High Road, Egmore, Chennai, Tamil Nadu 600008",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify GCF Entrance Exam",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 3,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Modern campus in Chennai",
      facilities: [
        "Art studios",
        "Exhibition galleries",
        "Art library",
        "Sculpture workshops",
        "Photography studio",
      ],
    },
    placement: {
      averagePackage: "₹4 LPA",
      highestPackage: "₹9 LPA",
      recruiters: ["Art galleries", "Design studios", "Media houses", "Advertising agencies"],
    },
    fees: {
      tuition: "₹35,000 per year",
      hostel: "₹20,000 per year",
    },
  },
  {
    id: 9,
    name: "Maulana Azad Institute of Dental Sciences",
    routes: "maulana-azad-dental",
    categories: ["Dental", "Medical", "Healthcare"],
    courses: [
      "Bachelor of Dental Surgery (BDS)",
      "Master of Dental Surgery (MDS) in various specializations",
      "Diploma in Dental Hygienist",
      "Diploma in Dental Mechanic",
    ],
    entranceExams: [
      {
        name: "NEET",
        description: "National Eligibility cum Entrance Test",
        minPercentile: 95,
      },
    ],
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "MAMC Complex, Bahadur Shah Zafar Marg, New Delhi, Delhi 110002",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in PCB in 12th standard",
      entranceRequirement: "Must qualify NEET",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 1,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Modern dental hospital complex",
      facilities: [
        "Advanced dental clinics",
        "Dental laboratories",
        "Research center",
        "Library",
        "Medical center",
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["Government hospitals", "Private dental clinics", "Research institutions", "Dental equipment companies"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹50,000 per year",
    },
  },
  {
    id: 10,
    name: "Manipal College of Dental Sciences",
    routes: "manipal-dental",
    categories: ["Dental", "Medical", "Healthcare"],
    courses: [
      "Bachelor of Dental Surgery (BDS)",
      "Master of Dental Surgery (MDS) in various specializations",
      "Diploma in Dental Hygienist",
      "Diploma in Dental Mechanic",
    ],
    entranceExams: [
      {
        name: "NEET",
        description: "National Eligibility cum Entrance Test",
        minPercentile: 90,
      },
    ],
    location: {
      city: "Manipal",
      state: "Karnataka",
      address: "Madhav Nagar, Manipal, Karnataka 576104",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in PCB in 12th standard",
      entranceRequirement: "Must qualify NEET",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 2,
      qsWorld: null,
    },
    infrastructure: {
      campus: "State-of-the-art dental hospital",
      facilities: [
        "Modern dental clinics",
        "Advanced laboratories",
        "Research facilities",
        "Digital library",
        "Medical center",
      ],
    },
    placement: {
      averagePackage: "₹7.5 LPA",
      highestPackage: "₹22 LPA",
      recruiters: ["Private dental clinics", "Hospitals", "Research institutions", "Dental equipment companies"],
    },
    fees: {
      tuition: "₹3.5 Lakhs per year",
      hostel: "₹75,000 per year",
    },
  },
  {
    id: 11,
    name: "Dr. R. Ahmed Dental College and Hospital",
    routes: "dr-ahmed-dental",
    categories: ["Dental", "Medical", "Healthcare"],
    courses: [
      "Bachelor of Dental Surgery (BDS)",
      "Master of Dental Surgery (MDS) in various specializations",
      "Diploma in Dental Hygienist",
      "Diploma in Dental Mechanic",
    ],
    entranceExams: [
      {
        name: "NEET",
        description: "National Eligibility cum Entrance Test",
        minPercentile: 90,
      },
    ],
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "114, AJC Bose Road, Kolkata, West Bengal 700014",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in PCB in 12th standard",
      entranceRequirement: "Must qualify NEET",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 3,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Historic dental college and hospital",
      facilities: [
        "Dental clinics",
        "Laboratories",
        "Research center",
        "Library",
        "Medical center",
      ],
    },
    placement: {
      averagePackage: "₹7 LPA",
      highestPackage: "₹20 LPA",
      recruiters: ["Government hospitals", "Private dental clinics", "Research institutions", "Dental equipment companies"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹40,000 per year",
    },
  },
  {
    id: 12,
    name: "National Institute of Design, Ahmedabad",
    routes: "nid-ahmedabad",
    categories: ["Crafts", "Design", "Arts"],
    courses: [
      "Bachelor of Design in Crafts",
      "Master of Design in Crafts",
      "Diploma in Craft Design",
      "Certificate courses in various crafts",
      "Design for Craft Excellence",
    ],
    entranceExams: [
      {
        name: "NID DAT",
        description: "National Institute of Design Design Aptitude Test",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Paldi, Ahmedabad, Gujarat 380007",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify NID DAT",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 1,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Modern design campus",
      facilities: [
        "Craft workshops",
        "Design studios",
        "Material library",
        "Exhibition spaces",
        "Digital labs",
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Design studios", "Craft organizations", "Export houses", "Cultural institutions"],
    },
    fees: {
      tuition: "₹2.5 Lakhs per year",
      hostel: "₹60,000 per year",
    },
  },
  {
    id: 13,
    name: "Indian Institute of Crafts and Design, Jaipur",
    routes: "iicd-jaipur",
    categories: ["Crafts", "Design", "Arts"],
    courses: [
      "Bachelor of Design in Crafts",
      "Master of Design in Crafts",
      "Diploma in Craft Design",
      "Certificate courses in traditional crafts",
      "Craft Entrepreneurship",
    ],
    entranceExams: [
      {
        name: "IICD Entrance Exam",
        description: "Institution-specific entrance examination",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      address: "J-8, Jhalana Institutional Area, Jaipur, Rajasthan 302004",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify IICD Entrance Exam",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 2,
      qsWorld: null,
    },
    infrastructure: {
      campus: "State-of-the-art craft institute",
      facilities: [
        "Craft workshops",
        "Design studios",
        "Material library",
        "Exhibition galleries",
        "Digital labs",
      ],
    },
    placement: {
      averagePackage: "₹5.5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Craft organizations", "Design studios", "Export houses", "Cultural institutions"],
    },
    fees: {
      tuition: "₹2 Lakhs per year",
      hostel: "₹50,000 per year",
    },
  },
  {
    id: 14,
    name: "Kala Bhavana, Visva-Bharati University",
    routes: "kala-bhavana",
    categories: ["Crafts", "Arts", "Design"],
    courses: [
      "Bachelor of Fine Arts in Crafts",
      "Master of Fine Arts in Crafts",
      "Diploma in Craft Design",
      "Certificate courses in traditional crafts",
      "Craft History and Criticism",
    ],
    entranceExams: [
      {
        name: "Visva-Bharati Entrance Exam",
        description: "University-specific entrance examination",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Santiniketan",
      state: "West Bengal",
      address: "Visva-Bharati University, Santiniketan, West Bengal 731235",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify Visva-Bharati Entrance Exam",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 3,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Historic art and craft campus",
      facilities: [
        "Craft workshops",
        "Art studios",
        "Material library",
        "Exhibition spaces",
        "Traditional craft labs",
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["Craft organizations", "Art galleries", "Cultural institutions", "Design studios"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹40,000 per year",
    },
  },
  {
    id: 15,
    name: "Indira Gandhi Rashtriya Uran Akademi",
    routes: "igrua",
    categories: ["Aviation", "Engineering", "Technology"],
    courses: [
      "Commercial Pilot License (CPL)",
      "Private Pilot License (PPL)",
      "Aircraft Maintenance Engineering (AME)",
      "Air Traffic Control (ATC)",
      "Aviation Management",
    ],
    entranceExams: [
      {
        name: "IGRUA Entrance Exam",
        description: "Institution-specific entrance examination",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Rae Bareli",
      state: "Uttar Pradesh",
      address: "Civil Aerodrome Post Office, Fursatganj, Rae Bareli, Uttar Pradesh 229302",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in PCM in 12th standard",
      entranceRequirement: "Must qualify IGRUA Entrance Exam",
      ageLimit: "17-24 years",
    },
    rankings: {
      nirf: 1,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Modern aviation training facility",
      facilities: [
        "Flight simulators",
        "Aircraft hangars",
        "Training aircraft",
        "Aviation library",
        "Meteorological center",
      ],
    },
    placement: {
      averagePackage: "₹12 LPA",
      highestPackage: "₹35 LPA",
      recruiters: ["Air India", "IndiGo", "SpiceJet", "Vistara", "International Airlines"],
    },
    fees: {
      tuition: "₹15 Lakhs per year",
      hostel: "₹1.5 Lakhs per year",
    },
  },
  {
    id: 16,
    name: "Rajiv Gandhi Aviation Academy",
    routes: "rgaviation",
    categories: ["Aviation", "Engineering", "Technology"],
    courses: [
      "Commercial Pilot License (CPL)",
      "Private Pilot License (PPL)",
      "Aircraft Maintenance Engineering (AME)",
      "Aviation Management",
      "Air Hostess Training",
    ],
    entranceExams: [
      {
        name: "RGAA Entrance Exam",
        description: "Institution-specific entrance examination",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Kempegowda International Airport Road, Bangalore, Karnataka 562157",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in PCM in 12th standard",
      entranceRequirement: "Must qualify RGAA Entrance Exam",
      ageLimit: "17-24 years",
    },
    rankings: {
      nirf: 2,
      qsWorld: null,
    },
    infrastructure: {
      campus: "State-of-the-art aviation training center",
      facilities: [
        "Advanced flight simulators",
        "Aircraft maintenance hangars",
        "Training aircraft fleet",
        "Aviation library",
        "Meteorological center",
      ],
    },
    placement: {
      averagePackage: "₹10 LPA",
      highestPackage: "₹30 LPA",
      recruiters: ["Air India", "IndiGo", "SpiceJet", "Vistara", "International Airlines"],
    },
    fees: {
      tuition: "₹12 Lakhs per year",
      hostel: "₹1.2 Lakhs per year",
    },
  },
  {
    id: 17,
    name: "Bharat Institute of Aeronautics",
    routes: "bia",
    categories: ["Aviation", "Engineering", "Technology"],
    courses: [
      "Commercial Pilot License (CPL)",
      "Private Pilot License (PPL)",
      "Aircraft Maintenance Engineering (AME)",
      "Aviation Management",
      "Ground Staff Training",
    ],
    entranceExams: [
      {
        name: "BIA Entrance Exam",
        description: "Institution-specific entrance examination",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Patna",
      state: "Bihar",
      address: "Patna Airport Road, Patna, Bihar 800014",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in PCM in 12th standard",
      entranceRequirement: "Must qualify BIA Entrance Exam",
      ageLimit: "17-24 years",
    },
    rankings: {
      nirf: 3,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Modern aviation training facility",
      facilities: [
        "Flight simulators",
        "Aircraft hangars",
        "Training aircraft",
        "Aviation library",
        "Meteorological center",
      ],
    },
    placement: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹25 LPA",
      recruiters: ["Air India", "IndiGo", "SpiceJet", "Vistara", "Regional Airlines"],
    },
    fees: {
      tuition: "₹10 Lakhs per year",
      hostel: "₹1 Lakh per year",
    },
  },
  {
    id: 18,
    name: "All India Institute of Physical Medicine and Rehabilitation",
    routes: "aiipmr",
    categories: ["Rehabilitation", "Medical", "Healthcare"],
    courses: [
      "Bachelor of Physiotherapy (BPT)",
      "Master of Physiotherapy (MPT)",
      "Bachelor of Occupational Therapy (BOT)",
      "Master of Occupational Therapy (MOT)",
      "Diploma in Rehabilitation Therapy",
    ],
    entranceExams: [
      {
        name: "NEET",
        description: "National Eligibility cum Entrance Test",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Haji Ali, Mahalaxmi, Mumbai, Maharashtra 400034",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in PCB in 12th standard",
      entranceRequirement: "Must qualify NEET",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 1,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Modern rehabilitation center",
      facilities: [
        "Physiotherapy clinics",
        "Occupational therapy labs",
        "Rehabilitation gymnasium",
        "Research center",
        "Medical library",
      ],
    },
    placement: {
      averagePackage: "₹6 LPA",
      highestPackage: "₹15 LPA",
      recruiters: ["Hospitals", "Rehabilitation centers", "Sports organizations", "NGOs"],
    },
    fees: {
      tuition: "₹2 Lakhs per year",
      hostel: "₹60,000 per year",
    },
  },
  {
    id: 19,
    name: "National Institute for the Empowerment of Persons with Visual Disabilities",
    routes: "niepvd",
    categories: ["Rehabilitation", "Special Education", "Healthcare"],
    courses: [
      "Bachelor of Rehabilitation Science",
      "Master of Rehabilitation Science",
      "Diploma in Special Education",
      "Certificate in Assistive Technology",
      "Rehabilitation Counseling",
    ],
    entranceExams: [
      {
        name: "NIE Entrance Exam",
        description: "Institution-specific entrance examination",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Dehradun",
      state: "Uttarakhand",
      address: "116, Rajpur Road, Dehradun, Uttarakhand 248001",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify NIE Entrance Exam",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 2,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Specialized rehabilitation facility",
      facilities: [
        "Assistive technology labs",
        "Training workshops",
        "Research center",
        "Library",
        "Rehabilitation center",
      ],
    },
    placement: {
      averagePackage: "₹5.5 LPA",
      highestPackage: "₹12 LPA",
      recruiters: ["Rehabilitation centers", "NGOs", "Government organizations", "Special schools"],
    },
    fees: {
      tuition: "₹1.5 Lakhs per year",
      hostel: "₹50,000 per year",
    },
  },
  {
    id: 20,
    name: "Institute of Rehabilitation Sciences and Research",
    routes: "irsr",
    categories: ["Rehabilitation", "Medical", "Healthcare"],
    courses: [
      "Bachelor of Physiotherapy (BPT)",
      "Master of Physiotherapy (MPT)",
      "Bachelor of Occupational Therapy (BOT)",
      "Master of Occupational Therapy (MOT)",
      "Speech and Language Therapy",
    ],
    entranceExams: [
      {
        name: "IRSR Entrance Exam",
        description: "Institution-specific entrance examination",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Koramangala, Bangalore, Karnataka 560034",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in PCB in 12th standard",
      entranceRequirement: "Must qualify IRSR Entrance Exam",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 3,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Modern rehabilitation institute",
      facilities: [
        "Physiotherapy clinics",
        "Occupational therapy labs",
        "Speech therapy center",
        "Research facilities",
        "Medical library",
      ],
    },
    placement: {
      averagePackage: "₹5 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["Hospitals", "Rehabilitation centers", "Sports organizations", "NGOs"],
    },
    fees: {
      tuition: "₹1.8 Lakhs per year",
      hostel: "₹55,000 per year",
    },
  },
  {
    id: 21,
    name: "National Institute for the Mentally Handicapped",
    routes: "nimh",
    categories: ["Special Education", "Education", "Healthcare"],
    courses: [
      "Bachelor of Education in Special Education",
      "Master of Education in Special Education",
      "Diploma in Special Education",
      "Certificate in Early Intervention",
      "Special Education for Multiple Disabilities",
    ],
    entranceExams: [
      {
        name: "NIMH Entrance Exam",
        description: "Institution-specific entrance examination",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Secunderabad",
      state: "Telangana",
      address: "Manovikas Nagar, Secunderabad, Telangana 500009",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify NIMH Entrance Exam",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 1,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Modern special education facility",
      facilities: [
        "Special education classrooms",
        "Assessment centers",
        "Therapy rooms",
        "Research center",
        "Library",
      ],
    },
    placement: {
      averagePackage: "₹4.5 LPA",
      highestPackage: "₹10 LPA",
      recruiters: ["Special schools", "NGOs", "Government organizations", "Rehabilitation centers"],
    },
    fees: {
      tuition: "₹1.2 Lakhs per year",
      hostel: "₹40,000 per year",
    },
  },
  {
    id: 22,
    name: "Ali Yavar Jung National Institute of Speech and Hearing Disabilities",
    routes: "ayjnihd",
    categories: ["Special Education", "Healthcare", "Education"],
    courses: [
      "Bachelor of Education in Special Education",
      "Master of Education in Special Education",
      "Diploma in Special Education",
      "Certificate in Speech Therapy",
      "Special Education for Hearing Impaired",
    ],
    entranceExams: [
      {
        name: "AYJNISHD Entrance Exam",
        description: "Institution-specific entrance examination",
        minPercentile: 85,
      },
    ],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "K.C. Marg, Bandra (West), Mumbai, Maharashtra 400050",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify AYJNISHD Entrance Exam",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 2,
      qsWorld: null,
    },
    infrastructure: {
      campus: "State-of-the-art special education institute",
      facilities: [
        "Speech therapy labs",
        "Audiology centers",
        "Special education classrooms",
        "Research facilities",
        "Library",
      ],
    },
    placement: {
      averagePackage: "₹4.2 LPA",
      highestPackage: "₹9 LPA",
      recruiters: ["Special schools", "Hospitals", "NGOs", "Rehabilitation centers"],
    },
    fees: {
      tuition: "₹1.1 Lakhs per year",
      hostel: "₹35,000 per year",
    },
  },
  {
    id: 23,
    name: "National Institute for Empowerment of Persons with Multiple Disabilities",
    routes: "niepmd",
    categories: ["Special Education", "Healthcare", "Education"],
    courses: [
      "Bachelor of Education in Special Education",
      "Master of Education in Special Education",
      "Diploma in Special Education",
      "Certificate in Multiple Disabilities",
      "Special Education for Multiple Disabilities",
    ],
    entranceExams: [
      {
        name: "NIEPMD Entrance Exam",
        description: "Institution-specific entrance examination",
        minPercentile: 80,
      },
    ],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "East Coast Road, Muttukadu, Chennai, Tamil Nadu 603112",
    },
    eligibility: {
      academicCriteria: "Minimum 50% in 12th standard",
      entranceRequirement: "Must qualify NIEPMD Entrance Exam",
      ageLimit: "Less than 25 years",
    },
    rankings: {
      nirf: 3,
      qsWorld: null,
    },
    infrastructure: {
      campus: "Modern special education facility",
      facilities: [
        "Special education classrooms",
        "Therapy centers",
        "Assessment rooms",
        "Research center",
        "Library",
      ],
    },
    placement: {
      averagePackage: "₹4 LPA",
      highestPackage: "₹8 LPA",
      recruiters: ["Special schools", "NGOs", "Government organizations", "Rehabilitation centers"],
    },
    fees: {
      tuition: "₹1 Lakh per year",
      hostel: "₹30,000 per year",
    },
  },
];


