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


async function handleOpenAiResponse(req, res){
 const response = await main();
 console.log(response);
}

module.exports = {
 handleOpenAiResponse,
}