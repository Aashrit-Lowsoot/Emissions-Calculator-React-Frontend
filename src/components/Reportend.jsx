import downarrow from "../assets/report/downarrow.png";
export function Reportend(params) {
  const { generatePDF } = params;
  return (
    <div className="reportmaincont__end">
      <div className="reportmaincont__designarraow">
        <img
          className="reportmaincont__designarraowimg"
          src={downarrow}
          alt="reportmaincont__designarraowimg"
        />
      </div>
      <div className="reportmaincont__downlaoddata">
        <button onClick={generatePDF} className="reportmaincont__downlaodbtn">
          Download
        </button>
      </div>
    </div>
  );
}
