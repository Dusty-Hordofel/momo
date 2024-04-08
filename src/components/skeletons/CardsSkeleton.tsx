const CardsSkeleton = () => {
  return (
    <div className="grid xl:grid-cols-2 gap-4  grid-cols-1 items-start  auto-rows-max ">
      {[...Array(10)].map((_, index) => {
        return (
          <div
            key={index}
            className="flex flex-col border border-gray-100 rounded p-4 cursor-pointer bg-gray-100 sm:h-56 h-40"
          >
            <div className="flex flex-col">
              <div className="flex  items-center">
                <div className="w-16 h-16 rounded bg-gray-200"></div>
                <div className="w-full ml-4">
                  <div className=" w-full p-2 bg-gray-200 rounded mb-2"></div>
                  <div className=" w-full p-2 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className=" w-full mt-2 p-2 bg-gray-200 h-14 rounded"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardsSkeleton;
