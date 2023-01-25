import { Box, Grid, Stack } from '@mui/material';
import { sizes } from '@styles/styles';
import React from 'react';
import BookingsAndServicesHistoryChart from '../components/BookingsAndServicesHistoryChart';
import BookingsAndServicesMap from '../components/BookingsAndServicesMap';
import TokenCardList from '../components/TokenCardList';
import TokenValueHistoryChart from '../components/TokenValueHistoryChart';

export interface DashboardProps {}
// const Item: React.FC<DashboardProps> = (props) => {
//   return <Stack style={{ backgroundColor: '#fff', border: '1px solid', borderColor: '#ced7e0', padding: 2, borderRadius: '4px', textAlign: 'center' }}>{props.children}</Stack>;
// };
export const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    // <Stack style={{ flexDirection: 'row', flex: 5 }}>
    //   <Stack style={{ flex: 4, marginRight: '30px', justifyContent: 'space-between' }}>
    //     <TokenCardList />
    //     <TokenValueHistoryChart />
    //   </Stack>
    //   <Stack style={{}}>
    //     <BookingsAndServicesHistoryChart />
    //     <Box sx={{ height: '30px' }} />
    //     <BookingsAndServicesMap />
    //   </Stack>
    // </Stack>
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid xs={12} lg={6}>
    //       <Item>xs=12 lg=6</Item>
    //     </Grid>
    //     <Grid xs={4}>
    //       <Item>xs=4</Item>
    //     </Grid>
    //     <Grid xs={4}>
    //       <Item>xs=4</Item>
    //     </Grid>
    //     <Grid xs={8}>
    //       <Item>xs=8</Item>
    //     </Grid>
    //   </Grid>
    // </Box>
    // <Box sx={{ flexGrow: 1 }}>
    <Grid container columnSpacing={4} width={`calc(100% - ${sizes.sideBarWidth})`}>
      <Grid xs={12} lg={8}>
        <Stack style={{ flex: 4, marginRight: '30px', justifyContent: 'space-between', height: '100%' }}>
          <TokenCardList />
          <TokenValueHistoryChart />
        </Stack>
      </Grid>
      <Grid xs={12} lg={4}>
        <Stack style={{}}>
          <BookingsAndServicesHistoryChart />
          <Box sx={{ height: '30px' }} />
          <BookingsAndServicesMap />
        </Stack>
      </Grid>
    </Grid>
    // </Box>
  );
};
