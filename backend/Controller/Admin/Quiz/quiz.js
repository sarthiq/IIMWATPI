const Quiz = require("../../../Models/TestPattern/quiz");
const { baseDir } = require("../../../importantInfo");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { saveFile } = require("../../../Utils/fileHandler");
const Question = require("../../../Models/TestPattern/question");
const Answer = require("../../../Models/TestPattern/answer");

//Create Quiz
exports.createQuiz = async (req, res) => {
  try {
    const { title, description } = req.body;
    const imageFile = req.files[req.fileName];

    // Validate input
    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }
    let url = "";
    if (imageFile) {
      const filePath = path.join(baseDir, "CustomFiles", "Quiz");
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
    const { text, type, correctAnswerId, quizId, weight } = req.body;
    const imageFile = req.files ? req.files[req.fileName] : null;

    // Validate input
    if (!text && !imageFile) {
      return res.status(400).json({
        success: false,
        message: "Question text or image is required",
      });
    }
    if (!correctAnswerId) {
      return res
        .status(400)
        .json({ success: false, message: "Correct answer ID is required" });
    }

    let imageUrl = "";
    if (imageFile) {
      const filePath = path.join(baseDir, "CustomFiles", "Question"); // Adjust path
      const fileName = uuidv4();
      imageUrl = saveFile(imageFile, filePath, fileName);
    }

    // Create question
    const newQuestion = await Question.create({
      text,
      imageUrl,
      type: type || "text", // Default to text type
      correctAnswerId,
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
    const imageFile = req.files ? req.files[req.fileName] : null;

    // Validate input
    if (!text && !imageFile) {
      return res
        .status(400)
        .json({ success: false, message: "Answer text or image is required" });
    }

    let imageUrl = "";
    if (imageFile) {
      const filePath = path.join(baseDir, "CustomFiles", "Answer"); // Adjust the upload path
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

//delete quizes;

exports.deleteQuiz = async (req, res) => {
  try {
    const { quizId } = req.body;

    // Check if quiz exists
    const quiz = await Quiz.findByPk(quizId);
    if (!quiz) {
      return res
        .status(404)
        .json({ success: false, message: "Quiz not found" });
    }

    // Find all questions linked to the quiz
    const questions = await Question.findAll({ where: { QuizId: quizId } });

    // Delete all answers linked to the found questions
    const questionIds = questions.map((q) => q.id);
    if (questionIds.length > 0) {
      await Answer.destroy({ where: { QuestionId: questionIds } });
    }

    // Delete questions linked to the quiz
    await questions.destroy();

    // Delete the quiz
    await quiz.destroy();

    return res.status(200).json({
      success: true,
      message: "Quiz and associated questions and answers deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting quiz:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const { questionId } = req.body;

    // Check if question exists
    const question = await Question.findByPk(questionId);
    if (!question) {
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    }

    // Delete associated answers first
    await Answer.destroy({ where: { QuestionId: questionId } });

    // Delete the question
    await question.destroy();

    return res.status(200).json({
      success: true,
      message: "Question and associated answers deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting question:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

exports.deleteAnswer = async (req, res) => {
  try {
    const { answerId } = req.params;

    // Check if answer exists
    const answer = await Answer.findByPk(answerId);
    if (!answer) {
      return res
        .status(404)
        .json({ success: false, message: "Answer not found" });
    }

    // Delete the answer
    await answer.destroy();

    return res.status(200).json({
      success: true,
      message: "Answer deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting answer:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

