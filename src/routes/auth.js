const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Реєстрація
router.post("/register", authController.register);

// Логін
router.post("/login", authController.login);

module.exports = router;

