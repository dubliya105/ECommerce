const admin=require('../models/adminModels')

const handleLogin=async(req,res)=>{
    try {
    
        const {email,password}=req.body;
        const result= await admin.findOne({email,password});
        console.log(result);
        if(result){
            res.status(200).send({status:'success',msg: "login success",error:{}, data: result });
        }else{
            res.status(400).send({status:'Failed', msg: "Failed", error: 'user not exist', data: {} });
        }
    } catch (error) {
        res.status(400).send({status:'Failed', msg: error, error: 'Failed', data: {} });
    }
}

module.exports={handleLogin};