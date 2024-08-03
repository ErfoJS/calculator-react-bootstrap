import { useState } from "react";
import Button from "react-bootstrap/Button";
const CalcButton = (props) => {
  const [inputData, setInputData] = useState(props.value);
  const displayInButtonHandler = () => {
    setInputData(props.value);
    props.displayHandler(inputData);
    console.log(inputData);
    console.log("displayInButtonHandler fire");
  };
  return (
    <Button
      onClick={displayInButtonHandler}
      className="w-100"
      variant={props.value - props.value === 0 ? "dark" : "warning"}>
      {props.value}
    </Button>
  );
};

export default CalcButton;
