import { useState, useEffect, useRef, memo } from "react";

function Content({ handleCount }) {
  let [text, setText] = useState("");
  let [todos, setTodos] = useState([]);
  let inputTitle = useRef();

  useEffect(() => {
    console.log("useEffect");
    document.title = text;
  }, [text]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodos(json);
      });
    return () => {
      console.log("Un Mouting");
    };
  }, []);
  let data = todos.map((item) => {
    return <li key={item.id}>{item.title}</li>;
  });

  console.log("Re-render Content");

  return (
    <div className="Content">
      <button onClick={handleCount}>+</button>
      <h1>Hello Hook</h1>
      Title:{" "}
      <input
        ref={inputTitle}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(inputTitle);
          inputTitle.current.focus();
        }}
      >
        Focus
      </button>
      <ul>{data}</ul>
    </div>
  );
}

export default memo(Content);
