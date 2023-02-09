import { Stack } from '@mui/material';
import React from 'react';
import FinancingStep from './FinancingStep';

const renderBorder = () => {
  return (
    <Stack
      sx={{
        border: 0.5,
        width: '55px',
        height: '0.5px'
      }}
    />
  );
};

const FinancingSteps: React.FC = () => {
  return (
    <Stack style={{ margin: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <FinancingStep stepNumber={1} isActive={true} />
      {renderBorder()}
      <FinancingStep stepNumber={2} isActive={false} />
      {renderBorder()}
      <FinancingStep stepNumber={3} isActive={false} />
      {renderBorder()}
      <FinancingStep stepNumber={4} isActive={false} />
    </Stack>
  );
};

export default FinancingSteps;
