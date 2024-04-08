import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const memberSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dgsc66scx/image/upload/v1712483523/Asset_5_icflwx.png",
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    role: {
      type: String,
      enum: ["user", "centre", "admin", "superadmin"],
      default: "user",
    },
    favoriteFiles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File", //the collection where we take the id from
      },
    ],
    trashedFiles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File", //the collection where we take the id from
      },
    ],
    members: [memberSchema],
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
