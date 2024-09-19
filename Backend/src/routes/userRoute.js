const express=require('express')

const {handleSignup, handleLogin, handleGetUsers, updateByIdUser}=require('../controllers/userController');


const router = express.Router();
router.route('/signup')
.post(handleSignup);

router.route('/login')
.post(handleLogin)

router.route('/show')
.get(handleGetUsers)        

router.route('/update/:id')
.patch(updateByIdUser)  



module.exports=router;