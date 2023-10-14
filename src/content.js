import { useState, useEffect, useRef, memo, useMemo, useContext } from "react";
import UserContext from "./userContext";
import Item from "./item";

function Content() {
  let { users, handleSubmit } = useContext(UserContext);

  let ipName = useRef();
  let ipScore = useRef();

  let data = users.map((user, index) => {
    return <Item key={index} user={user} index={index} />;
  });

  let tb = useMemo(() => {
    console.log("useMemo");
    let total = users.reduce((total, user) => {
      return total + parseInt(user.score);
    }, 0);
    return total / users.length;
  }, [users]);

  return (
    <div className="Content">
      <form>
        Name: <input ref={ipName}></input> <br />
        Score: <input ref={ipScore}></input> <br />
        <button
          onClick={() => {
            handleSubmit(ipName.current.value, ipScore.current.value);
          }}
          type="button"
        >
          Add User
        </button>
      </form>
      <h3>{tb}</h3>
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Action</th>
        </tr>
        {data}
      </table>
    </div>
  );
}

export default memo(Content);
