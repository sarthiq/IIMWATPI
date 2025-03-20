import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SchollarshipHome.css";

export const SchollarshipHome = () => {
  const [activeTab, setActiveTab] = useState("national"); // 'national' or 'state'

  // Sample scholarship data - you can replace this with actual API data
  const scholarships = [
    {
      id: 1,
      name: "National Scholarship Portal (NSP)",
      eligibility: "Indian students with family income below 8 lakh per annum",
      deadline: "October 31, 2024",
      provider: "Government of India",
      category: "Merit-cum-Means",
      description:
        "Central government scholarship for undergraduate and postgraduate students",
      applyLink: "https://scholarships.gov.in/",
      route: "national-scholarship-portal",
    },
    {
      id: 2,
      name: "Post Matric Scholarship",
      eligibility: "SC/ST students pursuing post-matriculation courses",
      deadline: "December 31, 2024",
      provider: "Ministry of Social Justice",
      category: "Social Welfare",
      description:
        "Financial assistance for disadvantaged students pursuing higher education",
      applyLink: "https://scholarships.gov.in/",
      route: "post-matric-scholarship",
    },
    {
      id: 3,
      name: "Tata Trust Scholarship",
      eligibility:
        "Students pursuing undergraduate studies with academic excellence",
      deadline: "September 15, 2024",
      provider: "Tata Trusts",
      category: "Social Foundations",
      description:
        "Merit-based scholarship for promising undergraduate students",
      applyLink: "https://www.tatatrusts.org/our-work/education",
      route: "tata-trust-scholarship",
    },
    {
      id: 4,
      name: "CBSE Merit Scholarship",
      eligibility: "Students who scored above 95% in CBSE Class 12",
      deadline: "November 30, 2024",
      provider: "Central Board of Secondary Education",
      category: "Board/University",
      description: "Recognition and support for CBSE board toppers",
      applyLink: "https://cbse.gov.in/",
      route: "cbse-merit-scholarship",
    },
    {
      id: 5,
      name: "Pragati Scholarship",
      eligibility: "Female students pursuing technical education",
      deadline: "December 15, 2024",
      provider: "AICTE",
      category: "Scholarship for Girls",
      description: "Supporting women in technical education",
      applyLink: "https://www.aicte-pragati-saksham-gov.in/",
      route: "pragati-scholarship",
    },
    {
      id: 6,
      name: "Maulana Azad National Fellowship",
      eligibility: "Minority students pursuing M.Phil/Ph.D",
      deadline: "January 31, 2025",
      provider: "Ministry of Minority Affairs",
      category: "Scholarship for Minorities",
      description: "Research funding for minority community students",
      applyLink: "https://www.ugc.ac.in/",
      route: "maulana-azad-fellowship",
    },
    {
      id: 7,
      name: "Reliance Foundation Scholarship",
      eligibility: "Undergraduate students in STEM fields",
      deadline: "August 31, 2024",
      provider: "Reliance Foundation",
      category: "Social Foundations",
      description: "Supporting excellence in STEM education",
      applyLink: "https://scholarships.reliancefoundation.org/",
      route: "reliance-foundation-scholarship",
    },
    {
      id: 8,
      name: "INSPIRE Scholarship",
      eligibility: "Top 1% students in State Boards Class 12",
      deadline: "October 15, 2024",
      provider: "Department of Science & Technology",
      category: "Board/University",
      description: "Promoting science education among talented students",
      applyLink: "https://online-inspire.gov.in/",
      route: "inspire-scholarship",
    },
    {
      id: 9,
      name: "UDAAN Scholarship",
      eligibility: "Girl students from Class 11 preparing for IIT-JEE",
      deadline: "September 30, 2024",
      provider: "CBSE",
      category: "Scholarship for Girls",
      description: "Supporting girls in engineering entrance preparation",
      applyLink: "https://www.cbse.gov.in/udaan/",
      route: "udaan-scholarship",
    },
    {
      id: 10,
      name: "Prime Minister's Scholarship for Minorities",
      eligibility:
        "Students from minority communities pursuing professional courses",
      deadline: "November 15, 2024",
      provider: "Ministry of Minority Affairs",
      category: "Scholarship for Minorities",
      description: "Supporting minority students in professional education",
      applyLink: "https://scholarships.gov.in/",
      route: "pm-minority-scholarship",
    },
  ];

  const stateScholarships = [
    {
      id: "s1",
      state: "Maharashtra",
      scholarships: [
        {
          id: "mh1",
          name: "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship",
          eligibility:
            "Students from EBC families with annual income below 8 lakhs",
          deadline: "November 30, 2024",
          provider: "Government of Maharashtra",
          description:
            "Merit-based scholarship for economically backward class students",
          applyLink: "https://mahadbt.maharashtra.gov.in/",
          route: "rcshm-scholarship",
        },
        {
          id: "mh2",
          name: "Maharashtra State Open University Scholarship",
          eligibility: "YCMOU students with family income below 2.5 lakhs",
          deadline: "December 15, 2024",
          provider: "YCMOU",
          description: "Financial assistance for distance learning students",
          applyLink: "https://ycmou.ac.in/",
          route: "ycmou-scholarship",
        },
      ],
    },
    {
      id: "s2",
      state: "Karnataka",
      scholarships: [
        {
          id: "ka1",
          name: "Karnataka Post Metric Scholarship",
          eligibility: "SC/ST students pursuing higher education in Karnataka",
          deadline: "October 31, 2024",
          provider: "Karnataka Social Welfare Department",
          description: "Support for disadvantaged students in higher education",
          applyLink: "https://sw.kar.nic.in/",
          route: "karnataka-post-metric",
        },
        {
          id: "ka2",
          name: "CM Scholarship Scheme",
          eligibility: "Merit students from farmer families",
          deadline: "September 30, 2024",
          provider: "Government of Karnataka",
          description: "Supporting children of farmers in higher education",
          applyLink: "https://karepass.cgg.gov.in/",
          route: "karnataka-cm-scholarship",
        },
      ],
    },
    {
      id: "s3",
      state: "Tamil Nadu",
      scholarships: [
        {
          id: "tn1",
          name: "Tamil Nadu Chief Minister's Merit Scholarship",
          eligibility: "Top performers in Class 10 and 12 state board exams",
          deadline: "November 15, 2024",
          provider: "Government of Tamil Nadu",
          description: "Merit-based scholarship for state board toppers",
          applyLink: "https://www.tn.gov.in/scheme/",
          route: "tn-cm-scholarship",
        },
        {
          id: "tn2",
          name: "Moovalur Ramamirtham Scholarship",
          eligibility: "Girl students pursuing higher education",
          deadline: "October 31, 2024",
          provider: "Tamil Nadu Corporation for Development of Women",
          description: "Supporting higher education for girl students",
          applyLink: "https://www.tnsdc.in/",
          route: "moovalur-scholarship",
        },
      ],
    },
    {
      id: "s4",
      state: "Gujarat",
      scholarships: [
        {
          id: "gj1",
          name: "Mukhyamantri Yuva Swavalamban Yojana",
          eligibility: "Students with family income below 6 lakhs",
          deadline: "December 31, 2024",
          provider: "Government of Gujarat",
          description:
            "Comprehensive scholarship for technical and professional courses",
          applyLink: "https://mysy.guj.nic.in/",
          route: "mysy-gujarat",
        },
        {
          id: "gj2",
          name: "Food Bill Assistance Scheme",
          eligibility:
            "Engineering and medical students from low-income families",
          deadline: "November 30, 2024",
          provider: "Gujarat Education Department",
          description:
            "Support for food expenses during professional education",
          applyLink: "https://digitalgujarat.gov.in/",
          route: "gujarat-food-assistance",
        },
      ],
    },
    {
      id: "s5",
      state: "Uttar Pradesh",
      scholarships: [
        {
          id: "up1",
          name: "UP Scholarship Scheme",
          eligibility: "Students with family income below 2 lakhs per annum",
          deadline: "November 30, 2024",
          provider: "Government of Uttar Pradesh",
          description:
            "Comprehensive scholarship for general category students",
          applyLink: "https://scholarship.up.gov.in/",
          route: "up-general-scholarship",
        },
        {
          id: "up2",
          name: "Mukhyamantri Abhyudaya Yojana",
          eligibility: "Students preparing for competitive exams",
          deadline: "October 15, 2024",
          provider: "UP Higher Education Department",
          description:
            "Free coaching and scholarship for competitive exam preparation",
          applyLink: "https://abhyudaya.up.gov.in/",
          route: "up-abhyudaya-yojana",
        },
      ],
    },
    {
      id: "s6",
      state: "Bihar",
      scholarships: [
        {
          id: "br1",
          name: "Bihar Student Credit Card Scheme",
          eligibility: "Students pursuing higher education in Bihar",
          deadline: "December 31, 2024",
          provider: "Government of Bihar",
          description:
            "Education loan and scholarship support for higher studies",
          applyLink: "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
          route: "bihar-credit-card",
        },
        {
          id: "br2",
          name: "Mukhyamantri Kanya Utthan Yojana",
          eligibility: "Girl students who passed intermediate",
          deadline: "November 15, 2024",
          provider: "Bihar Education Department",
          description:
            "Financial assistance for girl students pursuing higher education",
          applyLink: "https://www.bihareduloan.in/",
          route: "bihar-kanya-utthan",
        },
      ],
    },
    {
      id: "s7",
      state: "West Bengal",
      scholarships: [
        {
          id: "wb1",
          name: "Swami Vivekananda Merit-cum-Means Scholarship",
          eligibility: "Students with family income below 2.5 lakhs",
          deadline: "October 31, 2024",
          provider: "Government of West Bengal",
          description: "Merit-based scholarship for higher education",
          applyLink: "https://www.wbhed.gov.in/",
          route: "wb-vivekananda-scholarship",
        },
        {
          id: "wb2",
          name: "Kanyashree Prakalpa",
          eligibility: "Unmarried girl students aged 13-19 years",
          deadline: "December 15, 2024",
          provider: "West Bengal Women Development",
          description: "Empowering girl students through education",
          applyLink: "https://www.wbkanyashree.gov.in/",
          route: "wb-kanyashree",
        },
      ],
    },
    {
      id: "s8",
      state: "Rajasthan",
      scholarships: [
        {
          id: "rj1",
          name: "Mukhyamantri Uchcha Shiksha Chhatravriti",
          eligibility: "Students pursuing higher education in state",
          deadline: "November 30, 2024",
          provider: "Government of Rajasthan",
          description: "Scholarship for technical and professional courses",
          applyLink: "https://scholarship.rajasthan.gov.in/",
          route: "rajasthan-higher-edu",
        },
        {
          id: "rj2",
          name: "Devnarayan Yojana",
          eligibility: "Students from special backward classes",
          deadline: "October 31, 2024",
          provider: "Rajasthan Social Justice Department",
          description: "Educational support for backward classes",
          applyLink: "https://sje.rajasthan.gov.in/",
          route: "rajasthan-devnarayan",
        },
      ],
    },
    {
      id: "s9",
      state: "Madhya Pradesh",
      scholarships: [
        {
          id: "mp1",
          name: "Mukhyamantri Medhavi Vidyarthi Yojana",
          eligibility: "Students scoring above 70% in Class 12",
          deadline: "December 31, 2024",
          provider: "Government of Madhya Pradesh",
          description: "Merit-based scholarship for professional courses",
          applyLink: "https://scholarshipportal.mp.nic.in/",
          route: "mp-medhavi-yojana",
        },
        {
          id: "mp2",
          name: "Pratibha Kiran Yojana",
          eligibility: "Girls from urban poor families",
          deadline: "November 15, 2024",
          provider: "MP Higher Education Department",
          description: "Supporting urban poor girls in higher education",
          applyLink: "https://highereducation.mp.gov.in/",
          route: "mp-pratibha-kiran",
        },
      ],
    },
    {
      id: "s10",
      state: "Kerala",
      scholarships: [
        {
          id: "kl1",
          name: "Chief Minister's Scholarship for Civil Services",
          eligibility: "Students preparing for civil services",
          deadline: "September 30, 2024",
          provider: "Government of Kerala",
          description: "Support for civil services aspirants",
          applyLink: "https://dcescholarship.kerala.gov.in/",
          route: "kerala-civil-services",
        },
        {
          id: "kl2",
          name: "Suvarna Jubilee Merit Scholarship",
          eligibility: "Top performers in Plus Two examinations",
          deadline: "October 31, 2024",
          provider: "Kerala State Education Board",
          description: "Merit scholarship for higher studies",
          applyLink: "https://www.education.kerala.gov.in/",
          route: "kerala-suvarna-jubilee",
        },
      ],
    },
    {
      id: "s11",
      state: "Punjab",
      scholarships: [
        {
          id: "pb1",
          name: "Dr. Hargobind Khurana Scholarship",
          eligibility: "Students pursuing science courses",
          deadline: "November 30, 2024",
          provider: "Government of Punjab",
          description: "Promoting excellence in science education",
          applyLink: "https://scholarships.punjab.gov.in/",
          route: "punjab-science-scholarship",
        },
        {
          id: "pb2",
          name: "Post Matric SC Scholarship",
          eligibility: "SC students pursuing higher education",
          deadline: "December 15, 2024",
          provider: "Punjab SC Welfare Department",
          description: "Financial assistance for SC students",
          applyLink: "https://punjabsocialwelfare.gov.in/",
          route: "punjab-sc-scholarship",
        },
      ],
    },
    {
      id: "s12",
      state: "Telangana",
      scholarships: [
        {
          id: "ts1",
          name: "TS ePass Scholarship",
          eligibility: "Students from SC/ST/BC/Minority communities",
          deadline: "October 31, 2024",
          provider: "Government of Telangana",
          description:
            "Comprehensive scholarship scheme for various categories",
          applyLink: "https://telanganaepass.cgg.gov.in/",
          route: "telangana-epass",
        },
        {
          id: "ts2",
          name: "Chief Minister's Overseas Scholarship",
          eligibility: "Students pursuing higher education abroad",
          deadline: "September 30, 2024",
          provider: "Telangana Social Welfare Department",
          description: "Support for international education",
          applyLink: "https://www.tscmss.cgg.gov.in/",
          route: "telangana-overseas",
        },
      ],
    },
    {
      id: "s13",
      state: "Andhra Pradesh",
      scholarships: [
        {
          id: "ap1",
          name: "AP State Post Metric Scholarship",
          eligibility: "SC/ST/BC/EBC/Minority students",
          deadline: "October 31, 2024",
          provider: "Government of Andhra Pradesh",
          description: "Comprehensive scholarship for higher education",
          applyLink: "https://jnanabhumi.ap.gov.in/",
          route: "ap-post-metric",
        },
        {
          id: "ap2",
          name: "Jagananna Vidya Deevena",
          eligibility:
            "Students from families with annual income below 2.5 lakhs",
          deadline: "November 30, 2024",
          provider: "AP Higher Education Department",
          description: "Full fee reimbursement scheme",
          applyLink: "https://jnanabhumi.ap.gov.in/",
          route: "ap-vidya-deevena",
        },
      ],
    },
    {
      id: "s14",
      state: "Odisha",
      scholarships: [
        {
          id: "od1",
          name: "Medhabruti Scholarship",
          eligibility: "Meritorious students in higher education",
          deadline: "December 15, 2024",
          provider: "Government of Odisha",
          description: "Merit-based scholarship for technical education",
          applyLink: "https://www.odisha.gov.in/scholarships",
          route: "odisha-medhabruti",
        },
        {
          id: "od2",
          name: "Green Passage Scheme",
          eligibility: "Orphan students pursuing higher education",
          deadline: "November 15, 2024",
          provider: "Odisha Higher Education Department",
          description: "Complete educational support for orphan students",
          applyLink: "https://dheodisha.gov.in/",
          route: "odisha-green-passage",
        },
      ],
    },
    {
      id: "s15",
      state: "Assam",
      scholarships: [
        {
          id: "as1",
          name: "Pragyan Bharti Scheme",
          eligibility:
            "College students with annual family income below 2 lakhs",
          deadline: "September 30, 2024",
          provider: "Government of Assam",
          description: "Fee waiver and financial assistance",
          applyLink: "https://directorateofhighereducation.assam.gov.in/",
          route: "assam-pragyan-bharti",
        },
        {
          id: "as2",
          name: "Ishan Uday Scholarship",
          eligibility: "Students from North Eastern Region",
          deadline: "October 31, 2024",
          provider: "UGC for North Eastern Region",
          description: "Special scholarship for NER students",
          applyLink: "https://scholarships.gov.in/",
          route: "assam-ishan-uday",
        },
      ],
    },
    {
      id: "s16",
      state: "Jharkhand",
      scholarships: [
        {
          id: "jh1",
          name: "e-Kalyan Scholarship",
          eligibility: "SC/ST/OBC/Minority students",
          deadline: "November 30, 2024",
          provider: "Government of Jharkhand",
          description: "Comprehensive scholarship portal for all categories",
          applyLink: "https://jharkhandstudents.in/",
          route: "jharkhand-ekalyan",
        },
        {
          id: "jh2",
          name: "Mukhya Mantri Laxmi Ladli Yojna",
          eligibility: "Girl students from class 6 to graduation",
          deadline: "December 31, 2024",
          provider: "Jharkhand Education Department",
          description: "Educational support for girl students",
          applyLink: "https://www.jharkhand.gov.in/",
          route: "jharkhand-laxmi-ladli",
        },
      ],
    },
    {
      id: "s17",
      state: "Chhattisgarh",
      scholarships: [
        {
          id: "cg1",
          name: "Mukhyamantri Uchch Shiksha Protsahan Yojana",
          eligibility: "Students pursuing higher education in state",
          deadline: "October 15, 2024",
          provider: "Government of Chhattisgarh",
          description: "Scholarship for professional and technical courses",
          applyLink: "https://www.mpsc.cg.gov.in/",
          route: "cg-uchch-shiksha",
        },
        {
          id: "cg2",
          name: "BPL Scholarship Scheme",
          eligibility: "Students from BPL families",
          deadline: "November 30, 2024",
          provider: "CG Higher Education Department",
          description: "Financial support for BPL category students",
          applyLink: "https://www.cgscholar.in/",
          route: "cg-bpl-scholarship",
        },
      ],
    },
    {
      id: "s18",
      state: "Uttarakhand",
      scholarships: [
        {
          id: "uk1",
          name: "Mukhya Mantri Medhavi Chhatra Yojana",
          eligibility: "Students with 80% or above in Class 12",
          deadline: "December 15, 2024",
          provider: "Government of Uttarakhand",
          description: "Merit-based scholarship for higher studies",
          applyLink: "https://scholarship.uk.gov.in/",
          route: "uttarakhand-medhavi",
        },
        {
          id: "uk2",
          name: "Chief Minister's Special Scholarship",
          eligibility: "Students from economically weaker sections",
          deadline: "October 31, 2024",
          provider: "Uttarakhand Higher Education",
          description: "Support for economically backward students",
          applyLink: "https://www.ukgov.edu.in/",
          route: "uttarakhand-cm-special",
        },
      ],
    },
    {
      id: "s19",
      state: "Himachal Pradesh",
      scholarships: [
        {
          id: "hp1",
          name: "IRDP Scholarship",
          eligibility: "Students from IRDP families",
          deadline: "November 15, 2024",
          provider: "Government of Himachal Pradesh",
          description: "Support for students from IRDP families",
          applyLink: "https://www.himachal.nic.in/",
          route: "hp-irdp-scholarship",
        },
        {
          id: "hp2",
          name: "Dr. Ambedkar Medhavi Chhatarvriti Yojna",
          eligibility: "SC/ST students with 60% or above marks",
          deadline: "December 31, 2024",
          provider: "HP Social Justice Department",
          description: "Merit-cum-means scholarship for SC/ST students",
          applyLink: "https://hpscst.nic.in/",
          route: "hp-ambedkar-scholarship",
        },
      ],
    },
    {
      id: "s20",
      state: "Haryana",
      scholarships: [
        {
          id: "hr1",
          name: "Post Matric Scholarship for SC Students",
          eligibility: "SC students pursuing higher education",
          deadline: "October 31, 2024",
          provider: "Government of Haryana",
          description: "Financial assistance for SC category students",
          applyLink: "https://scholarships.highereduhry.ac.in/",
          route: "haryana-sc-scholarship",
        },
        {
          id: "hr2",
          name: "Mukhya Mantri Samajik Samrasta Antarjatiya Vivah Shagun",
          eligibility: "Students from intercaste married families",
          deadline: "November 30, 2024",
          provider: "Haryana Social Justice Department",
          description: "Promoting social harmony through education",
          applyLink: "https://socialjusticehry.gov.in/",
          route: "haryana-samrasta",
        },
      ],
    },
    {
      id: "s21",
      state: "Jammu & Kashmir",
      scholarships: [
        {
          id: "jk1",
          name: "J&K Special Scholarship Scheme",
          eligibility: "Students from J&K pursuing professional courses",
          deadline: "November 30, 2024",
          provider: "Ministry of Education, Government of India",
          description:
            "Special scholarship for J&K students in professional courses",
          applyLink: "https://www.aicte-jk-scholarship-gov.in/",
          route: "jk-special-scholarship",
        },
        {
          id: "jk2",
          name: "Ladakh Resident Students Scholarship",
          eligibility: "Students from Ladakh region pursuing higher education",
          deadline: "October 31, 2024",
          provider: "UT Administration of Ladakh",
          description: "Supporting higher education for Ladakh students",
          applyLink: "https://leh.nic.in/",
          route: "ladakh-scholarship",
        },
      ],
    },
    {
      id: "s22",
      state: "Goa",
      scholarships: [
        {
          id: "ga1",
          name: "Goa State Merit Scholarship",
          eligibility: "Students with 75% or above in Class 12",
          deadline: "December 15, 2024",
          provider: "Directorate of Higher Education, Goa",
          description: "Merit-based scholarship for Goan students",
          applyLink: "https://www.dhe.goa.gov.in/",
          route: "goa-merit-scholarship",
        },
        {
          id: "ga2",
          name: "Chief Minister's Dayanand Samajik Suraksha Yojana",
          eligibility: "Students from economically backward families",
          deadline: "November 15, 2024",
          provider: "Government of Goa",
          description: "Financial support for higher education",
          applyLink: "https://www.goaeducation.gov.in/",
          route: "goa-cm-scholarship",
        },
      ],
    },
    {
      id: "s23",
      state: "Sikkim",
      scholarships: [
        {
          id: "sk1",
          name: "Chief Minister's Merit Scholarship",
          eligibility: "Meritorious students from Sikkim",
          deadline: "September 30, 2024",
          provider: "Government of Sikkim",
          description: "Supporting academic excellence in Sikkim",
          applyLink: "https://www.sikkimhrdd.org/",
          route: "sikkim-cm-scholarship",
        },
        {
          id: "sk2",
          name: "Sikkim State Merit Scholarship",
          eligibility: "Students pursuing professional courses",
          deadline: "October 31, 2024",
          provider: "Education Department, Sikkim",
          description: "Merit-based support for professional education",
          applyLink: "https://www.sikkimeducation.gov.in/",
          route: "sikkim-merit-scholarship",
        },
      ],
    },
    {
      id: "s24",
      state: "Arunachal Pradesh",
      scholarships: [
        {
          id: "ar1",
          name: "State Merit Scholarship",
          eligibility: "Top performers in Class 12 from state board",
          deadline: "November 30, 2024",
          provider: "Government of Arunachal Pradesh",
          description: "Encouraging academic excellence in the state",
          applyLink: "https://www.arunachaleducation.gov.in/",
          route: "arunachal-merit-scholarship",
        },
        {
          id: "ar2",
          name: "Chief Minister's Talent Hunt Scholarship",
          eligibility: "Students excelling in academics and extra-curricular",
          deadline: "December 31, 2024",
          provider: "Department of Education, Arunachal Pradesh",
          description: "Promoting all-round development of students",
          applyLink: "https://www.arunachal.gov.in/",
          route: "arunachal-talent-hunt",
        },
      ],
    },
    {
      id: "s25",
      state: "Manipur",
      scholarships: [
        {
          id: "mn1",
          name: "State Merit Scholarship Scheme",
          eligibility: "Students with excellent academic records",
          deadline: "October 15, 2024",
          provider: "Government of Manipur",
          description: "Supporting meritorious students in higher education",
          applyLink: "https://www.manipureducation.gov.in/",
          route: "manipur-merit-scholarship",
        },
        {
          id: "mn2",
          name: "OBC/SC/ST Scholarship",
          eligibility: "Students from OBC/SC/ST communities",
          deadline: "November 30, 2024",
          provider: "Manipur Tribal Development Corporation",
          description: "Financial assistance for backward communities",
          applyLink: "https://manipur.gov.in/",
          route: "manipur-obc-scholarship",
        },
      ],
    },
    {
      id: "s26",
      state: "Meghalaya",
      scholarships: [
        {
          id: "ml1",
          name: "Meghalaya State Merit Scholarship",
          eligibility: "Top performers in state board examinations",
          deadline: "December 15, 2024",
          provider: "Government of Meghalaya",
          description: "Promoting academic excellence in the state",
          applyLink: "https://www.meghalayaeducation.gov.in/",
          route: "meghalaya-merit-scholarship",
        },
        {
          id: "ml2",
          name: "Chief Minister's Special Scholarship",
          eligibility: "Students pursuing professional courses outside state",
          deadline: "October 31, 2024",
          provider: "Education Department, Meghalaya",
          description: "Supporting professional education outside state",
          applyLink: "https://www.meghalaya.gov.in/",
          route: "meghalaya-cm-scholarship",
        },
      ],
    },
    {
      id: "s27",
      state: "Mizoram",
      scholarships: [
        {
          id: "mz1",
          name: "Post Matric Scholarship",
          eligibility: "Students from ST communities",
          deadline: "November 15, 2024",
          provider: "Government of Mizoram",
          description: "Supporting tribal students in higher education",
          applyLink: "https://scholarship.mizoram.gov.in/",
          route: "mizoram-post-matric",
        },
        {
          id: "mz2",
          name: "Merit Scholarship Scheme",
          eligibility: "Meritorious students from Mizoram",
          deadline: "December 31, 2024",
          provider: "Education Department, Mizoram",
          description: "Encouraging academic excellence",
          applyLink: "https://education.mizoram.gov.in/",
          route: "mizoram-merit-scholarship",
        },
      ],
    },
    {
      id: "s28",
      state: "Nagaland",
      scholarships: [
        {
          id: "nl1",
          name: "State Merit Scholarship",
          eligibility: "Top performers in Class 10 and 12",
          deadline: "October 31, 2024",
          provider: "Government of Nagaland",
          description: "Supporting academic excellence in Nagaland",
          applyLink: "https://education.nagaland.gov.in/",
          route: "nagaland-merit-scholarship",
        },
        {
          id: "nl2",
          name: "Research Scholarship Scheme",
          eligibility: "Students pursuing research in state universities",
          deadline: "November 30, 2024",
          provider: "Higher Education Department, Nagaland",
          description: "Promoting research and development",
          applyLink: "https://www.nagaland.gov.in/",
          route: "nagaland-research-scholarship",
        },
      ],
    },
  ];

  return (
    <Container className="scholarship-container py-5">
      <h2 className="scholarship-title text-center mb-4">
        Available Scholarships in India
      </h2>

      <Nav variant="tabs" className="mb-4">
        <Nav.Item>
          <Nav.Link
            active={activeTab === "national"}
            onClick={() => setActiveTab("national")}
          >
            National Scholarships
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active={activeTab === "state"}
            onClick={() => setActiveTab("state")}
          >
            State-Wise Scholarships
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {activeTab === "national" ? (
        <Row className="g-4">
          {scholarships.map((scholarship) => (
            <Col key={scholarship.id} xs={12} md={6} lg={4}>
              <Card className="scholarship-card h-100 shadow-sm">
                <Card.Body>
                  <div className="scholarship-header mb-3">
                    <Badge bg="primary" className="scholarship-category">
                      {scholarship.category}
                    </Badge>
                    <h5 className="scholarship-name mt-2">
                      <Link
                        to={`/scholarships/${scholarship.route}`}
                        className="text-decoration-none text-dark"
                      >
                        {scholarship.name}
                      </Link>
                    </h5>
                  </div>

                  <div className="scholarship-details">
                    <p className="scholarship-provider">
                      <strong>Provider:</strong> {scholarship.provider}
                    </p>
                    <p className="scholarship-eligibility">
                      <strong>Eligibility:</strong> {scholarship.eligibility}
                    </p>
                    <p className="scholarship-deadline">
                      <strong>Apply Before:</strong> {scholarship.deadline}
                    </p>
                  </div>

                  <div className="scholarship-actions mt-3">
                    <Button
                      variant="outline-primary"
                      className="me-2 scholarship-apply-btn"
                      href={scholarship.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </Button>
                    <Link
                      to={`/scholarships/${scholarship.route}`}
                      className="btn btn-link scholarship-more-btn"
                    >
                      View Details →
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        stateScholarships.map((stateData) => (
          <div key={stateData.id} className="state-scholarship-section mb-5">
            <h3 className="state-title mb-4">
              <Badge bg="secondary" className="state-badge me-2">
                {stateData.state}
              </Badge>
            </h3>
            <Row className="g-4">
              {stateData.scholarships.map((scholarship) => (
                <Col key={scholarship.id} xs={12} md={6}>
                  <Card className="state-scholarship-card h-100 shadow-sm">
                    <Card.Body>
                      <div className="scholarship-header mb-3">
                        <h5 className="scholarship-name">
                          <Link
                            to={`/scholarships/state/${scholarship.route}`}
                            className="text-decoration-none text-dark"
                          >
                            {scholarship.name}
                          </Link>
                        </h5>
                      </div>

                      <div className="scholarship-details">
                        <p className="scholarship-provider">
                          <strong>Provider:</strong> {scholarship.provider}
                        </p>
                        <p className="scholarship-eligibility">
                          <strong>Eligibility:</strong>{" "}
                          {scholarship.eligibility}
                        </p>
                        <p className="scholarship-deadline">
                          <strong>Apply Before:</strong> {scholarship.deadline}
                        </p>
                        <p className="scholarship-description">
                          {scholarship.description}
                        </p>
                      </div>

                      <div className="scholarship-actions mt-3">
                        <Button
                          variant="outline-primary"
                          className="me-2 scholarship-apply-btn"
                          href={scholarship.applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply Now
                        </Button>
                        <Link
                          to={`/scholarships/state/${scholarship.route}`}
                          className="btn btn-link scholarship-more-btn"
                        >
                          View Details →
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))
      )}
    </Container>
  );
};
