import styles from "./page.module.css";
import dynamic from "next/dynamic";

export default function MapPage() {
  const DynamicMap = dynamic(() => import("../ui/map-leaflet/map-leaflet"), {
    ssr: false,
  });

  const mapCenter = [52.0, 12.0];

  return (
    <section className={styles.mapWrapper}>
      <DynamicMap coordinates={mapCenter} zoom={13} />
    </section>
  );
}
