import axios from "axios";
import { useEffect, useState } from "react";
import { Dashgraph } from "../components/Dashgraph";
import { Dashgrapharea } from "../components/Dashgrapharea";
import { Dashgraphc } from "../components/Dashgraphc";
import { Dashgrape } from "../components/Dashgraphe";
import { Dashparameters } from "../components/Dashparameters";
import { Dashwebplatforms } from "../components/Dashwebplatforms";
import { Lowsootfooter } from "../components/Lowsootfooter";
// import { Sidenav } from "../components/Sidenav";
// import { Sidenavv2 } from "../components/sidenav/Sidenavv2";
import { Sidenavvv2 } from "../components/sidenav/Sidenavvv2";
import { Topbar } from "../components/Topbar";
import { useNavc } from "../contexts/Navcontext";
import { useVisuals } from "../contexts/Visualcontext";

export function Dashboard() {
  const { navboardstate } = useNavc();
  const { visualdispatch } = useVisuals();
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
            // headers: { authorization: authtoken },
          }
        );
        // console.log({
        //   travelviz: response.data.Travel,
        //   cargoviz: response.data.Cargo,
        //   electriviz: response.data.Electricity,
        // });
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
          // scope1: 8175.648
          // scope2: 1204.74
          // scope3: 29078.552053507512
          // total: 38458.94005350751
        });
        // SET_VISUALS
        // databoarddispatch({
        //   type: "SET_ALLFACTORS",
        //   payload: { factorsobject: response.data },
        // });
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
  }, [visualdispatch]);
  return (
    <div className="dcontainer">
      {/* <Sidenav /> */}
      {/* <Sidenavv2 /> */}
      <Sidenavvv2 />
      <div className="dashmain">
        <Topbar />
        {loader ? (
          <div className="dashmaincontent">
            <h1>
              <center>Loading...</center>
            </h1>
          </div>
        ) : (
          <div className="dashmaincontent">
            <h1 className="dashheader">Visualization</h1>
            <Dashparameters />
            {navboardstate.navnow === 1 && <Dashgraph />}
            {navboardstate.navnow === 3 && <Dashgraphc />}
            {navboardstate.navnow === 2 && <Dashgrape />}
            <div className="dashgraphblock">
              <Dashgrapharea />
              <Dashwebplatforms />
            </div>
          </div>
        )}
        <Lowsootfooter />
      </div>
    </div>
  );
}
