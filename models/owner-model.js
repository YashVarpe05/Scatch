const mongoose = require("mongoose");

// Define the owner schema
const ownerSchema = mongoose.Schema({
	fullname: {
		type: String,
		minLength: 3, // Minimum length of 3 characters for fullname
		trim: true, // Trim whitespace from the beginning and end of the string
	},
	email: String,
	password: String,
	products: {
		type: Array,
		default: [], // Default value of an empty array for products
	},
	picture: String,
	gstNo: String,
});

// Export the owner model
module.exports = mongoose.model("owner", ownerSchema);
