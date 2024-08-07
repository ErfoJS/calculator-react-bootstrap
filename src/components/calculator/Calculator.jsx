import { useState } from "react";
import CalcDisplay from "./CalcDisplay";
import CalcKeyboard from "./CalcKeyboard";
import stringMath from "string-math";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [secondaryDisplay, setSecondaryDisplay] = useState("");
  console.log(display);

  const displayHandler = (displayInput) => {
    if (displayInput === "=") {
      setSecondaryDisplay(`${display}=`);
      setDisplay(stringMath(display));
    } else
      setDisplay((prevDisplayInput) => `${prevDisplayInput}${displayInput}`);
  };

  const handleInput = (inputFromField) => {
    setDisplay(inputFromField);
  };
  const resetDisplay = () => {
    setDisplay("");
  };

  const deleteLastHandler = () => {
    setDisplay(display.slice(0, display.length - 1));
  };

  return (
    <div className="d-flex flex-column gap-1 ">
      <CalcDisplay
        secondaryDisplay={secondaryDisplay}
        handleInput={handleInput}
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
