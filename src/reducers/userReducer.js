export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.data;
    default:
      throw new Error("Incorrect action type for rotationReducer");
  }
};
