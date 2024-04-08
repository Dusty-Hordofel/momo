import { Schema, model, models } from "mongoose";

const fileSchema = new Schema(
  {
    fileName: {
      type: String,
      required: [true, "Le nom du fichier est requis"],
    },
    fileUrl: { type: String, required: [true, "Le fichier est requis"] },
    fileId: { type: String, required: [true, "Le fichier est requis"] },
    fileType: {
      type: String,
      enum: [
        "image",
        "pdf",
        "avif",
        "webp",
        "heif",
        "heic",
        "jpg",
        "jpeg",
        "png",
      ],
      required: [true, "Format de fichier non pris en charge"],
    }, // Type de fichier
    isFavorited: {
      type: Boolean,
      default: false,
    }, // Favoris
    shouldDelete: {
      type: Boolean,
      default: false,
    },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Relation avec l'utilisateur
  },
  { timestamps: true }
);

const storage = models.File || model("File", fileSchema);

export default storage;
