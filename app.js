const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection.js");
const ownersRouter = require("./routes/ownersRouter.js");
const usersRouter = require("./routes/usersRouter.js");
const productsRouter = require("./routes/productsRouter.js");
const { error } = require("console");
require("dotenv").config();
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" directory
app.set("views", path.join(__dirname, "views")); // Set the views directory
app.set("view engine", "ejs"); // Set the view engine to EJS

// Routes
app.use("/owners", ownersRouter); // Use ownersRouter for requests starting with "/owners"
app.use("/users", usersRouter); // Use usersRouter for requests starting with "/users"
app.use("/products", productsRouter); // Use productsRouter for requests starting with "/products"

// Default route
app.get("/", (req, res) => {
	res.render("index", { error: "" }); // Render the "index" view as the response for the root URL
});

// Start the server
app.listen(3000); // Listen on port 3000
