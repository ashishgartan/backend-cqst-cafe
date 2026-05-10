const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const isAuthenticated = require("../middlewares/isAuthenticated");

// The API endpoint your fetch calls
router.post("/api/orders", isAuthenticated, orderController.createOrder);
router.post("/api/orders/cancel/:id", isAuthenticated, orderController.userCancelOrder);
router.get("/api/orders", isAuthenticated, orderController.getApiOrders);

module.exports = router;
