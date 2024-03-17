"use client";
import "./styles/step-location.css";
// import Map from "@/ui/map/Map";
import Button from "@/ui/btn/button";
import { useState } from "react";
import { useUserStore } from "@/context/user-store";
import MapLeaflet from "@/ui/map-leaflet/map-leaflet";

const StepLocation = () => {
  const { location, getLocation } = useUserStore();
  const [mapLocation, setMapLocation] = useState(location);

  // Añade un marcador arrastrable al mapa
  {
    /*<Map mapPosition={mapLocation} zoomLevel={13}></Map>  */
  }
  return (
    <div className="step-location">
      {mapLocation ? (
        <MapLeaflet coordinates={mapLocation} zoom={13}></MapLeaflet>
      ) : (
        <Button type="button" onClick={getLocation} variant={"primary"}>
          user positon
        </Button>
      )}
    </div>
  );
};
export default StepLocation;
