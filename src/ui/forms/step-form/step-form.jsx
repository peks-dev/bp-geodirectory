"use client";
import NewBpOnboarding from "@/ui/onboardings/new-bp-onboarding";
import { useState } from "react";
import AuthForm from "../auth-form/auth-form";
const StepForm = ({ session }) => {
  const [startRegister, setStartRegister] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);

  function handleStartRegister() {
    if (!session) {
      setShowAuthForm(true);
    } else {
      setStartRegister(true);
    }
  }

  return (
    <section>
      {startRegister && <div>step form iniciate</div>}
      {showAuthForm && <AuthForm />}
      {!startRegister && !showAuthForm && (
        <NewBpOnboarding functionProp={handleStartRegister} />
      )}
    </section>
  );
};

export default StepForm;
