import React, { useMemo } from "react";
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
import { data } from "../utils/data";
import { getMean, getStandardDeviation, calcZScores } from "../utils/mathUtils";

export default function ModeChart() {
  const { dataWithZScores, pvAnomalies, uvAnomalies } = useMemo(() => {
    const meanPv = getMean(data.map((d) => d.pv));
    const meanUv = getMean(data.map((d) => d.uv));
    const stdPv = getStandardDeviation(
      data.map((d) => d.pv),
      meanPv
    );
    const stdUv = getStandardDeviation(
      data.map((d) => d.uv),
      meanUv
    );

    const dataWithZScores = calcZScores(data, [
      { key: "pv", mean: meanPv, std: stdPv },
      { key: "uv", mean: meanUv, std: stdUv },
    ]);

    const pvAnomalies = dataWithZScores.filter(
      (d) => Math.abs(d.pvZ) > 1
    ).length;
    const uvAnomalies = dataWithZScores.filter(
      (d) => Math.abs(d.uvZ) > 1
    ).length;

    return { dataWithZScores, pvAnomalies, uvAnomalies };
  }, []);

  return (
    <>
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
          <Line dataKey="pv" stroke="#8884d8" connectNulls dot={{ r: 4 }} />
          <Line dataKey="pvRed" stroke="red" dot={{ r: 4 }} />
          <Line dataKey="uv" stroke="#82ca9d" connectNulls dot={{ r: 4 }} />
          <Line dataKey="uvRed" stroke="red" dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>

      <div style={{ marginTop: "16px", textAlign: "center" }}>
        <strong>Аномалии:</strong> pv — {pvAnomalies}, uv — {uvAnomalies}
      </div>
    </>
  );
}
