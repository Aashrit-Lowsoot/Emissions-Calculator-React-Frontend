import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import automate from "../assets/sidenav/automate.svg";
import cargo from "../assets/sidenav/cargo.svg";
import datain from "../assets/sidenav/datain.svg";
import electricity from "../assets/sidenav/electricity.svg";
import reports from "../assets/sidenav/reports.svg";
import travel from "../assets/sidenav/travel.png";
import trshbtn from "../assets/sidenav/trshbtn.svg";
import visualize from "../assets/sidenav/visualize.svg";
const Navcontext = createContext();
export function Navprov({ children }) {
  function navreducer(state, action) {
    switch (action.type) {
      case "SET_NAVSTATE":
        return { ...state, navnow: action.payload.navnum };
      case "TOGGLE_NAVDD":
        const togglednavdd = [...state.subnav2].map((navitm) => {
          if (navitm.navid === action.payload.navid) {
            return { ...navitm, isopen: !navitm.isopen };
          }
          return navitm;
        });
        return { ...state, subnav2: togglednavdd };
      default:
        throw new Error();
    }
  }
  const [navboardstate, navdispatch] = useReducer(navreducer, {
    navnow: 1,
    subnav2: [
      {
        navid: 1,
        name: "Datainboard",
        isopen: false,
        img: datain,
        path: "databoard",
        canopen: true,
        subnavarr: [
          {
            id: 1,
            imgicon: travel,
            name: "Travel",
            navnum: 1,
          },
          {
            id: 2,
            imgicon: electricity,
            name: "Electricity",
            navnum: 2,
          },
          {
            id: 3,
            imgicon: cargo,
            name: "Cargo",
            navnum: 3,
          },
          {
            id: 4,
            imgicon: trshbtn,
            name: "E-waste",
            navnum: 4,
          },
        ],
      },
      {
        navid: 2,
        name: "Automate",
        isopen: false,
        img: automate,
        path: "",
        canopen: false,
        subnavarr: [
          {
            id: 1,
            imgicon: travel,
            name: "Travel",
            navnum: 1,
          },
          {
            id: 2,
            imgicon: electricity,
            name: "Electricity",
            navnum: 2,
          },
          {
            id: 3,
            imgicon: cargo,
            name: "Cargo",
            navnum: 3,
          },
          {
            id: 4,
            imgicon: trshbtn,
            name: "E-waste",
            navnum: 4,
          },
        ],
      },
      {
        navid: 3,
        name: "Visualize",
        isopen: false,
        img: visualize,
        path: "visualize",
        canopen: true,
        subnavarr: [
          {
            id: 1,
            imgicon: travel,
            name: "Travel",
            navnum: 1,
          },
          {
            id: 2,
            imgicon: electricity,
            name: "Electricity",
            navnum: 2,
          },
          {
            id: 3,
            imgicon: cargo,
            name: "Cargo",
            navnum: 3,
          },
          {
            id: 4,
            imgicon: trshbtn,
            name: "E-waste",
            navnum: 4,
          },
        ],
      },
      {
        navid: 4,
        name: "Report",
        isopen: false,
        img: reports,
        path: "report",
        canopen: true,
        isreport: false,
        reportsubnav: [
          {
            id: 1,
            name: "BRSR",
            img: reports,
          },
        ],
        subnavarr: [
          {
            id: 1,
            imgicon: reports,
            name: "BRSR",
            navnum: 1,
          },
        ],
      },
    ],
  });
  return (
    <Navcontext.Provider value={{ navboardstate, navdispatch }}>
      {children}
    </Navcontext.Provider>
  );
}
export const useNavc = () => useContext(Navcontext);
