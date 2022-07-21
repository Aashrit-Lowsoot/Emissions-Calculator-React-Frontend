export function Bsrtable1(params) {
  const { reportdata } = params;
  return (
    <div>
      <div className="bsr_table_details">
        Details of total energy consumption (in Joules or multiples) and energy
        intensity, in the following format:
      </div>
      <table className="bsr_table">
        <thead className="bsr_thead">
          <tr className="bsr_tr">
            <th className="bsr_th">Parameter</th>
            <th className="bsr_th">FY 2022 (Current Financial Year)</th>
            <th className="bsr_th">FY 2021 (Previous Financial Year)</th>
          </tr>
        </thead>
        <tbody className="bsr_body">
          <tr className="bsr_tr">
            <td className="bsr_td">Total electricity consumption (A)</td>
            <td className="bsr_td">{reportdata.totalElectricityUsage} kWh</td>
            <td className="bsr_td">NA</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Total fuel consumption (B)</td>
            <td className="bsr_td">NA</td>
            <td className="bsr_td">NA</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">Total energy consumption (A+B+C)</td>
            <td className="bsr_td">NA</td>
            <td className="bsr_td">NA</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Energy intensity per rupee of turnover (Total energy consumption/
              turnover in rupees)
            </td>
            <td className="bsr_td">NA</td>
            <td className="bsr_td">NA</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Energy intensity (optional) - the relevant metric may be selected
              by the entity
            </td>
            <td className="bsr_td">NA</td>
            <td className="bsr_td">NA</td>
          </tr>
          {/**
           * Energy intensity (optional) – the
relevant metric may be selected
by the entity
          */}
        </tbody>
      </table>
    </div>
  );
}
