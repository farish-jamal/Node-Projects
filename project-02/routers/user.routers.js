const express = require("express");

const {handleCreateUser} = require("../controllers/user.controllers");

const route = express.Router();

route.post("/signup", handleCreateUser);

module.exports = route;