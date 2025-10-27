const Product = require("../models/Product");

// Створити продукт
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

// Отримати всі продукти
exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate("category").populate("sellerId");
    res.json(products);
  } catch (err) {
    next(err);
  }
};

// Отримати продукт по id
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate("category").populate("sellerId");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    next(err);
  }
};

// Оновити продукт
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    next(err);
  }
};

// Видалити продукт
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (err) {
    next(err);
  }
};

