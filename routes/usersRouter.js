const express = require("express");
const Joi = require("joi");
const router = express.Router();
const { registerUser } = require("../controllers/authController");
router.get("/", (req, res) => {
	res.send("hey");
});

router.post("/register", registerUser);

module.exports = router;
