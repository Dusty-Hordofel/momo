"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { uploadFile } from "./upload.action";
import { useToast } from "@/components/ui/use-toast";

export const formSchema = z.object({
  title: z.string().min(1).max(200),
  file: z
    .custom<FileList>((val) => val instanceof FileList, "Required")
    .refine((files) => files.length > 0, `Required`),
});

export function UploadButton() {
  const { toast } = useToast();
  // const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isFileDialogOpen, setIsFileDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const fileRef = form.register("file");

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("file", values["file"][0]);
    formData.append("title", values["title"]);

    try {
      const url = await uploadFile(formData);
      console.log("🚀 ~ onSubmit ~ url:", url);

      form.reset();

      setIsFileDialogOpen(false);

      toast({
        variant: "success",
        title: "Fichier téléchargé",
        description: "Vous pouvez maintenant visualiser votre fichier.",
      });
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
      toast({
        variant: "destructive",
        title: "Quelque chose n'a pas fonctionné",
        description:
          "Votre fichier n'a pas pu être téléchargé, réessayez plus tard.",
      });
    }
  }

  return (
    <Dialog
      open={isFileDialogOpen}
      onOpenChange={(isOpen) => {
        setIsFileDialogOpen(isOpen);
        form.reset();
      }}
    >
      <DialogTrigger asChild>
        <Button>Télécharger le fichier</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-8">
            Téléchargez votre fichier ici
          </DialogTitle>
          <DialogDescription>
            Ce fichier sera accessible à tous les membres de votre organisation.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titre</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      Il s&apos;agit du nom d&apos;affichage de votre fichier.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>File</FormLabel>
                    <FormControl>
                      <Input type="file" {...fileRef} />
                    </FormControl>
                    <FormDescription>
                      Il s&apos;agit du fichier que vous souhaitez télécharger.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="flex gap-1"
              >
                {form.formState.isSubmitting && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default UploadButton;
