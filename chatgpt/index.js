const express = require("express");
const path = require("path");
const responseRoute = require("./routes/response.routes");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", responseRoute);

app.listen(7001, ()=>{
 console.log("Server started");
})

