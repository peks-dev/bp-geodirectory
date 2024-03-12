"use client";

import { deleteUserAuth } from "@/services/supabase/auth.service";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function DeletePage() {
  const [userId, setUserId] = useState("");
  const supabase = createClientComponentClient();
  const handleDeleteUser = async (e) => {
    e.preventDefault();
    await deleteUserAuth(supabase, userId);
  };
  return (
    <section className="profile-page">
      <form>
        <input
          type="text"
          name="user"
          onChange={(e) => setUserId(e.target.value)}
        />
        <button
          type="sumit"
          onClick={handleDeleteUser}
          className="btn btn--primary"
        >
          eliminar usuario
        </button>
      </form>
    </section>
  );
}
