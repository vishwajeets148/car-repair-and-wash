const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  mobile: Number,
  password: String,
  conpassword: String,
  subject: String,
  message: String,
  address: String,
  date: { type: Date, default: Date.now },
  
});

const Register = mongoose.model('Register', registerSchema);
module.exports = Register