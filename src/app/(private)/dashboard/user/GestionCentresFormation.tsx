// "use client";
import { Button } from "@/components/ui/button";
import { Ban, Bell, FlaskConical, Library } from "lucide-react";
import React, { useState } from "react";
// import AddCenterButton from "./AddCenterButton";
import { getCenterRequestsByUser } from "./centre.action";

const GestionCentresFormation = async () => {
  const centersInfo = await getCenterRequestsByUser();
  console.log(
    "🚀 ~ GestionCentresFormation ~ centersInfo:",
    centersInfo?.userRequest?.length
  );

  return (
    <div className="border-b border-gray-400 gap-8  py-10 mb-10 ">
      <h2 className="md:text-4xl text-xl mb-10">
        Gestion des Centres de Formation
      </h2>
      <div className="md:flex md:justify-between grid grid-cols-1 gap-10  rounded-md overflow-hidden">
        <div className="flex flex-col gap-4  rounded-md pt-5 ">
          <div className="flex gap-4 justify-center items-center ">
            <Library strokeWidth={1} className="w-7 h-7" />
            <h3 className="text-2xl font-bold">Mon Centre de Formation</h3>
          </div>
          <div className="flex gap-4 items-center justify-center">
            {centersInfo?.userRequest?.length > 0 ? null : (
              <Ban color="red" size={15} />
            )}
            {centersInfo?.userRequest?.length > 0 ? (
              <p>
                Vous disposez de <b>{centersInfo?.userRequest?.length}</b>{" "}
                demande{centersInfo?.userRequest?.length > 1 ? "s" : ""} de
                formation
              </p>
            ) : (
              <p>Vous ne disposez pas d&apos;un centre de formation</p>
            )}
          </div>
          {/* <AddCenterButton /> */}
        </div>
        <div className="flex flex-col gap-4  rounded-md pt-5 items-center justify-center">
          <div className="flex gap-4 ">
            <FlaskConical strokeWidth={1} className="w-7 h-7" />
            <h3 className="text-2xl font-bold">État de la demande</h3>
          </div>
          <div className="space-y-4 w-full text-center">
            {centersInfo?.userRequest?.length > 0 ? (
              <>
                {centersInfo?.userRequest?.map(
                  (request: any, index: number) => (
                    <p>
                      La requete n° <b>{index}</b> est en{" "}
                      <b>{request.status}</b>
                    </p>
                  )
                )}
              </>
            ) : (
              <>
                <Ban color="red" size={15} />
                <p>Aucune demande en cours</p>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4  rounded-md pt-5 justify-center items-center">
          <div className="flex gap-4">
            <Bell strokeWidth={1} className="w-7 h-7" />
            <h3 className="text-2xl font-bold">Notifications</h3>
          </div>
          <p className="text-center w-full">Aucune notification</p>
        </div>
      </div>
    </div>
  );
};

export default GestionCentresFormation;
