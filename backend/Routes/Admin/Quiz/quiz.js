const express = require("express");

const quizController = require("../../../Controller/Admin/Quiz/quiz");

const { fileHandlerRouter } = require("../../FileHandler/fileHandler");

const router = express.Router();


router.post("/createQuiz", fileHandlerRouter("image", 0.2), quizController.createQuiz);
router.post("/createQuestion", fileHandlerRouter("image", 0.2), quizController.createQuestion);
router.post("/createAnswer",fileHandlerRouter("image", 0.2), quizController.createAnswer);


module.exports = router;
