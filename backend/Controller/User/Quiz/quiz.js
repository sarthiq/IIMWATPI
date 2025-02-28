const Quiz = require("../../../Models/TestPattern/quiz");
const Question = require("../../../Models/TestPattern/question");
const Answer = require("../../../Models/TestPattern/answer");
const { calculateIQ } = require("./utils");
const UserQuiz = require("../../../Models/AndModels/UserQuiz");
const UserQuizQuestion = require("../../../Models/AndModels/UserQuizQuestion");
const UnverifiedUser = require("../../../Models/User/unverifiedUser");
const sequelize = require("../../../database");
const jwt = require("jsonwebtoken");
const { calculatePersonalityResults } = require("./personalityUtils");
const { calculateCreativityScore } = require("./hugginfaceUtils");

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
    const quiz = await Quiz.findByPk(quizId);
    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }
    let questions;

    if (quiz.typeId == "personality") {
      questions = await quiz.getPersonalityQuestions();
    } else {
      questions = await Question.findAll({
        where: {
          QuizId: quizId,
          isActive: true,
        },
        include: [
          {
            model: Answer,
            attributes: ["id", "text", "imageUrl", "type"], // Fetch only necessary fields
          },
        ],
      });
    }
    return res.status(200).json({
      success: true,
      message: "Questions retrieved successfully",

      data: questions,
      quiz,
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
  let transaction;
  try {
    const { quizId, answers, timeDuration } = req.body; // Include age from request
    const { startTime, endTime } = timeDuration;

    if (!quizId || !startTime || !endTime) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid request data" });
    }

    const questions = await Question.findAll({ where: { QuizId: quizId } });
    if (!questions.length) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found or has no questions",
      });
    }

    transaction = await sequelize.transaction();

    const unverifiedUser = await UnverifiedUser.create(
      {
        age: answers["age"],
      },
      { transaction }
    );

    let correctAnswers = 0;
    let attemptedQuestions = 0;
    let totalWeight = 0;
    let userScore = 0;
    const timeTakenMinutes = (new Date(endTime) - new Date(startTime)) / 60000; // Convert ms to minutes

    for (let question of questions) {
      totalWeight += question.weight;
      const selectedAnswerId = answers[question.id];
      const isCorrect = selectedAnswerId == question.correctAnswerId;

      if (selectedAnswerId !== undefined) {
        attemptedQuestions++;
        if (isCorrect) correctAnswers++;
        userScore += isCorrect ? question.weight : 0;
      }
    }

    const percentage = totalWeight > 0 ? (userScore / totalWeight) * 100 : 0;
    const iqResult = calculateIQ(correctAnswers, timeTakenMinutes);

    const userQuiz = await UserQuiz.create(
      {
        UnverifiedUserId: unverifiedUser.id, // Assuming user is authenticated
        QuizId: quizId,
        startTime,
        endTime,
        userAnswer: answers,
        type: "iq",
        result: iqResult,
      },
      { transaction }
    );

    const token = jwt.sign(
      { id: unverifiedUser.id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "5m", // Optional: specify token expiration time
      }
    );
    transaction.commit();
    return res.status(200).json({
      success: true,
      message: "Quiz submitted successfully",
      data: {
        totalQuestions: questions.length,
        attemptedQuestions,
        correctAnswers,
        score: userScore,
        percentage: percentage.toFixed(2),
        iqLevel: iqResult.label,
        percentile: iqResult.percentile,
        token,
      },
    });
  } catch (error) {
    if (transaction) {
      await transaction.rollback();
    }
    console.error("Error submitting quiz:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

exports.submitPersonalityQuiz = async (req, res) => {
  let transaction;
  try {
    const { answers, quizId } = req.body;

    // Validate answers array
    if (!Array.isArray(answers) || answers.length !== 50) {
      return res.status(400).json({
        success: false,
        message: "Invalid input: Personality test requires exactly 50 answers",
      });
    }

    // Validate each answer is within the valid range (1-5)
    const isValidAnswer = answers.every(
      (answer) => Number.isInteger(answer) && answer >= 1 && answer <= 5
    );

    if (!isValidAnswer) {
      return res.status(400).json({
        success: false,
        message: "Invalid answers: Each answer must be between 1 and 5",
      });
    }

    transaction = await sequelize.transaction();

    const unverifiedUser = await UnverifiedUser.create({ transaction });

    const result = calculatePersonalityResults(answers);
    const userQuiz = await UserQuiz.create(
      {
        UnverifiedUserId: unverifiedUser.id, // Assuming user is authenticated
        QuizId: quizId,
        userAnswer: answers,
        type: "personality",
        result: result,
      },
      { transaction }
    );

    await transaction.commit();

    return res.status(200).json({
      success: true,
      data: result,
      message: "Personality quiz submitted successfully",
    });
  } catch (error) {
    if (transaction) {
      await transaction.rollback();
    }
    console.error("Error submitting personality quiz:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.submitCreativityQuiz = async (req, res) => {
  let transaction;
  try {
    const { answers, quizId } = req.body;
    const result = { score: 0, message: "" };

    transaction = await sequelize.transaction();

    const unverifiedUser = await UnverifiedUser.create({ transaction });

    const userQuiz = await UserQuiz.create(
      {
        UnverifiedUserId: unverifiedUser.id, // Assuming user is authenticated
        QuizId: quizId,
        userAnswer: answers,
        type: "creativity", 
        result: result,
      },
      { transaction }
    );

    await transaction.commit();

    return res.status(200).json({
      success: true,
      data: result,
      message: "Creativity quiz submitted successfully",
    });
  } catch (error) {
    if (transaction) {
      await transaction.rollback();
    }
    console.error("Error submitting creativity quiz:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
