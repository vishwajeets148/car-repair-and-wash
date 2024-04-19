const mongoose = require('mongoose');

require('dotenv').config()


const connectDB = async() => {
    mongoose.set("strictQuery", true);
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("Connected to Mongo DB"))
      .catch((err) => {
        console.error("failed to connect with mongo");
        console.error(err);
      });
  };

  module.exports = connectDB