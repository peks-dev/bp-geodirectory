import styles from "../../form.module.css";
import { CloseIcon } from "@/ui/icons/close-btn";

const AuthHeader = ({ text }) => {
  return (
    <header className={styles.form__header}>
      <picture className={styles.form__img}>
        <img src="/images/logo-site.png" alt="basket places logo" />
      </picture>
      <h2 className={styles.form__title}>{text}</h2>
    </header>
  );
};

export default AuthHeader;
