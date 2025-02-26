const data={
  "IQ_Range_Lookup_Table": {
    "description": "IQ Range Lookup Table for 20 Questions (Time & Age-Adjusted)",
    "data": [
      {
        "Correct_Answers": "0-3",
        "Time_Taken_Minutes": "Any",
        "Age_Group": "Any",
        "Percentile": "Below 5th",
        "Estimated_IQ_Range": "Below 70 (Intellectual Disability)"
      },
      {
        "Correct_Answers": "4-6",
        "Time_Taken_Minutes": "Any",
        "Age_Group": "Any",
        "Percentile": "5th-25th",
        "Estimated_IQ_Range": "70-90 (Low Average)"
      },
      {
        "Correct_Answers": "7-10",
        "Time_Taken_Minutes": "20 min",
        "Age_Group": "Any",
        "Percentile": "25th-50th",
        "Estimated_IQ_Range": "90-100 (Average IQ)"
      },
      {
        "Correct_Answers": "7-10",
        "Time_Taken_Minutes": "10-20 min",
        "Age_Group": "Any",
        "Percentile": "30th-55th",
        "Estimated_IQ_Range": "95-105 (Average IQ, Faster Processing)"
      },
      {
        "Correct_Answers": "11-14",
        "Time_Taken_Minutes": "20 min",
        "Age_Group": "Any",
        "Percentile": "50th-75th",
        "Estimated_IQ_Range": "100-110 (Above Average)"
      },
      {
        "Correct_Answers": "11-14",
        "Time_Taken_Minutes": "10-20 min",
        "Age_Group": "Any",
        "Percentile": "55th-80th",
        "Estimated_IQ_Range": "105-115 (Higher Processing Speed)"
      },
      {
        "Correct_Answers": "15-16",
        "Time_Taken_Minutes": ">15 min",
        "Age_Group": "Any",
        "Percentile": "75th-85th",
        "Estimated_IQ_Range": "110-120 (High Average)"
      },
      {
        "Correct_Answers": "15-16",
        "Time_Taken_Minutes": "10-15 min",
        "Age_Group": "Any",
        "Percentile": "80th-90th",
        "Estimated_IQ_Range": "115-125 (Faster Problem Solving)"
      },
      {
        "Correct_Answers": "17-18",
        "Time_Taken_Minutes": "15 min",
        "Age_Group": "Any",
        "Percentile": "90th-95th",
        "Estimated_IQ_Range": "120-130 (Superior IQ)"
      },
      {
        "Correct_Answers": "17-18",
        "Time_Taken_Minutes": "10-15 min",
        "Age_Group": "Any",
        "Percentile": "90th-97th",
        "Estimated_IQ_Range": "125-135 (Highly Intelligent)"
      },
      {
        "Correct_Answers": "19",
        "Time_Taken_Minutes": "<10 min",
        "Age_Group": "Any",
        "Percentile": "95th-99th",
        "Estimated_IQ_Range": "130-140 (Gifted/Very Superior IQ)"
      },
      {
        "Correct_Answers": "19",
        "Time_Taken_Minutes": "<10 min",
        "Age_Group": "Any",
        "Percentile": "98th+",
        "Estimated_IQ_Range": "135-145 (Exceptional Processing Speed)"
      },
      {
        "Correct_Answers": "20",
        "Time_Taken_Minutes": "<10 min",
        "Age_Group": "Any",
        "Percentile": "Above 99th",
        "Estimated_IQ_Range": "140+ (Highly Gifted)"
      },
      {
        "Correct_Answers": "20",
        "Time_Taken_Minutes": "<10 min",
        "Age_Group": "Any",
        "Percentile": "Above 99.5th",
        "Estimated_IQ_Range": "145+ (Genius Level IQ)"
      }
    ]
  }
}





exports.calculateIQ = (correctAnswers, timeTaken) => {
  const iqTable = data.IQ_Range_Lookup_Table.data;

  for (let entry of iqTable) {
    if (
      matchRange(entry.Correct_Answers, correctAnswers) &&
      matchTime(entry.Time_Taken_Minutes, timeTaken)
    ) {
      return entry;
    }
  }
  return { Estimated_IQ_Range: "Unknown", Percentile: "Unknown" };
};

const matchRange = (range, value) => {
  if (range.includes("-")) {
    const [min, max] = range.split("-").map(Number);
    return value >= min && value <= max;
  }
  return value == Number(range);
};

const matchTime = (range, time) => {
  if (range.includes("-")) {
    const [min, max] = range.split("-").map(Number);
    return time >= min && time <= max;
  }
  if (range.includes(">")) {
    return time > Number(range.replace(">", ""));
  }
  if (range.includes("<")) {
    return time < Number(range.replace("<", ""));
  }
  return time == Number(range);
};
