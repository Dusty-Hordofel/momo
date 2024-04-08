import Link from "next/link";
import Solutions from "../components/Solutions";
import Processus from "../components/Processus";
import Integration from "../components/Integration";
import Hero from "../components/Hero";

export default async function Home() {
  return (
    <main className="flex flex-col gap-20 w-[90%] mx-auto overflow-hidden mt-10">
      <Hero />
      <div className="flex  min-[981px]:items-center bg-black border-2 rounded-sm border-black text-white max-[980px]:flex-col transition-all">
        <div className="min-[981px]:w-1/2 max-[980px]:p-4">
          <h2 className="text-4xl font-bold text-center ">
            <Link href="/centres-formations">
              Rechercher. S&rsquo;inscrire. Se former.
            </Link>
          </h2>
        </div>
        <div className="min-[981px]:h-[300px]  bg-gray-200 rounded border border-gray-200 "></div>
        <div className=" w-1/2 max-[980px]:w-full py-10 px-10 gap-5 flex flex-col">
          <p>
            Trouver facilement des formations adaptées à vos besoins. Il vous
            suffit de saisir votre adresse pour obtenir une liste de centres
            deformations situés dans votre ville et celles autour.
          </p>
          <div className="flex flex-col">
            <span>
              <span>-</span> Large choix de formations spécialisées pour tous
              les handicaps
            </span>
            <span>
              <span>-</span> Filtrez les résultats par localisation et durée de
              formation
            </span>
            <span>
              <span>-</span> Consultez les avis et évaluations des formations
            </span>
          </div>
          <div className="flex gap-5 max-md:flex-col">
            <Link
              href="/centres-formations"
              className="transition-all duration-500 rounded-sm  border-2   bg-white text-black text-center  hover:bg-gray-300 px-4 py-3 "
            >
              Trouver un centre
            </Link>
            <Link
              href="/demander-une-demo"
              className="transition-all duration-500 rounded-sm  border-2 border-gray-200  hover:border-gray-400 hover:text-gray-400 text-center px-4 py-3"
            >
              Inscrivez-vous <span aria-hidden={true}>→</span>
            </Link>
          </div>
        </div>
      </div>

      <Solutions />
      <Processus />
      <Integration />
      <div className=" flex flex-col justify-center gap-4 items-center py-4">
        <div className="w-3/4 max-[940px]:w-full">
          <h2 className="text-5xl font-bold text-center">
            Commencez votre intégration dès maintenant
          </h2>
        </div>
        <p className="">
          Contactez-nous pour démarrer votre processus d&rsquo;intégration et
          bénéficier de nos services.
        </p>
        <div className="flex gap-4 max-md:flex-col  w-full justify-center">
          <Link
            href="/demander-une-demo"
            className="px-4 py-3 border border-black bg-black text-white transition-all duration-500 rounded-sm text-center"
          >
            Demander une démo <span aria-hidden={true}>→</span>
          </Link>
          <button className="rounded-sm px-4 py-3 border border-black hover:bg-gray-200  transition-all duration-500 text-center">
            En savoir plus
          </button>
        </div>
      </div>
      {/* <div className="lg:hidden">
      <Menu />
    </div> */}
    </main>
  );
}
