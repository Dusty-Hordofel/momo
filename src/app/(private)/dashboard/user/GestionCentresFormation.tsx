"use client";
import { Button } from "@/components/ui/button";
import { Ban, Bell, FlaskConical, Library } from "lucide-react";
import React, { useState } from "react";
import AddCenterButton from "./AddCenterButton";

type Props = {};

const GestionCentresFormation = (props: Props) => {
  const [centresFormation, setCentresFormation] = useState([]);
  const [etatDemande, setEtatDemande] = useState("");
  const [notifications, setNotifications] = useState([]);

  return (
    // grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4
    <div className="border-b border-gray-400 gap-8  py-10 mb-10 ">
      <h2 className="md:text-4xl text-xl mb-10">
        Gestion des Centres de Formation
      </h2>
      {/* grid lg:grid-cols-3 gap-x-10 */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Library strokeWidth={1} className="w-7 h-7" />
            <h3 className="text-2xl font-bold">Mon Centre de Formation</h3>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Ban color="red" size={15} />
            <p>Vous ne disposez pas d&apos;un centre de formation</p>
          </div>
          {/* <Button size="lg">
            <span className="py-4">Ajouter un Centre</span>
          </Button> */}
          <AddCenterButton />
        </div>
        {/* <ul>
          {centresFormation.map((centre, index) => (
            <li key={index}>Olive</li>
          ))}
        </ul> */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <FlaskConical strokeWidth={1} className="w-7 h-7" />
            <h3 className="text-2xl font-bold">État de la demande</h3>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Ban color="red" size={15} />
            <p>Aucune demande en cours</p>
          </div>
        </div>
        {/* <p>{etatDemande}</p> */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Bell strokeWidth={1} className="w-7 h-7" />
            <h3 className="text-2xl font-bold">Notifications</h3>
          </div>
          <p>Aucune notification</p>
        </div>
        {/* <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.contenu}</li>
        ))}
      </ul> */}
      </div>
    </div>
  );
};

export default GestionCentresFormation;
