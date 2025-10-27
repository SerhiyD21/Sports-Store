// src/controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

// Допоміжна функція: прибрати пароль з об'єкта користувача
function sanitizeUser(user) {
  if (!user) return user;
  const u = user.toObject ? user.toObject() : { ...user };
  delete u.password;
  return u;
}

// Реєстрація
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });

    const userSafe = sanitizeUser(user);
    res.status(201).json({ message: "User created", user: userSafe });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    next(err);
  }
};

// Логін
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ error: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid email or password" });

    // Генеруємо JWT
    const payload = { id: user._id, role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    const userSafe = sanitizeUser(user);

    res.json({ message: "Login successful", user: userSafe, token });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    next(err);
  }
};



