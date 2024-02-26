"use client";
// functions
import { updatePassword } from "@/services/supabase/auth.service";
import { useState } from "react";

// components
import Toast from "@/ui/toast/toast";

import style from "@/ui/forms/form.module.css";

export default function RecoveryPassPage() {
  const [newPassword, setNewPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleRecovery = async (e) => {
    e.preventDefault;
    try {
      await updatePassword(newPassword);
    } catch (error) {
      setToastMessage(
        "hubo un error al cambiar tu contraseña, intentalo de nuevo"
      );
      setToastType("error");
      setShowToast(true);
      console.log(error);
    }
  };

  return (
    <section className={style.form__overlay}>
      <form onSubmit={handleRecovery} className={style.formWrapper}>
        <div className={style.form__field}>
          <label htmlFor="password" className={style.form__label}>
            nueva contraseña
          </label>
          <input
            required
            className={style.form__input}
            type="password"
            name="password"
            onChange={(e) => setNewPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn--primary">
          cambiar password
        </button>
      </form>
      {showToast && <Toast message={toastMessage} type={toastType} />}
    </section>
  );
}
