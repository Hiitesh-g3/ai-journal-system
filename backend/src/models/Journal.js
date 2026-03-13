import mongoose from "mongoose";

const journalSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true
    },

    ambience: {
      type: String,
      required: true,
      enum: ["forest", "ocean", "mountain"]
    },

    text: {
      type: String,
      required: true,
      minlength: 10
    },

    emotion: {
      type: String,
      default: null
    },

    keywords: {
      type: [String],
      default: []
    },

    summary: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true
  }
);

journalSchema.index({ userId: 1, createdAt: -1 });

const Journal = mongoose.model("Journal", journalSchema);

export default Journal;