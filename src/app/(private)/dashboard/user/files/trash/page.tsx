// "use client"
import React from "react";
import { currentUser } from "@/utils/auth/currentUser";
import { currentUserRole } from "@/utils/auth/currentUserRole";
import { redirect } from "next/navigation";
// import { favoriteFiles } from "./favorites.action";
import FileCard from "../../_components/FileCard";
import { getAllFiles } from "../files.action";
import { cn } from "@/lib/utils";

const TrashedFilesPage = async () => {
  const user = await currentUser();
  const userRole = await currentUserRole();

  if (!user && userRole !== "user") {
    redirect("/auth/login");
  }

  const { files }: any = await getAllFiles(true);
  // console.log("🚀 ~ FavoritesPage ~ files:", files);
  // // console.log("🚀 ~ FilesPage ~ files:", files);
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Ma corbeille</h1>
      </div>
      <div className={cn("grid xl:grid-cols-3 gap-4 md:grid-cols-2")}>
        {files?.map((file: any) => (
          <FileCard key={file._id} file={file} />
        ))}
      </div>
    </div>
  );
};

export default TrashedFilesPage;
