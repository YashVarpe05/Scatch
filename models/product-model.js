const mongoose = require("mongoose"); // Importing the mongoose library

// Define the product schema
const Schema = mongoose.Schema;

const productSchema = new Schema(
	{
		image: {
			type: Buffer,
			required: true, // Image is required
			description: "The image of the product",
		},
		name: {
			type: String,
			required: true, // Name is required
			trim: true, // Trim whitespace
			description: "The name of the product",
		},
		price: {
			type: Number,
			required: true, // Price is required
			min: 0, // Price cannot be negative
			description: "The price of the product",
		},
		discount: {
			type: Number,
			default: 0, // Default discount is 0
			min: 0, // Discount cannot be negative
			max: 100, // Discount cannot exceed 100%
			description: "The discount on the product",
		},
		bgcolor: {
			type: String,
			required: true, // Background color is required
			trim: true, // Trim whitespace
			description: "The background color of the product",
		},
		panelcolor: {
			type: String,
			required: true, // Panel color is required
			trim: true, // Trim whitespace
			description: "The panel color of the product",
		},
		textcolor: {
			type: String,
			required: true, // Text color is required
			trim: true, // Trim whitespace
			description: "The text color of the product",
		},
	},
	{
		timestamps: true, // Add createdAt and updatedAt timestamps
	}
);

// Export the mongoose model for the "Product" collection
module.exports = mongoose.model("Product", productSchema);
