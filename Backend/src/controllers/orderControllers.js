const order=require('../models/orderModels')
const product =require('../models/productModels')
const {ObjectId}=require('mongodb')
async function addOrder(req,res){
    try {

        const {userId,productId,quantity,status}=req.body
        const productD=await product.findOne({_id: productId})
        let price=productD.price;
        let discount=productD.price*productD.discount/100;
        let aprice=productD.price-discount;
        let totalPrice=aprice*quantity;
              
        let OrderDate=new Date().toString().split("G")[0];
        const result= await order.create({userId,productId,quantity,price,totalPrice,status,OrderDate});
         res.status(201).send({ status:'success',msg: "Success", error: '', data: result });
    } catch (error) {
        console.log(error);
        res.status(400).send({ status:'failed',msg: "failed", error: error, data: {} });
    }
}

async function getOrder(req,res){
    try {
        const result=await order.aggregate([
            {
              $lookup: {
                from: "products",
                localField: "productId",
                foreignField: "_id",
                as: "productData"
              }
            },
           
            {
              $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "userData"
              }
              }
            ])
        res.status(200).send({ status:'success',msg: "Success", error: '', data: result });
    } catch (error) {
    res.status(400).send({ status:'failed',msg: "failed", error: error, data: {} });
    }
}

async function updateByIdOrder(req,res) {
  try {
    const id =new ObjectId(req.params.id);
    const result=await order.updateOne({_id:id},{$set:{status:req.body.status}});
    res.status(200).send({ status:'success',msg: "Success", error: '', data: result });
} catch (error) {
  console.log(error);
  
res.status(400).send({ status:'failed',msg: "failed", error: error, data: {} });
}
}

async function deleteByIdOrder(req,res){
    try {
        const id =new ObjectId(req.params.id);
        const result=await order.deleteOne({_id:id});
        res.status(200).send({ status:'success',msg: "Success", error: '', data: result });
    } catch (error) {
    res.status(400).send({ status:'failed',msg: "failed", error: error, data: {} });
    }
  }
module.exports={addOrder,getOrder,deleteByIdOrder,updateByIdOrder}