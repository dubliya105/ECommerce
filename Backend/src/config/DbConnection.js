const mongoose = require("mongoose");

const mongooseConnecation = (url) => {
  mongoose.connect(url);
  console.log("DbConnected");
};

module.exports = mongooseConnecation;

