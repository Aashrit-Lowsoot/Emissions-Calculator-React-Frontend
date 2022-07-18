import { Sidenav } from "../components/Sidenav";
import { Topbar } from "../components/Topbar";
import { Databoardcontols } from "../components/Databoardcontols";
import { Databoardtable } from "../components/Databoardtable";
import { Databottom } from "../components/Databottom";
import { Lowsootfooter } from "../components/Lowsootfooter";
export function Databoard() {
  return (
    <>
      <div className="dcontainer">
        <Sidenav />
        <div className="datamain">
          <Topbar />
          <div className="databoardmaincontent">
            <h1 className="databoardheader">Data-in Board</h1>
            <div className="databoardtablecont">
              <div className="databoardtabletop">
                <h2 className="databoardtabletop__header">Travel</h2>
                <div className="databoardtabletop__controls">
                  <Databoardcontols />
                </div>
              </div>
              <div className="databoardtable">
                <Databoardtable />
              </div>
              <Databottom />
            </div>
          </div>
          <Lowsootfooter />
        </div>
      </div>
    </>
  );
}
