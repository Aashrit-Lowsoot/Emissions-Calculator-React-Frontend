import React, { useReducer } from "react";
import { createContext, useContext } from "react";

const Databoardcontext = createContext();
export function Databoardprovider({ children }) {
  function databoardreducer(state, action) {
    switch (action.type) {
      case "SET_VALUES":
        return { ...state, databoardtable: action.payload.databoardarray };
      case "LOADER_ON":
        return {
          ...state,
          databoardtableloading: true,
        };
      case "LOADER_OFF":
        return {
          ...state,
          databoardtableloading: false,
        };
      case "SET_ALLFACTORS":
        return {
          ...state,
          allfactors: { ...action.payload.factorsobject, "": [] },
          factorarr: [...Object.keys(action.payload.factorsobject)],
        };
      case "ADD_REORD":
        return {
          ...state,
          databoardtable: [...state.databoardtable, action.payload.newrecord],
        };
      case "DELETE_REORD":
        return {
          ...state,
          databoardtable: [...state.databoardtable].filter(
            (item) => item._id !== action.payload.deletionid
          ),
        };
      case "UPDATE_REORD":
        return {
          ...state,
          databoardtable: [...state.databoardtable].map((itm) => {
            if (itm._id === action.payload.updatedrecord._id) {
              return action.payload.updatedrecord;
            }
            return itm;
          }),
        };
      case "SHOW_UPDATE_MODAL":
        return {
          ...state,
          updatemodalstatus: true,
          updationrecord: { ...action.payload.updationrecord },
        };
      case "HIDE_UPDATE_MODAL":
        return { ...state, updatemodalstatus: false, updationrecord: {} };
      default:
        throw new Error();
    }
  }
  const [databoardstate, databoarddispatch] = useReducer(databoardreducer, {
    databoardtable: [],
    databoardtableloading: false,
    allfactors: { "": [] },
    factorarr: [],
    updatemodalstatus: false,
    updationrecord: {},
  });
  return (
    <Databoardcontext.Provider value={{ databoardstate, databoarddispatch }}>
      {children}
    </Databoardcontext.Provider>
  );
}
export const useDataboard = () => useContext(Databoardcontext);
