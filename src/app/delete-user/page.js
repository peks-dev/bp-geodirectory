"use client";

import { deleteUserAuth } from "@/services/supabase/auth.service";
import { useState } from "react";

export default function DeletePage() {
  const [userId, setUserId] = useState("");
  const handleDeleteUser = async (e) => {
    e.preventDefault();
    await deleteUserAuth(userId);
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
