"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function SideNav() {
  const pathname = usePathname();
  console.log("🚀 ~ SideNav ~ pathname:", pathname);

  return (
    <div className=" grid grid-cols-2 gap-y-5 xl:flex  w-full mb-10">
      <Link href="/dashboard/user/files/add-file">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            "text-blue-500": pathname.includes(
              "/dashboard/user/files/add-file"
            ),
          })}
        >
          <FileIcon /> Ajouter un fichier
        </Button>
      </Link>
      <Link href="/dashboard/user/files">
        <Button
          variant={"link"}
          className={cn("flex gap-2", {
            "text-blue-500": pathname === "/dashboard/user/files",
          })}
        >
          <FileIcon /> Tous les fichiers
        </Button>
      </Link>

      <Link href="/dashboard/user/files/favorites">
        <Button
          variant={"link"}
          className={cn("flex gap-2", {
            "text-blue-500": pathname === "/dashboard/user/files/favorites",
          })}
        >
          <StarIcon /> Mes Fichiers Favoris
        </Button>
      </Link>

      <Link href="/dashboard/user/files/trash">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            "text-blue-500": pathname.includes("/dashboard/user/files/trash"),
          })}
        >
          <TrashIcon /> Ma Corbeille
        </Button>
      </Link>
    </div>
  );
}
