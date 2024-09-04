const mongoose = require("mongoose");// Importing Mongoose to interact with MongoDB
const dotenv = require("dotenv"); //for env file 

dotenv.config();
// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    console.log("connected", process.env.MONGO_URI); // Logging success 
  } catch (error) {
    console.error(`Error: ${error.message}`); // if failed
    process.exit(1);
  }
};

module.exports = connectDB;
