export function Reportemmission() {
  return (
    <div className="reportmaincont__semmissions">
      <p className="reportmaincont__semmissionlabel">Stationary emissions</p>
      <div className="semmission__tablecont">
        <table className="semmission__table">
          <tbody>
            <tr className="semmission__tablehead">
              <th className="semmission__theadtr">Date</th>
              <th className="semmission__theadtr">Source</th>
              <th className="semmission__theadtr">Fuel</th>
              <th className="semmission__theadtr">Quantity</th>
              <th className="semmission__theadtr">
                CO<sub>2</sub>e
              </th>
            </tr>
          </tbody>
          <tbody className="semmission__tablebody">
            <tr className="semmission__tabletr">
              <td className="semmission__tabletd">12 Jan 2022</td>
              <td className="semmission__tabletd semmission__tabletd--source">
                Boiler
              </td>
              <td className="semmission__tabletd">
                <div className="semmission__tabletd--fuelname">Natural gas</div>
              </td>
              <td className="semmission__tabletd">10000 SCF</td>
              <td className="semmission__tabletd">
                <div className="semmission__tabletd--co2e">1000</div>
              </td>
            </tr>
            <tr className="semmission__tabletr">
              <td className="semmission__tabletd">12 Jan 2022</td>
              <td className="semmission__tabletd semmission__tabletd--source">
                Steam generator
              </td>
              <td className="semmission__tabletd">
                <div className="semmission__tabletd--fuelname">Propane</div>
              </td>
              <td className="semmission__tabletd">1000 gallons</td>
              <td className="semmission__tabletd">
                <div className="semmission__tabletd--co2e">400</div>
              </td>
            </tr>
            <tr className="semmission__tabletr">
              <td className="semmission__tabletd">12 Jan 2022</td>
              <td className="semmission__tabletd semmission__tabletd--source">
                Fabricator
              </td>
              <td className="semmission__tabletd">
                <div className="semmission__tabletd--fuelname">Coal</div>
              </td>
              <td className="semmission__tabletd">100 gallons</td>
              <td className="semmission__tabletd">
                <div className="semmission__tabletd--co2e">150</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
