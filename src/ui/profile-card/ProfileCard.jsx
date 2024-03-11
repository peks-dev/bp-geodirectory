import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { LogoutBtn } from "../logout/logout-btn";
import { Suspense } from "react";

export default async function ProfileCard({ id }) {
  const supabase = createServerActionClient({ cookies });
  const { data: user } = await supabase.from("profiles").select().eq("id", id);
  return (
    <header>
      <Suspense fallback={<div>cargando nombre...</div>}>
        <p>{user[0].apodo}</p>
      </Suspense>
      <LogoutBtn />
    </header>
  );
}
