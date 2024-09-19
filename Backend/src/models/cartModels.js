const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId:{
        type:ObjectId,
        required: true
    },
    productId: {
        type: ObjectId,
        required: true
    },
    quantity:{
        type: Number,
        default:1,
    },
    price:{
        type: Number,
        required: true
    },
    totalPrice:{
        type: Number,
        require:true
    },
  }
);
const cart = new mongoose.model("carts", cartSchema);
module.exports = cart;
