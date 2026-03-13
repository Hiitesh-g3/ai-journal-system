import Journal from "../models/Journal.js";
import { analyzeEmotion } from "../services/llm.service.js";
import { buildInsights } from "../utils/insights.utils.js";

export const createJournalEntry = async (req, res) => {
  try {

    const { userId, ambience, text } = req.body;

    const journal = await Journal.create({
      userId,
      ambience,
      text
    });

    res.status(201).json({
      success: true,
      data: journal
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Failed to create journal entry"
    });

  }
};


export const getUserJournals = async (req, res) => {
  try {

    const { userId } = req.params;

    const journals = await Journal.find({ userId })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: journals
    });

  } catch (error) {

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
          message: "Text is required"
        });
      }
  
      const analysis = await analyzeEmotion(text);
  
      res.json({
        success: true,
        data: analysis
      });
  
    } catch (error) {
  
      res.status(500).json({
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
  
      res.status(500).json({
        message: "Failed to generate insights"
      });
  
    }
  };