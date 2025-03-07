const data20 = {
    IQ_Range_Lookup_Table: {
      description: "20 Questions (Time & Age-Adjusted) ke liye IQ Range Lookup Table",
      data: [
        {
          correct_answers: [0, 3],
          time_taken_minutes: 60,
          age_group: null,
          percentile: [0, 5],
          estimated_iq_range: [0, 70],
          label: "70 se kam",
          description: "Intellectual Disability",
        },
        {
          correct_answers: [4, 6],
          time_taken_minutes: 60,
          age_group: null,
          percentile: [5, 25],
          estimated_iq_range: [70, 90],
          description: "Low Average",
          label: "70-90",
        },
        {
          correct_answers: [7, 10],
          time_taken_minutes: 20,
          age_group: null,
          percentile: [25, 50],
          estimated_iq_range: [90, 100],
          description: "Average IQ",
          label: "90-100",
        },
        {
          correct_answers: [7, 10],
          time_taken_minutes: [10, 20],
          age_group: null,
          percentile: [30, 55],
          estimated_iq_range: [95, 105],
          description: "Average IQ, Faster Processing",
          label: "95-105",
        },
        {
          correct_answers: [11, 14],
          time_taken_minutes: 20,
          age_group: null,
          percentile: [50, 75],
          estimated_iq_range: [100, 110],
          description: "Above Average",
          label: "100-110",
        },
        {
          correct_answers: [11, 14],
          time_taken_minutes: [10, 20],
          age_group: null,
          percentile: [55, 80],
          estimated_iq_range: [105, 115],
          description: "Higher Processing Speed",
          label: "105-115",
        },
        {
          correct_answers: [15, 16],
          time_taken_minutes: 15,
          age_group: null,
          percentile: [75, 85],
          estimated_iq_range: [110, 120],
          description: "High Average",
          label: "110-120",
        },
        {
          correct_answers: [15, 16],
          time_taken_minutes: [10, 15],
          age_group: null,
          percentile: [80, 90],
          estimated_iq_range: [115, 125],
          description: "Faster Problem Solving",
          label: "115-125",
        },
        {
          correct_answers: [17, 18],
          time_taken_minutes: 15,
          age_group: null,
          percentile: [90, 95],
          estimated_iq_range: [120, 130],
          description: "Superior IQ",
          label: "120-130",
        },
        {
          correct_answers: [17, 18],
          time_taken_minutes: [10, 15],
          age_group: null,
          percentile: [90, 97],
          estimated_iq_range: [125, 135],
          description: "Highly Intelligent",
          label: "125-135",
        },
        {
          correct_answers: [19],
          time_taken_minutes: 10,
          age_group: null,
          percentile: [95, 99],
          estimated_iq_range: [130, 140],
          description: "Gifted/Very Superior IQ",
          label: "130-140",
        },
        {
          correct_answers: [19],
          time_taken_minutes: 10,
          age_group: null,
          percentile: [98, 100],
          estimated_iq_range: [135, 145],
          description: "Exceptional Processing Speed",
          label: "135-145",
        },
        {
          correct_answers: [20],
          time_taken_minutes: 10,
          age_group: null,
          percentile: [99, 100],
          estimated_iq_range: [140, 1000],
          description: "Highly Gifted",
          label: "140+",
        },
        {
          correct_answers: [20],
          time_taken_minutes: 10,
          age_group: null,
          percentile: [99.5, 100],
          estimated_iq_range: [145, 1000],
          description: "Genius Level IQ",
          label: "145+",
        },
      ],
    },
  };
  
  
  const data60 = {
    IQ_Range_Lookup_Table: {
      description: "60 Questions ke liye IQ Range Lookup Table",
      data: [
        { correct_answers: [0, 19], label: "Below 70" },
        { correct_answers: [20], label: 70 },
        { correct_answers: [21], label: 72 },
        { correct_answers: [22], label: 74 },
        { correct_answers: [23], label: 76 },
        { correct_answers: [24], label: 77.5 },
        { correct_answers: [25], label: 80 },
        { correct_answers: [26], label: 82.5 },
        { correct_answers: [27], label: 85 },
        { correct_answers: [28], label: 87.5 },
        { correct_answers: [29], label: 90 },
        { correct_answers: [30], label: 92.5 },
        { correct_answers: [31], label: 95 },
        { correct_answers: [32], label: 97.5 },
        { correct_answers: [33], label: 100 },
        { correct_answers: [34], label: 102.5 },
        { correct_answers: [35], label: 105 },
        { correct_answers: [36], label: 107.5 },
        { correct_answers: [37], label: 110 },
        { correct_answers: [38], label: 112.5 },
        { correct_answers: [39], label: 115 },
        { correct_answers: [40], label: 115 },
        { correct_answers: [41], label: 117.5 },
        { correct_answers: [42], label: 120 },
        { correct_answers: [43], label: 122.5 },
        { correct_answers: [44], label: 125 },
        { correct_answers: [45], label: 127.5 },
        { correct_answers: [46], label: 130 },
        { correct_answers: [47], label: 132.5 },
        { correct_answers: [48], label: 135 },
        { correct_answers: [49], label: 137.5 },
        { correct_answers: [50], label: 140 },
        { correct_answers: [51], label: 142.5 },
        { correct_answers: [52], label: 145 },
        { correct_answers: [53], label: 147.5 },
        { correct_answers: [54], label: 150 },
        { correct_answers: [55], label: 152.5 },
        { correct_answers: [56], label: 155 },
        { correct_answers: [57], label: 157.5 },
        { correct_answers: [58], label: 160 },
        { correct_answers: [59], label: 162.5 },
        { correct_answers: [60], label: "165+" },
      ],
    },
  };
  
  exports.calculateIQ = (correctAnswers, timeTaken, totalQuestions) => {
    if (totalQuestions === 20) {
      return calculateIQ20(correctAnswers, timeTaken);
    } else if (totalQuestions === 60) {
      return calculateIQ60(correctAnswers);
    } else {
      return "Invalid number of questions.";
    }
  }
  
  function calculateIQ20(correctAnswers, timeTaken) {
    const iqTable = data20.IQ_Range_Lookup_Table.data;
  
    for (let entry of iqTable) {
      if (
        matchRange(entry.correct_answers, correctAnswers) &&
        matchTime(entry.time_taken_minutes, timeTaken)
      ) {
        return entry;
      }
    }
    return { estimated_iq_range: "Unknown", percentile: "Unknown" };
  }
  
  function calculateIQ60(correctAnswers) {
      const iqTable = data60.IQ_Range_Lookup_Table.data;
  
      for(let entry of iqTable){
          if(matchRange(entry.correct_answers, correctAnswers)){
              return entry;
          }
      }
      return {estimated_iq_range: "Unknown"};
  }
  
  const matchRange = (range, value) => {
    if (Array.isArray(range)) {
      if (range.length === 1) {
        return value === range[0];
      }
      return value >= range[0] && value <= range[1];
    } else {
      return value === range;
    }
  };
  
  const matchTime = (ordTime, time) => {
    if (Array.isArray(ordTime)) {
      return time >= ordTime[0] && time <= ordTime[1];
    } else {
      return time <= ordTime;
    }
  };
  
