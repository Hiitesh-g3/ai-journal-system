import Journal from "../models/Journal.js";
import { analyzeEmotion } from "../services/llm.service.js";
import { buildInsights } from "../utils/insights.utils.js";


export const createJournalEntry = async (req, res) => {
  try {
    const { userId, ambience, text } = req.body;

    if (!userId || !ambience || !text) {
      return res.status(400).json({
        success: false,
        message: "userId, ambience and text are required"
      });
    }

    let aiAnalysis = {
      emotion: null,
      keywords: [],
      summary: null
    };

    try {
      aiAnalysis = await analyzeEmotion(text);
    } catch (aiError) {
      console.error("AI ANALYSIS ERROR:", aiError.message);
    }

    const journal = await Journal.create({
      userId,
      ambience,
      text,
      emotion: aiAnalysis?.emotion || null,
      keywords: aiAnalysis?.keywords || [],
      summary: aiAnalysis?.summary || null
    });

    res.status(201).json({
      success: true,
      data: journal
    });

  } catch (error) {
    console.error("CREATE ENTRY ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create journal entry"
    });
  }
};


export const getUserJournals = async (req, res) => {
  try {
    const { userId } = req.params;

    const journals = await Journal
      .find({ userId })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: journals
    });

  } catch (error) {
    console.error("GET JOURNALS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch journals"
    });
  }
};


export const analyzeJournalText = async (req, res) => {
  try {

    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required"
      });
    }

    const analysis = await analyzeEmotion(text);

    res.json({
      success: true,
      data: analysis
    });

  } catch (error) {
    console.error("ANALYZE ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Analysis failed"
    });
  }
};

export const getUserInsights = async (req, res) => {
  try {

    const { userId } = req.params;

    const journals = await Journal.find({ userId });

    const insights = buildInsights(journals);

    res.json({
      success: true,
      data: insights
    });

  } catch (error) {
    console.error("INSIGHTS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate insights"
    });
  }
};