import "./map.css";

// leaflet
import { MapContainer, TileLayer } from "react-leaflet";
import { openStreetMapTile } from "./lib/tile-layers";
import "leaflet/dist/leaflet.css";

const Map = ({
  mapPosition,
  zoomLevel,
  CourtsMarkers,
  DraggMarker,
  singleMarker,
  mapRef,
  mapPositionSave,
}) => {
  return (
    <MapContainer
      center={mapPosition}
      zoom={zoomLevel}
      scrollWheelZoom={false}
      ref={mapRef}
    >
      <TileLayer
        attribution={openStreetMapTile.attribution}
        url={openStreetMapTile.url}
      />
      {CourtsMarkers}
      {DraggMarker}
      {singleMarker}
      {mapPositionSave}
    </MapContainer>
  );
};

export default Map;
