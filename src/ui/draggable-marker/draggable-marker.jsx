import L from "leaflet";
import { Marker } from "react-leaflet";

let theme = "light";

const darkCourtMarkerIcon = "/svgs/court-marker.svg";

const CourtMarkerIcon = L.icon({
  iconUrl: darkCourtMarkerIcon,
  iconRetinaUrl: darkCourtMarkerIcon,
  iconAnchor: null,
  shadowAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  iconSize: [35, 35],
  className: "icono-masiso",
});

export const DraggableMarker = ({ markerPosition, onDragEnd }) => {
  const handleDragEnd = (event) => {
    const newPosition = event.target.getLatLng();
    onDragEnd(newPosition);
  };

  return (
    <Marker
      draggable={true}
      position={markerPosition}
      icon={CourtMarkerIcon}
      eventHandlers={{
        dragend: handleDragEnd,
      }}
    />
  );
};

export default DraggableMarker;
