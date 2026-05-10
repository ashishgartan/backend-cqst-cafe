const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const multer = require("multer");

// --- Better Multer Configuration ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/avatars/"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    // Saves file as: 1740000000000-burger.png
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/api/signup", upload.single("avatar"), authController.postSignup);

router.post("/api/login", authController.postLogin);

router.get("/api/logout", authController.logout);

module.exports = router;
