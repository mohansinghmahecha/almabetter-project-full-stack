const express = require('express');
const { registerUser, authUser ,logoutUser} = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser); //for register a user
router.post('/login', authUser); //for login
router.post('/logout', logoutUser);  // for logout

module.exports = router;
