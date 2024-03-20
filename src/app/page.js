"use client";
import styles from "./page.module.css";
import UserPositionMarker from "@/ui/user-marker/user-marker";
import { useState } from "react";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../ui/map-leaflet/map-leaflet"), {
  ssr: false,
});

export default function MapPage() {
  const position = [51.505, -0.09];
  const [mapCenter, setMapCenter] = useState(position);
  return (
    <section className={styles.mapWrapper}>
      <DynamicMap coordinates={mapCenter} zoom={13}></DynamicMap>
    </section>
  );
}
