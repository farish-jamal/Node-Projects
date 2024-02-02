const express = require("express");
const path = require("path");
const app = express();
const multer  = require('multer')

const PORT = 3001 || process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
 destination: function (req, file, cb) {
  return cb(null, "./uploads");
 },
 filename: function (req, file, cb) {
  return cb(null, `${Date.now()} - ${file.originalname}`);
 }
})

const upload = multer({ storage: storage })

app.get("/", (req, res) => {
  return res.render("input");
});

app.post("/upload", upload.single('profile'), (req, res) =>{
 console.log(req.body);
 console.log(req.file);
 return res.redirect("/");
})

app.listen(PORT, () => {
  console.log(`App Is Running On Port ${PORT}`);
});
