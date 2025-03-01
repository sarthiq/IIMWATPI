const express = require("express");

const quizController = require("../../../Controller/Admin/Quiz/quiz");

const { fileHandlerRouter } = require("../../FileHandler/fileHandler");

const router = express.Router();


router.post("/createQuiz", fileHandlerRouter("image", 2), quizController.createQuiz);
router.post("/createQuestion", fileHandlerRouter("image", 2), quizController.createQuestion);
router.post("/createAnswer",fileHandlerRouter("image", 2), quizController.createAnswer);
router.post('/createPersonalityQuestion',quizController.createPersonalityQuestion);
router.post('/createPersonalityQuestions',quizController.createPersonalityQuestions);


router.post('/getQuizzes',quizController.getQuizzes)
router.post('/getQuestions',quizController.getQuestions)
router.post('/getAnswers',quizController.getAnswers)

router.post('/getQuiz',quizController.getQuiz)
router.post('/getQuestion',quizController.getQuestion)


router.post('/deleteQuiz',quizController.deleteQuiz)
router.post('/deleteQuestion',quizController.deleteQuestion)
router.post('/deleteAnswer',quizController.deleteAnswer)


router.post('/updateQuiz',quizController.updateQuizStatus)
router.post('/updateQuestion',quizController.updateQuestionStatus)
router.post('/updateAnswer',quizController.updateAnswerStatus)


router.post('/setCorrectAnswer',quizController.updateCorrectAnswer)

module.exports = router;
