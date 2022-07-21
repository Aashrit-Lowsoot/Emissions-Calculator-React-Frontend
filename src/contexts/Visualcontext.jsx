// Visualcontext

import React, { useReducer } from "react";
import { createContext, useContext } from "react";

const Visualcontext = createContext();
export function Visualsprov({ children }) {
  function visualreducer(state, action) {
    switch (action.type) {
      case "SET_VISUALS":
        return {
          ...state,
          travel: action.payload.travelviz,
          cargo: action.payload.cargoviz,
          electricty: action.payload.electriviz,
          scope1: action.payload.scope1viz,
          scope2: action.payload.scope2viz,
          scope3: action.payload.scope3viz,
          total: action.payload.toatalviz,
        };

      default:
        throw new Error();
    }
  }
  const [visualstate, visualdispatch] = useReducer(visualreducer, {
    travel: {},
    cargo: {},
    electricty: {},
    scope1: 0,
    scope2: 0,
    scope3: 0,
    total: 0,
  });
  return (
    <Visualcontext.Provider value={{ visualstate, visualdispatch }}>
      {children}
    </Visualcontext.Provider>
  );
}
export const useVisuals = () => useContext(Visualcontext);
