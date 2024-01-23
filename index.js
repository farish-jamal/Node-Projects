const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8000;
const users = require("./MOCK_DATA.json");

//Midddleware
app.use(express.urlencoded({ extended: false }));

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
   return res.json(user);
}).patch((req, res) => {
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);
   const body = req.body;
   user.first_name = body.first_name;
   user.job_profile = body.job_profile;
   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.send(`${id} updated Sucessfully`);
   })
}).delete((req, res) => {
   const id = Number(req.params.id);
   delete users[id - 1];
   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.send(`${id} deleted Sucessfully`);
   })
})

app.post("/api/users", (req, res) => {
   const body = req.body;
   users.push({ ...body, id: users.length + 1 });
   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ "status": "success", id: users.length });
   })
})

app.listen(PORT, () => {
   console.log(`Server Started On ${PORT}`);
})