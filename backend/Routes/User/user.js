const express=require('express');

const quizRouter=require('./Quiz/quiz');
const authRouter=require('./Auth/auth');
const profileRouter=require('./Profile/profile');

const router=express.Router();

router.use('/quiz',quizRouter);
router.use('/auth',authRouter);
router.use('/profile',profileRouter);

module.exports=router;
