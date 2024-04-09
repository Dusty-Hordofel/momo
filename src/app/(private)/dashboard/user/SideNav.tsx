"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import {
  File,
  FileIcon,
  Folder,
  FolderHeart,
  FolderHeartIcon,
  LucideFolderHeart,
  StarIcon,
  Trash2,
  TrashIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

// before:transition-all before:duration-300 before:ease-in-out

const beforeHover =
  "before:hover:content-[''] before:w-full before:rounded-sm before:-bottom-[9.5px] lg:before:-bottom-[41.5px] before:absolute before:h-[2px] before:bg-blue-500 ";

export function SideNav() {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 border-b border-gray-400 gap-8  py-10 mb-10 ">
      <Link
        href="/dashboard/user/files/add-file"
        className={clsx(
          "flex items-center justify-center gap-2 relative ",
          pathname === "/dashboard/user/files/add-file" &&
            `text-blue-500 ${beforeHover}`
        )}
        scroll={false}
      >
        <File strokeWidth={0.75} size={30} />
        <span className="text-lg font-normal">Ajouter un fichier</span>
      </Link>
      <Link
        href="/dashboard/user/files"
        className={cn(
          "flex items-center justify-center gap-2 relative ",
          pathname === "/dashboard/user/files" && `text-blue-500 ${beforeHover}`
        )}
        scroll={false}
      >
        <Folder strokeWidth={0.75} size={30} />
        <span className="text-lg font-normal"> Mes fichiers</span>
      </Link>

      <Link
        href="/dashboard/user/files/favorites"
        className={cn(
          "flex items-center justify-center gap-2 relative ",
          pathname === "/dashboard/user/files/favorites" &&
            `text-blue-500 ${beforeHover}`
        )}
        scroll={false}
      >
        <FolderHeart strokeWidth={0.75} size={30} />
        <span className="text-lg font-normal">Mes favoris</span>
      </Link>

      <Link
        href="/dashboard/user/files/trash"
        className={clsx(
          "flex items-center justify-center gap-2 relative",
          pathname === "/dashboard/user/files/trash" &&
            `text-blue-500 ${beforeHover}`
        )}
        scroll={false}
      >
        <Trash2 strokeWidth={0.75} size={30} />
        <span className="text-lg font-normal"> Ma Corbeille</span>
      </Link>
    </div>
  );
}
