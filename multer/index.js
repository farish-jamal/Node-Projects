const express = require("express");
const path = require("path");
const app = express();

const PORT = 3001 || process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res)=>{
 return res.render("input");
});


app.listen(PORT, ()=>{
 console.log(`App Is Running On Port ${PORT}`);
})