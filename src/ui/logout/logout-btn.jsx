"use client";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/context/user-store";

export const LogoutBtn = () => {
  const router = useRouter();
  const { logOut } = useUserStore();
  async function handleLogout() {
    try {
      await logOut();
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
