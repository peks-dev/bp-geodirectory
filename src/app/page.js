import styles from "./page.module.css";
import dynamic from "next/dynamic";

export default function MapPage() {
  const DynamicMap = dynamic(() => import("@/ui/home-map/home-map"), {
    ssr: false,
  });
  return (
    <section className={styles.mapWrapper}>
      <DynamicMap />
    </section>
  );
}
