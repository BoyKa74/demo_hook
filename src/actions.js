function addUser(name, score) {
  return {
    type: "ADD",
    payload: {
      name,
      score,
    },
  };
}

function deleteUser(index) {
  return {
    type: "DELETE",
    payload: {
      index,
    },
  };
}

export { addUser, deleteUser };
