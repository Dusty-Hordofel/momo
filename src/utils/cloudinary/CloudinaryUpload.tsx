"use client";
import { cn } from "@/lib/utils";
import {
  CloudinaryUploadWidgetError,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { CldUploadWidget } from "next-cloudinary";

type CloudinaryUploadProps = {
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setFileUrl: React.Dispatch<React.SetStateAction<string>>;
  setFileId: React.Dispatch<React.SetStateAction<string>>;
  setFileType: React.Dispatch<React.SetStateAction<string>>;
  setUploadModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const palette = {
  window: "#FFFFFF",
  sourceBg: "#FFFFFF",
  windowBorder: "#000000", //border dot color and cloud icon
  tabIcon: "#000000",
  inactiveTabIcon: "#69778A",
  menuIcons: "#000000", //close icon
  link: "#000000",
  action: "#000000",
  inProgress: "#000000",
  complete: "#000000",
  error: "#FF0000",
  textDark: "#000000",
  textLight: "#FFFFFF",
};

const CloudinaryUpload = ({
  error,
  setError,
  setFileUrl,
  setFileId,
  setFileType,
  setUploadModalOpen,
}: CloudinaryUploadProps) => {
  const handleSuccess = (
    results: CloudinaryUploadWidgetResults,
    { widget }: { widget: any }
  ) => {
    if (!error && results && results.event === "success") {
      setFileId((results.info as CloudinaryUploadWidgetInfo).public_id);
      setFileUrl((results.info as CloudinaryUploadWidgetInfo).secure_url);
      setFileType((results.info as CloudinaryUploadWidgetInfo).format);
    }

    widget.close();
  };

  const handleError = (
    error: CloudinaryUploadWidgetError,
    { widget }: { widget: any }
  ) => {
    setError((error as { status: string; statusText: string }).status);
    widget.close();
  };

  return (
    <div className="bg-gray-100 w-full">
      <CldUploadWidget
        signatureEndpoint="/api/users/sign-file"
        options={{
          // locale: "fr",
          folder: "esrp",
          sources: ["local", "url", "camera", "google_drive", "dropbox"],
          multiple: false,
          maxFiles: 1,
          // clientAllowedFormats: [
          //   "png",
          //   "jpeg",
          //   "pdf",
          //   "jpg",
          //   "gif",
          //   "webp",
          //   "svg",
          //   "avif",
          //   "heif",
          //   "heic",
          //   "tiff",
          //   "bmp",
          //   "ico",
          //   "jxr",
          //   "psd",
          //   "eps",
          //   "raw",
          //   "cr2",
          //   "nef",
          //   "orf",
          //   "sr2",
          //   "raf",
          //   "dng",
          //   "arw",
          //   "rw2",
          //   "nrw",
          //   "k25",
          //   "bay",
          //   "srw",
          //   "3fr",
          //   "qtk",
          //   "ia",
          //   "xmp",
          //   "dcp",
          // ],
          showPoweredBy: false,
          styles: {
            palette,
          },
        }}
        onSuccess={handleSuccess}
        onError={handleError}
        // onSuccess={async (results, { widget }) => {
        //   if (!error && results && results.event === "success") {
        //     setFileId((results.info as CloudinaryUploadWidgetInfo).public_id);
        //     setFileUrl((results.info as CloudinaryUploadWidgetInfo).secure_url);
        //     setFileType((results.info as CloudinaryUploadWidgetInfo).format);
        //   }

        //   widget.close();
        // }}
        // onError={(error, { widget }) => {
        //   setError((error as { status: string; statusText: string }).status);
        //   widget.close();
        // }}
      >
        {({ open }) => {
          return (
            <button
              className={cn(
                "w-full py-3 pr-4 pl-3 rounded-md border-default border-2 hover:bg-black hover:text-white transition-all duration-300"
                //   error ? "border-red-500" : "ring-gray-300",
                //   error ? "ring-red-500" : "ring-gray-300"
              )}
              onClick={(e) => {
                e.preventDefault();
                setUploadModalOpen(true); // Ouvrir la modal de téléchargement
                // e.stopPropagation(); // Arrêter la propagation de l'événement
                open();
              }}
            >
              Télécharger un fichier
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default CloudinaryUpload;
