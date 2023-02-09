import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import SuccessIcon from '@assets/svgs/successCheckMarkIcon.svg';
import { colors, componentStyles, fontStyles } from '@styles/styles';
import UnderlinedTextButton from '@components/atoms/UnderlinedTextButton';
import Confetti from 'react-confetti';

const SuccessfulTransactionView: React.FC = () => {
  return (
    <Stack style={{ alignItems: 'center' }}>
      <Confetti />
      <img src={SuccessIcon} alt="success SVG" style={{ width: 100, height: 100 }} />
      <Stack style={{ height: 50 }} />
      <Stack style={{ ...componentStyles.cardGreyBackground, width: 440, height: 430, padding: 30, justifyContent: 'space-between' }}>
        <Typography
          style={{
            ...fontStyles.rooneyBold,
            color: colors.primary,
            fontSize: 20
          }}
        >
          Congratulations, Payment Successful
        </Typography>
        <Typography
          style={{
            ...fontStyles.avenirRegular,
            color: 'black',
            fontSize: 14
          }}
        >
          Your $7,000 payment is successful, You will be notified once tractor financing is complete and your earning will begin.
        </Typography>
        <Typography
          style={{
            ...fontStyles.avenirRegular,
            color: 'black',
            fontSize: 14
          }}
        >
          Waiting period is three weeks, if after three weeks tractor financing is not complete, you will be refunded, to avoid that you can invite friends to invest with you{' '}
        </Typography>
        <Stack style={{ alignSelf: 'flex-end' }}>
          <UnderlinedTextButton label="Invite Friends" />
        </Stack>
        <Divider />
        <Typography
          style={{
            ...fontStyles.avenirRegular,
            color: 'black',
            fontSize: 20
          }}
        >
          Summary
        </Typography>
        <Stack flexDirection={'row'}>
          <Typography
            style={{
              ...fontStyles.avenirRegular,
              color: 'black',
              fontSize: 14
            }}
          >
            Payment made
          </Typography>
          <Stack style={{ width: 80 }} />
          <Typography
            style={{
              ...fontStyles.avenirRegular,
              color: 'black',
              fontSize: 14
            }}
          >
            $7,000 (70 HTT)
          </Typography>
        </Stack>
        <Stack flexDirection={'row'}>
          <Typography
            style={{
              ...fontStyles.avenirRegular,
              color: 'black',
              fontSize: 14
            }}
          >
            Crypto wallet
          </Typography>
          <Stack style={{ width: 92 }} />
          <Typography
            style={{
              ...fontStyles.avenirRegular,
              color: 'black',
              fontSize: 14
            }}
          >
            BTC to HTT
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SuccessfulTransactionView;
