"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { openStreetMapTile } from "@/ui/map/lib/tile-layers";

const MapLeflet = ({ coordinates, zoom, children }) => {
  if (typeof window === "undefined") {
    return null; // Retorna null en el lado del servidor
  }
  return (
    <MapContainer
      center={coordinates}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution={openStreetMapTile.attribution}
        url={openStreetMapTile.url}
      />
      {children}
    </MapContainer>
  );
};

export default MapLeflet;
