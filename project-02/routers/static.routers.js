const express = require("express");
const { handleGetUrl } = require("../controllers/url.controllers");
const {handleGetLoginPage} = require("../controllers/user.controllers");

const router = express.Router();

router.get("/", handleGetUrl);
router.get("/user", handleGetLoginPage);

module.exports = router;