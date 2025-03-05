const express = require("express");
const authMiddleware = require("../../../Middleware/auth");
const quizController = require("../../../Controller/User/Quiz/quiz");

const router = express.Router();

router.post("/getQuizzes", quizController.getQuizzes);
router.post("/getQuestions", quizController.getQuestions);



router.post('/submitQuiz',authMiddleware.userAuthentication, quizController.submitQuiz);
router.post('/submitPersonalityQuiz',authMiddleware.userAuthentication, quizController.submitPersonalityQuiz);
router.post('/submitCreativityQuiz',authMiddleware.userAuthentication, quizController.submitCreativityQuiz);

module.exports = router;
