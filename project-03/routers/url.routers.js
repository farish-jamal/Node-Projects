const express = require("express");
const {
  handleCreateShortId,
  handleRedirect,
} = require("../controllers/url.controllers");

const router = express.Router();

router.post("/", handleCreateShortId);

router.get("/:shortId", handleRedirect);

module.exports = router;
