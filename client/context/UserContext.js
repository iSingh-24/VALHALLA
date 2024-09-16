import React, { createContext, useReducer, useContext } from "react";
import { GET_ALL_USERS, SET_USER } from "./ActionCreators/UserActionCreaters";

const GlobalUserContext = createContext();

const initialState = {
  user: "",
  text: "This is the initial state for the context",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case GET_ALL_USERS:
      return { ...state, allUsers: action.payload };
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <GlobalUserContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalUserContext.Provider>
  );
};

export const GlobalUserState = () => useContext(GlobalUserContext);
