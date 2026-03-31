const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// PLACE ORDER
router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ message: "Order placed successfully" });
});

// GET ALL ORDERS
router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ date: -1 });
  res.json(orders);
});

module.exports = router;