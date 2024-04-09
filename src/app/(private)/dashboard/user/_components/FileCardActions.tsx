"use client";
import React, { useState } from "react";

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
import { toggleFavorite } from "../files/favorites/favorites.action";
import { toggleShouldDeleteFiles } from "../files/trash/delete.action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "@/components/ui/use-toast";

type file = {
  _id: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  isFavorited: boolean;
  shouldDelete: boolean;
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
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  return (
    <>
      <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Êtes-vous absolument sûr ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action marquera le fichier pour notre processus de
              suppression. Les fichiers sont supprimés périodiquement
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                // await deleteFile({
                //   fileId: file._id,
                // });
                toggleShouldDeleteFiles(file._id);
                toast({
                  variant: "default",
                  title: "Fichier marqué pour suppression",
                  description: "Votre fichier sera bientôt supprimé",
                });
              }}
            >
              Continuer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
            }}
            className="flex gap-1 items-center cursor-pointer"
          >
            {file.isFavorited ? (
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
            onClick={() => {
              if (file.shouldDelete) {
                toggleShouldDeleteFiles(file._id);
              } else {
                setIsConfirmOpen(true);
              }
            }}
            className="flex gap-1 items-center cursor-pointer"
          >
            {file.shouldDelete ? (
              <div className="flex gap-1 text-green-600 items-center cursor-pointer">
                <UndoIcon className="w-4 h-4" /> Restore
              </div>
            ) : (
              <div className="flex gap-1 text-red-600 items-center cursor-pointer">
                <TrashIcon className="w-4 h-4" /> Delete
              </div>
            )}
          </DropdownMenuItem>
          {/* <DropdownMenuItem
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
        </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default FileCardActions;
