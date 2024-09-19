const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId:{
        type:ObjectId,
        required: true
    },
    productId: {
        type:ObjectId,
        required: true
    },
    status:{
        type: String,
        default:'pending'
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
    },
    OrderDate:{
        type: String,
    }
  }
);
const order = new mongoose.model("orders", orderSchema);
module.exports = order;
