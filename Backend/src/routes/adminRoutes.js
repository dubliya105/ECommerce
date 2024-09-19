const express=require('express')

const {handleLogin}=require('../controllers/adminControllers');

const router=express.Router();

router.route('/login')
.post(handleLogin)


module.exports=router;