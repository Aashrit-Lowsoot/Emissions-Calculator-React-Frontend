import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
export function Linegraph(params) {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoader(true);
    (async () => {
      try {
        console.log("starting fetch");
        const response = await axios.get("/api/chart1data", { signal });
        if (response.status === 200) {
          setData(response.data.carbodata);
        }
        setLoader(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
        } else {
        }
      } finally {
        setLoader(false);
      }
    })();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {loader ? (
        <h1>loader...</h1>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              style={{
                fontSize: "1.6rem",
              }}
            />
            <YAxis
              style={{
                fontSize: "1.6rem",
              }}
              axisLine={false}
            />
            <Tooltip />
            <Legend />
            <XAxis
              style={{
                fontSize: "1rem",
                fontFamily: "san serif",
              }}
              dataKey="month"
            />
            <Line type="monotone" dataKey="rail" stroke="#e3a3e0" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
}
