import { useState, useCallback } from "react";
import styles from "./Form.module.css";
import InputPhoneNumber from "../InputPhoneNumber/InputPhoneNumber";

const Form = () => {
  const [homeNumber, setHomeNumber] = useState("");
  const [workNumber, setWorkNumber] = useState("");

  const onReset = useCallback(() => {
    setHomeNumber("");
    setWorkNumber("");
  }, []);

  const isDisabledButton =
    homeNumber.replace(/\D+/g, "").length < 10 ||
    workNumber.replace(/\D+/g, "").length < 10;

  return (
    <form className={styles["form-wrapper"]}>
      <InputPhoneNumber
        maxLength={14}
        setValue={setHomeNumber}
        value={homeNumber}
        name={"Home number"}
        id={"Home number"}
      />
      <InputPhoneNumber
        maxLength={14}
        setValue={setWorkNumber}
        value={workNumber}
        name={"Work number"}
        id={"Work number"}
      />
      <button disabled={isDisabledButton} onClick={onReset}>
        Reset form
      </button>
    </form>
  );
};

export default Form;
