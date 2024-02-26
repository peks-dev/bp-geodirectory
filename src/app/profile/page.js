"use server";
import AuthForm from "@/ui/forms/auth-form/auth-form";
import { LogoutBtn } from "@/ui/logout/logout-btn";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Profile() {
  const cookiesStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookiesStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user === null) {
    return (
      <section className="profile-page">
        <AuthForm />
      </section>
    );
  }

  return (
    <section className="profile-page">
      <h1>usuario logueado</h1>
      <LogoutBtn />
    </section>
  );
}
