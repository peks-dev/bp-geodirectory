"use client";
import "./styles/step-location.css";
// components
import Button from "@/ui/btn/button";
import MapLeaflet from "@/ui/map-leaflet/map-leaflet";
import DraggableMarker from "@/ui/draggable-marker/draggable-marker";
// global states
import { useUserStore } from "@/context/user-store";
import { useEffect, useState } from "react";
// utilities
import { saveToLocalStorage } from "@/utilities/save-to-local-storage.utilitie";
import { MapMovementHandler } from "@/utilities/map-movement-handler";

const StepLocation = () => {
  const { userCoordinates, getUserCoordinates } = useUserStore();
  const [mapCenter, setMapCenter] = useState(null);
  const [mapZoom, setMapZoom] = useState(15);

  const stepFormData = JSON.parse(localStorage.getItem("stepFormData"));

  useEffect(() => {
    // Establecer map center
    if (!stepFormData || !stepFormData.location.coordinates) {
      setMapCenter(userCoordinates);
    } else {
      setMapCenter(stepFormData.location.coordinates);
    }
    // Establecer zoom
    const zoomStorage = JSON.parse(localStorage.getItem("mapZoom"));
    if (zoomStorage) {
      setMapZoom(zoomStorage.zoom);
    }
  }, [userCoordinates]);

  function HandleRenderMap() {
    getUserCoordinates();
    setMapCenter(userCoordinates);
  }

  function handleMapZoom(newZoom) {
    saveToLocalStorage("mapZoom", { zoom: newZoom });
  }
  function handleDragEnd(newCoordinates) {
    stepFormData.location.coordinates = newCoordinates;
    saveToLocalStorage("stepFormData", stepFormData);
  }

  return (
    <div className="step-location">
      {mapCenter && mapZoom ? (
        <MapLeaflet coordinates={mapCenter} zoom={mapZoom}>
          <DraggableMarker
            markerPosition={mapCenter}
            onDragEnd={handleDragEnd}
          />
          <MapMovementHandler onZoomChange={handleMapZoom} />
        </MapLeaflet>
      ) : (
        <div className="step-location__btn-container">
          <Button type="button" onClick={HandleRenderMap} variant={"primary"}>
            Obtener mi posicion
          </Button>
        </div>
      )}
    </div>
  );
};
export default StepLocation;
