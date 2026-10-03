const express = require("express");
const busController = require("../controllers/busController");
const router = express.Router();

router.post("/add", busController.addNewBus);
router.get("/available/:seats", busController.getAllBuses);

module.exports = router;