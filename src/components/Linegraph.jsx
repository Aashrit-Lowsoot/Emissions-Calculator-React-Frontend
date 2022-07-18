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
import { chart1data } from "../mockdata";
export function Linegraph(params) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chart1data.carbodata}>
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
    </>
  );
}
