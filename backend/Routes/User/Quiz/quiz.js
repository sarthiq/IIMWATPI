const express = require("express");

const quizController = require("../../../Controller/User/Quiz/quiz");

const router = express.Router();

router.post("/getQuizzes", quizController.getQuizzes);
router.post("/getQuestions", quizController.getQuestions);



router.post('/submitQuiz', quizController.submitQuiz);
router.post('/submitPersonalityQuiz', quizController.submitPersonalityQuiz);
router.post('/submitCreativityQuiz', quizController.submitCreativityQuiz);

module.exports = router;
