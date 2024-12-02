"use client";
import React from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactType, esrpContactSchema } from "@/validators/demoFormSchema";
import Input from "@/components/Inputs";
import { employees, motifs } from "@/assets/employees";
import { States } from "@/assets/States";
import { Button } from "@/components/ui/button";
import { resend } from "@/lib/resend";
import { useToast } from "@/components/ui/use-toast";
import Select from "@/components/select";

const Demo = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactType>({
    resolver: zodResolver(esrpContactSchema),
    shouldFocusError: false,
  });

  const onSubmit: SubmitHandler<ContactType> = async ({
    prenom,
    nom,
    email,
    telephone,
    nomEntreprise,
    state,
    motifDemande,
    tailleEntreprise,
    informations,
  }: FieldValues) => {
    // FieldValues or ContactType ,ContactType is better
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<ContactType>= ~ data:",
      prenom,
      nom,
      email,
      telephone,
      nomEntreprise,
      state,
      motifDemande,
      tailleEntreprise,
      informations
    );

    //envoie de l'accusé de réception à l'ESRP
    // await esrpContactEmail({ prenom });

    toast({
      variant: "success",
      title: "Succès",
      description: "Votre demande a été envoyée avec succès",
    });
    reset();
  };
  return (
    <>
      <div className="flex gap-10 justify-center px-10 py-40 ">
        <div className="w-[470px] flex flex-col gap-5">
          <h1 className="text-[56px] font-bold leading-[60px]">
            Contactez <br />
            notre équipe <br />
            commerciale <br />
            pour vous lancer
          </h1>
          <span>
            Donnez-nous quelques informations sur votre ESRP. Nous reviendrons
            vers vous au plus vite.
          </span>
        </div>

        <div className="w-[460px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-x-4 ">
              <Input
                {...register("prenom")}
                label="Prénom"
                error={errors.prenom?.message}
                placeholder="Ludovic"
              />
              <Input
                {...register("nom")}
                label="nom"
                error={errors.prenom?.message}
                placeholder="Dacon"
              />
            </div>
            <Input
              {...register("email")}
              label="Adresse e-mail professionnelle"
              error={errors.email?.message}
              placeholder="ludovic@esrp.com"
            />
            <Input
              {...register("telephone")}
              label="Numéro de téléphone"
              error={errors.telephone?.message}
              placeholder="0123456789"
            />
            <Input
              {...register("nomEntreprise")}
              label="Nom de l'entreprise"
              error={errors.nomEntreprise?.message}
              placeholder="ESRP"
            />
            <Select
              {...register("tailleEntreprise")}
              label="Taille de l’entreprise"
              error={errors.tailleEntreprise?.message}
              options={employees}
            />
            <Select
              {...register("state")}
              label="Pays ou région"
              error={errors.state?.message}
              options={States}
            />
            <Select
              {...register("motifDemande")}
              label="Motif de la démonstration"
              error={errors.motifDemande?.message}
              options={motifs}
            />

            <div className="flex flex-col">
              <label
                htmlFor="information"
                className="text-sm mb-[5px] text-black"
              >
                Donnez plus d’informations <span>(facultatif)</span>
              </label>
              <textarea
                {...register("informations")}
                placeholder="Comment comptez-vous utiliser ESRP Pour tous ?"
                id="information"
                rows={8}
                className="w-full py-3 pr-4 pl-3 rounded border-default border border-black focus:outline-none transition-all mb-10"
              />
            </div>

            <p className="text-xs mb-6">
              Les champs marqués d’un astérisque (*) sont obligatoires.
            </p>

            <Button type="submit" className="small rounded-full px-6 py-5">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
      {/* <Contact /> */}
    </>
  );
};

export default Demo;
