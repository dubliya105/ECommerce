const express=require('express');
const multer=require('multer');
const {handleAddProducts, handleGetProducts, imageUpload, handleGetById, handleUpdateProduct}=require('../controllers/productControllers');
const router=express.Router();

const upload=multer({storage:multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./upload')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    }
  })})

  router.route('/:id')
  .get(handleGetById)
  .patch(handleUpdateProduct)

  router.route('/upload')
   .post(upload.single('image'),imageUpload);
  router.route('/')
    .post(handleAddProducts)

  router.route('/').get(handleGetProducts)
  module.exports=router;