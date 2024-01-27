const express = require("express");
const { handleGetUrl } = require("../controllers/url.controllers");
const { handleGetSignUpPage, handleGetLoginPage} = require("../controllers/user.controllers");

const router = express.Router();

router.get("/", handleGetUrl);
router.get("/user/login", handleGetLoginPage)
router.get("/user/signup", handleGetSignUpPage);

module.exports = router;