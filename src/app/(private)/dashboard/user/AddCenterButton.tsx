"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendRequest } from "./centre.action";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { formatDateWithLocale } from "@/utils/dateUtils";
import { fr } from "date-fns/locale";

const FormSchema = z.object({
  centre: z
    .string({
      required_error: "Selectionner un centre de formation.",
    })
    .min(1, "Selectionner un centre de formation."),
  message: z
    .string({
      required_error: "Votre message doit contenir au moins 10 caractères.",
    })
    .min(10, {
      message: "Votre message doit contenir au moins 10 caractères.",
    })
    .max(200, {
      message: "Votre message doit contenir au plus 200 caractères.",
    }),
  date: z.date({
    required_error: "La date du rendez-vous est requise.",
  }),

  hour: z.coerce
    .number()
    .min(9, "L'heure doit être comprise entre 9h et 16h")
    .max(16, "L'heure doit être comprise entre 9h et 16h"),
  minutes: z.coerce
    .number()
    .min(0, "Les minutes doivent être comprises entre 0 et 59")
    .max(59, "Les minutes doivent être comprises entre 0 et 59"),
});

const defaultValues = {
  centre: "",
  message: "",
  date: new Date(),
  hour: new Date().getHours(),
  minutes: new Date().getMinutes(),
};

const AddCenterButton = () => {
  const [isFileDialogOpen, setIsFileDialogOpen] = useState(false);
  const [selected, setSelected] = useState("");
  console.log("🚀 ~ AddCenterButton ~ selected:", selected);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  async function onSubmit({
    centre,
    message,
    date,
    hour,
    minutes,
  }: z.infer<typeof FormSchema>) {
    const time = new Date();
    time.setHours(hour, minutes, 0, 0);

    const formattedTime = formatDateWithLocale(time, "HH:mm", fr);

    const request = await sendRequest(
      centre,
      message,
      date.toString(),
      formattedTime
    );

    // addCenter(centre);
    if (request.success) {
      toast({
        variant: "success",
        title: "Demande envoyée avec succès",
        description: request.message,
      });

      form.reset(defaultValues);
      setIsFileDialogOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: "Erreur lors de l'envoi de la demande",
        description: request.message,
      });
    }

    // toast({
    //   title: "Vous avez ajouté le centre de formation suivant",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(centre, null, 2)}</code>
    //     </pre>
    //   ),
    // });
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
        <Button>
          <span className="py-2">Ajouter un Centre</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Rejoindre un Centre de Formation</DialogTitle>
          <DialogDescription>
            Choisissez votre Centre de formation.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6  ">
            {/* w-2/3 */}
            <FormField
              control={form.control}
              name="centre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Centre</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selectionner votre centre de formation" />
                      </SelectTrigger>
                    </FormControl>
                    <FormDescription>
                      <SelectContent>
                        {/* <SelectGroup> */}
                        {/* <SelectLabel>Centres</SelectLabel> */}
                        <SelectItem value="661694502de78531e2e9f547">
                          Antenne UEROS CHU Bordeaux
                        </SelectItem>
                        <SelectItem value="661695da2de78531e2e9f54d">
                          EPNAK - ESRP Oissel
                        </SelectItem>
                        <SelectItem value="661696532de78531e2e9f550">
                          Centre Louis Gatignon
                        </SelectItem>
                        <SelectItem value="661697022de78531e2e9f553">
                          Acti+ Lieusaint
                        </SelectItem>
                        <SelectItem value="661697762de78531e2e9f557">
                          Centre Le Belloy
                        </SelectItem>
                        {/* </SelectGroup> */}
                      </SelectContent>
                    </FormDescription>
                  </Select>
                  {/* <FormDescription>
                    You can manage email addresses in your{" "}
                    <Link href="/examples/forms">email settings</Link>.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                      rows={5}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    You can <span>@mention</span> other users and organizations.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date du rendez-vous</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            // format(field.value, "PPP")
                            formatDateWithLocale(
                              new Date(field.value),
                              "PPP",
                              fr
                            )
                          ) : (
                            <span>Choisir une date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 " align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date("1900-01-01")}
                        // disabled={(date) =>
                        //   date > new Date() || date < new Date("1900-01-01")
                        // }
                        // captionLayout="dropdown-buttons"
                        initialFocus
                        fromYear={new Date().getFullYear()}
                        toYear={new Date().getFullYear()}
                        fromDate={new Date("1900-01-01")}
                      />
                    </PopoverContent>
                  </Popover>
                  {/* <FormDescription>
                    Nous souhaitons vous rencontrer pour discuter de votre
                    projet.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="hour"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Heure</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Heure" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="minutes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minutes</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Minute" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit">
              <span className="py-2">Soumettre votre demande</span>
            </Button>
          </form>
        </Form>

        {/* </div> */}
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div> */}
        {/* <DialogFooter>
          <Button type="submit" onClick={() => handleSubmit()}>
            Ajouter le centre
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
    // </form>
  );
};

export default AddCenterButton;
