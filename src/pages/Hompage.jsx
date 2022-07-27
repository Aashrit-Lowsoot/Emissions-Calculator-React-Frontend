import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Dashgraph } from "../components/Dashgraph";
import { Dashgraphc } from "../components/Dashgraphc";
import { Dashgrape } from "../components/Dashgraphe";
import { Dashparameters } from "../components/Dashparameters";
import { Lowsootfooter } from "../components/Lowsootfooter";
import { Sidenavvv2 } from "../components/sidenav/Sidenavvv2";
import { Topbarv2 } from "../components/topbar/Topbarv2";
// import { Topbar } from "../components/Topbar";
import { useAuth } from "../contexts/Authcontext";
import truck from "../assets/truck.svg";
import { useVisuals } from "../contexts/Visualcontext";

export function Hompage() {
  const { visualdispatch } = useVisuals();
  const { token } = useAuth();
  const [loader, setloader] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      try {
        setloader(true);
        const response = await axios.get(
          "https://emissions-calculator-react.herokuapp.com/visualisation",
          {
            signal,
            headers: { authorization: `Bearer ${token}` },
          }
        );
        console.log({ dashload: response.data });
        visualdispatch({
          type: "SET_VISUALS",
          payload: {
            travelviz: response.data.Travel,
            cargoviz: response.data.Cargo,
            electriviz: response.data.Electricity,
            scope1viz: response.data.scope1,
            scope2viz: response.data.scope2,
            scope3viz: response.data.scope3,
            toatalviz: response.data.total,
          },
        });
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
  }, [visualdispatch, token]);
  return (
    <div className="dcontainer">
      <Sidenavvv2 />
      <div className="homemain">
        {/* <Topbar /> */}
        <Topbarv2 />
        <div className="homemaincontent">
          <h1 className="homemainheader">Summary</h1>
          {loader ? (
            <center>
              <h1>loader...</h1>
            </center>
          ) : (
            <>
              <Dashparameters />
              <div className="summaryparams">
                <div className="summaryparam">
                  <p className="summaryparam__title">
                    Total number of kilometers travelled
                    <img
                      className="summaryparam__icon"
                      src={truck}
                      alt="truck"
                    />
                  </p>
                  <p className="summaryparam__value">XXXX kms</p>
                </div>
                <div className="summaryparam">
                  <p className="summaryparam__title">
                    Total number of electricity consumed
                    <img
                      className="summaryparam__icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/4/41/Simpleicons_Interface_black-light-bulb.svg"
                      alt="bulb"
                    />
                  </p>
                  <p className="summaryparam__value">XXXX KWh</p>
                </div>
              </div>
              <Dashgraph />
              <Dashgraphc />
              <Dashgrape />
            </>
          )}
          <Lowsootfooter />
        </div>
      </div>
    </div>
  );
}
