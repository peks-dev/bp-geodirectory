import styles from "./page.module.css";
import DynamicMap from "@/ui/dynamic-map/dynamic-map";

export default function MapPage() {
  return (
    <section className={styles.mapWrapper}>
      <DynamicMap />
    </section>
  );
}
