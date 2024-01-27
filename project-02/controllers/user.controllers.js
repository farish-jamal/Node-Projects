const User = require("../models/user.models");

function handleGetSignUpPage(req, res){
 res.render("signup");
}

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

async function handleuserLogin(req, res){
 const {email, password} = req.body;
 const user = await User.findOne({email, password});
 if(!user){
  res.redirect("/user/login");
 }
  res.redirect("/");
} 

module.exports = {
 handleGetSignUpPage,
 handleCreateUser,
 handleGetLoginPage,
 handleuserLogin
}