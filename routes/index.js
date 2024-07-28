const express = require("express");
const app = express();
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedin");
const productModel = require("../models/product-model");

router.get("/", (req, res) => {
	let error = req.flash("error");
	res.render("index", { error });
});

router.get("/shop", isloggedin, async (req, res) => {
	let products = await productModel.find(); // Fetch products from the database
	res.render("shop", { products }); // Pass products to the EJS view
});
router.get("/logout", isloggedin, (req, res) => {
	res.render("shop");
});

module.exports = router;
