// 1️⃣ Load environment variables FIRST
require("dotenv").config();


// 3️⃣ Import packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// 4️⃣ Create app
const app = express();

// 5️⃣ Middleware
app.use(cors());
app.use(express.json());
app.use("/api/products", require("./routes/productRoutes"));

// 6️⃣ Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// 7️⃣ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// 8️⃣ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
