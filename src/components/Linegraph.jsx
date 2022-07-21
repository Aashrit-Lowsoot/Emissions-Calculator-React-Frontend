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
// import { useVisuals } from "../contexts/Visualcontext";
// import { chart1data } from "../mockdata";
export function Linegraph(params) {
  const { vizarray } = params;
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={[...vizarray].slice(1, 7)}>
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
          <Line type="monotone" dataKey="emission" stroke="#e3a3e0" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
