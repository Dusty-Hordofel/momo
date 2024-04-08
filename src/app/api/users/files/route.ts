import connectDB from "@/config/database";
import FileModel from "@/models/fileModel";
import { currentUser } from "@/utils/currentUser";
import { currentUserRole } from "@/utils/currentUserRole";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// export const revalidate = true;

// export const GET = async () => {
//   const user = await currentUser();
//   console.log("🚀 ~ GET ~ user:", user);
//   return NextResponse.json(
//     { message: "Task created successfully" },
//     { status: 201 }
//   );
// };

export async function POST(request: NextRequest) {
  // revalidatePath("/dashboard/user/files");
  try {
    connectDB();
    const { user, userRole } = await request.json();
    // const user = await currentUser();
    // const userRole = await currentUserRole();
    // console.log("🚀 ~ GET ~ userRole:", userRole);

    if (!user || userRole !== "user") {
      return NextResponse.json(
        {
          message: "vous n'êtes pas autorisé à effectuer cette action",
          error: true,
        },
        {
          status: 403,
        }
      );
    }

    const files = await FileModel.find({
      owner: user.id,
    })
      .select(" -updatedAt -__v")
      .populate({
        path: "owner", // Field to populate
        select: "-members -emailVerified -email", // Exclude specific fields from the populated document
      })
      .sort({ createdAt: -1 });

    const dbUserId = files[0].owner._id.toString();

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

    return NextResponse.json({ files }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message, error: true },
      { status: 500 }
    );
  }
}

// export async function POST(request: NextRequest) {
//   try {
//     connectDB();
//     const { fileName, fileId, fileUrl, fileType } = await request.json();

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

//     const newFile = new FileModel({
//       fileName,
//       fileId,
//       fileUrl,
//       fileType,
//       owner: user.id,
//     });

//     await newFile.save();

//     return new Response(
//       JSON.stringify({
//         message: "votre fichier a été télécharger avec succèss",
//         success: true,
//       }),
//       {
//         status: 200,
//       }
//     );
//   } catch (error: any) {
//     // console.log("🚀 ~ POST ~ error:", error);
//     return new Response(
//       JSON.stringify({ message: error.message, error: true }),
//       {
//         status: 500,
//       }
//     );
//   }

// finally {
//   // const path = request.nextUrl.searchParams.get("path");
//   // const path = request.nextUrl.pathname;
//   // console.log("🚀 ~ POST ~ path:", path);
//   revalidatePath("/dashboard/user/files");
// }
// }
