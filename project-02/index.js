const express = require("express");
const path = require("path");

const { mongoDbConnection } = require("./database/db");
const urlRoute = require("./routers/url.routers");

const app = express();
const PORT = 8001;

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Database Connection
mongoDbConnection(
  "mongodb+srv://farishjamal:OpLtuOvUoEQlFItl@url-shortner.3dhfi68.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{console.log("Database connected Succesfully!")});

app.use('/api/url', urlRoute);

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});