const express = require("express");
const busController = require("../controllers/busController");
const router = express.Router();

router.post("/add", busController.addNewBus);
router.get("/available/:seats", busController.getAllBuses);
router.get("/:id/bookings", busController.bookedBus);

module.exports = router;