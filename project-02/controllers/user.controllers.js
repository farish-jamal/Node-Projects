const User = require("../models/user.models");

function handleGetLoginPage(req, res){
 res.render("login");
}

async function handleCreateUser(req, res){
 const body = req.body;
 await User.create({
  userName: body.userName,
  email: body.email,
  password: body.password
 })
 return res.redirect("/");
}

module.exports = {
 handleGetLoginPage,
 handleCreateUser
}