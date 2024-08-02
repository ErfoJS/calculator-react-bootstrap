import Calculator from "./components/calculator/Calculator";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="container d-flex flex-column justify-content-center">
      <h1 className="d-flex justify-content-center">Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
