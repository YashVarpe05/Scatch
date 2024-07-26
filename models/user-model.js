const mongoose = require("mongoose");

// Define the user schema
const userSchema = mongoose.Schema({
	fullname: {
		type: String,
		minLength: 3, // Minimum length of 3 characters
		trim: true, // Trim leading and trailing spaces
	},
	email: String,
	password: String,
	cart: {
		type: Array,
		default: [], // Default value is an empty array
	},
	// isAdmin: Boolean,
	orders: {
		type: Array,
		default: [], // Default value is an empty array
	},
	contact: Number,
	picture: String,
});

// Export the user model
module.exports = mongoose.model("user", userSchema);
