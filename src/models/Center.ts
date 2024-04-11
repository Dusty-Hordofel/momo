import mongoose from "mongoose";

const centerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    description: { type: String },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // required: true,
    },
    // createdAt: { type: Date, default: Date.now },
    stagiaires: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        match: { role: "user" }, // Filtrer les membres par leur rôle
      },
    ],
    moderators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    address: {
      street: String,
      postalCode: String,
      city: String,
      region: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    contact: {
      phone: String,
      fax: String,
      email: String,
    },
    website: String,
    social: {
      youtube: String,
      facebook: String,
      twitter: String,
      linkedin: String,
    },
  },
  { timestamps: true }
);

// Create the model
const Center = mongoose.models.Center || mongoose.model("Center", centerSchema);

// Export the model
export default Center;
