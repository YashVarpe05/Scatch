const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
require("./config/mongoose-connection.js");
const ownersRouter = require("./routes/ownersRouter.js");
const usersRouter = require("./routes/usersRouter.js");
const productsRouter = require("./routes/productsRouter.js");
const indexRouter = require("./routes/index.js");
const expressSession = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies
app.use(
	expressSession({
		resave: false,
		saveUninitialized: false,
		secret: process.env.EXPRESS_SESSION_SECRET,
	})
); // Use express-session middleware for sessions
app.use(flash()); // Flash messages to the screen
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" directory
app.set("views", path.join(__dirname, "views")); // Set the views directory
app.set("view engine", "ejs"); // Set the view engine to EJS

// Routes
app.use("/", indexRouter); // Use indexRouter for requests starting with "/"
app.use("/owners", ownersRouter); // Use ownersRouter for requests starting with "/owners"
app.use("/users", usersRouter); // Use usersRouter for requests starting with "/users"
app.use("/products", productsRouter); // Use productsRouter for requests starting with "/products"

// // Default route
// app.get("/", (req, res) => {
// 	res.render("index", { error }); // Render the "index" view as the response for the root URL
// });

// Start the server
app.listen(3000); // Listen on port 3000
