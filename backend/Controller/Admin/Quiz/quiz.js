const Quiz = require("../../../Models/TestPattern/quiz");
const { baseDir } = require("../../../importantInfo");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { saveFile } = require("../../../Utils/fileHandler");
const Question = require("../../../Models/TestPattern/question");
const Answer = require("../../../Models/TestPattern/answer");
const sequelize = require("../../../database");

//Create Quiz
exports.createQuiz = async (req, res) => {
  try {
    const { title, description } = req.body;
    const imageFile = req.files
      ? req.files[req.fileName]
        ? req.files[req.fileName][0]
        : null
      : null;

    // Validate input
    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }
    let url = "";

    if (imageFile) {
      const filePath = path.join("CustomFiles", "Quiz");
      const fileName = uuidv4();
      url = saveFile(imageFile, filePath, fileName);
    }
    // Create quiz
    const newQuiz = await Quiz.create({ title, description, imageUrl: url });

    return res.status(201).json({
      success: true,
      message: "Quiz created successfully",
      data: newQuiz,
    });
  } catch (error) {
    console.error("Error creating quiz:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.createQuestion = async (req, res) => {
  try {
    const { text, type, quizId, weight } = req.body;
    const imageFile = req.files
      ? req.files[req.fileName]
        ? req.files[req.fileName][0]
        : null
      : null;

    // Validate input
    if (!text && !imageFile) {
      return res.status(400).json({
        success: false,
        message: "Question text or image is required",
      });
    }

    let imageUrl = "";
    if (imageFile) {
      const filePath = path.join("CustomFiles", "Question"); // Adjust path
      const fileName = uuidv4();
      imageUrl = saveFile(imageFile, filePath, fileName);
    }

    // Create question
    const newQuestion = await Question.create({
      text,
      imageUrl,
      type: type || "text", // Default to text type
      weight,
      QuizId: quizId,
    });

    return res.status(201).json({
      success: true,
      message: "Question created successfully",
      data: newQuestion,
    });
  } catch (error) {
    console.error("Error creating question:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.createAnswer = async (req, res) => {
  try {
    const { text, type, questionId } = req.body;
    const imageFile = req.files
      ? req.files[req.fileName]
        ? req.files[req.fileName][0]
        : null
      : null;

    // Validate input
    if (!text && !imageFile) {
      return res
        .status(400)
        .json({ success: false, message: "Answer text or image is required" });
    }

    let imageUrl = "";
    if (imageFile) {
      const filePath = path.join("CustomFiles", "Answer"); // Adjust the upload path
      const fileName = uuidv4();
      imageUrl = saveFile(imageFile, filePath, fileName);
    }

    // Create answer
    const newAnswer = await Answer.create({
      text,
      imageUrl,
      QuestionId: questionId,
      type: type || "text", // Default to text-based answers
    });

    return res.status(201).json({
      success: true,
      message: "Answer created successfully",
      data: newAnswer,
    });
  } catch (error) {
    console.error("Error creating answer:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//get quizes

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
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
    const questions = await Question.findAll({
      where: {
        QuizId: quizId,
      },
    });
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

exports.getAnswers = async (req, res) => {
  const { questionId } = req.body;

  try {
    const answers = await Answer.findAll({
      where: {
        QuestionId: questionId,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Answers retrieved successfully",
      data: answers,
    });
  } catch (error) {
    console.error("Error fetching answers:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.getQuiz = async (req, res) => {
  try {
    const { quizId } = req.body;

    // Check if quizId is provided
    if (!quizId) {
      return res.status(400).json({
        success: false,
        message: "Quiz ID is required",
      });
    }

    // Find the quiz by its primary key (quizId)
    const quiz = await Quiz.findByPk(quizId);

    // Check if the quiz exists
    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    // Fetch associated questions for the quiz
    const questions = await quiz.getQuestions();

    // Return the quiz and its questions
    return res.status(200).json({
      success: true,
      message: "Quiz retrieved successfully",
      quiz,
      questions,
    });
  } catch (error) {
    console.error("Error fetching quiz:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.getQuestion = async (req, res) => {
  try {
    const { questionId } = req.body;

    // Check if questionId is provided
    if (!questionId) {
      return res.status(400).json({
        success: false,
        message: "Question ID is required",
      });
    }

    // Find the question by its primary key (questionId)
    const question = await Question.findByPk(questionId);

    // Check if the question exists
    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }

    // Fetch associated answers for the question
    const answers = await question.getAnswers();

    // Return the question and its answers
    return res.status(200).json({
      success: true,
      message: "Question retrieved successfully",
      question,
      answers,
    });
  } catch (error) {
    console.error("Error fetching question:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//delete quizes;

// Delete Quiz (along with associated Questions and Answers)
exports.deleteQuiz = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { quizId } = req.body;

    // Check if quiz exists
    const quiz = await Quiz.findByPk(quizId, { transaction });
    if (!quiz) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ success: false, message: "Quiz not found" });
    }

    // Find all questions linked to the quiz
    const questions = await Question.findAll({
      where: { quizId },
      transaction,
    });

    // Collect all question IDs
    const questionIds = questions.map((q) => q.id);

    // Delete all answers linked to the questions
    if (questionIds.length > 0) {
      await Answer.destroy({ where: { questionId: questionIds }, transaction });
      await Question.destroy({ where: { id: questionIds }, transaction });
    }

    // Delete the quiz
    await quiz.destroy({ transaction });

    // Commit transaction
    await transaction.commit();

    return res.status(200).json({
      success: true,
      message: "Quiz and associated questions and answers deleted successfully",
    });
  } catch (error) {
    await transaction.rollback();
    console.error("Error deleting quiz:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Delete Question (along with associated Answers)
exports.deleteQuestion = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { questionId } = req.body;

    // Check if question exists
    const question = await Question.findByPk(questionId, { transaction });
    if (!question) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    }

    // Delete associated answers first
    await Answer.destroy({ where: { questionId }, transaction });

    // Delete the question
    await question.destroy({ transaction });

    // Commit transaction
    await transaction.commit();

    return res.status(200).json({
      success: true,
      message: "Question and associated answers deleted successfully",
    });
  } catch (error) {
    await transaction.rollback();
    console.error("Error deleting question:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Delete Answer
exports.deleteAnswer = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { answerId } = req.body;

    // Check if answer exists
    const answer = await Answer.findByPk(answerId, { transaction });
    if (!answer) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ success: false, message: "Answer not found" });
    }

    // Delete the answer
    await answer.destroy({ transaction });

    // Commit transaction
    await transaction.commit();

    return res.status(200).json({
      success: true,
      message: "Answer deleted successfully",
    });
  } catch (error) {
    await transaction.rollback();
    console.error("Error deleting answer:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

//Update part --

// Update Quiz isActive Status
exports.updateQuizStatus = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { quizId, isActive } = req.body;

    // Find Quiz
    const quiz = await Quiz.findByPk(quizId, { transaction });
    if (!quiz) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ success: false, message: "Quiz not found" });
    }

    // Update isActive
    await quiz.update({ isActive }, { transaction });

    await transaction.commit();
    return res.status(200).json({
      success: true,
      message: `Quiz status updated successfully to ${isActive}`,
    });
  } catch (error) {
    await transaction.rollback();
    console.error("Error updating quiz status:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Update Question isActive Status
exports.updateQuestionStatus = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { questionId, isActive } = req.body;

    // Find Question
    const question = await Question.findByPk(questionId, { transaction });
    if (!question) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    }

    // Update isActive
    await question.update({ isActive }, { transaction });

    await transaction.commit();
    return res.status(200).json({
      success: true,
      message: `Question status updated successfully to ${isActive}`,
    });
  } catch (error) {
    await transaction.rollback();
    console.error("Error updating question status:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Update Answer isActive Status
exports.updateAnswerStatus = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { answerId, isActive } = req.body;

    // Find Answer
    const answer = await Answer.findByPk(answerId, { transaction });
    if (!answer) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ success: false, message: "Answer not found" });
    }

    // Update isActive
    await answer.update({ isActive:!answer.isActive }, { transaction });

    await transaction.commit();
    return res.status(200).json({
      success: true,
      message: `Answer status updated successfully to ${isActive}`,
    });
  } catch (error) {
    await transaction.rollback();
    console.error("Error updating answer status:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
