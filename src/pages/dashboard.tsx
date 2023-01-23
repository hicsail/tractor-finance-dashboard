import { Stack } from '@mui/material';
import React from 'react';
import BookingsAndServicesHistoryChart from '../components/BookingsAndServicesHistoryChart';
import BookingsAndServicesMap from '../components/BookingsAndServicesMap';
import TokenCardList from '../components/TokenCardList';
import TokenValueHistoryChart from '../components/TokenValueHistoryChart';
import { componentStyles } from '../styles/styles';

export interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <Stack
      style={{
        ...componentStyles.cardGreyBackground,
        backgroundColor: 'white',
        flex: 1
      }}
    >
      <Stack style={{ flexDirection: 'row', flex: 5 }}>
        <Stack style={{ flex: 3 }}>
          <TokenCardList />
          <TokenValueHistoryChart />
        </Stack>
        <Stack style={{ flex: 2 }}>
          <BookingsAndServicesHistoryChart />
          <BookingsAndServicesMap />
        </Stack>
      </Stack>
    </Stack>
  );
};
