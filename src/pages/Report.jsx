import { Lowsootfooter } from "../components/Lowsootfooter";
import { Reportemmission } from "../components/Reportemmission";
import { Reportend } from "../components/Reportend";
import Reportmainhead from "../components/Reportmainhead";
import { Reportsources } from "../components/Reportsources";
import { Reporttopbuttons } from "../components/Reporttopbuttons";
import { Sidenav } from "../components/Sidenav";
import { Topbar } from "../components/Topbar";

export function Report() {
  return (
    <div className="dcontainer">
      <Sidenav />
      <div className="reportmain">
        <Topbar />
        <div className="reportmaincontent">
          <h1 className="reportmainheader">Report</h1>
          <div className="reportmaincont">
            <Reporttopbuttons />
            <Reportmainhead />
            <div className="reportmaincont__analysis">
              <Reportemmission />
              <Reportsources />
            </div>
            <Reportend />
          </div>
        </div>
        <Lowsootfooter />
      </div>
    </div>
  );
}
