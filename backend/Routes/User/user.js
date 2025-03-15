const express=require('express');

const quizRouter=require('./Quiz/quiz');
const authRouter=require('./Auth/auth');
const profileRouter=require('./Profile/profile');
const resultRouter=require('./Result/result');

const userController=require('../../Controller/User/user');

const { userAuthentication } = require('../../Middleware/auth');

const router=express.Router();

router.use('/quiz',quizRouter);
router.use('/auth',authRouter);
router.use('/profile',userAuthentication,profileRouter);
router.use('/result',userAuthentication,resultRouter); 

router.get('/verify',userAuthentication,userController.verifyUser);

module.exports=router;
