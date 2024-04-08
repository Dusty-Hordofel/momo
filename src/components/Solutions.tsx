import Image from "next/image";

const Solutions = () => {
  return (
    // max-xl:flex-col max-xl:h-[00px]
    <section
      className="grid  grid-cols-2 h-max max-xl:grid-cols-1  max-xl:h-max max-xl:grid-rows-[1fr_500px]
    ]"
    >
      {/* w-1/2  */}
      <div className=" flex items-center max-xl:items-start  pb-10 ">
        <div className="w-3/4 flex flex-col gap-5  max-xl:w-full">
          <span className="text-sm font-bold">solutions</span>
          <h2 className="text-4xl font-bold ">
            Intégration professionnelle et gestion des processus
          </h2>
          <p>
            Nous offrons des services d&apos;intégration professionnelle et de
            gestion des processus pour les établissements. Notre expertise aide
            les personnes en situation de réadaptation à réussir leur transition
            professionnelle.
          </p>
          <div className="flex gap-4">
            <button className="px-4 py-3 border border-black hover:bg-black hover:text-white transition-all duration-500 rounded-sm">
              En savoir plus
            </button>
            {/* <button>Inscrivez-vous</button> */}
          </div>
        </div>
      </div>
      {/* w-1/2 */}
      <div className=" bg-gray-600 relative">
        <Image
          src="https://res.cloudinary.com/dgsc66scx/image/upload/v1710189516/fa680fc7721f67a4232164bb8a203b81_y9sgiv.png"
          alt="esrp ipad illustration"
          fill
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Solutions;
