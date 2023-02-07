import Chart from '../components/Graph.js';
import Query from '../components/Query';
import Fetch from '../components/Fetch.js';
import Labels from '../components/Labels.js'
import { useState } from 'react';




export default function Home(){
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
            apiKey: "",
        });
    const openai = new OpenAIApi(configuration);
    
    async function callApi() {
        const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: "give the macronutrients and calories per 100g in the format like protein:x, carbohydrates:y and fats:z, calories:q for "+ input,
                temperature: 0,
                max_tokens: 60,
          });
          setResult(response.data.choices[0].text)
        }  

    return( 
    <div className="Home">
        <h1></h1>
        <div className="grid md:grid-cols-2 gap-4">
            <Chart></Chart>
            <Query callApi={callApi} setInput={setInput} result={result}></Query>
            <Labels result={result}></Labels>
        </div>
    </div>
    )

}
