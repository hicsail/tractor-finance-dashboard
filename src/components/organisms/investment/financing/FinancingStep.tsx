import { Box, Stack, Typography } from '@mui/material';
import { colors, fontStyles } from '@styles/styles';
import React from 'react';

export interface Props {
  isActive: boolean;
  stepNumber: number;
}

const FinancingStep: React.FC<Props> = (props) => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        width: '45px',
        border: 1,
        borderRadius: '4px',
        borderColor: props.isActive ? colors.primary : '#C4C4C4'
      }}
    >
      <Typography style={{ ...fontStyles.rooneyBold, fontSize: '20px' }}>{props.stepNumber}</Typography>
    </Stack>
  );
};

export default FinancingStep;
