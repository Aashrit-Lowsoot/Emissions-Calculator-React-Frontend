// import { Sidenav } from "../components/Sidenav";
import { Topbar } from "../components/Topbar";
import { Databoardcontols } from "../components/Databoardcontols";
import { Databoardtable } from "../components/Databoardtable";
import { Databottom } from "../components/Databottom";
import { Lowsootfooter } from "../components/Lowsootfooter";
import { Databoardtablec } from "../components/Databoardtablec";
import { useNavc } from "../contexts/Navcontext";
import { Databottomc } from "../components/Databottomc";
import { Databottome } from "../components/Databottome";
import sheetsname from "../assets/databoard/gsheetsname.svg";
// import axios from "axios";
// import { useDataboard } from "../contexts/Databoard";
// import { useEffect } from "react";

import { Sidenavv2 } from "../components/sidenav/Sidenavv2";
import { Databoardtablee } from "../components/Databoardtablee";
// import { useState } from "react";
// import { Addmodalc } from "../components/Addmodalc";
// import { Datainmodal } from "../components/Datainmodal";
// import { Link } from "react-router-dom";
export function Databoard() {
  const { navboardstate } = useNavc();
  // const [state, setState] = useState(false);
  return (
    <>
      <div className="dcontainer">
        {/* <Sidenav /> */}
        <Sidenavv2 />
        <div className="datamain">
          <Topbar />
          <div className="databoardmaincontent">
            <h1 className="databoardheader">Data-in Board</h1>
            <div className="databoardupoptions">
              <div className="databoardupoption">
                <button className="databoardupoption_btn">
                  <span className="databoardupoption_btntxt">connect</span>
                  <img
                    className="databoardupoption_btnlogo"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg"
                    alt="Google_Sheets"
                  />
                  <img
                    className="databoardupoption_btnlogo"
                    src={sheetsname}
                    alt="Google_Sheets"
                  />
                </button>
              </div>
            </div>
            <div className="databoardtablecont">
              <div className="databoardtabletop">
                {navboardstate.navnow === 1 && (
                  <h2 className="databoardtabletop__header">Travel</h2>
                )}
                {navboardstate.navnow === 2 && (
                  <h2 className="databoardtabletop__header">Electricity</h2>
                )}
                {navboardstate.navnow === 3 && (
                  <h2 className="databoardtabletop__header">Cargo</h2>
                )}
                <div className="databoardtabletop__controls">
                  <Databoardcontols />
                </div>
              </div>
              <div className="databoardtable">
                {navboardstate.navnow === 1 && <Databoardtable />}
                {navboardstate.navnow === 3 && <Databoardtablec />}
                {navboardstate.navnow === 2 && <Databoardtablee />}
              </div>
              {navboardstate.navnow === 1 && <Databottom />}
              {navboardstate.navnow === 3 && <Databottomc />}
              {navboardstate.navnow === 2 && <Databottome />}
            </div>
          </div>
          <Lowsootfooter />
          {/* <Datainmodal /> */}
        </div>
      </div>
    </>
  );
}
