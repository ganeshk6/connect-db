const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/", userController.addNewUser);
router.get("/", userController.getAllUsers);
router.post("/bookings", userController.userBooking);
router.get("/:id/bookings", userController.userBooked);

module.exports = router;