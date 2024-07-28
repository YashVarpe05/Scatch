const express = require("express");
const ownerModel = require("../models/owner-model");

const router = express.Router();

// Only enable the following route in development environment
if (process.env.NODE_ENV === "development") {
	// Route for handling POST requests to "/create"
	router.post("/create", async (req, res) => {
		try {
			// Check if there are any existing owners
			let owners = await ownerModel.find();
			if (owners.length > 0) {
				return res
					.status(503)
					.send("you dont have permission to create a new owner");
			}

			// Extract data from request body
			let { fullname, email, password } = req.body;

			// Create a new owner
			let createdOwner = await ownerModel.create({
				fullname,
				email,
				password,
			});

			// Send the created owner as the response
			res.status(201).send(createdOwner);
		} catch (error) {
			// Handle any errors that occur during the process
			res.status(500).send("Internal Server Error");
		}
	});
}

// Route for handling GET requests to "/"

router.get("/admin", (req, res) => {
	let success = req.flash("success");
	res.render("createproducts", { success });
});

module.exports = router;

// Log the value of NODE_ENV to the console
console.log(process.env.NODE_ENV);
