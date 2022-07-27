import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
import { useVisuals } from "../contexts/Visualcontext";
export function Dashgraph() {
  const { visualstate } = useVisuals();
  console.log({
    vizarrayair: visualstate.cargo.Air,
    vizarrayroad: visualstate.cargo.Road,
    named: "iusad",
  });
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">Air Travel in CO2e</h2>
        <div className="dashgraphline__cont">
          <Linegraph vizarray={visualstate.travel.Air} />
        </div>
      </div>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Road Travel CO2e</h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={visualstate.travel.Road} />
        </div>
      </div>
    </div>
  );
}
