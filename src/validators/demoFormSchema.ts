import { z } from "zod";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Options
export const employees = [
  { interval: "Sélectionnez…", valeur: "" },
  { interval: "De 1 à 99 employés", valeur: "1" },
  { interval: "De 100 à 299 employés", valeur: "100" },
  { interval: "De 300 à 1999 employés", valeur: "300" },
  { interval: "2000 employés ou plus", valeur: "2000" },
];

export const esrpContactSchema = z.object({
  prenom: z
    .string()
    .min(2, { message: "Le prénom doit contenir au moins deux lettres." }),
  nom: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins deux lettres." }),
  email: z
    .string()
    .regex(emailRegex, "L'adresse e-mail n'est pas valide.")
    .email("L'adresse e-mail n'est pas valide.")
    .trim()
    .toLowerCase(),
  telephone: z.string().refine((value) => /^\d{10}$/g.test(value), {
    message: "Le numéro de téléphone doit contenir 10 chiffres.",
  }),
  nomEntreprise: z
    .string()
    .min(2, { message: "Le nom de l'entreprise est obligatoire." }),

  tailleEntreprise: z.string().min(1, { message: "Ce champ est obligatoire." }),
  state: z.string().min(1, { message: "Ce champ est obligatoire." }).max(50),
  motifDemande: z.string().min(1, { message: "Ce champ est obligatoire." }),
  informations: z.string().optional(),
});

export type ContactType = z.infer<typeof esrpContactSchema>;
