import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import CourtCard from "@/ui/court-card/court-card";

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

export const CourtMarker = ({
  courtId,
  markerPosition,
  handlePopUp,
  courtDetails,
}) => {
  return (
    <Marker
      id={courtId}
      position={markerPosition}
      icon={CourtMarkerIcon}
      eventHandlers={{
        click: (e) => handlePopUp(e),
      }}
    >
      <Popup minWidth={300}>
        {courtDetails ? (
          <CourtCard
            name={courtDetails[0].name}
            level={courtDetails[0].game_level}
            id={courtDetails[0].id}
          />
        ) : (
          <div>cargando...</div>
        )}
      </Popup>
    </Marker>
  );
};
