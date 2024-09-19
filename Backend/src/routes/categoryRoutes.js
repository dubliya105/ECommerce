const express=require('express')
const multer=require('multer')
const { addCategory, getCategory,imageUpload, deleteCategory }=require('../controllers/categoryControllers');

const router=express.Router();

const upload=multer({storage:multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./upload')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    }
  })})

router.route('/upload')
.post(upload.single('image'),imageUpload);


router.route('/add')
    .post(addCategory)
router.route('/get')
    .get(getCategory)

    router.route('/delete/:id')
    .delete(deleteCategory)

module.exports=router;