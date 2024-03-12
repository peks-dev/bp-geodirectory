import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { LogoutBtn } from "../logout/logout-btn";
import { Suspense } from "react";
import "./profile-header.css";

export default async function ProfileHeader({ id }) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data: user } = await supabase.from("profiles").select().eq("id", id);
  return (
    <header className="profile-header">
      <div className="profile__info">
        <Suspense fallback={<div className="avatar-skeleton"></div>}>
          <picture className="profile__avatar">
            <img src={user[0].avatar_url} alt={`avatar de ${user[0].apodo}`} />
          </picture>
        </Suspense>
        <div className="profile__wrapper-text">
          <Suspense fallback={<div>cargando nombre...</div>}>
            <p className="profile__name">{user[0].apodo}</p>
          </Suspense>
          <a href={user[0].website} className="profile__website">
            mi web
          </a>
        </div>
      </div>
      <LogoutBtn />
    </header>
  );
}
