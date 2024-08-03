import { useState, useCallback } from "react";
import styles from "./Form.module.css";
import InputPhoneNumber from "../InputPhoneNumber/InputPhoneNumber";

const Form = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    let currentValue = event.target.value;
    const number = currentValue.replace(/\D+/g, "");

    if (number.length === 0) {
      currentValue = "";
    } else if (number.length > 0 && number.length <= 3) {
      currentValue = `(${number}`;
    } else if (number.length >= 4 && number.length <= 6) {
      currentValue = `(${number.substring(0, 3)}) ${number.substring(3, 6)}`;
    } else {
      currentValue = `(${number.substring(0, 3)}) ${number.substring(
        3,
        6
      )}-${number.substring(6, 10)}`;
    }

    setValue(currentValue);
  }, []);

  const onReset = useCallback(() => {
    setValue("");
  }, []);

  return (
    <form className={styles.formWrapper}>
      <InputPhoneNumber maxLength={14} onChange={onChange} value={value} />
      <button onClick={onReset}>Reset form</button>
    </form>
  );
};

export default Form;
