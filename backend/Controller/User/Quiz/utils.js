const data = {
  IQ_Range_Lookup_Table: {
    description: "IQ Range Lookup Table for 20 Questions (Time & Age-Adjusted)",
    data: [
      {
        correct_answers: [0, 3],
        time_taken_minutes: 60,
        age_group: null,
        percentile: [0, 5],
        estimated_iq_range: [0, 70],
        description: "Intellectual Disability",
      },
      {
        correct_answers: [4, 6],
        time_taken_minutes: 60,
        age_group: null,
        percentile: [5, 25],
        estimated_iq_range: [70, 90],
        description: "Low Average",
      },
      {
        correct_answers: [7, 10],
        time_taken_minutes: 20,
        age_group: null,
        percentile: [25, 50],
        estimated_iq_range: [90, 100],
        description: "Average IQ",
      },
      {
        correct_answers: [7, 10],
        time_taken_minutes: [10, 20],
        age_group: null,
        percentile: [30, 55],
        estimated_iq_range: [95, 105],
        description: "Average IQ, Faster Processing",
      },
      {
        correct_answers: [11, 14],
        time_taken_minutes: 20,
        age_group: null,
        percentile: [50, 75],
        estimated_iq_range: [100, 110],
        description: "Above Average",
      },
      {
        correct_answers: [11, 14],
        time_taken_minutes: [10, 20],
        age_group: null,
        percentile: [55, 80],
        estimated_iq_range: [105, 115],
        description: "Higher Processing Speed",
      },
      {
        correct_answers: [15, 16],
        time_taken_minutes: 15,
        age_group: null,
        percentile: [75, 85],
        estimated_iq_range: [110, 120],
        description: "High Average",
      },
      {
        correct_answers: [15, 16],
        time_taken_minutes: [10, 15],
        age_group: null,
        percentile: [80, 90],
        estimated_iq_range: [115, 125],
        description: "Faster Problem Solving",
      },
      {
        correct_answers: [17, 18],
        time_taken_minutes: 15,
        age_group: null,
        percentile: [90, 95],
        estimated_iq_range: [120, 130],
        description: "Superior IQ",
      },
      {
        correct_answers: [17, 18],
        time_taken_minutes: [10, 15],
        age_group: null,
        percentile: [90, 97],
        estimated_iq_range: [125, 135],
        description: "Highly Intelligent",
      },
      {
        correct_answers: [19],
        time_taken_minutes: 10,
        age_group: null,
        percentile: [95, 99],
        estimated_iq_range: [130, 140],
        description: "Gifted/Very Superior IQ",
      },
      {
        correct_answers: [19],
        time_taken_minutes: 10,
        age_group: null,
        percentile: [98, 100],
        estimated_iq_range: [135, 145],
        description: "Exceptional Processing Speed",
      },
      {
        correct_answers: [20],
        time_taken_minutes: 10,
        age_group: null,
        percentile: [99, 100],
        estimated_iq_range: [140, 1000],
        description: "Highly Gifted",
      },
      {
        correct_answers: [20],
        time_taken_minutes: 10,
        age_group: null,
        percentile: [99.5, 100],
        estimated_iq_range: [145, 1000],
        description: "Genius Level IQ",
      },
    ],
  },
};

exports.calculateIQ = (correctAnswers, timeTaken) => {
  const iqTable = data.IQ_Range_Lookup_Table.data;
  console.log(correctAnswers, timeTaken);
  for (let entry of iqTable) {
    if (
      matchRange(entry.correct_answers, correctAnswers) &&
      matchTime(entry.time_taken_minutes, timeTaken)
    ) {
      return entry;
    }
  }
  return { estimated_iq_range: "Unknown", percentile: "Unknown" };
};

const matchRange = (range, value) => {
  if (range.length === 1) {
    return value === range[0]; // Treat single-value array as a single number
  }
  return value >= range[0] && value <= range[1];
};

const matchTime = (ordTime, time) => {
  return time <= ordTime;
};
