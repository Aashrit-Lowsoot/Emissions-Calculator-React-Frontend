import { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import axios from "axios";
export function Bargraph() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoader(true);
    (async () => {
      try {
        const response = await axios.get("/api/chart2data", { signal });
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
          <BarChart
            width={500}
            height={300}
            data={data}
            // margin={{
            //   top: 20,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
          >
            <XAxis
              dataKey="day"
              style={{
                fontSize: "1.6rem",
              }}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <YAxis
              style={{
                fontSize: "1.6rem",
              }}
              axisLine={false}
            />
            <Tooltip />
            <Legend />
            <XAxis dataKey="day" />
            <Bar dataKey="sea" stackId="a" fill="#fe7e7d" barSize={20} />
            <Bar dataKey="air" stackId="a" fill="#e3a3e0" barSize={20} />
            <Bar dataKey="road" stackId="a" fill="#a1d7f9" barSize={20} />
            <Bar dataKey="rail" stackId="a" fill="#cbd6f3" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}
