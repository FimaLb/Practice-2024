import { useEffect, useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import styles from "./TipCalculatorForm.module.css";
import CustomOutput from "../CustomOutput/CustomOutput";

const TipCalculatorForm = () => {
  const [bill, setBill] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [totalTip, setTotalTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);

  useEffect(() => {
    const isValidNumbers = [bill, tipPercentage, numberOfPeople].every(
      (number) => number > 0
    );
    if (isValidNumbers) {
      const totalTip = (bill * tipPercentage) / 100;
      const tipPerPerson = totalTip / numberOfPeople;

      setTotalTip(totalTip);
      setTipPerPerson(tipPerPerson);
    } else {
      setTotalTip(-1);
      setTipPerPerson(-1);
    }
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
      <CustomOutput
        id={"total-tip"}
        value={totalTip}
        lableText={"Total tip:"}
      />
      <CustomOutput
        id={"tip-per-person"}
        value={tipPerPerson}
        lableText={"Tip per Person:"}
      />
    </form>
  );
};

export default TipCalculatorForm;
