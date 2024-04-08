"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { MapPin } from "lucide-react";
import ReactMapGL, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  Marker,
} from "react-map-gl";
import Places from "./Places";

export type MapProps = {
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
  changePinsColor: boolean;
  currentPinId: number | null;
  places: any;
  searchValue: string;
  showModal: boolean;
  isLoading?: boolean;
  setPlaces: Dispatch<any>;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const Map = ({
  centres,
  changePinsColor,
  currentPinId,
  isLoading,
  showModal,
  searchValue,
  places,
  setPlaces,
  setIsLoading,
  setSearchValue,
  setShowModal,
}: MapProps) => {
  const myStorage = window.localStorage;
  const [viewState, setViewState] = useState({
    longitude: -0.580036,
    latitude: 44.841225,
    zoom: 10,
  });

  return (
    <div className="">
      <ReactMapGL
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/hordofel/cls93wlxr00uy01qqgto3gwbg"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        style={{ width: "100%", height: "100vh" }}
      >
        {centres.map(({ _id, address }) => {
          return (
            <Marker
              key={_id}
              longitude={address.coordinates.lng}
              latitude={address.coordinates.lat}
              anchor="bottom"
            >
              <MapPin
                style={{
                  fontSize: viewState.zoom * 7,
                }}
                fill={
                  changePinsColor && currentPinId === _id
                    ? "#4554fb"
                    : "rgba(0, 0, 0, 0.4) "
                }
                size={40}
                className="transition-colors duration-300 ease-in-out"
              />
            </Marker>
          );
        })}
        <GeolocateControl showAccuracyCircle={false} />
        <FullscreenControl />
        <NavigationControl />
      </ReactMapGL>
      <div className="absolute top-20 left-10 ">
        <Places
          viewState={viewState}
          setViewState={setViewState}
          places={places}
          setPlaces={setPlaces}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default Map;
