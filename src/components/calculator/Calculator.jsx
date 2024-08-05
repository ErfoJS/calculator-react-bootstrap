import { useState } from "react";
import CalcDisplay from "./CalcDisplay";
import CalcKeyboard from "./CalcKeyboard";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [secondaryDisplay, setSecondaryDisplay] = useState("");

  const displayHandler = (displayInput) => {
    setDisplay((prevDisplayInput) => `${prevDisplayInput}${displayInput}`);
    console.log(displayInput);
  };
  const directInputToFiledHandler = (inputFromField) => {
    setDisplay(inputFromField);
  };
  const resetDisplay = () => {
    setDisplay("");
  };

  const deleteLastHandler = () => {
    setDisplay(display.slice(0, display.length - 1));
  };

  const equalButtonHandler = () => {
    setSecondaryDisplay(display);
    setDisplay("ok");
  };

  return (
    <div className="d-flex flex-column gap-1 ">
      <CalcDisplay
        secondaryDisplay={secondaryDisplay}
        directInputToFiledHandler={directInputToFiledHandler}
        display={display}
        displayHandler={displayHandler}></CalcDisplay>
      <CalcKeyboard
        equalButtonHandler={equalButtonHandler}
        deleteLastHandler={deleteLastHandler}
        displayHandler={displayHandler}
        resetDisplay={resetDisplay}></CalcKeyboard>
    </div>
  );
};

export default Calculator;
