import { useState } from "react";
import CalcDisplay from "./CalcDisplay";
import CalcKeyboard from "./CalcKeyboard";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const displayHandler = (displayInput) => {
    setDisplay((prevDisplayInput) => [...prevDisplayInput, displayInput]);
  };
  const resetDisplay = () => {
    setDisplay("");
  };

  console.log(display);
  return (
    <div className="d-flex flex-column gap-2 ">
      <CalcDisplay
        display={display}
        displayHandler={displayHandler}></CalcDisplay>
      <CalcKeyboard
        displayHandler={displayHandler}
        resetDisplay={resetDisplay}></CalcKeyboard>
    </div>
  );
};

export default Calculator;
