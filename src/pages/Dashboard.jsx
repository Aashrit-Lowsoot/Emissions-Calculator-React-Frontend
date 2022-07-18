import { Dashgraph } from "../components/Dashgraph";
import { Dashgrapharea } from "../components/Dashgrapharea";
import { Dashparameters } from "../components/Dashparameters";
import { Dashwebplatforms } from "../components/Dashwebplatforms";
import { Lowsootfooter } from "../components/Lowsootfooter";
import { Sidenav } from "../components/Sidenav";
import { Topbar } from "../components/Topbar";

export function Dashboard() {
  return (
    <div className="dcontainer">
      <Sidenav />
      <div className="dashmain">
        <Topbar />
        <div className="dashmaincontent">
          <h1 className="dashheader">Visualization</h1>
          <Dashparameters />
          <Dashgraph />
          <div className="dashgraphblock">
            <Dashgrapharea />
            <Dashwebplatforms />
          </div>
        </div>
        <Lowsootfooter />
      </div>
    </div>
  );
}
