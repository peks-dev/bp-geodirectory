import { useMapEvents } from "react-leaflet";

export const MapMovementHandler = ({ onPositionChange, onZoomChange }) => {
  const map = useMapEvents({
    mouseup(event) {
      if (onPositionChange) {
        const center = map.getCenter();
        onPositionChange(center);
      }

      const zoom = map.getZoom();
      onZoomChange(zoom);
    },
  });

  return null;
};
