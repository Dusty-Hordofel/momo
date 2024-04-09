"use client";
import { CldImage } from "next-cloudinary";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import CloudinaryUpload from "@/utils/cloudinary/CloudinaryUpload";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { addDataToFile } from "./add-file.action";

export default function AddFile() {
  const { toast } = useToast();
  const router = useRouter();

  // const [fileName, setFileName] = useState("");
  const [fileId, setFileId] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [fileType, setFileType] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const ref = useRef<HTMLFormElement>(null);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    //add information to the formData
    formData.append("fileName", e.currentTarget.fileName.value);
    formData.append("fileId", fileId);
    formData.append("fileUrl", fileUrl);
    formData.append("fileType", fileType);

    try {
      const newFile = await addDataToFile(formData);
      if (newFile.success) {
        toast({
          variant: "success",
          title: "Fichier téléchargé",
          description: "Vous pouvez maintenant visualiser votre fichier.",
        });
        setFileId("");
        setFileUrl("");
        setFileType("");
        setError(null);
        ref.current?.reset();

        router.push("/dashboard/user/files");
      } else {
        toast({
          variant: "destructive",
          title: "Quelque chose n'a pas fonctionné",
          description:
            "Le nom du fichier et le fichier sont requis. La taille du fichier ne doit pas dépasser 10 Mo.",
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Quelque chose n'a pas fonctionné",
        description: error.message,
      });
    }
  };

  // Réinitialiser l'erreur lorsque la modal est ouverte
  useEffect(() => {
    if (uploadModalOpen) {
      setError(null);
    }
  }, [uploadModalOpen]);

  return (
    // min-h-screen
    <main className="flex flex-col  space-y-10 max-w-screen-lg ">
      <h1 className="text-4xl font-bold ">Ajouter un fichier</h1>
      <form ref={ref} onSubmit={handleSubmit} className="space-y-10 ">
        <div className="item">
          <label htmlFor="fileName">
            <h2 className="text-lg font-bold mb-5">Nom du fichier</h2>
          </label>
          <input
            type="text"
            id="fileName"
            name="fileName"
            placeholder="Entrer le nom du fichier"
            className={cn(
              "w-full py-3 pr-4 pl-3 rounded-md border-default border-2 focus:outline-none focus:ring-2 focus:ring-black transition-all"
              //   error ? "border-red-500" : "ring-gray-300",
              //   error ? "ring-red-500" : "ring-gray-300"
            )}
          />
        </div>

        {fileId && !error ? (
          <CldImage
            width="200"
            height="200"
            src={fileId}
            sizes="100vw"
            alt="Description of my image"
          />
        ) : (
          <CloudinaryUpload
            setFileId={setFileId}
            setFileType={setFileType}
            setFileUrl={setFileUrl}
            setUploadModalOpen={setUploadModalOpen}
            error={error}
            setError={setError}
          />
        )}
        {error && <p className="text-destructive">{error}</p>}
        <div className="py-3 pr-4 pl-3  bg-black w-max rounded-md">
          <button className="text-lg text-white" type="submit">
            Ajouter votre fichier
          </button>
        </div>
      </form>
    </main>
  );
}
