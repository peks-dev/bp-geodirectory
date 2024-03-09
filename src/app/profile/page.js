"use client";
import AuthForm from "@/ui/forms/auth-form/auth-form";
import { LogoutBtn } from "@/ui/logout/logout-btn";
import { useUserStore } from "@/context/user-store";

import { useEffect } from "react";

const Profile = () => {
  const { session, apodo } = useUserStore();
  useEffect(() => {
    useUserStore.persist.rehydrate();
  }, []);

  console.log(apodo);
  if (session === undefined) {
    return (
      <section className="profile-page">
        <AuthForm />
      </section>
    );
  }

  return (
    <section className="profile-page">
      <h1>usuario logueado</h1>
      <p className="profile__name">{apodo}</p>
      <LogoutBtn />
    </section>
  );
};

export default Profile;
