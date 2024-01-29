const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res)=>{
  res.render("home");
})

app.get("/res", async(req, res)=>{
 const response = await main();
 console.log(response);
})


const OpenAI =  require("openai");
const openai = new OpenAI({
 apiKey: "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",
});
async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "tell me a joke" }],
    model: "gpt-3.5-turbo",
  });
  return completion.choices[0].message.content;
}

app.listen(7001, ()=>{
 console.log("Server started");
})

