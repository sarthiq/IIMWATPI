export const calculateResults = (answers, totalQuestions, grade) => {
  // Calculate percentage for each option
  const percentages = {};
  for (const [option, count] of Object.entries(answers)) {
    percentages[option] = (count / totalQuestions) * 100;
  }

  // Sort options by count in descending order
  const sortedOptions = Object.entries(answers)
    .sort(([, a], [, b]) => b - a)
    .map(([option]) => option);

  // If any option has > 51%, return single recommendation
  const dominantOption = Object.entries(percentages).find(([, percent]) => percent >= 51);
  if (dominantOption) {
    return [getRecommendation(dominantOption[0], grade)];
  }

  // Otherwise return top 3 recommendations
  return sortedOptions
    .slice(0, 3)
    .map(option => getRecommendation(option, grade));
};

const getRecommendation = (option, grade) => {
  const recommendations = {
    10: {
      A: "Science & Technology: Consider Science (PCM/PCB), Engineering, Medicine, or IT. Ideal for those who enjoy logical problem-solving, experiments, and technology.",
      B: "Commerce & Business: Explore Commerce, Business Studies, Economics, or Finance. Best for those who like strategy, finance, and managing businesses.",
      C: "Arts & Creative Fields: Consider Humanities, Fine Arts, Literature, or Media Studies. Suitable for those with strong artistic, literary, or creative skills.",
      D: "Social Sciences: Look into Political Science, History, Psychology, or Sociology. Great for individuals interested in society, human behavior, and social change."
    },
    12: {
      A: "Science (PCM - Physics, Chemistry, Mathematics): Great for future engineers, architects, and scientists!",
      B: "Science (PCB - Physics, Chemistry, Biology): Ideal for aspiring doctors, biotechnologists, and healthcare professionals!",
      C: "Commerce (Business Studies, Accountancy, Economics): Perfect for future entrepreneurs, bankers, and business leaders!",
      D: "Arts with Performing Arts (Music, Dance, Drama): For those passionate about creative arts and entertainment!",
      E: "Arts/Humanities (Political Science, History, Psychology, Sociology, etc.): Best for future lawyers, historians, journalists, and civil service aspirants!"
    },
    16: {
      A: "Science, Technology, Engineering, and Mathematics (STEM)",
      B: "Medical, Healthcare, and Life Sciences",
      C: "Business, Economics, and Finance",
      D: "Arts, Media, and Communication",
      E: "Social Sciences, Humanities, and Political Studies"
    }
  };

  return recommendations[grade]?.[option] || "No specific recommendation available";
};
//h