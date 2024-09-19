const cart=require('../models/cartModels')
const product =require('../models/productModels')
const {ObjectId}=require('mongodb')
async function addCart(req,res){
    try {

        const {userId,productId,quantity}=req.body
        const productD=await product.findOne({_id: productId})
        let totalPrice=productD.price*quantity;
        let price=productD.price;
        const result= await cart.create({userId,productId,quantity,price,totalPrice});
         res.status(201).send({ status:'success',msg: "Success", error: '', data: result });
    } catch (error) {
        console.log(error);
        res.status(400).send({ status:'failed',msg: "failed", error: error, data: {} });
    }
}

async function getCart(req,res){
    try {
        const userId=new ObjectId(req.params.id);
        const result=await cart.find({userId});
        res.status(200).send({ status:'success',msg: "Success", error: '', data: result });
    } catch (error) {
        console.log(error); 
        res.status(400).send({ status:'failed',msg: "failed", error: error, data: {} });
    }
}

async function getCartAndProduct(req,res){  
    try {
        const userId=new ObjectId(req.params.id);
        const result=await cart.aggregate(
            [
                {
                    $match:{
                           userId
                    }
                 },
                {  
                    $lookup:{
                        from:"products",    
                        localField:"productId",
                        foreignField:"_id",
                        as:"productData"
                    }
                }
            ]
         )     
        res.status(200).send({ status:'success',msg: "Success", error: '', data: result });
    } catch (error) {
        console.log(error); 
        res.status(400).send({ status:'failed',msg: "failed", error: error, data: {} });
    }
}

 const getByProductId=async(req,res)=>{
    try {
        const id=new ObjectId(req.params.id);
        const result=await cart.findOne({productId:id});
        res.status(200).send({status:'success',msg: "Success", error: '', data: result})
    } catch (error) {
        res.status(400).send({ status:'failed',msg: "failed", error: error, data: {} });
    }
 }


async function handleUpdateQu(req,res) {
    const id=new ObjectId(req.params.id);
    const {quantity}=req.body;
    const productD=await product.findOne({_id:id});
    let totalPrice=productD.price*quantity;
    const result=await cart.updateOne({productId:id},{$set:{quantity,totalPrice}});
    res.status(200).send({status:'success',msg: "Success", error: '', data: result})
}

async function deleteByIdCart(req,res){
    try {
        const id =new ObjectId(req.params.id);
        const result=await cart.deleteOne({_id:id});
        res.status(200).send({ status:'success',msg: "Success", error: '', data: result });
    } catch (error) {
    res.status(400).send({ status:'failed',msg: "failed", error: error, data: {} });
    }
}

module.exports={addCart,getCart,deleteByIdCart,handleUpdateQu,getByProductId,getCartAndProduct}