const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  service: String,
  date: String,
  message:String,
  date: { type: Date, default: Date.now },
  
})

const Bookappointment = mongoose.model('Bookappointment', appointmentSchema);
module.exports = Bookappointment