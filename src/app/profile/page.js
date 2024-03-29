import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getSession } from "@/services/supabase/auth.service";
import AuthForm from "@/ui/forms/auth-form/auth-form";
import ProfileWrapper from "@/ui/profile-wrapper/profile-wrapper";
import "./page.css";

export default async function Profile() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { session } = await getSession(supabase);

  console.log(session);

  return (
    <>{session ? <ProfileWrapper userId={session.user.id} /> : <AuthForm />}</>
  );
}
