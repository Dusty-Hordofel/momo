import connectDB from "@/config/database";
import FileModel from "@/models/fileModel";
import { currentUser } from "@/utils/next-auth/currentUser";
import { currentUserRole } from "@/utils/next-auth/currentUserRole";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    connectDB();
    const user = await currentUser();
    const userRole = await currentUserRole();

    // if (!user || userRole !== "user") {
    //   return NextResponse.json(
    //     {
    //       message: "Vous n'êtes pas autorisé à effectuer cette action",
    //       error: true,
    //     },
    //     {
    //       status: 403,
    //     }
    //   );
    // }

    // const files = await FileModel.find({
    //   shouldDelete: true,
    //   owner: user.id,
    // })
    //   .select(" -updatedAt -__v")
    //   .populate({
    //     path: "owner",
    //     select: "-members -emailVerified -email",
    //   })
    //   .sort({ createdAt: -1 });
    const files = await FileModel.find();

    // return NextResponse.json({ files }, { status: 200 });
    return NextResponse.json({ files }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Une erreur s'est produite" },
      { status: 500 }
    );
  }
}

// import connectDB from "@/config/database";
// import FileModel from "@/models/fileModel";
// import { currentUser } from "@/utils/next-auth/currentUser";
// import { currentUserRole } from "@/utils/next-auth/currentUserRole";
// import { revalidatePath } from "next/cache";
// import { NextRequest, NextResponse } from "next/server";

// // export const revalidate = true;

// export async function GET() {
//   try {
//     connectDB();
//     const user = await currentUser();
//     const userRole = await currentUserRole();

//     if (!user || userRole !== "user") {
//       return NextResponse.json(
//         {
//           message: "vous n'êtes pas autorisé à effectuer cette action",
//           error: true,
//         },
//         {
//           status: 403,
//         }
//       );
//     }

//     const files = await FileModel.find({
//       shouldDelete: true,
//       owner: user.id,
//     })
//       .select(" -updatedAt -__v")
//       .populate({
//         path: "owner", // Field to populate
//         select: "-members -emailVerified -email", // Exclude specific fields from the populated document
//       })
//       .sort({ createdAt: -1 });
//     console.log("🚀 ~ GET ~ files:", files);

//     // return NextResponse.json({ files }, { status: 200 });

//     return new Response(JSON.stringify({ files }), {
//       status: 200,
//     });
//   } catch (error: any) {
//     // return NextResponse.json(
//     //   { message: error.message, error: true },
//     //   { status: 500 }
//     // );

//     return new Response(JSON.stringify({ message: error }), {
//       status: 500,
//     });
//   }
// }
