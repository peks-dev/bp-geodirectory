"use client";
import { useState } from "react";
import styles from "@/ui/forms/form.module.css";

// Components
import {
  ingressAccountDiv,
  registerAccountDiv,
  passRecoveryDiv,
} from "./components/auth-switcher";
import AuthHeader from "./components/auth-header";
import FieldForm from "../field-form";
import Button from "@/ui/btn/button";
export default function AuthForm() {
  const [action, setAction] = useState("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const actions = [
    {
      name: "signUp",
      submitBtnText: "registrarse",
      headerTitle: "crear cuenta",
      actionForm: "/auth/sign-up",
    },
    {
      name: "signIn",
      submitBtnText: "ingresar cuenta",
      headerTitle: "iniciar sesion",
      actionForm: "/auth/login",
    },
    {
      name: "recoveryPass",
      submitBtnText: "recuperar",
      headerTitle: "recuperar cuenta",
      actionForm: "/auth/recovery",
    },
  ];

  const actionSelected = actions.find((e) => e.name === action);

  return (
    <div className={styles.form__overlay}>
      <form
        action={actionSelected.actionForm}
        className={styles.formWrapper}
        method="post"
      >
        <AuthHeader text={actionSelected.headerTitle} />
        <input type="hidden" name="redirectUrl" value={window.location.href} />
        <FieldForm
          inputName={"email"}
          inputType={"email"}
          labelText={"email"}
          stateValue={email}
          stateFn={setEmail}
        />
        {action !== "recovery" && ( // No show input password on recovery pass
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
    </div>
  );
}
