const express = require("express");
const path = require("path");
const responseRoute = require("./routes/response.routes");
const staticRoute = require("./routes/static.routes");
const {handleDatabaseConnection} = require("./databse/db.conndction");

const app = express();
const PORT = 7001 || process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

handleDatabaseConnection("mongodb+srv://farishjamal98:g0VIVMpDHaMTEAMz@chatbot.sj5f0j2.mongodb.net/?retryWrites=true&w=majority").then(()=>{
  console.log("Database Connected");
})

app.use("/api", responseRoute);
app.use("/", staticRoute);

app.listen(PORT, ()=>{
 console.log("Server started");
})

