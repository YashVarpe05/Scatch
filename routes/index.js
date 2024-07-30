const express = require("express");
const app = express();
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedin");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/", (req, res) => {
	let error = req.flash("error");
	res.render("index", { error, loggedin: false });
});

router.get("/shop", isloggedin, async (req, res) => {
	let products = await productModel.find(); // Fetch products from the database
	let success = req.flash("success");
	res.render("shop", { products, success }); // Pass products to the EJS view
});
router.get("/cart", isloggedin, async (req, res) => {
	let user = await userModel
		.findOne({ email: req.user.email })
		.populate("cart");
	res.render("cart", { user }); // Pass products to the EJS view
});

router.get("/addtocart/:productid", isloggedin, async (req, res) => {
	let user = await userModel.findOne({ email: req.user.email });
	user.cart.push(req.params.productid);
	await user.save();
	req.flash("success", "Added to cart");
	res.redirect("/shop");
});

router.get("/logout", isloggedin, (req, res) => {
	res.render("shop");
});

module.exports = router;
