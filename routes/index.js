const express = require("express");
const isloggedin = require("../middlewares/isLoggedin");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

const router = express.Router();

// Home route
router.get("/", (req, res) => {
	let error = req.flash("error");
	res.render("index", { error, loggedin: false });
});

// Shop route
router.get("/shop", isloggedin, async (req, res) => {
	try {
		// Fetch products from the database
		let products = await productModel.find();
		let success = req.flash("success");
		res.render("shop", { products, success }); // Pass products to the EJS view
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

// Cart route
router.get("/cart", isloggedin, async (req, res) => {
	try {
		// Find the user and populate their cart
		let user = await userModel.findOne({ email: req.user.email }).populate("cart");

		// Calculate the bill by adding the price and subtracting the discount
		const bill = Number(user.cart[0].price) + 20 - Number(user.cart[0].discount);

		res.render("cart", { user, bill }); // Pass user and bill to the EJS view
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

// Add to cart route
router.get("/addtocart/:productid", isloggedin, async (req, res) => {
	try {
		// Find the user and add the product to their cart
		let user = await userModel.findOne({ email: req.user.email });
		user.cart.push(req.params.productid);
		await user.save();

		req.flash("success", "Added to cart");
		res.redirect("/shop");
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

// Logout route
router.get("/logout", isloggedin, (req, res) => {
	// Perform logout logic here
	res.render("shop");
});

module.exports = router;
