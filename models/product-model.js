const mongoose = require("mongoose"); // Importing the mongoose library

const productSchema = mongoose.Schema({
	image: Buffer, // The image of the product
	name: String, // The name of the product
	price: Number, // The price of the product
	discount: { type: Number, default: 0 }, // The discount on the product, default is 0

	bgcolor: String, // The background color of the product
	panelcolor: String, // The panel color of the product
	textcolor: String, // The text color of the product
});

module.exports = mongoose.model("product", productSchema); // Exporting the mongoose model for the "Product" collection
