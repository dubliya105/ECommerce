const product=require('../models/productModels');
const {ObjectId}=require('mongodb')
const jwt=require('jsonwebtoken')

const handleAddProducts=async(req,res)=>{
      try {
        const {name,categoryId,price,description,image,discount,weight,color,size}=req.body;
        console.log(req.body);

  // console.log();
        const result=await product.create({name,categoryId:categoryId,price,description,image,discount,weight,color,size});
        res.status(201).send({ status:'success',msg: "Success", error: '', data: result });
      } catch (error) {
        console.log(error);
        res.status(201).send({ status:'failed',msg: "failed", error: error, data: {} });
      }
} 

const handleGetProducts=async(req,res)=>{
    try {
        const result=await product.aggregate([
          { 
            $lookup:{
              from:'categories',
              localField:'categoryId',
              foreignField:'_id',
              as:'category'
              }
          },
          
           ])
                res.status(200).send({ status:'success',msg: "Success", error: '',data: result });
        } catch (error) {
         console.log(error);
          res.status(400).send({ status:'failed',msg: "failed", error: error, data: {} });
        
          }
}

async function deleteByIdProduct(req,res){
  try {
      const id =new ObjectId(req.params.id);
      const result=await product.deleteOne({_id:id});
      res.status(201).send({ status:'success',msg: "Success", error: '', data: result });
  } catch (error) {
  res.status(400).send({ status:'failed',msg: "failed", error: error, data: {} });
  }
}

async function handleGetById(req,res) {
  try {
    const token=req.headers["authorization"];
    const verify =token.split(' ')[1];
    const decoded = jwt.verify(verify,'code');
    
    if (decoded) {
        const id =new ObjectId(req.params.id);
        const result=await product.findById({_id:id});
        res.status(200).send({ status:'success',msg: "Success", error: '',data: result });
      }else{
        res.status(400).send({msg:'token is required'})
      }
    } catch (error) {
        console.log(error); 
        res.status(400).send({ status:'failed',msg: "failed", error: error,data: {} });
      }
    
}

const  handleUpdateProduct=async(req,res)=>{
  try {
    console.log(req.body);
    const id =new ObjectId(req.params.id);
    const result=await product.updateOne({_id:id},{$set:req.body});
    res.status(201).send({ status:'success',msg: "Success", error: '',
      data: result });
      } catch (error) {
        console.log(error);
        res.status(400).send({ status:'failed',msg: "failed", error: error
          ,data: {} });
  }
}



async function imageUpload(req,res){
  try {
    // const pic= req.file.destination+'/'+req.file.filename;
    console.log(req.file);
    res.status(201).send({ status:'success',msg: "Success", error: '', data: req.file});
    } catch (error) {
        console.log(error);
        res.status(201).send({ status:'failed',msg: "failed", error: error, data:{}})
    }
}
module.exports={handleAddProducts,handleGetProducts,deleteByIdProduct,imageUpload,handleGetById,handleUpdateProduct};