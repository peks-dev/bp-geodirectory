"use client";
import { useState } from "react";
// components
import StepFormOnboarding from "./components/step-form-onboarding";
import StepFormStarted from "./components/step-form-started";
import AuthForm from "../auth-form/auth-form";
import SectionWrapper from "@/ui/section/section";

import { useStepFormStore } from "@/store/court-store";

const StepForm = ({ session }) => {
  const { started, startedChange } = useStepFormStore();
  const [showAuthForm, setShowAuthForm] = useState(false);

  function handleStartRegisterCourt() {
    if (!session) {
      setShowAuthForm(true);
    } else {
      startedChange();
    }
  }

  return (
    <SectionWrapper variant={"step-form"}>
      {started && <StepFormStarted />}
      {showAuthForm && <AuthForm />}
      {!started && !showAuthForm && (
        <StepFormOnboarding functionProp={handleStartRegisterCourt} />
      )}
    </SectionWrapper>
  );
};

export default StepForm;
