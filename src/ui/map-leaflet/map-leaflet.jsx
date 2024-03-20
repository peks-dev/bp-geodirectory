"use client";
import "leaflet/dist/leaflet.css";
import "./map-leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { openStreetMapTile } from "@/ui/map/lib/tile-layers";

const MapLeflet = ({ coordinates, zoom, children }) => {
  return (
    <div className="map-wrapper">
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
    </div>
  );
};

export default MapLeflet;
