const UnverifiedUser = require("../../../Models/User/unverifiedUser");
const Quiz = require("../../../Models/TestPattern/quiz");
const UserQuiz = require("../../../Models/AndModels/UserQuiz");
const { Op } = require("sequelize");


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
      message: "Internal server error",
    });
  }
};

exports.getResults = async (req, res) => {
  const {
    quizId,
    page = 1,
    limit = 10,
    isCertified,
    startDate,
    endDate,
  } = req.body;

  try {
    // First find the quiz
    let quiz;
    if (quizId) {
      quiz = await Quiz.findByPk(quizId);
      if (!quiz) {
        return res.status(404).json({
          success: false,
          message: "Quiz not found",
        });
      }
    }

    // Build where clause
    let whereClause = {};
    if (quizId) {
      whereClause.QuizId = quizId;
    }
    if (startDate && endDate) {
      whereClause.createdAt = {
        [Op.between]: [new Date(startDate), new Date(endDate)],
      };
    }

    // Get all UserQuiz entries first
    const userQuizzes = await UserQuiz.findAll({
      where: whereClause,
      order: [["createdAt", "DESC"]],
    });

    // Get associated UnverifiedUsers and filter based on isCertified
    const results = await Promise.all(
      userQuizzes.map(async (userQuiz) => {
        let unverifiedUser;
        if (isCertified) {
          unverifiedUser = await UnverifiedUser.findOne({
            where: {
              id: userQuiz.UnverifiedUserId,
              name: { [Op.ne]: null },
              email: { [Op.ne]: null },
            },
            attributes: ["name", "email", "age"],
          });
        } else {
          unverifiedUser = await UnverifiedUser.findOne({
            where: { id: userQuiz.UnverifiedUserId },
            attributes: ["name", "email", "age"],
          });
        }

        if (isCertified && !unverifiedUser) {
          return null;
        }

        return {
          ...userQuiz.toJSON(),
          UnverifiedUser: unverifiedUser,
        };
      })
    );

    // Filter out null results if isCertified is true
    const filteredResults = results.filter((result) => result !== null);

    // Calculate total count after filtering
    const totalCount = filteredResults.length;

    // Apply pagination after filtering
    const offset = (page - 1) * limit;
    const paginatedResults = filteredResults.slice(
      offset,
      offset + parseInt(limit)
    );

    return res.status(200).json({
      success: true,
      results: paginatedResults,
      pagination: {
        totalItems: totalCount,
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalCount / limit),
        itemsPerPage: parseInt(limit),
      },
    });
  } catch (error) {
    console.error("Error in getResults:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

