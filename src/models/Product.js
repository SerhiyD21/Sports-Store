const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
    description: { type: String },
    imageUrl: { type: String },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

