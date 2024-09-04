const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String, // string 
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
  },
  password: {
    type: String,
    required: true, //it is encrupted 
  },
  date: {
    type: Date,
    default: Date.now, //auto fill the date into the database 
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
