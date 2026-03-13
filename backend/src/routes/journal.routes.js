import express from "express";
import {
  createJournalEntry,
  getUserJournals,
  analyzeJournalText,
  getUserInsights
} from "../controllers/journal.controller.js";

const router = express.Router();

router.post("/", createJournalEntry);

router.get("/:userId", getUserJournals);

router.post("/analyze", analyzeJournalText);

router.get("/insights/:userId", getUserInsights);

export default router;