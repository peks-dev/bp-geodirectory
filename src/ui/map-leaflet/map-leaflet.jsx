"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { openStreetMapTile } from "@/ui/map/lib/tile-layers";
import { Children } from "react";

const MapLeflet = ({ coordinates, zoom, children }) => {
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
