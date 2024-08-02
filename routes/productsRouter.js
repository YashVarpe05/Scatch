const express = require("express");
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

const router = express.Router();

// Route to create a new product
router.post("/create", upload.single("image"), async (req, res) => {
	try {
		// Extract data from the request body
		const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

		// Create a new product using the product model
		const product = await productModel.create({
			image: req.file.buffer,
			name,
			price,
			discount,
			bgcolor,
			panelcolor,
			textcolor,
		});

		// Flash a success message and redirect to the admin page
		req.flash("success", "Product created successfully");
		res.redirect("/owners/admin");
	} catch (err) {
		// Send the error message as the response
		res.send(err);
	}
});

module.exports = router;
