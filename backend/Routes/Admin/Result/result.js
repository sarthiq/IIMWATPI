const express=require('express');
const resultController=require('../../../Controller/Admin/Result/result');

const router=express.Router();

router.post('/getResults',resultController.getResults);
router.post('/getResultCount',resultController.getTotalNumberOfResults);


module.exports=router;  
