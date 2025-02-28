const axios = require("axios");

const HF_API_KEY =process.env.HUGGINGFACE_API_KEY; // Replace with your Hugging Face API key

exports.calculateCreativityScore = async (req, res) => {
    try {
        const { questions } = req.body;

        if (!questions || !Array.isArray(questions) || questions.length === 0) {
            return res.status(400).json({ message: "Invalid input. Provide questions with answers." });
        }

        let results = [];

        for (let { question, answers } of questions) {
            if (!answers || !Array.isArray(answers) || answers.length === 0) {
                continue;
            }

            let numResponsesScore = Math.min(answers.length, 10);
            let categorySet = new Set();
            let uniqueAnswers = new Set();
            let totalDetailScore = 0;

            for (let answer of answers) {
                uniqueAnswers.add(answer.trim().toLowerCase());

                let category = await classifyAnswerCategory(answer);
                categorySet.add(category);

                let detailScore = await calculateDetailDepth(answer);
                totalDetailScore += detailScore;
            }

            let varietyScore = Math.min(categorySet.size, 10);
            let uniquenessScore = Math.min(uniqueAnswers.size, 10);
            let detailScore = Math.min(totalDetailScore / answers.length, 10);

            let totalCreativityScore = numResponsesScore + varietyScore + uniquenessScore + detailScore;

            results.push({
                question,
                numResponsesScore,
                varietyScore,
                uniquenessScore,
                detailScore,
                totalCreativityScore,
                maxScore: 40
            });
        }

        return res.status(200).json({
            results,
            summary: summarizeCreativity(results)
        });

    } catch (error) {
        console.error("Error calculating creativity score:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const classifyAnswerCategory = async (answer) => {
    
    try {
        const response = await axios.post(
            "https://api-inference.huggingface.co/models/facebook/bart-large-mnli",
            { inputs: answer },
            { headers: { Authorization: `Bearer ${HF_API_KEY}` } }
        );

        return response.data?.labels?.[0] || "Other";
    } catch (error) {
        console.error("Error classifying category:", error);
        return "Other";
    }
};

const calculateDetailDepth = async (answer) => {
    try {
        const response = await axios.post(
            "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
            { inputs: answer },
            { headers: { Authorization: `Bearer ${HF_API_KEY}` } }
        );

        let wordCount = answer.split(" ").length;
        if (wordCount > 20) return 10;
        if (wordCount > 15) return 8;
        if (wordCount > 10) return 6;
        if (wordCount > 5) return 4;
        return 2;
    } catch (error) {
        console.error("Error analyzing detail depth:", error);
        return 2;
    }
};

const summarizeCreativity = (results) => {
    let totalScore = results.reduce((sum, r) => sum + r.totalCreativityScore, 0);
    let avgScore = totalScore / results.length;

    if (avgScore >= 35) return "Highly Creative (Innovator)";
    if (avgScore >= 25) return "Creative Thinker (Above Average)";
    if (avgScore >= 15) return "Moderately Creative (Average)";
    return "Low Creativity (Needs Improvement)";
};

