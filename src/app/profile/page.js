import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getSession } from "@/services/supabase/auth.service";
import AuthForm from "@/ui/forms/auth-form/auth-form";
import ProfileWrapper from "@/ui/profile-wrapper/profile-wrapper";
import "./page.css";

async function fetchSession() {
  const supabase = createServerActionClient({
    cookies,
  });
  const { session } = await getSession(supabase);

  return session;
}

export default async function Profile() {
  const session = await fetchSession();

  return (
    <section className="profile-page">
      {session ? <ProfileWrapper userId={session.user.id} /> : <AuthForm />}
    </section>
  );
}
