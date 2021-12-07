export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      localStorage.setItem("user", action.data);
      return action.data;
    default:
      throw new Error("Incorrect action type for rotationReducer");
  }
};
