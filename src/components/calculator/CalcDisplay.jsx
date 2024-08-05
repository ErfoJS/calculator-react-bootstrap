import CalcButton from "./CalcButton";

const CalcDisplay = (props) => {
  const directInputHandler = (event) => {
    // console.log(event.target.value.length);
    props.directInputToFiledHandler(event.target.value);
  };
  return (
    <div className="d-flex flex-row justify-content-center  ">
      <div className="col-8 col-xl-4 border border-gray rounded">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row w-100">
            <div className="col-2">
              <CalcButton
                value={"^"}
                className="input-group-text "
                id="basic-addon1">
                ^
              </CalcButton>
            </div>
            <div className="col-10 text-end">
              <span className="text-end">{props.secondaryDisplay}</span>
            </div>
          </div>
          <div className="w-100">
            <input
              value={props.display}
              onChange={directInputHandler}
              type="text"
              className="form-control text-end border-0 bg-transparent"
              placeholder="0"
              aria-label="calcDisplay"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CalcDisplay;
