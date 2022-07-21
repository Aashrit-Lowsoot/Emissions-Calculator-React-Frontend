import React, { useReducer } from "react";
import { createContext, useContext } from "react";

const Navcontext = createContext();
export function Navprov({ children }) {
  function navreducer(state, action) {
    switch (action.type) {
      case "SET_NAVSTATE":
        return { ...state, navnow: action.payload.navnum };
      default:
        throw new Error();
    }
  }
  const [navboardstate, navdispatch] = useReducer(navreducer, {
    navnow: 1,
  });
  return (
    <Navcontext.Provider value={{ navboardstate, navdispatch }}>
      {children}
    </Navcontext.Provider>
  );
}
export const useNavc = () => useContext(Navcontext);
