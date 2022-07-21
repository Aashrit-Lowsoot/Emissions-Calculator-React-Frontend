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
// import { chart2data } from "../mockdata";
export function Bargraph(params) {
  const { vizarray } = params;
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   setLoader(true);
  //   (async () => {
  //     try {
  //       const response = await axios.get("/api/chart2data", { signal });
  //       if (response.status === 200) {
  //         setData(response.data.carbodata);
  //       }
  //       setLoader(false);
  //     } catch (error) {
  //       if (axios.isAxiosError(error)) {
  //       } else {
  //       }
  //     } finally {
  //       setLoader(false);
  //     }
  //   })();

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={[...vizarray].slice(1, 7)}>
          <XAxis
            dataKey="month"
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
          <Bar dataKey="emission" stackId="a" fill="#fe7e7d" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
