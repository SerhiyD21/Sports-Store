const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// CRUD для відгуків
router.post("/", reviewController.createReview);
router.get("/", reviewController.getAllReviews);
router.put("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

module.exports = router;

