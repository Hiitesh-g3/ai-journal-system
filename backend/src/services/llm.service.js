import axios from "axios";

export const analyzeEmotion = async (text) => {
  try {
    
    console.log("Current API Key starts with:", process.env.NEW_GEMINI_KEY?.substring(0, 10));

    const prompt = `
You are an emotion analysis system.

Your task is to analyze a user's journal entry and extract emotional insights.

Return ONLY valid JSON.
Do NOT include explanations.
Do NOT include markdown.
Do NOT include any text outside the JSON.

The JSON must follow this EXACT structure:

{
  "emotion": "single emotion word",
  "keywords": ["keyword1","keyword2","keyword3"],
  "summary": "one short sentence summary"
}

Rules:
- emotion must be a single lowercase word
- keywords must contain exactly 3 words
- summary must be under 15 words
- output must be valid JSON only

Journal Entry:
"${text}"
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.NEW_GEMINI_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        
        generationConfig: {
          responseMimeType: "application/json"
        }
      }
    );

    const raw = response.data.candidates[0].content.parts[0].text;

    // Fallback regex cleanup (still good practice)
    const cleaned = raw.replace(/```json|```/g, "").trim();

    return JSON.parse(cleaned);

  } catch (error) {
    console.error(
      "LLM ERROR:",
      error.response?.data || error.message
    );

    return {
      emotion: "unknown",
      keywords: [],
      summary: "Emotion analysis failed"
    };
  }
};