import styles from "./form.module.css";

const FieldForm = ({
  stateValue,
  stateFn,
  inputType,
  inputName,
  labelText,
}) => {
  return (
    <div className={styles.form__field}>
      <label className={styles.form__label} htmlFor={inputName}>
        {labelText}
      </label>
      <input
        name={inputName}
        className={styles.form__input}
        type={inputType}
        value={stateValue}
        onChange={(e) => stateFn(e.target.value)}
      />
    </div>
  );
};

export default FieldForm;
