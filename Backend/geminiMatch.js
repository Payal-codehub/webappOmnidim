const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function matchProfiles(userProfile, candidates) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
You are an intelligent roommate matching system. Match the user with the most compatible roommate based on preferences.

User Profile:
${JSON.stringify(userProfile, null, 2)}

Candidate Roommates:
${JSON.stringify(candidates, null, 2)}

Respond with:
{
  "bestMatch": "Candidate Name",
  "reason": "Why they are a good match"
}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

module.exports = matchProfiles;
