"use client";
import "./home-map.css";
import MapLeaflet from "@/ui/map-leaflet/map-leaflet";
import Button from "@/ui/btn/button";
import { useEffect, useState } from "react";
import { useUserStore } from "@/context/user-store";

export default function HomeMap() {
  const { userCoordinates, getUserCoordinates } = useUserStore();
  const [mapCenter, setMapCenter] = useState(() => {
    if (userCoordinates) {
      return userCoordinates;
    } else {
      return { lat: 40.12324, lng: 20.12312 };
    }
  });

  async function handleUserPosition() {
    await getUserCoordinates();
  }

  return (
    <>
      <MapLeaflet
        coordinates={mapCenter}
        zoom={14}
        userPosition={userCoordinates && userCoordinates}
      />
      <div className="btns-wrapper">
        <Button
          type={"button"}
          variant={`${
            userCoordinates ? "map-control map-control--active" : "map-control"
          }`}
          onClick={handleUserPosition}
        >
          ubicacion
        </Button>
      </div>
    </>
  );
}
