import mongoose from "mongoose";

const centerRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  center: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Center",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  message: { type: String },
  date: {
    type: String,
    required: true,
  },
  time: { type: String, required: true },
  requestedAt: { type: Date, default: Date.now },
  processedAt: { type: Date },
  processedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const CenterRequest =
  mongoose.models.CenterRequest ||
  mongoose.model("CenterRequest", centerRequestSchema);

export default CenterRequest;
