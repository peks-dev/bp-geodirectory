import styles from "../../form.module.css";
import { CloseIcon } from "@/ui/icons/close-btn";

const AuthHeader = ({ text }) => {
  return (
    <header className={styles.form__header}>
      <button className={styles.form__close} type="button">
        <CloseIcon />
      </button>
      <h2 className={styles.form__title}>{text}</h2>
    </header>
  );
};

export default AuthHeader;
