const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


exports.calculateCreativityScore = async (req, res) => {
  try {
    const { questions, answers } = req.body;

    if (!questions || !answers || questions.length !== answers.length) {
      return res.status(400).json({ error: "Invalid request body." });
    }

    const results = [];

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const answer = answers[i];

      const fluency = answer.split(",").length; // Assuming comma-separated answers

      const flexibilityPrompt = `Categorize these responses into different categories: ${answer}. Return the categories only, separated by commas.`;
      const flexibilityResponse = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: flexibilityPrompt,
        max_tokens: 100,
      });
      const flexibilityCategories = flexibilityResponse.choices[0].text.trim().split(",").filter(Boolean);
      const flexibility = new Set(flexibilityCategories).size;

      const originalityPrompt = `Compare these responses to common answers and rate their originality (1-10, 10 being most original): ${answer}. Return only the numerical score.`;
      const originalityResponse = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: originalityPrompt,
        max_tokens: 10,
      });
      const originality = parseInt(originalityResponse.choices[0].text.trim());

      const elaborationPrompt = `Rate the level of detail and descriptiveness in these responses (1-10, 10 being most elaborate): ${answer}. Return only the numerical score.`;
      const elaborationResponse = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: elaborationPrompt,
        max_tokens: 10,
      });
      const elaboration = parseInt(elaborationResponse.choices[0].text.trim());

      const totalScore = fluency + flexibility + originality + elaboration;

      let creativityLevel = "Low Creativity (Needs Improvement)";
      if (totalScore >= 35) {
        creativityLevel = "Highly Creative (Innovator)";
      } else if (totalScore >= 25) {
        creativityLevel = "Creative Thinker (Above Average)";
      } else if (totalScore >= 15) {
        creativityLevel = "Moderately Creative (Average)";
      }

      results.push({
        question,
        answer,
        fluency,
        flexibility,
        originality,
        elaboration,
        totalScore,
        creativityLevel,
      });
    }

    // Summarize the results
    const summary = results.map(result => `
      Question: ${result.question}
      Answer: ${result.answer}
      Creativity Score: ${result.totalScore}
      Creativity Level: ${result.creativityLevel}
    `).join("\n\n");

    res.json({ results, summary });

  } catch (error) {
    console.error("Error calculating creativity score:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}


