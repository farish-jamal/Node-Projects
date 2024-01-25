const mongoose = require("mongoose");

async function mongoDbConnection(url){
 return mongoose.connect(url);
}

module.exports = {mongoDbConnection};