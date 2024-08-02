const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async (req, res, next) => {
	try {
		// Check if the token exists in the request cookies
		if (!req.cookies.token) {
			req.flash("error", "Please log in to continue."); // Add a more user-friendly error message
			return res.redirect("/");
		}

		// Verify the token and decode its payload
		let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);

		// Find the user based on the decoded email
		let user = await userModel
			.findOne({ email: decoded.email })
			.select("-password");

		// If user is found, attach it to the request object
		if (user) {
			req.user = user;
			next();
		} else {
			req.flash("error", "User not found."); // Add an error message if user is not found
			res.redirect("/"); // Redirect to login page
		}
	} catch (err) {
		console.error(err); // Log the error for debugging purposes
		req.flash("error", "Something went wrong."); // Add a generic error message
		res.redirect("/"); // Redirect to login page
	}
};
