"use client";
import NewBpOnboarding from "@/ui/onboardings/new-bp-onboarding";
import { useState } from "react";
import "./page.css";

export default function NewBp() {
  const [start, setStart] = useState(false);

  return (
    <>
      <NewBpOnboarding />
    </>
  );
}
