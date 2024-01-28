const jwt = require("jsonwebtoken");
const secretID = "Farish@123"

function setUser(user){
 return jwt.sign({
  id: user._id,
  email: user.email
 }, secretID);
}

function getUser(token){
 if(!token) return null;
 return jwt.verify(token, secretID);
}

module.exports = {
 setUser,
 getUser
}