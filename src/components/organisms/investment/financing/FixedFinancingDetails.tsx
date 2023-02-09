import { Button, Stack, Typography } from '@mui/material';
import { colors, fontStyles } from '@styles/styles';
import React from 'react';

const InvestmentStatus: React.FC = () => {
  return (
    <Stack
      style={{
        width: '185px',
        height: '35px',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Stack
        style={{
          backgroundColor: colors.primary,
          opacity: 0.2,
          width: '100%',
          height: '100%',
          padding: 5,
          borderRadius: 4
        }}
      />
      <Stack style={{ position: 'absolute', flexDirection: 'row' }}>
        <Typography
          style={{
            ...fontStyles.avenirRegular,
            fontSize: 18,
            lineHeight: '27px'
          }}
        >
          Investment:
        </Typography>
        <Typography> &nbsp;</Typography>
        <Typography
          style={{
            ...fontStyles.avenirBold,
            fontSize: 18,
            color: colors.green,
            lineHeight: '27px'
          }}
        >
          Open
        </Typography>
      </Stack>
    </Stack>
  );
};

const InvestmentHighlight: React.FC<{ value: string; text: string }> = (props) => {
  return (
    <Stack style={{ flexDirection: 'row' }}>
      <Typography
        style={{
          ...fontStyles.avenirBold,
          fontSize: 18,
          color: colors.primary
        }}
      >
        {props.value}
      </Typography>
      <Typography> &nbsp;</Typography>
      <Typography
        style={{
          ...fontStyles.avenirRegular,
          fontSize: 18
        }}
      >
        {props.text}
      </Typography>
    </Stack>
  );
};

const FixedFinancingDetails: React.FC = () => {
  return (
    <Stack style={{ justifyContent: 'space-between', width: 450, height: 500 }}>
      <Typography
        style={{
          ...fontStyles.avenirBold,
          fontSize: 32
        }}
      >
        Tafe-Eicher 380 4wd Prima
      </Typography>
      <InvestmentStatus />
      <InvestmentHighlight value="$3,000" text="Already Invested" />
      <InvestmentHighlight value="$2,500 " text="needed to complete financing " />

      <InvestmentHighlight value="10 years " text="Investment period" />

      <InvestmentHighlight value="$180 - $250 " text="Monthly return on investment" />

      <Typography
        style={{
          ...fontStyles.avenirRegular,
          fontSize: 16,
          lineHeight: '23.3px'
        }}
      >
        You are paying $2,500 alongside two other investors to finance one tractor, after payment, you will automatically own 45% of the tractor and your earnings will be based on
        this percentage ownership.
      </Typography>
      <Button style={{ backgroundColor: colors.primary, borderRadius: 33, height: 40, width: 160, alignSelf: 'flex-end' }} variant="contained" disableElevation>
        Complete Financing
      </Button>
    </Stack>
  );
};

export default FixedFinancingDetails;
