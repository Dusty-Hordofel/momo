import React from "react";
import { getAllCenters, getCenterBySlug } from "@/actions/centers";
import CentersGrid from "@/components/CentersGrid";
import Image from "next/image";
import Tabs from "@/components/tabs/Tabs";

const tabData = [
  {
    key: "La vie au centre",
    value:
      "L'établissement 2iSA (Institut Informatique Sud Aveyron), agréé Centre de Rééducation Professionnelle (CRP) en 1987, devient en 2020 un Établissement et Services de Réadaptation Professionnelle (ESRP). Il accueille chaque année 92 stagiaires de la formation professionnelle, orientés par les Maisons Départementales des Personnes en situation de Handicap 2iSA propose trois types de formations en informatique de niveau bac à bac +3 ",

    accompagnement: {
      key: "Accompagnement",
      value:
        "Le service accompagnement médico – psycho – social a pour mission de veiller à ce que vous soyez dans les meilleures conditions pour suivre votre formation et votre insertion en entreprise. Il aura pour objectifs :- D’évaluer votre niveau d’autonomie.- De vous accompagner à acquérir les principes et pratiques visant à préserver ou favoriser votre santé.- De vous sensibiliser à l’importance d’une hygiène de vie saine (alimentation, activité physique…).- De vous accompagner à améliorer l’image de soi.- De surmonter les obstacles du retour à l’emploi.- D’appréhender le retour à l’emploi.- D’améliorer l’estime de soi.- D’entretenir la motivation à travailler et à chercher un emploi.- De vous accompagner à la connaissance de la maladie.- De vous accompagner à la prise de poste lors d’un stage.- De travailler avec les entreprises sur les représentations en lien avec le handicap",
    },
    insertion: [
      {
        key: "HÉBERGEMENT",
        value:
          "80 chambres connectées au réseau informatique et équipées d'une salle d'eau et WC privatifs.",
      },
      {
        key: "Restauration",
        value:
          "La restauration est effectuée sur place, les plats sont composés par les cuisiniers à partir de produits frais et locaux. Ils sont conseillés régulièrement par une diététicienne.",
      },
      {
        key: "Loisirs",
        value:
          "Millau est une ville sportive et de loisirs. L'établissement étant situé en centre ville, tous les loisirs sont rapidement accessibles (cinéma, MJC, théâtre, équipements sportifs, ...) ",
      },
      {
        key: "ACCESSIBLITÉ",
        value:
          "L'architecture de l'établissement a été pensée pour rendre l'ensemble des locaux accessible à tous.",
      },
      {
        key: "Transport",
        value:
          "Les gares SNCF et routière sont situées à 100 m de l'établissement. Millau est desservie par l'autoroute A75.",
      },
    ],
  },
  {
    key: "Formations Qualifiantes",
    value:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam itaque explicabo excepturi recusandae in sunt, at soluta. Laborum at, est a odit corrupti ut tenetur enim culpa commodi quaerat, fugit rerum quasi debitis animi, iure quibusdam inventore doloremque aperiam saepe perferendis modi cumque eveniet! Dolorem sunt corrupti consequuntur quaerat necessitatibus illum natus asperiores debitis esse repudiandae! Suscipit mollitia cupiditate alias iste dolore optio minus possimus maxime. At, ipsum? Voluptatibus deserunt velit magnam placeat, iure voluptatum laboriosam fugit? Est neque quibusdam eius qui aliquam quasi quis explicabo reprehenderit eligendi numquam, illum similique atque pariatur et veniam fugiat dolorem accusamus maiores modi.",
  },
  {
    key: "Formations Préparatoires",
    value:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam itaque explicabo excepturi recusandae in sunt, at soluta. Laborum at, est a odit corrupti ut tenetur enim culpa commodi quaerat, fugit rerum quasi debitis animi, iure quibusdam inventore doloremque aperiam saepe perferendis modi cumque eveniet! Dolorem sunt corrupti consequuntur quaerat necessitatibus illum natus asperiores debitis esse repudiandae! Suscipit mollitia cupiditate alias iste dolore optio minus possimus maxime. At, ipsum? Voluptatibus deserunt velit magnam placeat, iure voluptatum laboriosam fugit? Est neque quibusdam eius qui aliquam quasi quis explicabo reprehenderit eligendi numquam, illum similique atque pariatur et veniam fugiat dolorem accusamus maiores modi.",
  },
  {
    key: "Aide à l'orientation",
    value:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam itaque explicabo excepturi recusandae in sunt, at soluta. Laborum at, est a odit corrupti ut tenetur enim culpa commodi quaerat, fugit rerum quasi debitis animi, iure quibusdam inventore doloremque aperiam saepe perferendis modi cumque eveniet! Dolorem sunt corrupti consequuntur quaerat necessitatibus illum natus asperiores debitis esse repudiandae! Suscipit mollitia cupiditate alias iste dolore optio minus possimus maxime. At, ipsum? Voluptatibus deserunt velit magnam placeat, iure voluptatum laboriosam fugit? Est neque quibusdam eius qui aliquam quasi quis explicabo reprehenderit eligendi numquam, illum similique atque pariatur et veniam fugiat dolorem accusamus maiores modi.",
  },
];

