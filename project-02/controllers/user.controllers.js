const { v4: uuidv4 } = require('uuid');
const User = require("../models/user.models");
const {setUser, getUser} = require("../ulits/auth.utils");

function handleGetSignUpPage(req, res){
 return res.render("signup");
}

function handleGetLoginPage(req, res){
 return res.render("login");
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
  return res.render("login", {
   errorMsg: "No User Found Macthing The Entry!"
  });
 }
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);
  return res.redirect("/");
} 

module.exports = {
 handleGetSignUpPage,
 handleCreateUser,
 handleGetLoginPage,
 handleuserLogin
}