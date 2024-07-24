const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");
router.get("/", (req, res) => {
	res.send("hey");
});


if (process.env.NODE_ENV === "development") {
	router.post("/create", async (req, res) => {
		try {
			let owners = await ownerModel.find();
			if (owners.length > 0) {
				return res
					.status(503)
					.send("you dont have permission to create a new owner");
			}
			let { fullname, email, password } = req.body;
			let createdOwner = await ownerModel.create({
				fullname,
				email,
				password,
			});
			res.status(201).send(createdOwner);
		} catch (error) {
			res.status(500).send("Internal Server Error");
		}
	});
}

module.exports = router;
console.log(process.env.NODE_ENV);
