# 🌟 E-Commerce Website Project 🌟

Welcome to our e-commerce website project! This README will guide you through the setup, structure, and features of our application. Let's dive in! 🚀

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Routes Overview](#routes-overview)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project is a basic e-commerce website built using Node.js, Express, and MongoDB. The site allows users to browse products, add them to their cart, and manage their shopping experience.

## Features
- 🏠 **Home Page:** View the latest products and offers.
- 🛍️ **Shop Page:** Browse all available products.
- 🛒 **Cart:** View and manage items in your cart.
- ➕ **Add to Cart:** Easily add products to your shopping cart.
- 🔑 **User Authentication:** Secure login and logout.
- 🛠️ **Admin Panel:** Manage products and users (available in development mode).

## Installation
To get started with this project, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ecommerce-website.git
    cd ecommerce-website
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```plaintext
    EXPRESS_SESSION_SECRET=yourSecretKey
    NODE_ENV=development
    ```

4. **Start the server:**
    ```bash
    npm start
    ```

Your application should now be running on `http://localhost:3000`! 🎉

## File Structure
Here's a quick overview of the updated project structure:

```
project-root/
├── .vercel/
├── config/
│   ├── development.json
│   ├── keys.js
│   ├── mongoose-connection.js
│   └── multer-config.js
├── controllers/
│   └── authController.js
├── middlewares/
│   └── isLoggedIn.js
├── models/
│   ├── owner-model.js
│   ├── product-model.js
│   └── user-model.js
├── node_modules/
├── public/
├── routes/
│   ├── index.js
│   ├── ownersRouter.js
│   ├── productsRouter.js
│   └── usersRouter.js
├── utils/
│   └── generateToken.js
├── views/
│   ├── partials/
│   │   ├── footer.ejs
│   │   ├── header.ejs
│   ├── admin.ejs
│   ├── cart.ejs
│   ├── createproducts.ejs
│   ├── index.ejs
│   ├── owner-login.ejs
│   └── shop.ejs
├── .env
├── .gitignore
├── app.js
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
└── vercel.json
```

## Routes Overview
- **Home Route:** `GET /` - Displays the homepage.
- **Shop Route:** `GET /shop` - Displays the shop with all products.
- **Cart Route:** `GET /cart` - Displays the user's cart.
- **Add to Cart Route:** `GET /addtocart/:productid` - Adds a product to the user's cart.
- **Logout Route:** `GET /logout` - Logs out the user.
- **Admin Route (Dev Only):** `GET /owners/admin` - Admin panel for managing products.

## Usage
### Home Page
Navigate to the home page to see featured products and promotions.

### Shop Page
Browse through the available products and choose what you like.

### Cart
Add products to your cart and manage your selections before proceeding to checkout.

## Technologies Used
- **Node.js:** JavaScript runtime for server-side development.
- **Express:** Web framework for Node.js.
- **MongoDB:** NoSQL database for storing product and user data.
- **EJS:** Templating engine for rendering views.
- **Mongoose:** ODM for MongoDB.

## Contributing
We welcome contributions! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

We hope you enjoy using our e-commerce website! If you have any questions or feedback, feel free to reach out. Happy shopping! 🛍️✨