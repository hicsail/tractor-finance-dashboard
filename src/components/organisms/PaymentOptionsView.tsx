import { Button, Grid, Stack, Typography } from '@mui/material';
import { colors, componentStyles, fontStyles } from '@styles/styles';
import React from 'react';
import CreditCardIcon from '@assets/svgs/creditCardIcon.svg';
import BankTransferIcon from '@assets/svgs/bankTransferIcon.svg';
import MobileWalletIcon from '@assets/svgs/mobileWalletIcon.svg';
import BitcoinIcon from '@assets/svgs/bitcoinIcon.svg';

const TAG = 'PaymentOptionsView.tsx ';

const PaymentOptionToggleButtons: React.FC<{ selected: number }> = (props) => {
  const buttonStyle = {
    width: 160,
    height: 100,
    border: 1,
    borderRadius: '7px',
    borderColor: '#C4C4C4'
  };
  const containerStyle = {
    justifyContent: 'space-between',
    padding: 15
  };
  return (
    <Stack style={{ flexDirection: 'row' }}>
      <Stack style={{ ...containerStyle, backgroundColor: props.selected == 1 ? colors.primary : '' }} sx={buttonStyle}>
        <img style={{ width: 24, height: 24 }} src={BankTransferIcon} alt="GroupSolid SVG" />

        <Typography
          style={{
            ...fontStyles.avenirRegular,
            fontSize: 20,
            color: props.selected == 1 ? 'white' : 'black'
          }}
        >
          Fiat Payment
        </Typography>
      </Stack>
      <Stack style={{ width: 50 }} />
      <Stack style={containerStyle} sx={buttonStyle}>
        <img style={{ width: 24, height: 24 }} src={BitcoinIcon} alt="GroupSolid SVG" />

        <Typography
          style={{
            ...fontStyles.avenirRegular,
            fontSize: 20,
            color: 'black'
          }}
        >
          Crypto Wallet
        </Typography>
      </Stack>
    </Stack>
  );
};

const PaymentOptionCard: React.FC<{ option: string; icon: string }> = (props) => {
  return (
    <Stack style={{ ...componentStyles.cardGreyBackground, flexDirection: 'row', alignItems: 'center', width: 450, height: 80, borderRadius: 33 }}>
      <img style={{ width: 24, height: 24, margin: '0px 20px' }} src={props.icon} alt="GroupSolid SVG" />

      <Typography
        style={{
          ...fontStyles.avenirRegular,
          fontSize: 20,
          color: 'black'
        }}
      >
        {props.option}
      </Typography>
    </Stack>
  );
};

const PaymentDetails: React.FC = () => {
  return (
    <Stack style={{ ...componentStyles.cardGreyBackground, alignItems: 'center', width: 390, height: 450, padding: 20, justifyContent: 'space-between' }}>
      <Stack style={{ flexDirection: 'row' }}>
        <Stack>
          <Typography
            style={{
              ...fontStyles.rooneyBold,
              fontSize: 16,
              color: colors.primary
            }}
          >
            You are paying
          </Typography>
          <Typography
            style={{
              ...fontStyles.rooneyBold,
              fontSize: 20
              // color: colors.primary
            }}
          >
            $1,200
          </Typography>
        </Stack>
        <Stack style={{ width: 50 }} />
        <Typography
          style={{
            ...fontStyles.avenirBold,
            fontSize: 14,
            lineHeight: '19px'
          }}
        >
          Still open for other investors
        </Typography>
      </Stack>
      <Typography
        style={{
          ...fontStyles.avenirRegular,
          fontSize: 16,
          color: 'black',
          lineHeight: '23.3px'
        }}
      >
        You are paying $7,000 to continue tractor financing, this plan is still open and requires additional $8,000 to complete payment. You will wait for three weeks at most
        before profit earning begins.
      </Typography>
      <Button
        style={{ ...fontStyles.avenirRegular, fontSize: 16, color: 'white', backgroundColor: colors.primary, borderRadius: 7, height: 40, width: 235, alignSelf: 'center' }}
        variant="contained"
        disableElevation
      >
        Invite friends to top-up
      </Button>
      <Button
        style={{ ...fontStyles.avenirRegular, fontSize: 16, borderRadius: 7, height: 40, width: 235, alignSelf: 'center', borderWidth: 2, borderColor: colors.primary }}
        variant="outlined"
        disableElevation
      >
        Change Investment amount
      </Button>
      <Typography
        style={{
          ...fontStyles.avenirRegular,
          fontSize: 16,
          lineHeight: '19px',
          textAlign: 'center'
        }}
      >
        Continue to make payment by clicking the pay now button by your far right
      </Typography>
    </Stack>
  );
};

const FiatPaymentOptionsForm: React.FC = () => {
  return (
    <Stack style={{ justifyContent: 'space-between', height: 500, width: 450 }}>
      <Typography
        style={{
          ...fontStyles.avenirRegular,
          fontSize: 28,
          color: 'black'
        }}
      >
        Fiat Payment Options
      </Typography>
      <Typography
        style={{
          ...fontStyles.avenirRegular,
          fontSize: 14
        }}
      >
        You can make your fiat payment using any of the options below
      </Typography>
      <PaymentOptionCard option="Credit Card" icon={CreditCardIcon} />
      <PaymentOptionCard option="Bank Transfer" icon={BankTransferIcon} />
      <PaymentOptionCard option="Mobile Wallet" icon={MobileWalletIcon} />

      <Button
        style={{ ...fontStyles.avenirBold, fontSize: 20, color: 'white', backgroundColor: colors.primary, borderRadius: 44, height: 40, width: 144, alignSelf: 'flex-end' }}
        variant="contained"
        disableElevation
      >
        Pay Now
      </Button>
    </Stack>
  );
};

const PaymentOptionsView: React.FC = () => {
  return (
    <Stack>
      <PaymentOptionToggleButtons selected={2} />
      <Stack style={{ height: 50 }} />
      <Grid container width="100%">
        <Grid xs={12} lg={6} item>
          <PaymentDetails />
        </Grid>
        <Grid xs={12} lg={6} item>
          <FiatPaymentOptionsForm />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default PaymentOptionsView;
