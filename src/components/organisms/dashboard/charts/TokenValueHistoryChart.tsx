import { Stack, Typography } from '@mui/material';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { colors, componentStyles } from '@styles/styles';
import { useTokenQuery } from '@graphql/token/token';
import TokenChartSelector from '@components/molecules/TokenChartSelector';
import TokenDropDown from '@components/molecules/TokenDropDown';
import TokenGainOrLossView from '@components/molecules/TokenGainOrLossView';

export interface Props {}

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
      <Stack style={{ backgroundColor: 'white', borderWidth: 0 }}>
        <div className="custom-tooltip">
          <Typography>{input.label} </Typography>
          <Typography>{input.payload[0].value}</Typography>
        </div>
      </Stack>
    );
  }

  return null;
};

/**
 * formats valueHistory data to format best fit for AreaChart
 * @param data
 * @returns
 */
const getFormattedValueHistoryData = (data: { value: number; date: string }[]) => {
  return data.map(({ value, date }) => {
    return { month: new Date(date).toLocaleString('default', { month: 'short' }), value: value };
  });
};

const TokenValueHistoryChart: React.FC<Props> = (props) => {
  const { data } = useTokenQuery();

  if (!data || !data.token) {
    return <>Loading</>;
  }

  return (
    <Stack
      style={{
        ...componentStyles.cardGreyBackground,
        width: '100%',
        height: '70%'
      }}
    >
      <Stack
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '10px 30px'
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
          data={getFormattedValueHistoryData(data.token.valueHistory)}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.primary} stopOpacity={0.9} />
              <stop offset="95%" stopColor={colors.primary} stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" style={{ fontFamily: 'AvenirLTStd', fontSize: '17px' }} tickLine={false} axisLine={false}></XAxis>
          <YAxis
            tickFormatter={(val) => '$' + val}
            style={{
              fontFamily: 'AvenirLTStdBold',
              fontSize: '17px',
              paddingRight: '80px'
            }}
            tickLine={false}
            axisLine={false}
          ></YAxis>
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="value" stroke={colors.primary} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </Stack>
  );
};

export default TokenValueHistoryChart;
