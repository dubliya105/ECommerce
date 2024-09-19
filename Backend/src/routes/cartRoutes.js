const express=require('express')

const {addCart, getCart,handleUpdateQu,getByProductId, deleteByIdCart, getCartAndProduct}=require('../controllers/cartControllers');

const router=express.Router();

router.route('/add')
.post(addCart)
router.route('/get/:id')
.get(getCart)
.patch(handleUpdateQu)
router.route('/cartAndProduct/:id')
.get(getCartAndProduct)
router.route('/:id')
.delete(deleteByIdCart)
.get(getByProductId)
module.exports=router;