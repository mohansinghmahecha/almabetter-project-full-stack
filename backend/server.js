const express = require("express"); // Importing Express framework
const cors = require("cors");//Importing the CORS middleware to handle Cross-Origin Resource Sharing
const dotenv = require("dotenv"); // variables from a .env file
const connectDB = require("./config/db"); //Importing the function to connect to the database
const userRoutes = require("./routes/userRoutes");//Importing the user routes for handling requests

dotenv.config();

connectDB(); // Connecting to the MongoDB database

const app = express();// Initializing an Express application

// Enable CORS
app.use(cors());

app.use(express.json()); // Middleware to parse JSON bodies in requests

app.use("/api/users", userRoutes);// creating the user routes at the /api/users used in url

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
