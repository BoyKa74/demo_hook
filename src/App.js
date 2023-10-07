import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef, useCallback } from "react";
import Content from "./content";

function App() {
  let [count, setCount] = useState(0);
  let [show, setShow] = useState(false);
  let handleCount = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);
  // function handleCount

  // let a = 5; // a #fff = 5

  // handleCount #ff3 =  ff5
  // ff4 =  {
  //   setCount((prevState) => prevState + 1);
  // }

  console.log("Re-render APP");

  return (
    <div className="App">
      <h2>{count}</h2>

      <br />

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/hide Content
      </button>
      {show && <Content handleCount={handleCount} />}
    </div>
  );
}

export default App;
