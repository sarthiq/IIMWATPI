const UserQuiz = require("../../../Models/AndModels/UserQuiz");
const PersonalityQuestion = require("../../../Models/TestPattern/personalityQuestion");
const Question = require("../../../Models/TestPattern/question");
const Quiz = require("../../../Models/TestPattern/quiz");
const UserQuizPQuestion = require("../../../Models/AndModels/UserQuizPQuestion");
const UserQuizQuestion = require("../../../Models/AndModels/UserQuizQuestion");

exports.getUserResult = async (req, res) => {
  try {
    

    if(!req.user){
      return res.status(503).json({
        success: false,
        message: "Please login to get your results",
      });
    }

    const userId = req.user.id;

    // Get the latest result for each quiz type
    const results = await UserQuiz.findAll({
      where: {
        UserId: userId,
      },
      order: [["createdAt", "DESC"]], // Get latest attempts first
    });

    // Organize results by quiz type
    const latestResults = {
      iq: null,
      personality: null,
      creativity: null,
    };

    // Process results to get latest of each type
    for (const result of results) {
      const quizType = result.type;

      // Only store if we haven't found this type yet (since results are ordered by latest first)
      if (!latestResults[quizType]) {
        let detailedResult;

        if (quizType === "personality") {
          // Fetch personality quiz details
          detailedResult = await UserQuiz.findOne({
            where: { id: result.id },
            include: [
              {
                model: PersonalityQuestion,
                through: UserQuizPQuestion,
              },
            ],
          });
        } else if (quizType === "iq" || quizType === "creativity") {
          // Fetch IQ or Creativity quiz details
          detailedResult = await UserQuiz.findOne({
            where: { id: result.id },
            include: [
              {
                model: Question,
                through: UserQuizQuestion,
              },
            ],
          });
        }

        latestResults[quizType] = {
          quizId: result.QuizId,
          score: result.score,
          completedAt: result.createdAt,
          detailedResult: detailedResult,
        };
      }
    }

    return res.status(200).json({
      success: true,
      message: "User results retrieved successfully",
      data: {
        userId: userId,
        userName: req.user.name,
        results: latestResults,
      },
    });
  } catch (error) {
    console.error("Error in getUserResult:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
