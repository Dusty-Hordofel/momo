"use server";
// import { put } from "@vercel/blob";
// import { formSchema } from "./upload-button";
// import { conectDB } from "@/config/dbConfig";
import NewFile from "@/models/fileModel";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connectDB from "@/config/database";

connectDB();
// export const uploadFile = async (formData: FormData) => {
//   console.log("🚀 ~ uploadFile ~ formData:", formData);
//   //1. authnetifier l'utilisateur qui essaie d'upload un fichier
//   //2. stocker dans ta database le lien de l'image
//   //3. stocker l'image dans le cloud
//   //4. retourner le lien de l'image
//   //limiter le nombre d'upload par utilisateur par jour

//   const file = formData.get("file") as File;
//   const title = formData.get("title") as string;
//   const fileType = file.type;
//   const fileName = file.name;

//   console.log("🚀 ~ uploadFile ~ file:", file);
//   console.log("🚀 ~ uploadFile ~ fileName:", fileName);

//   const { url } = await put(fileName, file, { access: "public" });
//   console.log("🚀 ~ uploadFile ~ url:", url);

//   const types: Record<string, "image" | "pdf" | "csv" | "avif" | "webp"> = {
//     "image/jpeg": "image",
//     "image/png": "image",
//     "image/gif": "image",
//     "image/avif": "avif",
//     "image/webp": "webp", // Ajout du type MIME pour WebP
//     "application/pdf": "pdf",
//     "text/csv": "csv",
//     // Ajoutez d'autres types d'images ou de fichiers selon vos besoins
//   };

//   const newFile = new NewFile({
//     fileName: title,
//     fileType: types[fileType],
//     fileUrl: url,
//     owner: "65fffcded5d3b0df0db7d593",
//   });

//   console.log("🚀 ~ uploadFile ~ NewFile:", newFile);

//   //save new file
//   await newFile.save();

//   //revalidate  path to update cache
//   revalidatePath("/dashboard/user/files");

//   return url;
// };

export const deleteFile = async (fileId: string) => {
  try {
    const file = await NewFile.findByIdAndDelete(fileId);
    console.log("🚀 ~ deleteFile ~ file:", file);

    //revalidate cache
    revalidatePath("/dashboard/user/files");

    return { message: "File deleted successfully", success: true };
  } catch (error) {
    console.log("🚀 ~ deleteFile ~ error:", error);
    return { message: "Error deleting file", success: false };
  }
};

export const toggleFavorite = async (fileId: string) => {
  try {
    const file = await NewFile.findById(fileId);
    console.log("🚀 ~ addToFavorite ~ file:", file);

    file.isFavorited = !file.isFavorited;
    await file.save();
    revalidatePath("/dashboard/user/files");
    return { message: "File added to favorite", success: true };
  } catch (error) {
    console.log("🚀 ~ addToFavorite ~ error:", error);
    return { message: "Error adding file to favorite", success: false };
  }
};

export const favoriteFiles = async () => {
  try {
    const files = await NewFile.find({ isFavorited: true });
    console.log("🚀 ~ favoriteFiles ~ files:", files);

    return files;
  } catch (error) {
    console.log("🚀 ~ favoriteFiles ~ error:", error);
    return [];
  }
};

// export const shouldDeleteFiles = async () => {
//   try {
//     const files = await NewFile.find({ shouldDelete: true });
//     console.log("🚀 ~ shouldDeleteFiles ~ files:", files);

//     return files;
//   } catch (error) {
//     console.log("🚀 ~ shouldDeleteFiles ~ error:", error);
//     return [];
//   }

// }

// fileId: string

export const toggleShouldDeleteFiles = async (fileId: string) => {
  try {
    const file = await NewFile.findById(fileId);
    console.log("🚀 ~ addToFavorite ~ file:", file);

    file.shouldDelete = !file.shouldDelete;
    await file.save();
    revalidatePath("/dashboard/user/files");

    if (file.shouldDelete) {
      return { message: "Fichier ajouté à la corbeille", success: true };
    } else {
      return { message: "Fichier restauré", success: true };
    }
  } catch (error) {
    console.log("🚀 ~ addToFavorite ~ error:", error);
    return { message: "Error adding file to favorite", success: false };
  }
};

export const restoreFile = async (fileId: string) => {
  try {
    const file = await NewFile.findById(fileId);
    console.log("🚀 ~ restoreFile ~ file:", file);

    file.shouldDelete = false;
    await file.save();

    return { message: "File restored successfully", success: true };
  } catch (error) {
    console.log("🚀 ~ restoreFile ~ error:", error);
    return { message: "Error restoring file", success: false };
  }
};
