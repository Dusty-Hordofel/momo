"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import File from "@/models/fileModel";
import connectDB from "@/config/database";
import { currentUser } from "@/utils/auth/currentUser";
import { currentUserRole } from "@/utils/auth/currentUserRole";
import User from "@/models/userModel";

connectDB();
export const favoriteFiles = async () => {
  try {
    const user = await currentUser();
    const userRole = await currentUserRole();
    if (!user || userRole !== "user") {
      redirect("/error");
    }

    const files = await File.find({
      isFavorited: true,
      shouldDelete: false,
      owner: user.id,
    });

    return { files: JSON.parse(JSON.stringify(files)) };
  } catch (error) {
    console.log("🚀 ~ favoriteFiles ~ error:", error);
    return { message: "Error fetching favorite files", success: false };
  }
};

export const toggleFavorite = async (fileId: string) => {
  try {
    const loggedInUser = await currentUser();
    const loggedInUserRole = await currentUserRole();

    if (!loggedInUser || loggedInUserRole !== "user") {
      return {
        message: "vous n'êtes pas autorisé à effectuer cette action",
        error: true,
      };
    }

    const file = await File.findById(fileId).populate({
      path: "owner", // Field to populate
      select: "-password -trashedFiles -members -createdAt -updatedAt -__v", // Exclude specific fields from the populated document
    });

    // if (!file) {
    //   return {
    //     message: "Vous n'avez pas de fichiers sur votre espace",
    //     error: true,
    //   };
    // }

    // verifie que l'utilisateur est le propriétaire du fichier grace à l'id
    const dbUserId = file.owner._id.toString();
    if (dbUserId !== loggedInUser.id) {
      return {
        message: "vous n'êtes pas autorisé à effectuer cette action",
        error: true,
      };
    }

    file.isFavorited = !file.isFavorited;

    //trouvez l'utilisateur
    const user = await User.findById(file.owner._id).select(
      "-password -trashedFiles -members -createdAt -updatedAt -__v"
    );

    // Vérifiez si le fichier est déjà dans les favoris de l'utilisateur
    const isFileInFavorites = user.favoriteFiles.includes(fileId);

    if (file.isFavorited && !isFileInFavorites) {
      // Si le fichier est marqué comme favori et n'est pas déjà dans les favoris de l'utilisateur, on l'ajoute
      await User.findByIdAndUpdate(
        file.owner._id,
        {
          $addToSet: { favoriteFiles: fileId },
        }
        // { new: true }
      );
    } else if (!file.isFavorited && isFileInFavorites) {
      // Si le fichier n'est plus marqué comme favori mais est dans les favoris de l'utilisateur, on le retire
      await User.findByIdAndUpdate(
        file.owner._id,
        {
          $pull: { favoriteFiles: fileId },
        }
        // { new: true }
      );
    }
    await file.save();
    // console.log("FILEID", fileId);
    // console.log("FILE", file);
    // console.log("USER", user);

    revalidatePath("/dashboard/user/files");

    return { message: "Fichier ajouté à vos favoris", success: true };
  } catch (error) {
    console.log("🚀 ~ toggleFavorite ~ error:", error);
    return { message: "Error adding file to favorite", success: false };
  }
};
