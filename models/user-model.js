const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
	fullname: {
		type: String,
		minlength: 3, // Minimum length of 3 characters
		trim: true, // Trim leading and trailing spaces
		required: true, // fullname is required
	},
	email: {
		type: String,
		required: true, // email is required
	},
	password: {
		type: String,
		required: true, // password is required
	},
	cart: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
			default: [], // Default value is an empty array
		},
	],
	isAdmin: {
		type: Boolean,
		default: false, // Default value is false
	},
	orders: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "Order",
		default: [], // Default value is an empty array
	},
	contact: {
		type: Number,
		required: true, // contact is required
	},
	picture: String,
});

// Export the user model
module.exports = mongoose.model("User", userSchema);
