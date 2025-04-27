import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { data } from "../data";
import { meanPv, meanUv, stdPv, stdUv } from "../utils/getMeanValues";
import { calcZScores } from "../utils/calcZScores";

const dataWithZScores = calcZScores(data, [
  { key: "pv", mean: meanPv, std: stdPv },
  { key: "uv", mean: meanUv, std: stdUv },
]);

export default class ModeChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={dataWithZScores}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            connectNulls
            dot={{ r: 4 }}
            isAnimationActive={false}
            strokeDasharray="0"
            strokeOpacity={1}
          />
          <Line
            type="monotone"
            dataKey={(d) => (Math.abs(d.pvZ) > 1 ? d.pv : null)}
            stroke="red"
            dot={{ r: 4 }}
            isAnimationActive={false}
            strokeDasharray="0"
            strokeOpacity={1}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
            connectNulls
            dot={{ r: 4 }}
            isAnimationActive={false}
            strokeDasharray="0"
            strokeOpacity={1}
          />
          <Line
            type="monotone"
            dataKey={(d) => (Math.abs(d.uvZ) > 1 ? d.uv : null)}
            stroke="red"
            dot={{ r: 4 }}
            isAnimationActive={false}
            strokeDasharray="0"
            strokeOpacity={1}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
