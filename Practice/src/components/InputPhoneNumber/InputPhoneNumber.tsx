import { useCallback } from "react";
import styles from "./InputPhoneNumber.css";

interface PropsInterface {
  maxLength: number;
  value: string;
  name: string;
  id: string;
  setValue: (value: string) => void;
}

const InputPhoneNumber = ({
  maxLength,
  setValue,
  value,
  name,
  id,
}: PropsInterface) => {
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

  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        type='text'
        onChange={onChange}
        maxLength={maxLength}
        value={value}
        id={id}
        name={name}
      ></input>
    </>
  );
};

export default InputPhoneNumber;
