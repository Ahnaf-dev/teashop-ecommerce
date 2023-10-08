const mongoose = require("mongoose");
const Product = require("../../models/Products");

export default async function handler(req, res) {
  if (req.method === "GET") {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGO, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
      const products = await Product.find();

      if (products.length > 0) {
        res.json(products);
      } else {
        res.status(404).json({error: "Products not found"})

      }

      mongoose.connection.close()      
    } catch (error) {
      console.error('Error finding products', error)
      res.status(500).json({error: "Server Error"});
      mongoose.connection.close()
    }
  } else {
    res.status(400).json({error: "Req method not supported"})
  }
}
