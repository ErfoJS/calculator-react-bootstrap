import Button from "react-bootstrap/Button";
const CalcAcButton = (props) => {
  return (
    <Button
      onClick={props.resetDisplay}
      className="w-100"
      variant={props.value - props.value === 0 ? "dark" : "warning"}>
      {props.value}
    </Button>
  );
};

export default CalcAcButton;
