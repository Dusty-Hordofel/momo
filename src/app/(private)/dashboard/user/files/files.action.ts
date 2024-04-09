// import { revalidate } from "@/app/api/users/files/route";
import connectDB from "@/config/database";
import Files from "@/models/fileModel";
import { currentUser } from "@/utils/auth/currentUser";
import { currentUserRole } from "@/utils/auth/currentUserRole";
// import { currentUser } from "@/utils/next-auth/currentUser";
// import { currentUserRole } from "@/utils/next-auth/currentUserRole";
import { revalidatePath } from "next/cache";

export const getAllFiles = async (deleteChoice: boolean) => {
  connectDB();
  try {
    let files;
    const user = await currentUser();
    const userRole = await currentUserRole();

    if (!user || userRole !== "user") {
      return new Response(
        JSON.stringify({
          message: "vous n'êtes pas autorisé à effectuer cette action",
          error: true,
        }),
        {
          status: 403,
        }
      );
    }

    files = await Files.find({
      shouldDelete: deleteChoice,
      owner: user.id,
    })
      .select(" -updatedAt -__v")
      .populate({
        path: "owner", // Field to populate
        select: "-members -emailVerified -email", // Exclude specific fields from the populated document
      })
      .sort({ createdAt: -1 });

    const dbUserId = files[0].owner._id.toString();

    // console.log("🚀 ~ getAllFiles ~ files:", files);

    //verifier que l'utilisateur est le propriétaire du fichier grace à l'id
    if (dbUserId !== user.id) {
      return new Response(
        JSON.stringify({
          message: "vous n'êtes pas autorisé à effectuer cette action",
          error: true,
        }),
        {
          status: 403,
        }
      );
    }

    // if (files.length > 0) {
    //   return { files: JSON.parse(JSON.stringify(files)) };
    // } else {
    //   return { files: [] };
    // }

    // revalidatePath("/api/users/files");

    return { files: JSON.parse(JSON.stringify(files)) };
  } catch (error) {
    console.log(error);
    return [];
  }
};

// export const addFile = async (
//   fileName: string,
//   fileId: string,
//   fileUrl: string,
//   fileType: string
// ) => {
//   try {
//     const user = await currentUser();
//     const userRole = await currentUserRole();

//     if (!user || userRole !== "user") {
//       return new Response(
//         JSON.stringify({
//           message: "vous n'êtes pas autorisé à effectuer cette action",
//           error: true,
//         }),
//         {
//           status: 403,
//         }
//       );
//     }

//     const newFile = new Files({
//       fileName,
//       fileId,
//       fileUrl,
//       fileType,
//       owner: user.id,
//     });

//     await newFile.save();

//     revalidatePath("/api/users/files");

//     return {
//       message: "votre fichier a été télécharger avec succèss",
//       success: true,
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };
