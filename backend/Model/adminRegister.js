const mongoose = require('mongoose')

const adminregisterSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  password: String,
  conpassword: String,
  profile:{
    type: String,
    required :false
  },
  date: { type: Date, default: Date.now },
  
});

const adminRegister = mongoose.model('adminRegister', adminregisterSchema);
module.exports = adminRegister