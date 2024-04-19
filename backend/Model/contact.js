const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now },
  
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact