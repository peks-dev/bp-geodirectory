// Componentes
import L from "leaflet";
import { Marker } from "react-leaflet";

let theme = "light";

const darkUserIcon = "/svgs/user-marker-icon.svg";

const UserMarkerIcon = L.icon({
  iconUrl: darkUserIcon,
  iconRetinaUrl: darkUserIcon,
  iconAnchor: null,
  shadowAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  iconSize: [24, 35],
  className: "icono-masiso",
});

export const UserPositionMarker = ({ markerPosition }) => {
  return <Marker position={markerPosition} icon={UserMarkerIcon} />;
};

export default UserPositionMarker;
