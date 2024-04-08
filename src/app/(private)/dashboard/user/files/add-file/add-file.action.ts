"use server";
import FileModel from "@/models/fileModel";
import { currentUser } from "@/utils/auth/currentUser";
import { currentUserRole } from "@/utils/auth/currentUserRole";
import { revalidatePath } from "next/cache";

type fileType = {
  fileName: string;
  fileId: string;
  fileUrl: string;
  fileType: string;
};

export const addDataToFile = async (formData: FormData) => {
  const fileName = formData.get("fileName");
  const fileId = formData.get("fileId");
  const fileUrl = formData.get("fileUrl");
  const fileType = formData.get("fileType");

  if (!fileName || !fileId || !fileUrl || !fileType) {
    return { message: "Tous les champs sont requis", error: true };
  }

  try {
    const user = await currentUser();
    const userRole = await currentUserRole();

    if (!user || userRole !== "user") {
      return {
        message: "vous n'êtes pas autorisé à effectuer cette action",
        error: true,
      };
    }

    const newFile = new FileModel({
      fileName,
      fileId,
      fileUrl,
      fileType,
      owner: user.id,
    });

    await newFile.save();

    revalidatePath("/dashboard/user/files");

    return {
      message: "votre fichier a été télécharger avec succèss",
      success: true,
    };
  } catch (error: any) {
    return {
      message: error.message,
      error: true,
    };
  }
};
