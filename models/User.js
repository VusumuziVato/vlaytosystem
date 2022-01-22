const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    
  },
  name: {
    type: String,
    required: true,
    trim:true,
  },
  email: {
    type: String,
    required: true,
    trim:true,
  },
  password: {
    type: String,
    required: true,
  },
 location: {     
   type: String,    
   required: false,
   },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;