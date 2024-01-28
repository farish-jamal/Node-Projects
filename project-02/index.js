const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const { mongoDbConnection } = require("./database/db");
const urlRoute = require("./routers/url.routers");
const staticRoute = require("./routers/static.routers");
const userRoute = require("./routers/user.routers")
const {restrictToLoginUser, checkAuth} = require("./middleware/auth.middleware");

const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Database Connection
mongoDbConnection(
  "mongodb+srv://farishjamal:OpLtuOvUoEQlFItl@url-shortner.3dhfi68.mongodb.net/?retryWrites=true&w=majority"
).then(() => {
  console.log("Database connected Succesfully!");
});

app.use("/", checkAuth, staticRoute);
app.use("/api/url", restrictToLoginUser, urlRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