const accordionData = [
  {
    key: "HÉBERGEMENT",
    value:
      "80 chambres connectées au réseau informatique et équipées d'une salle d'eau et WC privatifs.",
  },
  {
    key: "Restauration",
    value:
      "La restauration est effectuée sur place, les plats sont composés par les cuisiniers à partir de produits frais et locaux. Ils sont conseillés régulièrement par une diététicienne.",
  },
  {
    key: "Loisirs",
    value:
      "Millau est une ville sportive et de loisirs. L'établissement étant situé en centre ville, tous les loisirs sont rapidement accessibles (cinéma, MJC, théâtre, équipements sportifs, ...) ",
  },
  {
    key: "ACCESSIBLITÉ",
    value:
      "L'architecture de l'établissement a été pensée pour rendre l'ensemble des locaux accessible à tous.",
  },
  {
    key: "Transport",
    value:
      "Les gares SNCF et routière sont situées à 100 m de l'établissement. Millau est desservie par l'autoroute A75.",
  },
];

type centreProps = {
  params: {
    centreSlug: string;
  };
};

async function Centers() {
  const centers = JSON.parse(JSON.stringify(await getAllCenters()));
  return <CentersGrid centers={centers} />;
}
async function Center() {
  const centers = JSON.parse(JSON.stringify(await getAllCenters()));
  return <CentersGrid centers={centers} />;
}

const Centre = async ({ params }: centreProps) => {
  //   const {
  //     address,
  //     contact,
  //     social,
  //     _id,
  //     title,
  //     imageSrc,
  //     website,
  //     description,
  //   } = await getCenterBySlug(params.centreSlug);
  //   const centre = await getCenterBySlug(params.centreSlug);
  const centre = JSON.parse(
    JSON.stringify(await getCenterBySlug(params.centreSlug))
  );

  return (
    <>
      <div className="h-16"></div>
      <main className=" min-h-screen">
        <div className=" max-w-[90%] w-full mx-auto">
          <section>
            <div className="flex  items-center pr-10 py-10">
              <div>
                <h1 className="text-6xl font-bold">{centre.title}</h1>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-slate-500 h-[500px] relative">
              <Image
                src={centre.imageSrc}
                alt={centre.title}
                fill
                // objectFit="cover"
              />
            </div>
          </section>
          <section className="my-12">
            <div className="flex flex-col gap-2">
              {/* <span>Se connecter</span> */}
              <h3 className="text-5xl font-extrabold">
                Prendre contact avec nous
              </h3>
              <p>
                Contactez-nous pour toute demande de renseignements ou
                d&apos;assistance.
              </p>
            </div>
            {
              <pre className="my-5">
                <ul>
                  {Object.entries(centre.contact).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-bold capitalize">{key}</span>:
                      <span className="ml-2">{value as string}</span>
                    </li>
                  ))}
                </ul>
              </pre>
            }
          </section>
          <Tabs data={tabData} centre={centre} />
        </div>
      </main>
      <div className="min-h-screen bg-white bottom-0"></div>
    </>
  );
};

export default Centre;
