import styles from "./page.module.css";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const revalidate = 60;

export default async function MapPage() {
  const DynamicMap = dynamic(() => import("@/ui/home-map/home-map"), {
    ssr: false,
  });

  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });
  const { data, error } = await supabase.from("locations").select("*");

  return (
    <section className={styles.mapWrapper}>
      <DynamicMap courts={data} />
    </section>
  );
}
