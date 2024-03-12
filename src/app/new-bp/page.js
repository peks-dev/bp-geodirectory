import { getSession } from "@/services/supabase/auth.service.js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import "./page.css";

// components
import StepForm from "@/ui/forms/step-form/step-form";

export default async function NewBp() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { session } = await getSession(supabase);

  return (
    <>
      <StepForm session={session} />
    </>
  );
}
