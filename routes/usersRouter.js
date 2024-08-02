const express = require("express");
const Joi = require("joi");
const isLoggedin = require("../middlewares/isLoggedin");

const router = express.Router();
const {
	registerUser,
	loginUser,
	logout,
} = require("../controllers/authController");

// Home route
router.get("/", (req, res) => {
	res.send("Welcome to the Scatch application!");
});

// User registration route
router.post("/register", registerUser);

// User login route
router.post("/login", loginUser);

// User logout route
router.get("/logout", logout);

module.exports = router;
