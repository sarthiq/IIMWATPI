const express=require('express');

const {userSignUp,userLogin}=require('../../../Controller/User/Auth/auth');



const router=express.Router();

router.post('/signup',userSignUp);
router.post('/login',userLogin);



module.exports=router;
