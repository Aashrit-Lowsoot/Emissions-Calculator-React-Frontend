import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
export function Dashgraph() {
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">Air travel</h2>
        <div className="dashgraphline__cont">
          <Linegraph />
        </div>
      </div>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Road Travel</h2>
        <div className="dashgraphbar__cont">
          <Bargraph />
        </div>
      </div>
    </div>
  );
}
