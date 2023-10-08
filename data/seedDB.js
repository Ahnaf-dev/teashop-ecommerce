// seedDB.js
const mongoose = require("mongoose");
const Product = require("../models/Products");
const dbURI = ""
// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Create an array of product data
const products = [
  {
    name: "Royal Tea",
    price: 10.99,
    image: "/royal-tea.jpg",
    description: `
    Indulge in the Elegance of Royal Tea

Step into a world of refinement and luxury as you savor our exquisite Royal Tea collection. Crafted with meticulous care, each tea leaf tells a story of tradition and opulence, fit for royalty.

Experience the regal flavors that have graced the palaces of kings and queens for centuries. Let the delicate aromas and exquisite blends transport you to a time when tea was a cherished symbol of prestige and sophistication.

Elevate your tea-drinking experience with our Royal Tea, where every sip is a royal decree of taste and refinement. Discover a legacy of flavor, fit for those with a taste for the extraordinary
    `,
  },
  {
    name: "Green Tea",
    price: 19.99,
    image: "/green-tea.jpg",
    description: `
    Indulge in the Elegance of Royal Tea

Step into a world of refinement and luxury as you savor our exquisite Royal Tea collection. Crafted with meticulous care, each tea leaf tells a story of tradition and opulence, fit for royalty.

Experience the regal flavors that have graced the palaces of kings and queens for centuries. Let the delicate aromas and exquisite blends transport you to a time when tea was a cherished symbol of prestige and sophistication.

Elevate your tea-drinking experience with our Royal Tea, where every sip is a royal decree of taste and refinement. Discover a legacy of flavor, fit for those with a taste for the extraordinary.
    `,
  },
  {
    name: "Honey Lemon Tea",
    price: 19.99,
    image: "/honey-lemon-tea.jpg",
    description: `
    Delight in the Zest of Honey Lemon Tea

Sip sunshine in a cup with our Honey Lemon Tea. The perfect harmony of sweet and zesty, it's a comforting hug for your taste buds.

Experience the warmth of honey and the zing of lemon dancing together. It's a soothing symphony of flavors that brightens your day, one sip at a time.

Let the soothing blend of Honey Lemon Tea infuse your moments with sweetness and refreshment. A cozy cup that feels like a warm embrace.
    `,
  },
  // Add more products as needed
];

// Insert the products into the database
Product.insertMany(products)
  .then(() => {
    console.log("Database seeded successfully");
  })
  .catch((err) => {
    console.error("Error seeding the database:", err);
  })
  .finally(() => {
    // Close the database connection
    mongoose.connection.close();
  });
