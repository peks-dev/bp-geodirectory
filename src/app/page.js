"use client"; // requisito para usePathname

import styles from "./page.module.css";
import Map from "@/ui/map/Map";

import { useRef } from "react";

export default function MapPage() {
  const mapRef = useRef();
  const position = [51.505, -0.09];
  return (
    <section className={styles.main}>
      <Map mapRef={mapRef} mapPosition={position} zoomLevel={13} />
    </section>
  );
}
