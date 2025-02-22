const Quiz = require("../../../Models/TestPattern/quiz");
const Question = require("../../../Models/TestPattern/question");
const Answer = require("../../../Models/TestPattern/answer");

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll({
      where: {
        isActive: true,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Quizzes retrieved successfully",
      data: quizzes,
    });
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.getQuestions = async (req, res) => {
  const { quizId } = req.body;

  try {
    // Fetch questions along with their answers
    const questions = await Question.findAll({
      where: {
        quizId: quizId,
        isActive: true,
      },
      include: [
        {
          model: Answer,
          attributes: ["id", "text", "imageUrl", "type"], // Fetch only necessary fields
        },
      ],
    });

    if (!questions.length) {
      return res.status(404).json({
        success: false,
        message: "No questions found for this quiz.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Questions retrieved successfully",
      data: questions,
    });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};






//Sumbit Quiz --

exports.submitQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body; // answers = [{ questionId, selectedAnswerId }, ...]
    
    // Validate input
    if (!quizId || !Array.isArray(answers)) {
      return res.status(400).json({ success: false, message: "Invalid request data" });
    }

    // Fetch all questions for the quiz
    const questions = await Question.findAll({ where: {QuizId:quizId } });
    if (!questions.length) {
      return res.status(404).json({ success: false, message: "Quiz not found or has no questions" });
    }

    let totalWeight = 0;
    let userScore = 0;
    let attemptedQuestions = 0;

    for (let question of questions) {
      totalWeight += question.weight; // Total possible score
      
      // Find if the user answered this question
      const userAnswer = answers.find(ans => ans.QuestionId === question.id);
      
      if (userAnswer) {
        attemptedQuestions++;

        // Check if the answer is correct
        if (userAnswer.selectedAnswerId === question.correctAnswerId) {
          userScore += question.weight; // Add weight of the correct question to the score
        }
      }
    }

    // Calculate percentage score
    const percentage = (userScore / totalWeight) * 100;

    // Determine IQ Level based on score percentage
    let iqLevel;
    if (percentage >= 90) iqLevel = "Genius";
    else if (percentage >= 75) iqLevel = "Above Average";
    else if (percentage >= 50) iqLevel = "Average";
    else iqLevel = "Below Average";

    return res.status(200).json({
      success: true,
      message: "Quiz submitted successfully",
      data: {
        totalQuestions: questions.length,
        attemptedQuestions,
        correctAnswers: userScore / Math.max(...questions.map(q => q.weight)), // Approximate correct count
        score: userScore,
        percentage: percentage.toFixed(2),
        iqLevel,
      },
    });
  } catch (error) {
    console.error("Error submitting quiz:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
