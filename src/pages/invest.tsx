import SuccessfulTransactionView from '@components/organisms/investment/payment/SuccessfulTransactionView';
import { Stack } from '@mui/material';
import React from 'react';

export const Invest: React.FC = () => {
  return (
    <Stack style={{ flex: 1, justifyContent: 'center' }}>
      {/* <FinancingOptionsView />
      <FixedFinancingView /> */}
      {/* <PaymentOptionsView /> */}
      <SuccessfulTransactionView />
    </Stack>
  );
};
