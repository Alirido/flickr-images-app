const express = require("express");
const imagesController = require("../controllers/images_controller.js");

const router = express.Router();

router.get("/flickr-images", imagesController.getImages);

module.exports = router;
