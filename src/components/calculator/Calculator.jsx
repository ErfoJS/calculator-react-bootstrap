import { useState } from "react";
import CalcDisplay from "./CalcDisplay";
import CalcKeyboard from "./CalcKeyboard";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const displayHandler = (displayInput) => {
    setDisplay((prevDisplayInput) => `${prevDisplayInput}${displayInput}`);
    console.log(displayInput);
  };
  const resetDisplay = () => {
    setDisplay("");
  };

  const deleteLastHandler = () => {
    setDisplay(display.slice(0, display.length - 1));
  };

  console.log(display);
  return (
    <div className="d-flex flex-column gap-2 ">
      <CalcDisplay
        display={display}
        displayHandler={displayHandler}></CalcDisplay>
      <CalcKeyboard
        deleteLastHandler={deleteLastHandler}
        displayHandler={displayHandler}
        resetDisplay={resetDisplay}></CalcKeyboard>
    </div>
  );
};

export default Calculator;
