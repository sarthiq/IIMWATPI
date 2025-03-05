const express=require('express');
const authMiddleware=require('../../../Middleware/auth');

const profileController=require('../../../Controller/User/Profile/profile');

const router=express.Router();

router.get('/get',authMiddleware.requireUserAuth,profileController.getProfile);
router.post('/update',authMiddleware.requireUserAuth,profileController.updateProfile);


module.exports=router;
