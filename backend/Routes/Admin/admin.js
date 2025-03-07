const express=require('express');

const quizRouter=require('./Quiz/quiz');
const authRouter=require('./Auth/auth')

const { adminAuthentication } = require('../../Middleware/auth');
const adminController=require('../../Controller/Admin/admin')

const router=express.Router();

router.use('/auth',authRouter);
router.use('/quiz',adminAuthentication,quizRouter);
router.post('/createSSAdmin',adminController.createSSAdmin);

module.exports=router;
