
//import {OpenAIClient, AzureKeyCredential} from "@azure/openai";
const {AzureOpenAI} = require("openai");

//const {DefaultAzureCredential, getBearerTokenProvider} = require('@azure/identity');

const OPENAI_API_KEY =  "txz2RVDxWY3OfAvm9GvqxFGgVkJZNRHHRnyqKJCUDnvu6zW3rH9LJQQJ99ALACHYHv6XJ3w3AAAAACOG0d0P";
const OPENAI_ENDPOINT = "https://nbons-m4sohkww-eastus2.openai.azure.com/";

"https://nbons-m4sohkww-eastus2.cognitiveservices.azure.com/openai/deployments/gpt-4o/chat/completions?api-version=2024-08-01-preview";
//resource group is probably somwhere else lol


const endpoint = OPENAI_ENDPOINT;
const apiVersion = "2024-05-01-preview"; //this is the api version
const deployment = "gpt-4o"; //this is the deployment name



//Continue here!!
// const credential = new DefaultAzureCredential();
 //const scope = "https://cognitiveservices.azure.com/.default";
//const azureADTokenProvider = getBearerTokenProvider(credential, scope);

async function generatedText() {

    try {
        //finish this part here to get it right!
    const client = new AzureOpenAI({endpoint:endpoint, apiKey:OPENAI_API_KEY,apiVersion:apiVersion,deployment:deployment});
    const result = await client.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant."
            },
            {
                role: "user",
                content: "What is the meaning of life?"
            }
        ],
        model: "",
    });

    const generatedText = result.choices.map(choice => choice.message.content).join('\n');
    return generatedText;
}
catch(error) {
    console.error(error);
    throw error;
}
}



export {generatedText}

