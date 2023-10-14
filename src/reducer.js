function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "DELETE":
      state.splice(action.payload.index, 1);
      return [...state];
    default:
      break;
  }
}

export default reducer;
