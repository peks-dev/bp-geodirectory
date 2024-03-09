"use client";
import NewBpOnboarding from "@/ui/onboardings/new-bp-onboarding";
import { useState } from "react";
import "./page.css";
import { useUserStore } from "@/context/user-store";

export default function NewBp() {
  const [start, setStart] = useState(false);
  const { id } = useUserStore();

  return (
    <>
      {start && id ? (
        <div>formulario multi-step</div>
      ) : (
        <NewBpOnboarding setState={setStart} />
      )}
    </>
  );
}
