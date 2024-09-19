const category = require("../models/categoryModels");
const fs =require('fs');
async function addCategory(req, res) {
  try {
    const { name, image } = req.body;
    console.log(req.body);
    const result = await category.create({ name, image });
    res
      .status(201)
      .send({ status: "success", msg: "Success", error: "", data: result });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ status: "failed", msg: "failed", error: error, data: {} });
  }
}
async function getCategory(req, res) {
  try {
    const result = await category.find({});
    res
      .status(200)
      .send({ status: "success", msg: "Success", error: "", data: result });
  } catch (error) {
    res
      .status(400)
      .send({ status: "failed", msg: "failed", error: error, data: {} });
    console.log(error);
  }
}

async function deleteCategory(req, res) {
  try {
    const { id } = req.params;
    const result = await category.findOneAndDelete({_id:id});
    console.log(result);
    const path= result.image;
    fs.unlink(path,function(error){
        console.log(error)
      });
    res
      .status(200)
      .send({ status: "success", msg: "Success", error: "", data: result });
  } catch (error) {
    res
      .status(400)
      .send({ status: "failed", msg: "failed", error: error, data: {} });
    console.log(error);
  }
}

async function imageUpload(req, res) {
  try {
    console.log(req.file);
    res.status(201).send(req.file);
  } catch (error) {
    console.log(error);
    res
      .status(201)
      .send({ status: "failed", msg: "failed", error: error, data: {} });
  }
}
module.exports = { addCategory, getCategory, imageUpload ,deleteCategory};
