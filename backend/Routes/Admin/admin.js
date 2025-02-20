const express=require('express');

const quizRouter=require('./Quiz/quiz');
const { adminAuthentication } = require('../../Middleware/auth');

const router=express.Router();

router.use('/quiz',adminAuthentication,quizRouter);

module.exports=router;
