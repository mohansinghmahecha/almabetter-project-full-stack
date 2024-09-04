const User = require("../models/User"); // Importing the User model
const jwt = require("jsonwebtoken"); // Importing jsonwebtoken to handle JWT token generation and verification
const dotenv = require("dotenv"); // Importing dotenv for .env file
const bcrypt = require("bcryptjs"); // Importing bcryptjs to hash and compare passwords securely

dotenv.config();
// Function to generate a JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",// Token expiration time
  });
};

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = await User.findOne({ email });
 // Check if a user with the given email already exists
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};



// Authenticate user & get token
const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
      console.log("Login successful!");
    } else {
      res.status(401).json({ message: "Invalid email or password" });
      console.log("Wrong entered data.");
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
const logoutUser = (req, res) => {
  // Simply return a success message since JWT doesn't require server-side invalidation
  res.json({ message: "Logged out successfully" });
};

module.exports = { registerUser, authUser, logoutUser };
