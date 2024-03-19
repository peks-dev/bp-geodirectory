"use client";
import { useRouter } from "next/navigation";
import { logout } from "@/services/supabase/auth.service";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useStepFormStore } from "@/context/step-form-store";
import Button from "@/ui/btn/button";

export const LogoutBtn = () => {
  const { reset } = useStepFormStore();
  const supabase = createClientComponentClient();
  const router = useRouter();
  async function handleLogout() {
    try {
      reset();
      await logout(supabase);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button onClick={handleLogout} type={"button"} variant={"secundary"}>
        cerrar session
      </Button>
    </>
  );
};
