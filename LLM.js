
import { GoogleGenAI } from "@google/genai";
import readlineAsync from 'readline-async';

const History = [];

const ai = new GoogleGenAI({apiKey:"AIzaSyA5d8b_hhiGB9usVQsVT34d6wXEDDubOeI"});


async function Chatting(userProblem) {

  History.push({
    role:'user',
    parts:[{text:userProblem}]
  })

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: History
  });
  

  History.push({
    role:'model',
    parts:[{text:response.text}]
  })
  
  console.log("\n");
  console.log(response.text);
}


async function main(){
   
   const userProblem = readlineSync.question("Ask me anything--> ");
   await Chatting(userProblem);
   main();
}


main();