import styles from "./page.module.css";
import Map from "@/ui/map/Map";

export default function MapPage() {
  const position = [51.505, -0.09];
  return (
    <section className={styles.mapWrapper}>
      <Map mapPosition={position} zoomLevel={13} />
    </section>
  );
}
