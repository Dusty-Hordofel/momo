import { getAllCenters } from "@/actions/centers";
import CentersGrid from "@/components/CentersGrid";
import HomePageSkeleton from "@/components/skeletons/HomePageSkeleton";
import { Suspense } from "react";

async function Centers() {
  const centers = JSON.parse(JSON.stringify(await getAllCenters()));
  return (
    <>
      {/* <div className="h-40 bg-red-600"></div> */}
      <div className="w-[100vw]">
        <CentersGrid centers={centers} />
      </div>
    </>
  );
}

export default async function CentersPage() {
  return (
    <main className="max-w-2xl">
      <Suspense fallback={<HomePageSkeleton />}>
        <Centers />
      </Suspense>
    </main>
  );
}
