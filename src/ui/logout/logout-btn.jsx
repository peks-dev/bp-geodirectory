"use client";
import { useRouter } from "next/navigation";
import { logout } from "@/services/supabase/auth.service";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Button from "../button/Button";

export const LogoutBtn = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  async function handleLogout() {
    try {
      await logout(supabase);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button onClick={handleLogout} type={"button"} variant={"btn--primary"}>
        cerrar session
      </Button>
    </>
  );
};
