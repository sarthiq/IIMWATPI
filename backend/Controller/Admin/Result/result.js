const UnverifiedUser = require("../../../Models/User/unverifiedUser");
const Quiz = require("../../../Models/TestPattern/quiz");
const UserQuiz = require("../../../Models/AndModels/UserQuiz");

exports.getTotalNumberOfResults = async (req, res) => {
  const { quizId } = req.body;
  try {
    const totalResults = await UserQuiz.count(
      quizId ? { where: { QuizId: quizId } } : {}
    );
    
    return res.status(200).json({ success: true, totalResults });
  } catch (error) {
    console.error("Error in getTotalNumberOfResults:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
};

exports.getResults = async (req, res) => {
  const { quizId, page = 1, limit = 10 } = req.body;
  try {
    // Calculate offset
    const offset = (page - 1) * limit;

    // First find the quiz
    let quiz;
    if (quizId) {
      quiz = await Quiz.findByPk(quizId);
      if (!quiz) {
        return res.status(404).json({
          success: false,
          message: "Quiz not found"
        });
      }
    }

    // Get total count for pagination
    const totalCount = await UserQuiz.count(
      quizId ? { where: { QuizId: quizId } } : {}
    );

    // Find UserQuiz entries
    const userQuizzes = await UserQuiz.findAll({
      where: quizId ? { QuizId: quizId } : {},
      limit: parseInt(limit),
      offset: parseInt(offset)
    });

    // Get associated UnverifiedUsers
    const results = await Promise.all(userQuizzes.map(async (userQuiz) => {
      const unverifiedUser = await UnverifiedUser.findOne({
        where: { id: userQuiz.UnverifiedUserId },
        attributes: ["name", "email", "age"]
      });
      
      return {
        ...userQuiz.toJSON(),
        UnverifiedUser: unverifiedUser
      };
    }));

    return res.status(200).json({
      success: true,
      results,
      pagination: {
        totalItems: totalCount,
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalCount / limit),
        itemsPerPage: parseInt(limit)
      }
    });
  } catch (error) {
    console.error("Error in getResults:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
