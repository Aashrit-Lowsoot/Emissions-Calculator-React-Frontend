import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
// import { chart1data } from "../mockdata";
import { useVisuals } from "../contexts/Visualcontext";
export function Dashgraphc() {
  const { visualstate } = useVisuals();
  console.log({ cargowale: visualstate.cargo });
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">Air Cargo</h2>
        <div className="dashgraphline__cont">
          <Linegraph vizarray={visualstate.cargo.Air} />
        </div>
      </div>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Road Cargo</h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={visualstate.cargo.Road} />
        </div>
      </div>
    </div>
  );
}
