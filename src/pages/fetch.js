const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
        apiKey: "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",
    });
const openai = new OpenAIApi(configuration);
async function callApi() {
    const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "What are the macronutrients for 4 whole eggs?",
            temperature: 0,
            max_tokens: 100,
      });
      console.log(response.data.choices[0].text)
    }
    callApi()