import styles from "./InputPhoneNumber.css";

interface PropsInterface {
  maxLength: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputPhoneNumber = ({ maxLength, onChange, value }: PropsInterface) => {
  return (
    <input
      type='text'
      onChange={onChange}
      maxLength={maxLength}
      value={value}
    ></input>
  );
};

export default InputPhoneNumber;
