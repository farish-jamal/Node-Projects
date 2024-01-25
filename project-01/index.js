const express = require("express");

const { connectionDB } = require("./database/db");
const userRoute = require("./routes/user.routes");
const { logReqRes } = require("./middlewares/log.middlewares");

const app = express();
const PORT = 8000;

//Midddleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Custom Middleware
app.use(logReqRes("log.txt"));

// Database Connection
connectionDB(
  "mongodb+srv://farishjamal:OpLtuOvUoEQlFItl@url-shortner.3dhfi68.mongodb.net/?retryWrites=true&w=majority"
);

// Routes:
app.use("/api/users", userRoute);

//Server
app.listen(PORT, () => {
  console.log(`Server Started On ${PORT}`);
});
