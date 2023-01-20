import { Stack, Typography } from "@mui/material";
import { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fontStyles } from "../styles/styles";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

export default class BookingsAndServicesHistoryChart extends PureComponent {
  render() {
    return (
      <Stack
        style={{
          width: "700px",
          height: "350px",
        }}
      >
        <Typography
          display="inline"
          style={{
            ...fontStyles.avenirBold,
            fontSize: 16,
            marginBottom: "20px",
          }}
        >
          Bookings and Services by Date
        </Typography>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={380}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="name"
              label={{
                value: "Date of Service/Booking",
                position: "insideBottomRight",
                offset: -15,
              }}
              scale="band"
            ></XAxis>
            <YAxis
              label={{
                value: "Jobs Serviced | Bookings made",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Legend
              verticalAlign="top"
              formatter={(value: any, _: any) => (
                <Typography
                  display="inline"
                  style={{ ...fontStyles.avenirRegular }}
                >
                  {value == "pv" ? "Jobs Serviced" : "Acres Serviced"}
                </Typography>
              )}
            />
            <Bar dataKey="pv" barSize={20} fill="#0074f9" />
            <Line
              type="linear"
              dataKey="uv"
              stroke="#00bcd0"
              dot={false}
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Stack>
    );
  }
}
