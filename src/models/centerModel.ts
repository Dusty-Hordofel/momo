import mongoose from "mongoose";

const centerSchema = new mongoose.Schema(
  {
    // id: {
    //   type: Number,
    //   required: true,
    // },
    title: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
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
    description: String,
  },
  { timestamps: true }
);

// Create the model
const Center = mongoose.models.Center || mongoose.model("Center", centerSchema);

// Export the model
export default Center;
