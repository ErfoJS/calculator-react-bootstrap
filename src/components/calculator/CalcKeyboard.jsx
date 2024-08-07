import CalcButton from "./CalcButton";
import CalcAcButton from "./CalcAcButton";
import CalcDeleteLast from "./CalcDeleteLast";
import CalcEqualButton from "./CalcEqualButton";

const CalcKeyboard = (props) => {
  return (
    <div className="d-flex gap-1 flex-column ">
      <div className="d-flex gap-1 flex-row justify-content-center">
        <div className="col-2 col-xl-1">
          <CalcDeleteLast
            deleteLastHandler={props.deleteLastHandler}
            value="<-"></CalcDeleteLast>
        </div>
        <div className="col-2 col-xl-1">
          <CalcAcButton
            resetDisplay={props.resetDisplay}
            value="AC"></CalcAcButton>
        </div>
        <div className=" col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="%"></CalcButton>
        </div>
        <div className="col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="/"></CalcButton>
        </div>
      </div>
      <div className="d-flex gap-1 flex-row justify-content-center">
        <div className="col-2 col-xl-1">
          <CalcButton
            value="7"
            displayHandler={props.displayHandler}></CalcButton>
        </div>
        <div className="col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="8"></CalcButton>
        </div>
        <div className=" col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="9"></CalcButton>
        </div>
        <div className="col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="*"></CalcButton>
        </div>
      </div>

      <div className="d-flex gap-1 flex-row justify-content-center">
        <div className="col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="4"></CalcButton>
        </div>
        <div className="col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="5"></CalcButton>
        </div>
        <div className=" col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="6"></CalcButton>
        </div>
        <div className="col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="-"></CalcButton>
        </div>
      </div>
      <div className="d-flex gap-1 flex-row justify-content-center">
        <div className="col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="1"></CalcButton>
        </div>
        <div className="col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="2"></CalcButton>
        </div>
        <div className=" col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="3"></CalcButton>
        </div>
        <div className="col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value="+"></CalcButton>
        </div>
      </div>
      <div className="d-flex gap-1 flex-row justify-content-center">
        <div className="col-4 col-xl-2">
          <CalcButton
            displayHandler={props.displayHandler}
            value="0"></CalcButton>
        </div>

        <div className="col-2 col-xl-1">
          <CalcButton
            displayHandler={props.displayHandler}
            value=","></CalcButton>
        </div>
        <div className=" col-2 col-xl-1">
          <CalcEqualButton
            displayHandler={props.displayHandler}
            value="="></CalcEqualButton>
        </div>
      </div>
    </div>
  );
};

export default CalcKeyboard;
