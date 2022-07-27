import axios from "axios";
import { useEffect } from "react";
import { useDataboard } from "../contexts/Databoard";
// import mmt from "../assets/databoard/mmt.svg";
// import editbtn from "../assets/databoard/editbtn.svg";
// import trashbtn from "../assets/databoard/trshbtn.svg";
import {
  datetoviewformat,
  // deleterecordc,
} from "../functions/databoardfunctions";
import { useAuth } from "../contexts/Authcontext";

export function Databoardtablec() {
  const { databoarddispatch, databoardstate } = useDataboard();
  const { token } = useAuth();

  // async function handledelete(deletionid) {
  //   const res = await deleterecordc(deletionid);
  //   if (res.success) {
  //     databoarddispatch({
  //       type: "DELETE_REORDC",
  //       payload: { deletionid: res.deletionid },
  //     });
  //   }
  // }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      try {
        databoarddispatch({
          type: "LOADER_ON",
        });
        console.log("cargo loader on");
        const response = await axios.get(
          "https://emissions-calculator-react.herokuapp.com/allCargoFactors",
          {
            signal,
            // headers: { authorization: authtoken },
            headers: { authorization: `Bearer ${token}` },
          }
        );
        console.log("----");
        console.log(response.data);
        console.log("----");
        databoarddispatch({
          type: "SET_ALLFACTORSC",
          payload: { factorsobjectc: response.data },
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
        } else {
          console.log({ error });
        }
      } finally {
      }
    })();

    return () => {
      controller.abort();
    };
  }, [databoarddispatch, token]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      try {
        databoarddispatch({
          type: "LOADER_ON",
        });
        const response = await axios.get(
          "https://emissions-calculator-react.herokuapp.com/cargoEmissions",
          {
            signal,
            // headers: { authorization: authtoken },
            headers: { authorization: `Bearer ${token}` },
          }
        );
        databoarddispatch({
          type: "SET_VALUES_CARGO",
          payload: { databoardarrayc: response.data },
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
        } else {
          console.log({ error });
        }
      } finally {
        databoarddispatch({
          type: "LOADER_OFF",
        });
        console.log("cargo loader on");
      }
    })();

    return () => {
      controller.abort();
    };
  }, [databoarddispatch, token]);
  return (
    <>
      {databoardstate.databoardtableloading ? (
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>loading...</h1>
      ) : (
        <table className="databoardtable__table">
          <thead className="databoardtable__tablehead">
            <tr className="databoardtable__theadtr">
              {/* <th className="databoardtable__theadth" scope="col">
                <span className="blank__letters">check</span>
              </th> */}
              <th className="databoardtable__theadth" scope="col">
                date
              </th>
              <th className="databoardtable__theadth" scope="col">
                cargo<span className="downarrow">↓</span>
              </th>
              <th className="databoardtable__theadth" scope="col">
                weight<span className="downarrow">↓</span>
              </th>
              <th className="databoardtable__theadth" scope="col">
                distance<span className="downarrow">↓</span>
              </th>
              <th className="databoardtable__theadth" scope="col">
                Type<span className="downarrow">↓</span>
              </th>
              <th className="databoardtable__theadth" scope="col">
                Source
              </th>
              <th className="databoardtable__theadth" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          {databoardstate.allfactorsc !== undefined && (
            <tbody className="databoardtable__tablebody">
              {[...databoardstate.databoardtablec].map((item, idx) => {
                return (
                  <tr key={item._id} className="databoardtable__tabletr">
                    {/* <td>
                      <div className="databoardtable__tablecheck">
                        <input type="checkbox" defaultChecked />
                      </div>
                    </td> */}
                    <td className="databoardtable__tabletd">
                      {datetoviewformat(item.date)}
                    </td>
                    <td className="databoardtable__tabletd">{item.travelBy}</td>
                    <td className="databoardtable__tabletd">
                      {item.weight} kgs
                    </td>
                    <td className="databoardtable__tabletd">
                      {item.distance} kms
                    </td>
                    <td className="databoardtable__tabletd">
                      {
                        databoardstate.allfactorsc[item.travelBy].find(
                          (element) =>
                            element.id === JSON.stringify(item.factorType)
                        ).factor
                      }
                    </td>
                    <td className="databoardtable__tabletd">
                      {/* <div className="databoardtable__csource">
                        <img
                          className="databoardtable__csourceimg"
                          src={mmt}
                          alt="mmt"
                        />
                      </div> */}
                      -
                    </td>
                    <td className="databoardtable__tabletd">
                      {/* <div className="databoardtable__tableactions">
                        <button
                          onClick={() =>
                            databoarddispatch({
                              type: "SHOW_UPDATE_MODALC",
                              payload: { updationrecordc: item },
                            })
                          }
                          className="databoardtable__tablebtn"
                        >
                          <img src={editbtn} alt="editbtn" />
                        </button>
                        <button
                          onClick={() => handledelete(item._id)}
                          className="databoardtable__tablebtn"
                        >
                          <img src={trashbtn} alt="trashbtn" />
                        </button>
                      </div> */}
                      coming soon
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      )}
    </>
  );
}
