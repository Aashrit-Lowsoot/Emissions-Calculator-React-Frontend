import { Sourcebar } from "./Sourcebar";

export function Reportsources() {
  const datax = [
    {
      id: 1,
      barname: "Diesel Heavy-Duty Vehicles",
      barvalue: 1500,
      barpercent: 30,
      barcolor: "#ca79c6",
    },
    {
      id: 2,
      barname: "CNG Buses",
      barvalue: 1000,
      barpercent: 30,
      barcolor: "#79cfa6",
    },
    {
      id: 3,
      barname: "Diesel Passenger Cars",
      barvalue: 750,
      barpercent: 30,
      barcolor: "#77beeb",
    },
    {
      id: 4,
      barname: "Petrol Light-Duty Vehicles",
      barvalue: 500,
      barpercent: 30,
      barcolor: "#ff706f",
    },
  ];
  return (
    <div className="reportmaincont__msources">
      <p className="reportmaincont__msourceshead">
        Mobile sources in CO<sub>2</sub>e
      </p>
      <div className="reportmaincont__msourcebarcont">
        {datax.map((item) => (
          <Sourcebar
            key={item.id}
            barname={item.barname}
            barvalue={JSON.stringify(item.barvalue)}
            barpercent={JSON.stringify(item.barpercent)}
            barcolor={item.barcolor}
          />
        ))}
      </div>
    </div>
  );
}
