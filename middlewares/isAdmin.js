exports.isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ success: false, message: "Unauthorized: Please login" });
  }
  
  if (req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ success: false, message: "Forbidden: Admin access required" });
  }
};
