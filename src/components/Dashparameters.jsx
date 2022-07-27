// import carb1 from "../assets/carb1.svg";
// import carb2 from "../assets/carb2.svg";
// import carb3 from "../assets/carb3.svg";
// import carb4 from "../assets/carb4.svg";
import { useVisuals } from "../contexts/Visualcontext";
export function Dashparameters() {
  const { visualstate } = useVisuals();
  console.log({ hsuifh: visualstate });
  return (
    <div className="dashparameters">
      <div className="dashparameter">
        <div className="dashparameter___imgcont">
          <img
            className="dashparameter___img"
            src={"https://img.icons8.com/carbon-copy/344/c.png"}
            alt="carbon"
          />
        </div>
        <div className="dashparameter___textcont">
          <p className="dashparameter___textvalue">
            <span>{visualstate.total.toFixed(1)}</span> CO<sub>2</sub>e
          </p>
          <p className="dashparameter___textname">Total</p>
        </div>
      </div>
      <div className="dashparameter">
        <div className="dashparameter___imgcont">
          <img
            className="dashparameter___img"
            src={"https://img.icons8.com/carbon-copy/452/1-c.png"}
            alt="scope 1"
          />
        </div>
        <div className="dashparameter___textcont">
          <p className="dashparameter___textvalue">
            <span>{visualstate.scope1.toFixed(1)}</span> CO<sub>2</sub>e
            <i className="bi bi-circle-fill scope-1-fill" />
          </p>
          <p className="dashparameter___textname">Scope1</p>
        </div>
      </div>
      <div className="dashparameter">
        <div className="dashparameter___imgcont">
          <img
            className="dashparameter___img"
            src={"https://img.icons8.com/carbon-copy/452/2-c.png"}
            alt="scope 2"
          />
        </div>
        <div className="dashparameter___textcont">
          <p className="dashparameter___textvalue">
            <span>{visualstate.scope2.toFixed(1)}</span> CO<sub>2</sub>e
            <i className="bi bi-circle-fill scope-2-fill" />
          </p>
          <p className="dashparameter___textname">Scope2</p>
        </div>
      </div>
      <div className="dashparameter">
        <div className="dashparameter___imgcont">
          <img
            className="dashparameter___img"
            src={"https://img.icons8.com/carbon-copy/452/3-c.png"}
            alt="scope 3"
          />
        </div>
        <div className="dashparameter___textcont">
          <p className="dashparameter___textvalue">
            <span>{visualstate.scope3.toFixed(1)}</span> CO<sub>2</sub>e
            <i className="bi bi-circle-fill scope-3-fill" />
          </p>
          <p className="dashparameter___textname">Scope3</p>
        </div>
      </div>
    </div>
  );
}
