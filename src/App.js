import { useState } from "react";
import "./App.css";

function App() {
  let [x, setX] = useState("");
  // let textarea = document.querySelector("textarea");
  let [y, setY] = useState();
  let [char, setChar] = useState("");
  let [display, setDisplay] = useState("");
  function change(event) {
    setX(Number(x + event.target.innerHTML));
    setDisplay(display + event.target.innerHTML);
  }

  function calc() {
    console.log(x);
  }
  function plus(event) {
    setY(x);
    setX("");
    setChar(event.target.innerHTML);
    setDisplay(display + event.target.innerHTML);
  }
  function minus(event) {
    setY(x);
    setX("");
    setChar(event.target.innerHTML);
    setDisplay(display + event.target.innerHTML);
  }
  function times(event) {
    setY(x);
    setX("");
    setChar(event.target.innerHTML);
    setDisplay(display + event.target.innerHTML);
  }
  function divide(event) {
    setY(x);
    setX("");
    setChar(event.target.innerHTML);
    setDisplay(display + event.target.innerHTML);
  }

  function equals() {
    if (char == "+") {
      setX(x + y);
      setDisplay(display + "=" + (y + x));
    } else if (char == "-") {
      setX(x - y);
      setDisplay(display + "=" + (x - y));
    } else if (char == "/") {
      setX(x - y);
      setDisplay(display + "=" + y / x);
    } else if (char == "*") {
      setX(x - y);
      setDisplay(display + "=" + y * x);
    }
  }
  function empty() {
    setDisplay("");
    setX("");
  }

  return (
    <div className="App">
      <div className="outer">
        <div>
          <textarea readOnly value={display}></textarea>
        </div>
        <div className="input">
          <button onClick={change}>1</button>
          <button onClick={change}>2</button>
          <button onClick={change}>3</button>
          <button onClick={change}>4</button>
          <button onClick={change}>5</button>
          <button onClick={change}>6</button>
          <button onClick={change}>7</button>
          <button onClick={change}>8</button>
          <button onClick={change}>9</button>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={times}>*</button>
          <button onClick={divide}>/</button>
          <button onClick={equals}>=</button>
          <button onClick={empty}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
