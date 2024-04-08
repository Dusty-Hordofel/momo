import Image from "next/image";

const Integration = () => {
  return (
    <section className="flex h-max  mt-10 max-xl:flex-col-reverse ">
      <div className="w-1/2 max-xl:w-full  relative ">
        <div className="grid grid-rows-4 gap-10 py-5  ">
          {/* 1 */}
          <div className="flex flex-col gap-2">
            <div className=" flex items-center gap-2">
              <span className="text-9xl font-extrabold">01</span>
              <span className=" font-extrabold">
                Évaluation des besoins et planification de la réadaptation
                professionnelle
              </span>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              voluptatibus unde sunt delectus, voluptas atque repellat, placeat
              consequuntur necessitatibus amet dolores quas magnam omnis. Error
              possimus nostrum laborum porro quidem repudiandae mollitia
              accusantium dolores harum consequuntur non, optio, maxime
              veritatis?
            </p>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-2 ">
            <div className=" flex items-center gap-2">
              <span className="text-9xl font-extrabold">02</span>
              <span className="font-extrabold ">
                Formation et acquisition de compétences adaptées au marché du
                travail
              </span>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              possimus, voluptatibus magni similique nostrum mollitia
              necessitatibus aut, hic, dignissimos vel accusamus! Nulla,
              accusantium sit? Similique tenetur voluptatem velit voluptates
              sequi, ratione nisi eaque doloremque atque inventore illum, culpa
              reprehenderit voluptas.
            </p>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-2 ">
            <div className=" flex items-center gap-2">
              <span className="text-9xl font-extrabold">03</span>
              <span className="font-extrabold ">
                Recherche d&apos;emploi et soutien à l&apos;intégration
                professionnelle
              </span>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              tempora, unde ex asperiores praesentium harum? Esse, in sit
              sapiente illo impedit quasi incidunt accusantium ut nulla delectus
              at quos similique. Vel, praesentium nam eum a vero libero?
              Excepturi, consequatur recusandae!
            </p>
          </div>
          {/* 4 */}
          <div className="flex flex-col gap-2 ">
            <div className=" flex items-center gap-2">
              <span className="text-9xl font-extrabold">04</span>
              <span className="font-extrabold">
                Suivi et accompagnement post-intégration pour assurer la
                réussite professionnelle
              </span>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              consectetur, quo delectus consequuntur porro blanditiis vero error
              aperiam odio at dolor amet ea deleniti odit dicta pariatur labore
              eos voluptates. Sapiente modi unde rerum facere adipisci nihil
              nobis veniam nesciunt!
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2  flex pl-10 max-xl:w-full">
        <div className="w-3/4 max-xl:w-3/4 flex flex-col gap-5 ">
          <span className="text-sm font-bold">Inclusion</span>
          <h2 className="text-4xl font-bold ">
            Le Processus d&apos;Intégration Professionnelle en Réadaptation
          </h2>
          <div className="flex gap-4">
            <button className="px-4 py-3 border border-black hover:bg-black hover:text-white transition-all duration-500 rounded-sm">
              Découvrir
            </button>
            {/* <button>En savoir plus</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
