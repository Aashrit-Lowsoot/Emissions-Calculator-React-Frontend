import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDataboard } from "../contexts/Databoard";
import { baseurl } from "../api/url";

export function Datainmodal(params) {
  // databoarddispatch({ type: "SHOW_SHEETS_MODAL" })
  const { databoarddispatch } = useDataboard();
  const onSubmit = async (data) => {
    databoarddispatch({ type: "HIDE_SHEETS_MODAL" });
    // console.log( { sheetURL: data.sheetsurl } );
    try {
      const response = await axios.post(`${baseurl}/googleSheets`, {
        sheetURL: data.sheetsurl,
      });
      if (response.status === 200) {
        toast.success("google sheet imported", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      console.log(
        "%csheet added sucess fully",
        "background:lawngreen; color:black"
      );
    } catch (error) {
      // console.log({ error });
      // console.log("%csheet not added", "background:red; color:white");
      toast.error("Sheet integration error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });
  return (
    <div className="dialog__overlay">
      <div className="dialog sheetsdialog">
        <h1 className="dialog__header">Sheets Import</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="dialog__form">
          <div className="dialog__row">
            <div className="dialog__inputcont">
              <input
                type="url"
                min="1"
                placeholder="sheets url"
                className="dialog__input"
                required={true}
                {...register("sheetsurl")}
              />
            </div>
          </div>
          <div className="dialog__row">
            <div className="dialog__copycont">
              <span
                style={{
                  textOverflow: "ellipsis",
                  maxWidth: "45rem",
                  // lineClamp: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
                className="dialog__copyconttext"
              >
                emissions-calculator@emissions-calculator-354206.iam.gserviceaccount.com
              </span>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    "emissions-calculator@emissions-calculator-354206.iam.gserviceaccount.com"
                  )
                }
                className="dialog__copycontbtn"
              >
                copy
              </button>
            </div>
          </div>
          <div className="dialog__row">
            <div className="sheets_instructions">
              <b>Usage Instructions</b>
              <ul className="sheets_instructionlist">
                <li>Open the sheet url entered above.</li>
                <li>Click Share.</li>
                <li>Enter the email address.</li>
                <li>Provide us the editor access.</li>
              </ul>
            </div>
          </div>
          <button type="submit" className="dialog__btn">
            Import
          </button>
        </form>
        <button
          onClick={() => databoarddispatch({ type: "HIDE_SHEETS_MODAL" })}
          className="dialog__btn"
        >
          Discard
        </button>
      </div>
    </div>
  );
}
