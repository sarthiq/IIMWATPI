const Quiz = require("../../../Models/TestPattern/quiz");
const { baseDir } = require("../../../importantInfo");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { saveFile } = require("../../../Utils/fileHandler");
const Question = require("../../../Models/TestPattern/question");

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
      return res
        .status(400)
        .json({
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
