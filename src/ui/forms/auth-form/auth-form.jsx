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

import { supabase } from "@/services/supabase/client.service";

// form navigation elements
import {
  ingressAccountDiv,
  registerAccountDiv,
  passRecoveryDiv,
} from "./auth-switcher";

import { CloseIcon } from "@/ui/icons/close-btn";
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

  const router = useRouter();

  async function signIn() {
    try {
      await login(email, password);
      router.refresh();
    } catch (error) {
      if (error.toString() === "AuthApiError: Invalid login credentials") {
        setToastMessage("usuario o contraseña incorrecto");
        setToastType("error");
        setShowToast(true);
        resetNotification(setShowToast);
      }
    }
  }

  async function signUp() {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }
      setToastMessage("");
      setToastType("info");
      showToast(true);
      setEmail("");
      setPassword("");
      router.refresh();
    } catch (error) {
      setToastType("error");
      setToastMessage(error.toString());
      setShowToast(true);
      resetNotification(setShowToast);
    }
  }

  async function recovery() {
    try {
      await recoveryPass(email);
    } catch (error) {
      setToastMessage(error.toString());
      setToastType("error");
      setShowToast(true);
    }
  }

  const handleSendForm = (e) => {
    e.preventDefault();

    switch (action) {
      case "signIn":
        signIn();
        break;
      case "signUp":
        signUp();
        break;
      case "recovery":
        recovery();
        break;
    }
  };

  const formTitle = () => {
    switch (action) {
      case "signIn":
        return "iniciar sesion";
      case "signUp":
        return "crear cuenta";
      case "recovery":
        return "recuperar cuenta";
    }
  };

  const btnFormText = () => {
    switch (action) {
      case "signIn":
        return "ingresar a cuenta";
      case "signUp":
        return "registrarme";
      case "recovery":
        return "recuperar";
    }
  };

  return (
    <div className={styles.form__overlay}>
      <form onSubmit={handleSendForm} className={styles.formWrapper}>
        <header className={styles.form__header}>
          <button className={styles.form__close} type="button">
            <CloseIcon />
          </button>
          <h2 className={styles.form__title}>{formTitle()}</h2>
        </header>
        <div className={styles.form__field}>
          <label className={styles.form__label} htmlFor="email">
            email
          </label>
          <input
            name="email"
            className={styles.form__input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {action !== "recovery" && ( // evitar mostrarse en recuperar contraseña
          <div className={styles.form__field}>
            <label className={styles.form__label} htmlFor="password">
              password
            </label>
            <input
              name="password"
              className={styles.form__input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}

        <button type="submit" className="btn btn--primary">
          {btnFormText()}
        </button>
        <div>
          {action === "signIn" && passRecoveryDiv(setAction)}
          {(action === "recovery" || action === "signIn") &&
            registerAccountDiv(setAction)}
          {(action === "signUp" || action === "recovery") &&
            ingressAccountDiv(setAction)}
        </div>
      </form>
      {showToast && <Toast message={toastMessage} type={toastType} />}
    </div>
  );
}
