import axios from "axios";
import { useEffect, useRef, useState } from "react";
import JsPDF from "jspdf";
import { Lowsootfooter } from "../components/Lowsootfooter";
// import { Reportemmission } from "../components/Reportemmission";
import { Reportend } from "../components/Reportend";
import Reportmainhead from "../components/Reportmainhead";
// import { Reportnav } from "../components/Reportnav";
// import { Reportsources } from "../components/Reportsources";
import { Reporttopbuttons } from "../components/Reporttopbuttons";
// import { Sidenav } from "../components/Sidenav";
// import { Topbar } from "../components/Topbar";
import { Bsrtable1 } from "../components/reportables/Bsrtable1";
import { Bsrtable2 } from "../components/reportables/Bsrtable2";
import { Bsrtable3 } from "../components/reportables/Bsrtable3";
import { Bsrtable4 } from "../components/reportables/Bsrtable4";
// import { Sidenavv2 } from "../components/sidenav/Sidenavv2";
import { Bsrtable5 } from "../components/reportables/Bsrtable5";
import { Bsrtable6 } from "../components/reportables/Bsrtable6";
import { Sidenavvv2 } from "../components/sidenav/Sidenavvv2";
import { useAuth } from "../contexts/Authcontext";
import { Topbarv2 } from "../components/topbar/Topbarv2";

export function Report() {
  const [reportdata, setReport] = useState({});
  const [loading, setloader] = useState(true);
  const componentRef = useRef();
  const { token } = useAuth();
  const generatePDF = () => {
    console.log(document.querySelector("#report__datacontainer").clientWidth);
    const widthval = document.querySelector(
      "#report__datacontainer"
    ).clientWidth;
    const heightval = Math.pow(2, 0.5) * widthval + 20;
    const report = new JsPDF({
      orientation: "portarit",
      unit: "px",
      format: [widthval + 20, heightval],
    });
    report.html(document.querySelector("#report__datacontainer")).then(() => {
      report.save("report.pdf");
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      try {
        const response = await axios.get(
          "https://emissions-calculator-react.herokuapp.com/visualisation",
          {
            signal,
            // headers: { authorization: authtoken },
            headers: { authorization: `Bearer ${token}` },
          }
        );
        console.log({ repox: response.data });
        setReport(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
        } else {
          console.log({ error });
        }
      } finally {
        setloader(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [token]);
  return (
    <div className="dcontainer">
      {/* <Sidenavv2 /> */}
      <Sidenavvv2 />
      <div className="reportmain">
        {/* <Topbar /> */}
        <Topbarv2 />
        {loading ? (
          <div className="reportmaincontent">
            <h1>
              <center>Loading...</center>
            </h1>
          </div>
        ) : (
          <div className="reportmaincontent">
            <h1 className="reportmainheader">Report</h1>
            <div className="reportmaincont">
              <Reporttopbuttons />
              <div ref={componentRef} id="report__datacontainer">
                <Reportmainhead />
                {/* <div className="reportmaincont__analysis">
                  <Reportemmission reportdata={reportdata} />
                  <Reportsources reportdata={reportdata} />
                </div> */}
                <div className="bsrreports">
                  <Bsrtable1 reportdata={reportdata} />
                  <Bsrtable2 reportdata={reportdata} />
                  <Bsrtable3 reportdata={reportdata} />
                  <Bsrtable4 reportdata={reportdata} />
                  <Bsrtable5 reportdata={reportdata} />
                  <Bsrtable6 reportdata={reportdata} />
                </div>
                <div className="reportmaincont__tables"></div>
              </div>
              <Reportend
                generatePDF={generatePDF}
                componentRef={componentRef}
              />
            </div>
          </div>
        )}
        <Lowsootfooter />
      </div>
    </div>
  );
}
