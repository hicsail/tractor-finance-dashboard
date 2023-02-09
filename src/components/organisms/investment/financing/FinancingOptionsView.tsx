import FinancingForm from '@components/organisms/investment/financing/FinancingForm';
import { Divider, Grid, Stack, Typography } from '@mui/material';
import { colors, fontStyles } from '@styles/styles';
import React from 'react';
import FinancingSteps from './FinancingSteps';
import TractorFinancingCard from './TractorFinancingCard';
import NewHolland from '@assets/svgs/newHolland.svg';
import Tafe from '@assets/svgs/tafe.svg';

const FinancingOptionsView: React.FC = () => {
  return (
    <Stack>
      <Stack style={{ width: '45%' }}>
        <FinancingSteps />
      </Stack>

      <Grid container width="100%" height="100%">
        <Grid xs={12} lg={6} item>
          <Stack style={{ alignItems: 'center', justifyContent: 'space-between', height: '100%', margin: '70px 70px' }}>
            <Typography style={{ ...fontStyles.rooneyBold, color: colors.primary, fontSize: '20px', textAlign: 'left' }}>Fixed Financing</Typography>
            <TractorFinancingCard tractorImage={NewHolland} />
            <Stack style={{ height: '20px' }} />
            <TractorFinancingCard tractorImage={Tafe} />
          </Stack>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }} />
        <Grid xs={12} lg={6} item>
          <Stack style={{ height: '100%', margin: '70px 70px' }}>
            <FinancingForm />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default FinancingOptionsView;
