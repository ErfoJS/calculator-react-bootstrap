import CalcButton from "./CalcButton";

const CalcDisplay = (props) => {
  const inputHandler = (event) => {
    // console.log(event.target.value.length);
    props.displayHandler(
      event.target.value.slice(event.target.value.length, 1)
    );
  };
  return (
    <div className="d-flex flex-row justify-content-center  ">
      <div className="col-8 col-xl-4">
        <input
          value={props.display}
          onChange={inputHandler}
          type="text"
          className="form-control "
          placeholder="0"
          aria-label="calcDisplay"
          aria-describedby="basic-addon1"
        />
      </div>
      <div>
        <CalcButton value={"^"} className="input-group-text" id="basic-addon1">
          ^
        </CalcButton>
      </div>
    </div>
  );
};

export default CalcDisplay;
