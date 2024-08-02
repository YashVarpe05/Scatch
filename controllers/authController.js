const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

// Register a new user
module.exports.registerUser = async (req, res) => {
	try {
		const { email, password, fullname } = req.body;

		// Check if the user already exists
		let user = await userModel.findOne({ email: email });
		if (user) {
			req.flash("error", "You already have an account. Please login.");
			return res.redirect("/");
		}

		// Generate a salt and hash the password
		bcrypt.genSalt(10, async (err, salt) => {
			if (err) throw err;

			bcrypt.hash(password, salt, async (err, hash) => {
				if (err) throw err;

				// Create a new user with the hashed password
				user = await userModel.create({
					email,
					password: hash,
					fullname,
				});

				// Generate a token and set it as a cookie
				const token = generateToken(user);
				res.cookie("token", token);
				res.send("User created successfully");
			});
		});
	} catch (error) {
		res.status(400).send(error.details[0].message);
	}
};

// Login a user
module.exports.loginUser = async (req, res) => {
	const { email, password } = req.body;

	// Find the user by email
	const user = await userModel.findOne({ email: email });
	if (!user) {
		req.flash("error", "Email or password incorrect");
		return res.redirect("/");
	}

	// Compare the provided password with the stored hashed password
	bcrypt.compare(password, user.password, (err, result) => {
		if (result) {
			// Generate a token and set it as a cookie
			const token = generateToken(user);
			res.cookie("token", token);
			res.redirect("/shop");
		} else {
			req.flash("error", "Email or password incorrect");
			return res.redirect("/");
		}
	});
};

// Logout a user
module.exports.logout = (req, res) => {
	res.cookie("token", "");
	res.redirect("/");
};
