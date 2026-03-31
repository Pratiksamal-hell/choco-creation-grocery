// 1️⃣ Load environment variables FIRST
require("dotenv").config();

// 2️⃣ Import packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// 3️⃣ Import routes
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

// 4️⃣ Create app
const app = express();

// 5️⃣ Middleware
app.use(cors());
app.use(express.json());

// 6️⃣ Routes (KEEP ALL HERE ✅)
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// 7️⃣ Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// 8️⃣ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// 9️⃣ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});