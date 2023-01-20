import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { colors, componentStyles, fontStyles } from "../styles/styles";
import TokenChartSelector from "./molecules/TokenChartSelector";
import TokenDropDown from "./molecules/TokenDropDown";

import TokenGainOrLossView from "./molecules/TokenGainOrLossView";

export interface Props {}

const data = [
  {
    name: "Jun",
    uv: 4000,

    amt: 2400,
  },
  {
    name: "Jul",
    uv: 3000,

    amt: 2210,
  },
  {
    name: "Aug",
    uv: 2000,

    amt: 2290,
  },
  {
    name: "Aug",
    uv: 2780,

    amt: 2000,
  },
  {
    name: "Sept",
    uv: 1890,

    amt: 2181,
  },
  {
    name: "Oct",
    uv: 2390,

    amt: 2500,
  },
  {
    name: "Nov",
    uv: 3490,

    amt: 2100,
  },
];
const CustomTooltip = (
  input:
    | {
        active: boolean;
        payload: any;
        label: string;
      }
    | any
) => {
  if (input.active && input.payload && input.payload.length) {
    return (
      <Stack style={{ backgroundColor: "white", borderWidth: 0 }}>
        <div className="custom-tooltip">
          <Typography>{input.label} </Typography>
          <Typography>{input.payload[0].value}</Typography>
        </div>
      </Stack>
    );
  }

  return null;
};

const TokenValueHistoryChart: React.FC<Props> = (props) => {
  return (
    <Stack
      style={{
        ...componentStyles.cardGreyBackground,
        width: "700px",
        height: "395px",
      }}
    >
      <Stack
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 30px",
        }}
      >
        <TokenDropDown />
        <TokenChartSelector />
        <TokenGainOrLossView />
      </Stack>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.primary} stopOpacity={0.9} />
              <stop offset="95%" stopColor={colors.primary} stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            style={{ fontFamily: "AvenirLTStd", fontSize: "17px" }}
            tickLine={false}
            axisLine={false}
          ></XAxis>
          <YAxis
            tickFormatter={(val) => "$" + val}
            style={{
              fontFamily: "AvenirLTStdBold",
              fontSize: "17px",
              paddingRight: "80px",
            }}
            tickLine={false}
            axisLine={false}
          ></YAxis>
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="uv"
            stroke={colors.primary}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Stack>
  );
};

export default TokenValueHistoryChart;
