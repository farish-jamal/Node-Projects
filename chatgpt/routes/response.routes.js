const express = require("express");
const {handleOpenAiResponse} =  require("../controllers/response.controller");
const route = express.Router();

route.get("/", (req, res)=>{
 res.render("home", {
  response: null,
  prompt: null
 });
});

route.post("/response",handleOpenAiResponse);

module.exports = route;