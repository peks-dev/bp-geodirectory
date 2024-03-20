"use client";
import MapLeaflet from "@/ui/map-leaflet/map-leaflet";

const DynamicMap = () => {
  const mapCenter = [52.0, 12.0];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapLeaflet coordinates={mapCenter} zoom={14} />
    </div>
  );
};

export default DynamicMap;
