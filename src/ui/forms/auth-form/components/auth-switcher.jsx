import styles from "@/ui/forms/form.module.css";

export const passRecoveryDiv = (setState) => {
  return (
    <div className={styles.form__container}>
      <p>¿Olvidaste tu contraseña?</p>
      <button
        className=" btn btn--link"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setState("recoveryPass");
        }}
      >
        Recuperar
      </button>
    </div>
  );
};
export const registerAccountDiv = (setState) => {
  return (
    <div className={styles.form__container}>
      <p>¿No tienes cuenta?</p>
      <button
        className="btn btn--link"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setState("signUp");
        }}
      >
        Registrarme
      </button>
    </div>
  );
};
export const ingressAccountDiv = (setState) => {
  return (
    <div className={styles.form__container}>
      <p>¿Tienes cuenta?</p>
      <button
        className="btn btn--link"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setState("signIn");
        }}
      >
        Ingresar
      </button>
    </div>
  );
};
