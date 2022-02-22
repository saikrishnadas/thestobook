import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Suggestion =
  mongoose.models.Suggestion || mongoose.model("Suggestion", suggestionSchema);

export default Suggestion;
