import BookingsAndServicesMap from '@components/organisms/dashboard/charts/BookingsAndServicesMap';
import TokenCardList from '@components/organisms/dashboard/tokens/TokenCardList';
import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import BookingsAndServicesHistoryChart from '../components/organisms/dashboard/charts/BookingsAndServicesHistoryChart';
import TokenValueHistoryChart from '../components/organisms/dashboard/charts/TokenValueHistoryChart';

export interface DashboardProps {}
export const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <Grid container width="100%">
      <Grid xs={12} lg={8}>
        <Stack style={{ marginRight: '30px', justifyContent: 'space-between', height: '100%' }}>
          <TokenCardList />
          <TokenValueHistoryChart />
        </Stack>
      </Grid>
      <Grid xs={12} lg={4}>
        <Stack>
          <BookingsAndServicesHistoryChart />
          <Box sx={{ height: '30px' }} />
          <BookingsAndServicesMap />
        </Stack>
      </Grid>
    </Grid>
  );
};
