import TractorDetailsCard from '@components/organisms/investment/financing/TractorDetailsCard';
import { Grid } from '@mui/material';
import React from 'react';
import FixedFinancingDetails from './FixedFinancingDetails';

const FixedFinancingView: React.FC = () => {
  return (
    <Grid container width="100%">
      <Grid xs={12} lg={6} item>
        <TractorDetailsCard />
      </Grid>
      <Grid xs={12} lg={6} item>
        <FixedFinancingDetails />
      </Grid>
    </Grid>
  );
};

export default FixedFinancingView;
