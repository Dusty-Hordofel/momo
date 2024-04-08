import { currentUser } from "@/utils/auth/currentUser";
import { currentUserRole } from "@/utils/auth/currentUserRole";
import { getFiles } from "@/utils/services/requests";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import FileCard from "../_components/file-card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllFiles } from "./files.action";
import { UserInfo } from "@/components/user-info";

const FilesPage = async () => {
  const user = await currentUser();
  const userRole = await currentUserRole();
  // const { files } = await getFiles(user, userRole);
  // console.log("🚀 ~ FilesPage MM ~ files:", files);
  // @ts-ignore
  const { files } = await getAllFiles(false);
  // const {files} = getActionFiles;
  // console.log("🚀 ~ FilesPage ~ FILES:", getActionFiles.files);

  if (!user && userRole !== "user") {
    redirect("/auth/login");
  }

  return (
    <div>
      {/* <UserInfo user={user} label="User Info" /> */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Vos Fichiers</h1>
        {/* <SearchBar query={query} setQuery={setQuery} /> */}
        {/* "/dashboard/user/add-file" */}
        <Link href="/dashboard/user/files/add-file">
          <Button className="px-3 py-4 text-base" size="lg">
            Ajouter un fichier
          </Button>
        </Link>
      </div>
      <div
        className={cn(
          files.length && "grid xl:grid-cols-3 gap-4 md:grid-cols-2"
        )}
      >
        {files.length > 0 ? (
          files.map((file: any, index: number) => (
            <FileCard key={index} file={file} />
          ))
        ) : (
          <p className="text-2xl bg-gray-300 rounded-md px-3 py-4 ">
            Aucun fichier disponible dans votre espace.
          </p>
        )}
      </div>
    </div>
  );
};

export default FilesPage;
