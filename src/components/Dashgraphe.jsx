import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
import { useVisuals } from "../contexts/Visualcontext";
export function Dashgrape() {
  const { visualstate } = useVisuals();
  console.log({ electricwale: visualstate.electricty.Electricity });
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont hide">
        <h2 className="dashgraph__header">&nbsp;</h2>
        <div style={{ visibility: "hidden" }} className="dashgraphline__cont">
          <Linegraph vizarray={visualstate.electricty.Electricity} />
        </div>
      </div>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Electricity in CO2e</h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={visualstate.electricty.Electricity} />
        </div>
      </div>
    </div>
  );
}
