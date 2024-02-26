"use client";
import { useRef, useEffect } from "react";
import { openStreetMapTile } from "./lib/tile-layers";
import "./map.css";

function Map({
  mapPosition,
  zoomLevel,
  CourtsMarkers,
  DraggMarker,
  singleMarker,
  mapRef,
  mapPositionSave,
}) {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const L = require("leaflet");

    // Ensure Leaflet CSS is loaded dynamically when component mounts
    import("leaflet/dist/leaflet.css");

    if (!mapInstance.current) {
      mapInstance.current = L.map(mapContainer.current).setView(
        mapPosition,
        zoomLevel
      );

      L.tileLayer(openStreetMapTile.url).addTo(mapInstance.current);
    }

    return () => {
      // Cleanup function to remove map instance when component unmounts
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [mapPosition, zoomLevel]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div ref={mapContainer} style={{ height: "100%", width: "100%" }} />
      {CourtsMarkers}
      {DraggMarker}
      {singleMarker}
      {mapPositionSave}
    </div>
  );
}

export default Map;
