"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { Star, MapPin, MoveUpRight } from "lucide-react";
import Link from "next/link";

export type CardProps = {
  centres: {
    _id: number;
    imageSrc: string;
    title: string;
    address: {
      street: string;
      postalCode: string;
      city: string;
      region: string;
      coordinates: {
        lat: number;
        lng: number;
      };
    };
    contact: {
      phone?: string;
      fax?: string;
      email?: string;
    };
    website?: string;
    social: {
      youtube?: string;
      facebook?: string;
      twitter?: string;
      linkedin?: string;
    };
    description: string;
  }[];
  searchValue: string;
  setChangePinsColor: Dispatch<SetStateAction<boolean>>;
  setCurrentPinId: Dispatch<SetStateAction<number | null>>;
};

const Cards = ({
  centres,
  searchValue,
  setChangePinsColor,
  setCurrentPinId,
}: CardProps) => {
  const filteredCard = centres.filter(
    (centre) =>
      searchValue
        ?.toLocaleLowerCase()
        .includes(centre.address.street.toLocaleLowerCase()) ||
      searchValue
        ?.toLocaleLowerCase()
        .includes(centre.address.city.toLocaleLowerCase()) ||
      searchValue?.includes(centre.address.postalCode) ||
      searchValue?.includes(centre.address.postalCode.slice(0, 2)) ||
      searchValue
        ?.toLocaleLowerCase()
        .includes(centre.address.region.toLocaleLowerCase())
  );

  return (
    <div className="columns-1 lg:columns-2 gap-x-4">
      {(filteredCard.length > 0 ? filteredCard : centres).map(
        ({
          _id,
          imageSrc,
          title,
          address,
          contact,
          website,
          social,
          description,
        }) => {
          return (
            <div
              key={_id}
              className="flex flex-col border hover:border-black border-gray-200 rounded p-4 cursor-pointer bg-gray-100 mb-4"
              onMouseEnter={() => {
                setChangePinsColor(true);
                setCurrentPinId(_id);
              }}
              onMouseLeave={() => {
                setChangePinsColor(false);
                setCurrentPinId(null);
              }}
            >
              <Link href={`/centres-formations/${_id}`}>
                <div className="flex flex-col">
                  <div className="flex  items-center">
                    <Image
                      src={imageSrc}
                      alt={title}
                      width={75}
                      height={75}
                      className=" rounded aspect-square"
                    />
                    <div className=" w-full p-2">
                      <h3 className="text-base font-bold">{title}</h3>
                      <span className="text-xs font-medium flex justify-start items-center mb-2 ">
                        <MapPin size={15} className="mr-2" />
                        <div className="flex">
                          <span>
                            {address.street} <span className="mx-1">-</span>
                            {address.city.toLocaleUpperCase()}
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className=" w-full p-2">
                    <p className="text-sm text-gray-600">
                      {truncateText(description, 150)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Cards;

function capitalizeFirstLetter(title: string) {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function truncateText(text: string, maxLength: number = 200) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else {
    return text;
  }
}
