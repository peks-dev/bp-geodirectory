"use client";
import NewBpOnboarding from "@/ui/onboardings/new-bp-onboarding";
import { getSession } from "@/services/supabase/auth.service.js";
import { useEffect, useState } from "react";
import "./page.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function NewBp() {
  const [start, setStart] = useState(false);
  const [session, setSession] = useState(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchSession() {
      try {
        const { data } = await getSession(supabase);
        setSession(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    }

    fetchSession();
  }, [session]);

  return (
    <>
      {start && session ? (
        <div>formulario multi-step</div>
      ) : (
        <NewBpOnboarding setState={setStart} />
      )}
    </>
  );
}
