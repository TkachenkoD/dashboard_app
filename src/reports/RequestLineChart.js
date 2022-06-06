import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Typography } from '@mui/material';

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
    <Typography component="span" variant="body1" style={{ width: "100%", height: 250 }}>
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
          {props.isBarChart
            ? <Bar dataKey="value" barSize={20} fill="#FFF" />
            : <Line dataKey="value" stroke="#FFF" fill="#FFF" strokeWidth={3} />
          }
        </ComposedChart>
      </ResponsiveContainer>
    </Typography>
  );
}
