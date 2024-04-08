import CardsSkeleton from "./CardsSkeleton";

const HomePageSkeleton = () => {
  return (
    <>
      <div className="h-16 bg-gray-100 fixed top-0 left-0  w-full z-50 shadow">
        <div className="flex justify-between items-center  h-full p-4 ">
          <div className="text-2xl font-extrabold w-[186.43px] h-[29.5px] rounded bg-gray-200"></div>
          <div className="flex">
            <ul aria-label="submenu" className="flex">
              <li className="px-[10px] bg-gray-200 rounded p-1 w-[134.500px] h-[32px] mx-2"></li>
              <li className="px-[10px] bg-gray-200 rounded p-1 w-[178px] h-[32px]"></li>
            </ul>
            <div className="w-[1px] h-7 bg-gray-200 mx-[10px]"></div>
            <ul className="">
              <li
                className="px-[10px] rounded p-1 bg-gray-200 text-white w-[100.34px] h-[32px]"
                aria-label="Cliquez sur Accueil pour vous rendre sur la page d'accueil"
                tabIndex={0}
              ></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex animate-pulse">
        <div className="sm:w-[55%] min-h-screen p-4 w-full">
          <div className="h-16 "></div>
          <CardsSkeleton />
        </div>
        <div className="sm:w-[45%] fixed right-0 top-0 w-0 bg-gray-200 h-[100vh]">
          <div className="h-16 bg-gray-100"></div>
          <div
            className="px-4 py-3 border  bg-gray-300
  focus:outline-none focus:border-blue-500   shadow-sm text-black rounded-full max-w-[376px] w-full h-[47px] absolute top-20 left-10"
          ></div>
        </div>
      </div>
    </>
  );
};

export default HomePageSkeleton;
