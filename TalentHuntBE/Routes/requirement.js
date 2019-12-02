const express=require('express');
const router=express.Router();
const adminReqController=require('../Controller/requirement');

router.post('/addrequirement',adminReqController.postRequirement);






module.exports=router;