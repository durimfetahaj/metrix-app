"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  pv: number;
}

interface RoundedBarChartProps {
  data: DataPoint[];
}

export const BarChartComponent: React.FC<RoundedBarChartProps> = ({ data }) => {
  const CustomYAxisTick = ({ payload, x, y }: any) => {
    const formattedValue = parseFloat(payload.value).toLocaleString("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {formattedValue}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" tick={<CustomYAxisTick />} />
        <Tooltip
          formatter={(value: number) =>
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            }).format(value)
          }
        />
        <Bar
          dataKey="pv"
          className="fill-brand-primary-100"
          barSize={30}
          background
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
