"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideNav() {
  const pathname = usePathname();

  return (
    <div className=" grid grid-cols-2 gap-y-5 xl:flex  w-full mb-10">
      <Link href="/dashboard/user/add-file">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            "text-blue-500": pathname.includes("/dashboard/user/add-file"),
          })}
        >
          <FileIcon /> Ajouter un fichier
        </Button>
      </Link>
      <Link href="/dashboard/user/files">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            "text-blue-500": pathname.includes("/dashboard/user/files"),
          })}
        >
          <FileIcon /> Tous les fichiers
        </Button>
      </Link>

      <Link href="/dashboard/user/favorites">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            "text-blue-500": pathname.includes("/dashboard/user/favorites"),
          })}
        >
          <StarIcon /> Mes Fichiers Favoris
        </Button>
      </Link>

      <Link href="/dashboard/user/trash">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            "text-blue-500": pathname.includes("/dashboard/user/trash"),
          })}
        >
          <TrashIcon /> Ma Corbeille
        </Button>
      </Link>
    </div>
  );
}
