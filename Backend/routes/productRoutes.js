const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// ADD a new product
router.post("/", async (req, res) => {
  try {

    const { name, category, price, image, description } = req.body;

    const newProduct = new Product({
      name,
      category,
      price,
      image,
      description
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to add product" });
  }
});

module.exports = router;
