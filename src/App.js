import "./App.css";
import { useReducer } from "react";
import Main from "./main";
import UserContext from "./userContext";
import { addUser, deleteUser } from "./actions";
import reducer from "./reducer";

function App() {
  let [users, dispatch] = useReducer(reducer, [
    {
      name: "Nguyen Van A",
      score: 10,
    },
    {
      name: "Nguyen Van B",
      score: 8,
    },
  ]);

  return (
    <UserContext.Provider
      value={{
        users,
        handleSubmit: (name, score) => {
          dispatch(addUser(name, score));
        },
        handleDelete: (index) => {
          dispatch(deleteUser(index));
        },
      }}
    >
      <div className="App">
        <Main />
      </div>
    </UserContext.Provider>
  );
}

export default App;
