const express = require("express");
const {
  handleGetUrl
} = require("../controllers/url.controllers");

const router = express.Router();

router.get("/", handleGetUrl);

module.exports = router;
