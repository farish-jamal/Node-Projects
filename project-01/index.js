const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8000;
const users = require("./MOCK_DATA.json");
require("./database/db");
const User = require("./models/user.models")

//Midddleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Custom Middleware
app.use((req, res, next) => {
   const data = `${Date.now()} : ${req.url} : ${req.ip} : ${req.method}\n`;
   fs.appendFile("log.txt", data, (err, data) => {
      next();
   })
})

// Routes:
app.get("/api/users", (req, res) => {
   return res.json(users);
})

app.route("/api/users/:id").get((req, res) => {
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);
   if (!user) return res.status(404).json({ "Error": "No User Found" });
   return res.status(200).json(user);
}).patch((req, res) => {
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);
   if (!user) return res.status(404).json({ "Error": "No User Found" });
   const body = req.body;
   user.first_name = body.first_name;
   user.job_profile = body.job_profile;
   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      if (err) {
         return res.status(500);
      } else {
         return res.status(200).send(`${id} updated Sucessfully`);
      }
   })
}).delete( async(req, res) => {
   const id = Number(req.params.id);
   await User.fi
})

app.post("/api/users", async (req, res) => {
   const body = req.body;
   const result  = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.email,
      job_profile: body.job_profile
   })
   return res.status(201).json({msg: "sucess"});
})

app.listen(PORT, () => {
   console.log(`Server Started On ${PORT}`);
})