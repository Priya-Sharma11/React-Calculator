import logo from "./logo.svg";
import "./App.css";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";

function App() {
  return (
    <center>
      <div id="calculator">
        <Display />
        <Buttons />
      </div>
    </center>
  );
}

export default App;
