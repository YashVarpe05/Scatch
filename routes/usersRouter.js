const express = require("express");
const Joi = require("joi");
const router = express.Router();
const {
	registerUser,
	loginUser,
	logout,
} = require("../controllers/authController");
const isLoggedin = require("../middlewares/isLoggedin");

// const { registerUser, loginUser } = require("../controllers/authController");

router.get("/", (req, res) => {
	res.send("hey");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logout);

module.exports = router;
