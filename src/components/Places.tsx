"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Search, X, MapPin } from "lucide-react";
// import centres from "@/assets/centres";
import { useEffect } from "react";

interface PlacesProps {
  places: any;
  searchValue: string;
  showModal: boolean;
  isLoading?: boolean;
  setPlaces: Dispatch<any>;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  viewState: { longitude: number; latitude: number; zoom: number };
  setViewState: Dispatch<
    SetStateAction<{ longitude: number; latitude: number; zoom: number }>
  >;
}

const Places = ({
  setViewState,
  viewState,
  isLoading,
  showModal,
  searchValue,
  places,
  setPlaces,
  setIsLoading,
  setSearchValue,
  setShowModal,
}: PlacesProps) => {
  console.log("🚀 ~ searchValue-Place:", searchValue);

  useEffect(() => {
    getPlaces();
  }, [searchValue]);

  const getPlaces = async () => {
    const promise = await fetch(
      `https://api.mapbox.com/geocoding/v5/${process.env.NEXT_PUBLIC_MAPBOX_ENDPOINT}/${searchValue}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    );
    const data = await promise.json();
    setPlaces(data);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setShowModal(true);
  };

  const handleClick = (place: any) => {
    setSearchValue(place.place_name);
    setPlaces([]);
    setShowModal(false);
    setViewState({
      ...viewState,
      longitude: place.geometry.coordinates[0],
      latitude: place.geometry.coordinates[1],
      zoom: 11,
    });
  };

  return (
    <section>
      <article className="max-w-[376px] w-[376px]">
        <div
          className={`px-4 py-3 border  bg-white 
            focus:outline-none focus:border-blue-500 w-full  shadow-sm text-black border-gray-300 ${
              places?.features?.length > 0 && showModal === true
                ? " rounded-t-2xl"
                : " rounded-full"
            }`}
        >
          <div className="w-full flex justify-between">
            <Search color="#6b7280" size={20} className="" />
            <input
              className="outline-none bg-transparent placeholder-gray-500 text-[14px] font-normal w-full px-2"
              type="text"
              name="place"
              id="place"
              placeholder="Rechercher un ESRP grace à votre adresse"
              value={searchValue}
              onChange={handleInputChange}
            />

            <X
              color="#6b7280"
              size={20}
              className="cursor-pointer"
              onClick={() => setSearchValue("")}
            />
          </div>
        </div>
      </article>

      {places?.features?.length > 0 && showModal === true ? (
        <article
          className={`max-w-[376px] w-[376px] ${
            places?.features?.length > 0 &&
            showModal === true &&
            "rounded-b-2xl border-b border-x"
          } border-gray-300 py-5 px-6 bg-white`}
        >
          {places?.features?.map((place: any, index: number) => {
            return (
              <div
                key={place.id}
                className="flex items-center   bg-white  py-2 text-[14px] cursor-pointer hover:bg-gray-100 text-black"
                onClick={() => handleClick(place)}
              >
                <span className="mr-3">
                  <MapPin color="rgb(107 114 128)" />
                </span>
                <div className="flex flex-col justify-center ">
                  <h1 className="font-medium">{place.place_name}</h1>
                  <p className="text-gray-500 font-normal">{place.text}</p>
                </div>
              </div>
            );
          })}
        </article>
      ) : null}
    </section>
  );
};

export default Places;
