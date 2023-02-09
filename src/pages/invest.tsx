import FinancingOptionsView from '@components/organisms/investment/financing/FinancingOptionsView';
import { Stack } from '@mui/material';
import React from 'react';

export const Invest: React.FC = () => {
  return (
    <Stack style={{ flex: 1, justifyContent: 'center' }}>
      {/* TODO implement view transitions after clarifying user flow and features  */}
      <FinancingOptionsView />
      {/* <FixedFinancingView /> */}
      {/* <PaymentOptionsView /> */}
      {/* <SuccessfulTransactionView /> */}
    </Stack>
  );
};
