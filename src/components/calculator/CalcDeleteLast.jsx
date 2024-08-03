import Button from "react-bootstrap/Button";
const CalcDeleteLast = (props) => {
  const displayInButtonHandler = () => {
    props.deleteLastHandler();
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

export default CalcDeleteLast;
