const express=require('express')

const {addOrder, getOrder, updateByIdOrder}=require('../controllers/orderControllers');

const router=express.Router();

router.route('/add')
.post(addOrder)
router.route('/get')
.get(getOrder)

router.route('/:id')
.patch(updateByIdOrder)
module.exports=router;