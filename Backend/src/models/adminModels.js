// const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  }
);
const admin = new mongoose.model("admins", adminSchema);
module.exports = admin;
