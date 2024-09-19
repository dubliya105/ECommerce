const mongoose=require('mongoose')
const {createHmac}=require('crypto');  
const salt='fun';

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true, 
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address:{
      type:String,
      required:true,
    },
    phone: {
      type: Number,
      required: true,
      },
    status:{
      type:String,
      default:'Active'
    }
  },
{
  timestamps:true
});

  userSchema.pre('save',function (next) {
    const user=this;
    // console.log(user);
    if(!user.isModified('password'))return;
     const newHashed=createHmac('sha256',salt).update(this.password).digest('hex');
     this.password=newHashed;
    //  console.log(this.password);
     next();
  })

  userSchema.static("matchPassword", async function (email, password) {
    const result = await User.findOne({ email });
    let newHashed = createHmac("sha256", salt).update(password).digest("hex");
  
    if (newHashed === result.password) {
      const { _id, name, email,status,address,phone } = result;
      return { _id, name, email,status,address,phone}
    } else {
      return false;
    }
  });
  const User = new mongoose.model("Users", userSchema);
  module.exports = User;