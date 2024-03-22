"use client";
import "./home-map.css";
import MapLeaflet from "@/ui/map-leaflet/map-leaflet";
import Button from "@/ui/btn/button";
import { useState, useRef } from "react";
import { useUserStore } from "@/context/user-store";
import { CourtMarker } from "@/ui/court-marker/court-marker";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function HomeMap({ courts }) {
  const supabase = createClientComponentClient();
  const { userCoordinates, getUserCoordinates } = useUserStore();
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [mapCenter, setMapCenter] = useState(() => {
    if (userCoordinates) {
      return userCoordinates;
    } else {
      return { lat: 40.12324, lng: 20.12312 };
    }
  });
  const mapRef = useRef();

  async function handleUserPosition() {
    await getUserCoordinates();
  }

  async function handleMarkerClick(e) {
    const courtIdMarker = e.sourceTarget.options.id;
    const { data, error } = await supabase
      .from("courts")
      .select()
      .eq("id", courtIdMarker);
    if (data) {
      setSelectedCourt(data);
    } else {
      console.log(error);
    }
  }

  return (
    <>
      <MapLeaflet
        coordinates={mapCenter}
        zoom={14}
        userPosition={userCoordinates && userCoordinates}
        mapRef={mapRef}
      >
        {courts.map((court) => {
          return (
            <CourtMarker
              key={court.id}
              courtId={court.court_id}
              markerPosition={[court.lat, court.lng]}
              handlePopUp={handleMarkerClick}
              courtDetails={selectedCourt}
            />
          );
        })}
      </MapLeaflet>
      <div className="btns-wrapper">
        <Button
          type={"button"}
          variant={`map-control${
            userCoordinates ? " map-control--active" : ""
          }`}
          onClick={handleUserPosition}
        >
          ubicacion
        </Button>
      </div>
    </>
  );
}
