import Button from "react-bootstrap/Button";

const CalcEqualButton = (props) => {
  const inputToSecondaryDisplay = () => {
    props.displayHandler("=");
    props.equalButtonHandler();
  };
  return (
    <Button
      onClick={inputToSecondaryDisplay}
      className="w-100"
      variant={props.value - props.value === 0 ? "secondary" : "warning"}>
      {props.value}
    </Button>
  );
};

export default CalcEqualButton;
