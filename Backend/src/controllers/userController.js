const User = require("../models/userModel");
const jwt = require('jsonwebtoken')
const handleSignup = async (req, res) => {
  const { name, email, password, confPassword, address, phone } = req.body;
  const is_user = User.findOne({ email: email });
  try {
    if (password === confPassword) {
      if (is_user === undefined && is_user === "") {
        res
          .status(400)
          .send({
            status: "failed",
            msg: "Failed",
            error: "user already exist",
            data: {},
          });
      } else if (name !== "" && email !== "" && password !== "") {
        const result = await User.create({
          name: name,
          email: email,
          password: password,
          address: address,
          phone: phone,
        });
        res
          .status(201)
          .send({
            status: "success",
            msg: "Success",
            error: "signup success",
            data: result,
          });
      }
    } else {
      res
        .status(400)
        .send({
          status: "failed",
          msg: "Failed",
          error: "Password dose not match",
          data: {},
        });
    }
  } catch (error) {
    console.log(error);

    res
      .status(400)
      .send({ status: "failed", msg: error, error: "Failed", data: {} });
  }
};

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user=await User.findOne({email:email});
    if(user.status==="Active"){
          const result = await User.matchPassword(email, password);
          if (result) {
            const token =jwt.sign({result},'code',{expiresIn:100});
            
            res.status(200).send({  status: "success",  msg: "login success",  error: {},  data: result,token:token});
          } else {
            res.status(400).send({  status: "failed",  msg: "Failed",  error: "user not exist",  data: {},});
          }
      }else{
          res.status(400).send({  status: "failed",  msg: "Failed",  error: "user should be active",  data: {},});
      }
        } catch (error) {
          res
            .status(400)
            .send({ status: "failed", msg: error, error: "Failed", data: {} });
        }
};

async function handleGetUsers(req, res) {
  try {
    const result = await User.find({});
    res
      .status(200)
      .send({
        statucs: "success",
        msg: "login success",
        error: {},
        data: result,
      });
  } catch (error) {
    res
      .status(400)
      .send({ status: "failed", msg: error, error: "Failed", data: {} });
  }
}

async function deleteByIdUser(req, res) {
  try {
    const id = new ObjectId(req.params.id);
    const result = await cart.deleteOne({ _id: id });
    res
      .status(201)
      .send({ status: "success", msg: "Success", error: "", data: result });
  } catch (error) {
    res
      .status(400)
      .send({ status: "failed", msg: "failed", error: error, data: {} });
  }
}

async function updateByIdUser(req, res) {
  try {
    const id =req.params.id;
    
    const result = await User.updateOne(
      { _id: id },
      { $set: { status: req.body.status } }
    );
    res
      .status(200)
      .send({ status: "success", msg: "Success", error: "", data: result });
  } catch (error) {
    console.log(error);
    
    res
      .status(400)
      .send({ status: "failed", msg: "failed", error: error, data: {} });
  }
}

module.exports = {
  handleSignup,
  handleLogin,
  deleteByIdUser,
  handleGetUsers,
  updateByIdUser
};
