const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.API_KEY);
const { GoogleGenerativeAI } = require("@google/generative-ai");
