"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileTextIcon, GanttChartIcon, ImageIcon } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

import frLocale from "date-fns/locale/fr";
import FileCardActions from "./FileCardActions";
import { CldImage } from "next-cloudinary";
// import { formatRelativeDate } from "@/utils/dateUtils";
import { formatRelative } from "date-fns";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { formatDateWithLocale } from "@/utils/dateUtils";
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

const FileCard = ({ file }: { file: file }) => {
  return (
    <Card>
      <CardHeader className="relative">
        <CardTitle className="flex gap-2 text-base font-normal">
          <div className="flex justify-center">
            {/* @ts-ignore */}
            {file.fileType === "pdf" ? <FileTextIcon /> : <ImageIcon />}
            {/* {typeIcons[file?.fileType]} */}
          </div>
          {file.fileName}
        </CardTitle>
        <div className="absolute top-2 right-2">
          <FileCardActions
            // isFavorited={file.isFavorited}
            file={file}
          />
        </div>
      </CardHeader>

      <CardContent className="h-[200px] flex justify-center items-center overflow-hidden">
        {/* <Image
          alt={file.fileName}
          width="200"
          height="100"
          src={file.fileUrl}
        /> */}
        <CldImage
          width="200"
          height="100"
          src={file.fileUrl}
          sizes="100vw"
          alt={file.fileName}
        />
      </CardContent>
      <CardFooter className="flex justify-between items-center px-4">
        <div className="flex gap-2 text-xs text-gray-700 w-40 items-center">
          <Avatar className="w-6 h-6">
            <AvatarImage src={file.owner.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>{file.owner.name}</p>
        </div>
        <div className="text-xs text-gray-700 ">
          {formatDateWithLocale(new Date(file.createdAt), "PPP", fr)}
        </div>
      </CardFooter>
    </Card>
  );
};

export default FileCard;
