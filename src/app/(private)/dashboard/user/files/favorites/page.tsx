//  "use client";
import React from "react";
// import FileCard from "../_components/file-card";
// import UploadButton from "../_components/upload-button";
// import { sfavoriteFiles } from "../_components/upload.action";
import { currentUser } from "@/utils/auth/currentUser";
import { currentUserRole } from "@/utils/auth/currentUserRole";
import { redirect } from "next/navigation";
import { favoriteFiles } from "./favorites.action";
import FileCard from "../../_components/FileCard";
// import { getSessionUser } from "@/utils/next-auth/getSessionUser";
// import { redirect } from "next/navigation";
// import { currentUser } from "@/utils/next-auth/currentUser";
// import { currentUserRole } from "@/utils/next-auth/currentUserRole";
// import { getFiles } from "./files.action";

const FavoritesPage = async () => {
  const user = await currentUser();
  const userRole = await currentUserRole();

  if (!user && userRole !== "user") {
    redirect("/auth/login");
  }

  const { files } = await favoriteFiles();
  console.log("🚀 ~ FavoritesPage ~ files:", files);
  // console.log("🚀 ~ FilesPage ~ files:", files);
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Vos Fichiers Favoris</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {files?.map((file: any) => (
          <FileCard key={file._id} file={file} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
