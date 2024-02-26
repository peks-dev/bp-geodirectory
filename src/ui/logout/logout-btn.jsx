"use client";
import { useRouter } from "next/navigation";

import { logout } from "@/services/supabase/auth.service";

export const LogoutBtn = () => {
  const router = useRouter();
  async function handleLogout() {
    try {
      await logout();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button className="btn btn--primary" onClick={handleLogout} type="button">
        cerrar sesion
      </button>
    </>
  );
};
