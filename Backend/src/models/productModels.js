const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categoryId: {
      type:ObjectId ,
      required: true,
    },
    description: {
        required: true,
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    price: { 
      type: Number,
      required: true,
    },
    discount:{
      type: Number,
      default:0,
    },
    color:{
      type: String,
    },
    weigth:{
      type: String,
    },
    size:{
      type: String,
    }   
  },
  { 
    timestamps: true 
  }
);
const product = new mongoose.model("products", productSchema);
module.exports = product;
