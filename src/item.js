import UserContext from "./userContext";
import { useContext } from "react";

function Item({ user, index }) {
  let { handleDelete } = useContext(UserContext);

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.score}</td>
      <td>
        <button
          onClick={() => {
            handleDelete(index);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Item;
