const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // If req.user is already set (by extractUser middleware), just proceed
  if (req.user) {
    return next();
  }

  const token = req.cookies.token;

  // 1. Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT Verification Failed:", err.message);
    res.clearCookie("token");
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
