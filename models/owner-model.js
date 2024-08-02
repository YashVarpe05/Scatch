const mongoose = require("mongoose");

// Define the owner schema
const ownerSchema = new mongoose.Schema({
	fullname: {
		type: String,
		minlength: 3, // Minimum length of 3 characters for fullname
		trim: true, // Trim whitespace from the beginning and end of the string
	},
	email: {
		type: String,
		required: true, // Email is required
		unique: true, // Email must be unique
	},
	password: {
		type: String,
		required: true, // Password is required
	},
	products: {
		type: [String], // Array of strings for products
		default: [], // Default value of an empty array for products
	},
	picture: String,
	gstNo: String,
});

// Export the owner model
module.exports = mongoose.model("Owner", ownerSchema);
