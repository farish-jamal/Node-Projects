const express = require("express");

const {handleCreateUser, handleuserLogin} = require("../controllers/user.controllers");

const route = express.Router();

route.post("/signup", handleCreateUser);
route.post("/login", handleuserLogin)

module.exports = route;