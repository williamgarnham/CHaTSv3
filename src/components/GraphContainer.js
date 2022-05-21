import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const GraphContainer = (props) => {
  return (
    <div>
      <LineChart width={400} height={400} data={props.data}>
        <Line type="monotone" dataKey={props.graphType} stroke="#ccc" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default GraphContainer;
