"use client";
import classNames from "classnames";
import Image from "next/image";
import React, { useCallback, useState } from "react";

const processData = [
  {
    title: "Gérez facilement le processus d'intégration professionnelle",
    description:
      "Notre plateforme simplifie l'intégration professionnelle en offrant des fonctionnalités clés pour faciliter le processus.",
    image:
      "https://res.cloudinary.com/dgsc66scx/image/upload/v1710175922/esrp-ipad_b52qmi.webp",
  },
  {
    title:
      "Accédez à des fonctionnalités avancées pour une intégration réussie",
    description:
      "Notre plateforme offre une liste complète de fonctionnalités pour vous aider à gérer efficacement le processus d'intégration professionnelle.",
    image:
      "https://res.cloudinary.com/dgsc66scx/image/upload/v1710189516/fa680fc7721f67a4232164bb8a203b81_y9sgiv.png",
  },
  {
    title: "Optimisez l'intégration professionnelle avec nos outils puissants",
    description:
      "Notre plateforme propose une gamme d'outils puissants pour vous aider à optimiser le processus d'intégration professionnelle.",
    image:
      "https://res.cloudinary.com/dgsc66scx/image/upload/v1710189516/fa680fc7721f67a4232164bb8a203b81_y9sgiv.png",
  },
];

const ProcessusImageDescription = ({ image, index, isClicked }: any) => (
  <div
    className={classNames(
      "relative h-full",
      isClicked === index ? "block" : "hidden"
    )}
  >
    <Image
      src={image}
      alt={`image de la plateforme esrp ${index}`}
      fill
      objectFit="cover"
      className="rounded-lg "
    />
  </div>
);
const ProcessusContent = ({ title, description, onMouseOver }: any) => (
  <div className="relative " onMouseOver={onMouseOver}>
    <div className="cursor-pointer before:content-[''] before:hover:rounded-sm before:h-0 before:hover:h-full before:border-black before:absolute before:hover:border-2 before:-left-4 before:transition-all before:duration-300 before:ease-in-out">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="pt-2">{description}</p>
    </div>
  </div>
);

const Processus = () => {
  const [isClicked, setIsClicked] = useState<number>(0);

  const revealImage = (index: number) => {
    setIsClicked(index);
  };

  return (
    <section className="h-[500px] max-xl:h-max ">
      <div className="grid grid-cols-2 max-xl:grid-cols-1">
        <div className="max-xl:hidden min-xl:flex ">
          {processData.map(({ image }, index) => (
            <ProcessusImageDescription
              key={index}
              image={image}
              index={index}
              isClicked={isClicked}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center ">
          <div className="w-full">
            <h2 className="text-4xl px-10 font-bold text-start max-xl:w-text-3x py-4">
              Simplifiez l&apos;intégration professionnelle avec notre
              plateforme
            </h2>
          </div>
          <div className="py-5 px-10 flex flex-col gap-4">
            {processData.map(({ title, description }, index) => (
              <ProcessusContent
                onMouseOver={() => revealImage(index)}
                key={index}
                title={title}
                description={description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processus;
