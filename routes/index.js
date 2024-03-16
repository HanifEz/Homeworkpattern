const express = require("express");
const router = express.Router();
const movieRoute = require("./movieRoute");
const userRoute = require("./userRoute");
const path = require("path");


router.use("/api/images", express.static(path.join(__dirname, "../uploads")));
router.use("/api/movies", movieRoute);
router.use("/api/users", userRoute);

module.exports = router;