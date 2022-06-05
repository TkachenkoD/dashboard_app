import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "silver", opacity: 0.6, padding: "15px" }}>
        <p >{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};


export default function RequestLineChart(props) {

  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={250}
          data={props.chartData}
          margin={{
            top: 25,
            right: 25,
            bottom: 15,
            left: 5
          }}
        >
          <CartesianGrid strokeDasharray="1 7" stroke="#f5f5f5" />
          <XAxis
            dataKey="name"
            // scale="band"
            tick={{ fill: '#FFF' }}
            tickLine={{ stroke: 'none' }}
            axisLine={false}
          />
          <YAxis
            tick={{ fill: '#FFF' }}
            tickLine={{ stroke: 'none' }}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend /> */}
          {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
          {props.isBarChart
            ? <Bar dataKey="value" barSize={20} fill="#FFF" />
            : <Line dataKey="value" stroke="#FFF" fill="#FFF" />
          }
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
