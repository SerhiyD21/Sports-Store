const Review = require("../models/Review");

// Створити відгук
exports.createReview = async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    next(err);
  }
};

// Отримати всі відгуки
exports.getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find()
      .populate("userId")
      .populate("productId");
    res.json(reviews);
  } catch (err) {
    next(err);
  }
};

// Оновити відгук
exports.updateReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json(review);
  } catch (err) {
    next(err);
  }
};

// Видалити відгук
exports.deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json({ message: "Review deleted" });
  } catch (err) {
    next(err);
  }
};

