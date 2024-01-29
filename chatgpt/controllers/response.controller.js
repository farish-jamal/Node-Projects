const OpenAI =  require("openai");
const openai = new OpenAI({
 apiKey: "",
});
async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "tell me a joke" }],
    model: "gpt-3.5-turbo",
  });
  return completion.choices[0].message.content;
}


async function handleOpenAiResponse(req, res){
 const {prompt} = req.body;
 const response = await main();
 return res.render("home", {
  response: response,
  prompt: prompt 
 });
}

module.exports = {
 handleOpenAiResponse,
}