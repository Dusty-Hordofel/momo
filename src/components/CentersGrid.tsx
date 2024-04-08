"use client";
import React, { useState } from "react";
import Cards from "./cards/Cards";
import Map from "./Map";

type Props = {
  centers: any;
};

const CentersGrid = ({ centers }: Props) => {
  const [changePinsColor, setChangePinsColor] = useState(false);
  const [currentPinId, setCurrentPinId] = useState<number | null>(null);
  const [places, setPlaces] = useState<any>([]); // we can use const [suggestions, setSuggestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex ">
        {/* sm:w-[55%] */}
        <div className="p-4 sm:w-[55%]">
          {/* <div className="h-16"></div> */}
          <Cards
            centres={centers}
            searchValue={searchValue}
            setChangePinsColor={setChangePinsColor}
            setCurrentPinId={setCurrentPinId}
          />
        </div>
        {/* fixed z-30 right-0 top-0 w-0 sm:w-[45%]*/}
        <div className="sm:w-[45%] fixed z-30 right-0 top-0 w-0">
          <div className="h-16 "></div>
          <Map
            centres={centers}
            changePinsColor={changePinsColor}
            currentPinId={currentPinId}
            places={places}
            setPlaces={setPlaces}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            showModal={showModal}
            setShowModal={setShowModal}
            // isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default CentersGrid;
