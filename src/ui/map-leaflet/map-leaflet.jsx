"use client";
import "leaflet/dist/leaflet.css";
import "./map-leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { openStreetMapTile } from "./tile-layers";
import UserPositionMarker from "@/ui/user-marker/user-marker";

const MapLeflet = ({ coordinates, zoom, children, userPosition, mapRef }) => {
  return (
    <div className="map-wrapper">
      <MapContainer
        center={coordinates}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        mapRef={mapRef}
      >
        <TileLayer
          attribution={openStreetMapTile.attribution}
          url={openStreetMapTile.url}
        />
        {children}
        {userPosition && <UserPositionMarker markerPosition={userPosition} />}
      </MapContainer>
    </div>
  );
};

export default MapLeflet;
