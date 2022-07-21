export function Bsrtable3(params) {
  const { reportdata } = params;
  return (
    <div>
      <div className="bsr_table_details">
        Please provide details of air emissions (other than GHG emissions) by
        the entity, in the following format:
      </div>
      <table className="bsr_table">
        <thead className="bsr_thead">
          <tr className="bsr_tr">
            <th className="bsr_th">Parameter</th>
            <th className="bsr_th">Unit</th>
            <th className="bsr_th">FY 2022 (Current Financial Year)</th>
            <th className="bsr_th">FY 2021 (Previous Financial Year)</th>
          </tr>
        </thead>
        <tbody className="bsr_body">
          <tr className="bsr_tr">
            <td className="bsr_td">
              Total Scope 1 emissions (Break-up of the GHG into CO2, CH4, N2O,
              HFCs, PFCs, SF6, NF3, if available)
            </td>
            <td className="bsr_td">Metric tonnes of CO2 equivalent</td>
            <td className="bsr_td">{reportdata.scope1.toFixed(1)}</td>
            <td className="bsr_td">NA</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Total Scope 2 emissions (Break-up of the GHG into CO2, CH4, N2O,
              HFCs, PFCs, SF6, NF3, if available)
            </td>
            <td className="bsr_td">Metric tonnes of CO2 equivalent</td>
            <td className="bsr_td">{reportdata.scope2}</td>
            <td className="bsr_td">NA</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Total Scope 1 and Scope 2 emissions per rupee of turnover
            </td>
            <td className="bsr_td">Metric tonnes of CO2 equivalent</td>
            <td className="bsr_td">NA</td>
            <td className="bsr_td">NA</td>
          </tr>
          <tr className="bsr_tr">
            <td className="bsr_td">
              Total Scope 1 and Scope 2 emission intensity (optional) - the
              relevant metric may be selected by the entity
            </td>
            <td className="bsr_td">Metric tonnes of CO2 equivalent</td>
            <td className="bsr_td">NA</td>
            <td className="bsr_td">NA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
