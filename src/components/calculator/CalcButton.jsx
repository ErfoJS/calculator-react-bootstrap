import { useState } from "react";
import Button from "react-bootstrap/Button";
const CalcButton = (props) => {
  return (
    <Button
      onClick={() => props.displayHandler(props.value)}
      className="w-100"
      variant={props.value - props.value === 0 ? "secondary" : "warning"}>
      {props.value}
    </Button>
  );
};

export default CalcButton;
// {
//   () => setCount(count + 1);
// }
