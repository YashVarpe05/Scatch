const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash");
const ownersRouter = require("./routes/ownersRouter.js");
const usersRouter = require("./routes/usersRouter.js");
const productsRouter = require("./routes/productsRouter.js");
const indexRouter = require("./routes/index.js");

require("./config/mongoose-connection.js");
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

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

// Additional code
// Import controllers
const ownersController = require("./controllers/ownersController.js");
const usersController = require("./controllers/usersController.js");
const productsController = require("./controllers/productsController.js");

// Use controllers
app.use("/owners", ownersController);
app.use("/users", usersController);
app.use("/products", productsController);
