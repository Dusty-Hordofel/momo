import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col gap-10 items-center">
      <h1 className="olives text-6xl font-extrabold ">Bienvenue chez nous</h1>
      {/* <h1 className="text-9xl font-extrabold">Bienvenue chez nous</h1> */}

      <p className="w-3/4 max-xl:w-full text-center max-xl:text-start ">
        Nous simplifions la prise en charge du processus d&rsquo;intégration
        professionnelle des <strong>étudiants </strong> en situation de handicap
        au sein des Établissements et Services de Réadaptation Professionnelle{" "}
        <strong>(ESRP)</strong>. Les étudiants peuvent aisément repérer leurs
        formations ainsi que les centres de réadaptation professionnelle
        disponibles en <strong>France</strong> .
      </p>
      <Image
        src="https://res.cloudinary.com/dgsc66scx/image/upload/v1710175922/esrp-ipad_b52qmi.webp"
        alt="esrp ipad illustration"
        width={700}
        height={700}
        objectFit="contain"
      />
    </section>
  );
};

export default Hero;
