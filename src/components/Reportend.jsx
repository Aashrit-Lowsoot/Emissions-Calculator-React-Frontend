import downarrow from "../assets/report/downarrow.svg";
export function Reportend() {
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
        <button className="reportmaincont__downlaodbtn">Download</button>
      </div>
    </div>
  );
}
