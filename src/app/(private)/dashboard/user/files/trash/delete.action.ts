"use server";

import NewFile from "@/models/fileModel";
import { revalidatePath } from "next/cache";
import connectDB from "@/config/database";
import { currentUser } from "@/utils/auth/currentUser";
import { currentUserRole } from "@/utils/auth/currentUserRole";

export const deleteFile = async (fileId: string) => {
  connectDB();
  try {
    const loggedInUser = await currentUser();
    const loggedInUserRole = await currentUserRole();

    if (!loggedInUser || loggedInUserRole !== "user") {
      return {
        message: "vous n'êtes pas autorisé à effectuer cette action",
        error: true,
      };
    }

    const file = await NewFile.findByIdAndDelete({
      _id: fileId,
      owner: loggedInUser.id,
    });
    // console.log("🚀 ~ deleteFile ~ file:", file);

    //revalidate cache
    revalidatePath("/dashboard/user/files");

    return {
      message: "Votre fichier a été supprimé avec succèss",
      success: true,
    };
  } catch (error: any) {
    console.log("🚀 ~ deleteFile ~ error:", error);
    return { message: error.message, success: false };
  }
};

export const toggleShouldDeleteFiles = async (fileId: string) => {
  connectDB();
  try {
    const loggedInUser = await currentUser();
    const loggedInUserRole = await currentUserRole();

    //si l'utilisateur n'est pas connecté ou n'est pas un utilisateur
    if (!loggedInUser || loggedInUserRole !== "user") {
      return {
        message: "vous n'êtes pas autorisé à effectuer cette action",
        error: true,
      };
    }

    const file = await NewFile.findById({
      _id: fileId,
      owner: loggedInUser.id,
    });

    console.log("🚀 ~ toggleShouldDeleteFiles ~ file:TROUVER", file);

    //si le fichier n'appartient pas à l'utilisateur
    const dbUserId = file.owner._id.toString();

    if (dbUserId !== loggedInUser.id) {
      return {
        message: "vous n'êtes pas autorisé à effectuer cette action",
        error: true,
      };
    }

    file.shouldDelete = !file.shouldDelete;
    await file.save();

    console.log("🚀 ~ toggleShouldDeleteFiles ~ file MARQUER:", file);

    revalidatePath("/dashboard/user/files");

    if (file.shouldDelete) {
      return { message: "Fichier ajouté à la corbeille", success: true };
    } else {
      return { message: "Fichier restauré", success: true };
    }
  } catch (error: any) {
    console.log("🚀 ~ toggleShouldDeleteFiles ~ error:", error);
    return { message: error.message, success: false };
  }
};

export const restoreFile = async (fileId: string) => {
  try {
    const user = await currentUser();
    const userRole = await currentUserRole();
    if (!user || userRole !== "user") {
      return {
        message: "vous n'êtes pas autorisé à effectuer cette action",
        error: true,
      };
    }

    const file = await NewFile.findById({ _id: fileId, owner: user.id });

    if (file.owner._id !== user.id) {
      return {
        message: "vous n'êtes pas autorisé à effectuer cette action",
        error: true,
      };
    }

    file.shouldDelete = false;
    await file.save();

    return { message: "File restored successfully", success: true };
  } catch (error: any) {
    console.log("🚀 ~ restoreFile ~ error:", error);
    return { message: error.message, success: false };
  }
};
