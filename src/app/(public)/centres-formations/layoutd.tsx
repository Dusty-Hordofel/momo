import { getAllCenters } from "@/actions/centers";
import CentersGrid from "@/components/CentersGrid";
import HomePageSkeleton from "@/components/skeletons/HomePageSkeleton";
import { Suspense } from "react";

async function Centers() {
  const centers = JSON.parse(JSON.stringify(await getAllCenters()));
  return <CentersGrid centers={centers} />;
}

const CentersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Suspense fallback={<HomePageSkeleton />}>
        <Centers />
      </Suspense>
      {children}
    </main>
    // <div className="relative top-32 ">
    //   <h1>Centers Layout</h1>
    //   {children}
    // </div>
  );
};

export default CentersLayout;
