"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { resetNotification } from "@/utilities/reset-notification.utilitie";
import styles from "@/ui/forms/form.module.css";

// supabase functions
import {
  login,
  register,
  recoveryPass,
} from "@/services/supabase/auth.service";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// Form components
import {
  ingressAccountDiv,
  registerAccountDiv,
  passRecoveryDiv,
} from "./components/auth-switcher";
import AuthHeader from "./components/auth-header";
import FieldForm from "../field-form";
import Button from "@/ui/button/button";

import Toast from "@/ui/toast/toast";

export default function AuthForm() {
  const [action, setAction] = useState("signIn");
  // form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // toast states
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const supabase = createClientComponentClient();

  const router = useRouter();

  function handleError(error) {
    setToastType("error");
    setToastMessage(error.toString());
    setShowToast(true);
    resetNotification(setShowToast);
  }

  const actions = [
    {
      name: "signUp",
      submitBtnText: "registrarse",
      headerTitle: "crear cuenta",
      fn: handleSignUp,
    },
    {
      name: "signIn",
      submitBtnText: "ingresar cuenta",
      headerTitle: "iniciar sesion",
      fn: handleLoging,
    },
    {
      name: "recoveryPass",
      submitBtnText: "recuperar",
      headerTitle: "recuperar cuenta",
      fn: handleRecoveryPass,
    },
  ];

  const actionSelected = actions.find((e) => e.name === action);

  async function handleLoging() {
    try {
      await login(supabase, email, password);
      router.refresh();
    } catch (error) {
      handleError(error);
    }
  }

  async function handleSignUp() {
    try {
      await register(supabase, email, password);
      setToastMessage("Checa tu mail perro");
      setToastType("info");
      showToast(true);
      setEmail("");
      setPassword("");
      router.refresh();
    } catch (error) {
      handleError(error);
    }
  }

  async function handleRecoveryPass() {
    try {
      await recoveryPass(supabase, email);
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <div className={styles.form__overlay}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          actionSelected.fn();
        }}
        className={styles.formWrapper}
      >
        <AuthHeader text={actionSelected.headerTitle} />
        <FieldForm
          inputName={"email"}
          inputType={"email"}
          labelText={"email"}
          stateValue={email}
          stateFn={setEmail}
        />
        {action !== "recovery" && ( // evitar mostrarse en recuperar contraseña
          <FieldForm
            inputName={"password"}
            inputType={"password"}
            labelText={"password"}
            stateValue={password}
            stateFn={setPassword}
          />
        )}
        <Button type={"submit"} variant={"primary"}>
          {actionSelected.submitBtnText}
        </Button>

        <div>
          {action === "signIn" && passRecoveryDiv(setAction)}
          {(action === "recovery" || action === "signIn") &&
            registerAccountDiv(setAction)}
          {(action === "signUp" || action === "recoveryPass") &&
            ingressAccountDiv(setAction)}
        </div>
      </form>
      {showToast && <Toast message={toastMessage} type={toastType} />}
    </div>
  );
}
