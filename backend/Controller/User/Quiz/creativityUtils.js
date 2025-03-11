const { HfInference } = require("@huggingface/inference");

const client = new HfInference(process.env.HUGGINGFACE_API_KEY);

exports.calculateCreativityScore = async (datas) => {
  const results = {};
  const wholeCategoryScores = {
    fluency: 0,
    flexibility: 0,
    originality: 0,
    elaboration: 0,
  };

  for (const id in datas) {
    const data = datas[id];
    const question = data.question;
    const answers = data.answers.slice(0, 10); // Take max 10 answers
    const releventAnswers = await calculateSimilarity(question, answers);

    const scores = {
      fluency: 0, // Initialize fluency to 0, will calculate in loop
      flexibility: 0,
      originality: 0,
      elaboration: 0,
    };

    
    // Process each answer first
    for (let i = 0; i < answers.length; i++) {
      const answer = answers[i];
      let similarity = releventAnswers[i];
      if (similarity >= 0.5) {
        similarity = 1;
      } else if (similarity >= 0.25) {
        similarity = similarity + ((1 - similarity) * (similarity - 0.25) / 0.25);
      }

      // Only count relevant answers for fluency (similarity > threshold)
      if (similarity > 0.5) { // Using 0.5 as relevance threshold
        scores.fluency += similarity;
      }

      // Calculate category scores for this answer
      const flexibilityResult = await calculateCategoryScore(answer, [
        "practical",
        "creativity",
      ]);
      const originalityResult = await calculateCategoryScore(answer, [
        "unique",
      ]);
      const elaborationResult = await calculateCategoryScore(answer, [
        "elaborated",
      ]);

      // Calculate scores using multiplication
      const flexibilityScore =
        (flexibilityResult.scores.reduce((sum, score) => sum + score, 0) /
          flexibilityResult.scores.length) *
        similarity;
      const originalityScore = originalityResult.scores[0] * similarity;
      const elaborationScore = elaborationResult.scores[0] * similarity;

      // Add to category totals
      scores.flexibility += flexibilityScore;
      scores.originality += originalityScore;
      scores.elaboration += elaborationScore;
    }

    // Calculate average for each category
    scores.flexibility = parseFloat(scores.flexibility.toFixed(2));
    scores.originality = parseFloat(scores.originality.toFixed(2));
    scores.elaboration = parseFloat(scores.elaboration.toFixed(2));

    // Add to whole category scores
    wholeCategoryScores.fluency += scores.fluency;
    wholeCategoryScores.flexibility += scores.flexibility;
    wholeCategoryScores.originality += scores.originality;
    wholeCategoryScores.elaboration += scores.elaboration;

    // Calculate total score for this question
    const totalScore = Object.values(scores).reduce(
      (sum, score) => sum + score,
      0
    );

    // Assign creativity label
    if (totalScore < 15) {
      scores.label = "Low Creativity";
    } else if (totalScore >= 15 && totalScore < 24) {
      scores.label = "Moderately Creativity";
    } else if (totalScore >= 24 && totalScore < 25) {
      scores.label = "Creative Thinker";
    } else {
      scores.label = "High Creative";
    }

    scores.total = totalScore.toFixed(2);
    results[id] = scores;
  }

  // Calculate average scores across all questions
  const numQuestions = Object.keys(datas).length;
  for (const category in wholeCategoryScores) {
    wholeCategoryScores[category] = parseFloat(
      (wholeCategoryScores[category] / numQuestions).toFixed(2)
    );
  }

  // Calculate overall score and label
  let wholeScore = 0;
  for (const id in results) {
    wholeScore += parseFloat(results[id].total);
  }
  wholeScore = wholeScore / numQuestions;

  let wholeScoreLabel;
  if (wholeScore < 15 || !wholeScore) {
    wholeScoreLabel = "Low Creativity";
  } else if (wholeScore >= 15 && wholeScore < 24) {
    wholeScoreLabel = "Moderately Creativity";
  } else if (wholeScore >= 24 && wholeScore < 25) {
    wholeScoreLabel = "Creative Thinker";
  } else {
    wholeScoreLabel = "High Creative";
  }

  results.total = wholeScore;
  results.label = wholeScoreLabel;
  results.categoryScores = wholeCategoryScores;

  return results;
};

async function calculateSimilarity(question, answers) {
  const output = await client.sentenceSimilarity({
    model: "sentence-transformers/all-mpnet-base-v2",
    inputs: {
      source_sentence: question,
      sentences: answers,
    },
    provider: "hf-inference",
  });
  return output;
}

async function calculateCategoryScore(answer, categories) {
  const data = {
    inputs: answer,
    parameters: {
      candidate_labels: categories,
    },
  };
  const response = await fetch(
    "https://router.huggingface.co/hf-inference/models/facebook/bart-large-mnli",
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  return result;
}
