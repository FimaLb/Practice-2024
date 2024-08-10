import { useEffect, useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import styles from "./TipCalculatorForm.module.css";

const TipCalculatorForm = () => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [totalTip, setTotalTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);

  useEffect(() => {
    const totalTip = (bill * tipPercentage) / 100;
    const tipPerPerson = totalTip / numberOfPeople;

    setTotalTip(totalTip);
    setTipPerPerson(tipPerPerson);
  }, [bill, tipPercentage, numberOfPeople]);

  return (
    <form className={styles["form-wrapper"]}>
      <h2>Tip Calculator</h2>
      <CustomInput
        type='number'
        name='Bill'
        id='bill'
        value={bill}
        maxLength={10}
        setValue={setBill}
      />
      <CustomInput
        type='number'
        name='Tip Percentage'
        id='tipPercentage'
        maxLength={100}
        value={tipPercentage}
        setValue={setTipPercentage}
      />
      <CustomInput
        type='number'
        name='Number of People'
        id='numberOfPeople'
        maxLength={100}
        value={numberOfPeople}
        setValue={setNumberOfPeople}
      />
      <div>
        <span>Total tip: </span>
        <span>{totalTip}</span>
      </div>
      <div>
        <span>Tip per Person: </span>
        <span>{tipPerPerson}</span>
      </div>
    </form>
  );
};

export default TipCalculatorForm;
