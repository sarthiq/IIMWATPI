const express=require('express');

const quizRouter=require('./Quiz/quiz');
const authRouter=require('./Auth/auth')
const resultRouter=require('./Result/result');
const { adminAuthentication } = require('../../Middleware/auth');
const adminController=require('../../Controller/Admin/admin')

const router=express.Router();

router.use('/auth',authRouter);
router.use('/quiz',adminAuthentication,quizRouter);
router.post('/createSSAdmin',adminController.createSSAdmin);
router.use('/result',adminAuthentication,resultRouter);
    
module.exports=router;
