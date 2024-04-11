"use client";

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
import { toast } from "@/components/ui/use-toast";

// username: z.number(),
// min(2, {
//   message: "Username must be at least 2 characters.",
// }),

// const FormSchema = z.object({
//   heure: z.coerce.number(),
// });

const FormSchema = z.object({
  heure: z.coerce
    .number()
    .min(9, "L'heure doit être comprise entre 9h et 16h")
    .max(16, "L'heure doit être comprise entre 9h et 16h"),
  minute: z.coerce
    .number()
    .min(0, "Les minutes doivent être comprises entre 0 et 59")
    .max(59, "Les minutes doivent être comprises entre 0 et 59"),
});

const TestPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      heure: 9,
      minute: 0,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 bg-red-500 flex"
      >
        <FormField
          control={form.control}
          name="heure"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Heure</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Heure" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="minute"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minute</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Minute" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default TestPage;
