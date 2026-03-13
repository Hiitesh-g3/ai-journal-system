import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import journalRoutes from "./routes/journal.routes.js";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();


app.use(cors({
  origin: "*"
}))
app.use(express.json());
app.use(morgan("dev"));


connectDB();

app.get("/", (req, res) => {
  res.send("AI Journal Backend is running 🚀");
});

app.use("/api/journal", journalRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "Server running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});