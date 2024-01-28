const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
 shortId:{
  type: String,
  unique: true,
  required: true
 },
 redirectId:{
  type: String,
  required: true
 },
 numberOfVisits:{
  type: Number,
  default: 0
 },
 createdBy:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
 }
}, {timestamps: true});

const Url = mongoose.model("Url", urlSchema);
module.exports = Url;