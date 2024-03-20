"use client";
import styles from "./page.module.css";
import MapLeflet from "@/ui/map-leaflet/map-leaflet";
import UserPositionMarker from "@/ui/user-marker/user-marker";

export default function MapPage() {
  const position = [51.505, -0.09];
  return (
    <section className={styles.mapWrapper}>
      <MapLeflet coordinates={position} zoom={13}>
        <UserPositionMarker markerPosition={position} />
      </MapLeflet>
    </section>
  );
}
