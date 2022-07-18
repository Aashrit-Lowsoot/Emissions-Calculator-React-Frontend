import axios from "axios";
import { useEffect } from "react";
import { useDataboard } from "../contexts/Databoard";
import mmt from "../assets/databoard/mmt.svg";
import editbtn from "../assets/databoard/editbtn.svg";
import trashbtn from "../assets/databoard/trshbtn.svg";
import roadicon from "../assets/databoard/roadico.svg";
import {
  datetoviewformat,
  deleterecord,
} from "../functions/databoardfunctions";

export function Databoardtable() {
  const { databoarddispatch, databoardstate } = useDataboard();
  async function handledelete(deletionid) {
    const res = await deleterecord(deletionid);
    if (res.success) {
      databoarddispatch({
        type: "DELETE_REORD",
        payload: { deletionid: res.deletionid },
      });
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      try {
        const response = await axios.get(
          "https://emissions-calculator-react.herokuapp.com/allTravelFactors",
          {
            signal,
            // headers: { authorization: authtoken },
          }
        );

        databoarddispatch({
          type: "SET_ALLFACTORS",
          payload: { factorsobject: response.data },
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
  }, [databoarddispatch]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      try {
        databoarddispatch({
          type: "LOADER_ON",
        });
        const response = await axios.get(
          "https://emissions-calculator-react.herokuapp.com/travelEmissions",
          {
            signal,
            // headers: { authorization: authtoken },
          }
        );
        console.table(response.data);
        databoarddispatch({
          type: "SET_VALUES",
          payload: { databoardarray: response.data },
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
      }
    })();

    return () => {
      controller.abort();
    };
  }, [databoarddispatch]);
  return (
    <>
      {databoardstate.databoardtableloading ? (
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>loading...</h1>
      ) : (
        <table className="databoardtable__table">
          <thead className="databoardtable__tablehead">
            <tr className="databoardtable__theadtr">
              <th className="databoardtable__theadth" scope="col">
                <span className="blank__letters">check</span>
              </th>
              <th className="databoardtable__theadth" scope="col">
                date
              </th>
              <th className="databoardtable__theadth" scope="col">
                travel<span className="downarrow">↓</span>
              </th>
              <th className="databoardtable__theadth" scope="col">
                passengers<span className="downarrow">↓</span>
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
          <tbody className="databoardtable__tablebody">
            {[...databoardstate.databoardtable].map((item, idx) => {
              return (
                <tr key={item._id} className="databoardtable__tabletr">
                  <td>
                    <div className="databoardtable__tablecheck">
                      <input type="checkbox" defaultChecked />
                    </div>
                  </td>
                  <td className="databoardtable__tabletd">
                    {datetoviewformat(item.date)}
                  </td>
                  <td className="databoardtable__tabletd">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.travelBy}
                      <img src={roadicon} alt="sf" />
                    </div>
                  </td>
                  <td className="databoardtable__tabletd">{item.passengers}</td>
                  <td className="databoardtable__tabletd">{item.distance}</td>
                  <td className="databoardtable__tabletd">
                    {
                      databoardstate.allfactors[item.travelBy].find(
                        (element) =>
                          element.id === JSON.stringify(item.factorType)
                      ).factor
                    }
                  </td>
                  <td className="databoardtable__tabletd">
                    <div className="databoardtable__csource">
                      <img
                        className="databoardtable__csourceimg"
                        src={mmt}
                        alt="mmt"
                      />
                    </div>
                  </td>
                  <td className="databoardtable__tabletd">
                    <div className="databoardtable__tableactions">
                      <button
                        onClick={() =>
                          databoarddispatch({
                            type: "SHOW_UPDATE_MODAL",
                            payload: { updationrecord: item },
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
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
