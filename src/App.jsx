import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [increment, Setincrement] = useState(1);
  function HandleIncrement() {
    setCount(count + increment);
  }
  function HandleDecrement() {
    setCount(count - increment);
  }
  function HandleIncrementvalue() {
    Setincrement(increment + 1);
  }
  function HandleDecrementvalue() {
    Setincrement(increment - 1);
  }
  return (
    <div className="App">
      <div className="main">
        <div className="header">
          <h1>COUNTER APP</h1>
        </div>
        <div>
          <h2>Count is : {count}</h2>
        </div>
        <div className="btn">
          <button onClick={HandleIncrement}>+</button>
          <button onClick={HandleDecrement}>-</button>
        </div>
        <div className="inc">
          <h2>Incrementing By : {increment}</h2>{" "}
          <div className="btn">
          <button className="btn1" onClick={HandleIncrementvalue}>
            +
          </button>{" "}
          <button className="btn1" onClick={HandleDecrementvalue}>
            -
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
