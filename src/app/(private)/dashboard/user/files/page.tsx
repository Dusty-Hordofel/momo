import { currentUser } from "@/utils/auth/currentUser";
import { currentUserRole } from "@/utils/auth/currentUserRole";
import { getFiles } from "@/utils/services/requests";
import { getServerSession, Session } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import FileCard from "../_components/FileCard";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllFiles } from "./files.action";
import { UserInfo } from "@/components/user-info";
import { authOptions } from "@/utils/auth/authOptions";
import { Settings2Icon, SettingsIcon } from "lucide-react";

const FilesPage = async () => {
  // const user = await currentUser();
  // const userRole = await currentUserRole();
  const { files }: any = await getAllFiles(false);

  // if (!user && userRole !== "user") {
  //   redirect("/auth/login");
  // }

  return (
    <>
      {/* <UserInfo user={user} label="User Info" /> */}

      {/* <SearchBar query={query} setQuery={setQuery} /> */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Mes fichiers</h1>
        {/* <Link href="/dashboard/user/files/add-file">
          <Button className="px-3 py-4 text-base" size="lg">
            Ajouter un fichier
          </Button>
        </Link> */}
      </div>
      {files?.length > 0 ? (
        <div className={cn("grid xl:grid-cols-3 gap-4 md:grid-cols-2")}>
          {files.map((file: any, index: number) => (
            <FileCard key={file._id} file={file} />
          ))}
        </div>
      ) : (
        <p className="text-2xl bg-gray-300 rounded-md px-3 py-4 ">
          Aucun fichier disponible dans votre espace.
        </p>
      )}
    </>
  );
};

export default FilesPage;
