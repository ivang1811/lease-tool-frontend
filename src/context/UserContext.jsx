import React, { createContext, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";

const initialState = { Id: "", ForeName: "", Surname: "" };

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    dispatch({ type: "SET", data: loggedInUser });
  }
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
