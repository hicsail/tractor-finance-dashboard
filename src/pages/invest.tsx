import FinancingForm from '@components/FinancingForm';
import TractorFinancingCard from '@components/TractorFinancingCard';
import { Grid, Stack } from '@mui/material';
import React from 'react';

export const Invest: React.FC = () => {
  return (
    <Grid container width="100%" height="100%">
      <Grid xs={12} lg={6}>
        <Stack style={{ marginRight: '30px', justifyContent: 'space-between', height: '100%' }}>
          <TractorFinancingCard />
          <Stack style={{ height: '20px' }} />
          <TractorFinancingCard />
        </Stack>
      </Grid>
      <Grid xs={12} lg={6}>
        <Stack style={{ height: '100%' }}>
          <FinancingForm />
        </Stack>
      </Grid>
    </Grid>
  );
};
