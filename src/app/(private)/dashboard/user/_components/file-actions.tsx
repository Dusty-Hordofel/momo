"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  FileIcon,
  MoreVertical,
  StarHalf,
  StarIcon,
  TrashIcon,
  UndoIcon,
} from "lucide-react";
import {
  deleteFile,
  toggleFavorite,
  toggleShouldDeleteFiles,
} from "./upload.action";

type file = {
  _id: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  owner: {
    role: string;
    favoriteFiles: string[];
    trashedFiles: string[];
    _id: string;
    name: string;
    image: string;
  };
  createdAt: string;
};

const FileCardActions = ({ file }: { file: file }) => {
  const [isFavorited, setIsFavorited] = React.useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MoreVertical className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            if (!file.fileUrl) return;
            window.open(file.fileUrl, "_blank");
          }}
          className="flex gap-1 items-center cursor-pointer"
        >
          <FileIcon className="w-4 h-4" /> Télécharger
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => {
            toggleFavorite(file._id);
            setIsFavorited((prev) => !prev);
          }}
          className="flex gap-1 items-center cursor-pointer"
        >
          {isFavorited ? (
            <div className="flex gap-1 items-center">
              <StarIcon className="w-4 h-4" /> Unfavorite
            </div>
          ) : (
            <div className="flex gap-1 items-center">
              <StarHalf className="w-4 h-4" /> Favorite
            </div>
          )}
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          //   onClick={() => {
          //     if (file.shouldDelete) {
          //       restoreFile({
          //         fileId: file._id,
          //       });
          //     } else {
          //       setIsConfirmOpen(true);
          //     }
          //   }}
          className="flex gap-1 items-center cursor-pointer"
        >
          {
            //   file?.shouldDelete ? (
            //     <div className="flex gap-1 text-green-600 items-center cursor-pointer">
            //       <UndoIcon className="w-4 h-4" /> Restore
            //     </div>
            //   ) : (
            <div
              className="flex gap-1 text-red-600 items-center cursor-pointer"
              onClick={() => toggleShouldDeleteFiles(file._id)}
            >
              <TrashIcon className="w-4 h-4" /> Delete
            </div>
            //   )
          }
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FileCardActions;
