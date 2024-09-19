
const mongoose=require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  });
  
const category = new mongoose.model("categories", categorySchema);
module.exports = category;
