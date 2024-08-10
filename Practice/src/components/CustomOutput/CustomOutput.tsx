import styles from "./CustomOutput.module.css";

interface CustomOutputPropsInterface {
  id: string;
  value: number;
  lableText: string;
  decimals?: number;
}

const CustomOutput = ({
  id,
  value,
  lableText,
  decimals = 2,
}: CustomOutputPropsInterface) => {
  return (
    <div id={`custom-output-${id}`}>
      <span>{lableText} </span>
      <span>{value !== -1 ? `$${value.toFixed(decimals)}` : "-"}</span>
    </div>
  );
};

export default CustomOutput;
