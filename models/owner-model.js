const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
	fullname: {
		type: String,
		minLenght: 3,
		trim: true,
	},
	email: String,
	password: String,
	products: {
		type: Array,
		default: [],
	},
	picture: String,
	gstNo: String,
});

module.exports = mongoose.model("owner", ownerSchema);
