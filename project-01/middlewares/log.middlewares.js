const fs = require("fs");

function logReqRes(filename){
  return (req, res, next) => {
   const data = `${Date.now()} : ${req.url} : ${req.ip} : ${req.method}\n`;
   fs.appendFile(filename, data, (err, data) => {
    next();
   });
  }
}

module.exports = {logReqRes};