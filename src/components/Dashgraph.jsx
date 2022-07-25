import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
import { useVisuals } from "../contexts/Visualcontext";
export function Dashgraph() {
  const { visualstate } = useVisuals();

  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">Air Travel</h2>
        <div className="dashgraphline__cont">
          <Linegraph vizarray={visualstate.travel.Road} />
        </div>
      </div>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Road Travel</h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={visualstate.travel.Road} />
        </div>
      </div>
    </div>
  );
}
