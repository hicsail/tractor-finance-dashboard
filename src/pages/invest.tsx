import FinancingOptionsView from '@components/organisms/FinancingOptionsView';
import FixedFinancingView from '@components/organisms/FixedFinancingView';
import { Stack } from '@mui/material';
import React from 'react';

export const Invest: React.FC = () => {
  return (
    <Stack style={{ flex: 1, justifyContent: 'center' }}>
      <FinancingOptionsView />
      <FixedFinancingView />
    </Stack>
  );
};
