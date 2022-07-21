import axios from "axios";
import { useEffect } from "react";
import { useDataboard } from "../contexts/Databoard";
import {
  datetoviewformat,
  deleterecorde,
} from "../functions/databoardfunctions";
import editbtn from "../assets/databoard/editbtn.svg";
import trashbtn from "../assets/databoard/trshbtn.svg";

export function Databoardtablee() {
  const { databoarddispatch, databoardstate } = useDataboard();
  async function handledeletee(deletionid) {
    const res = await deleterecorde(deletionid);
    if (res.success) {
      databoarddispatch({
        type: "DELETE_REORDE",
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
          "https://emissions-calculator-react.herokuapp.com/allElectricityFactors",
          {
            signal,
            // headers: { authorization: authtoken },
          }
        );
        console.log("----");
        console.log(response.data.All);
        console.log("----");
        databoarddispatch({
          type: "SET_ALLFACTORSE",
          payload: { factorsobjecte: response.data.All },
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
  // https://emissions-calculator-react.herokuapp.com/electricityEmission
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      try {
        const response = await axios.get(
          "https://emissions-calculator-react.herokuapp.com/electricityEmissions",
          {
            signal,
            // headers: { authorization: authtoken },
          }
        );
        console.log("********");
        console.log(response.data);
        console.log("********");
        databoarddispatch({
          type: "SET_VALUES_ELEC",
          payload: { databoardarraye: response.data },
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
  }, []);
  console.log(databoardstate.databoardtablee);
  return (
    <>
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
              Energy<span className="downarrow">↓</span>
            </th>
            <th className="databoardtable__theadth" scope="col">
              Type<span className="downarrow">↓</span>
            </th>
            <th className="databoardtable__theadth" scope="col">
              Source<span className="downarrow">↓</span>
            </th>
            <th className="databoardtable__theadth" scope="col">
              Actions<span className="downarrow">↓</span>
            </th>
          </tr>
        </thead>
        <tbody className="databoardtable__tablebody">
          {[...databoardstate.databoardtablee].map((item) => {
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
                <td className="databoardtable__tabletd">{item.energy}</td>
                <td className="databoardtable__tabletd">
                  {
                    [...databoardstate.factorarre].find(
                      (elem) => elem.id === JSON.stringify(item.factorType)
                    ).factor
                  }
                </td>
                <td className="databoardtable__tabletd">-</td>
                <td className="databoardtable__tabletd">
                  <div className="databoardtable__tableactions">
                    <button
                      onClick={() =>
                        databoarddispatch({
                          type: "SHOW_UPDATE_MODALE",
                          payload: { updationrecorde: item },
                        })
                      }
                      // onClick={() => console.log(item)}
                      className="databoardtable__tablebtn"
                    >
                      <img src={editbtn} alt="editbtn" />
                    </button>
                    <button
                      onClick={() => handledeletee(item._id)}
                      // onClick={() => console.log(item)}
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
    </>
  );
}
