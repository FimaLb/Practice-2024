import { useCallback } from "react";
import styles from "./CustomInput.module.css";

interface CustomInputPropsInterface {
  type: string;
  name: string;
  id: string;
  value: string | number;
  placeholder?: string;
  setValue: any;
  maxLength?: number;
  lablePosition?: "top" | "left";
  isLable?: boolean;
}

const CustomInput = ({
  type,
  name,
  id,
  lablePosition = "top",
  isLable = true,
  value,
  maxLength,
  placeholder,
  setValue,
}: CustomInputPropsInterface) => {
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return (
    <div
      className={`${styles["custom-input-lable-wrapper"]} ${
        lablePosition === "top"
          ? styles["position-top"]
          : styles["position-left"]
      }`}
    >
      {isLable ? (
        <label htmlFor={id} className={styles["custom-input-lable"]}>
          {name}
        </label>
      ) : null}
      <input
        name={`custom-input-${name}`}
        id={id}
        type={type}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default CustomInput;
