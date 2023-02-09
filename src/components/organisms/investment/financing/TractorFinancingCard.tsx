import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { colors, componentStyles, fontStyles } from '@styles/styles';

export interface Props {
  tractorImage: string;
}

const TractorFinancingCard: React.FC<Props> = (props) => {
  return (
    <Stack
      style={{
        ...componentStyles.cardGreyBackground,
        width: '480px',
        height: '170px',
        justifyContent: 'center'
      }}
    >
      <Stack
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <img src={props.tractorImage} alt="GroupSolid SVG" style={{ position: 'absolute', left: '-60px' }} />
        <Stack
          style={{
            alignSelf: 'flex-end'
          }}
        >
          <Typography style={{ ...fontStyles.rooneyBold, color: colors.primary, fontSize: '20px' }}>New Holland-t8 ($5,500)</Typography>
          <Stack style={{ height: '10px' }} />
          <Stack
            style={{
              flexDirection: 'row'
            }}
          >
            <Typography style={{ ...fontStyles.avenirBold, fontSize: '16px', color: 'black' }}>$3000</Typography>
            <Typography> &nbsp;</Typography>
            <Typography style={{ ...fontStyles.avenirRegular, fontSize: '16px', color: 'black' }}>Invested</Typography>
          </Stack>
          <Stack style={{ height: '5px' }} />
          <Stack
            style={{
              flexDirection: 'row'
            }}
          >
            <Typography style={{ ...fontStyles.avenirBold, fontSize: '16px', color: 'black' }}>$2500</Typography>
            <Typography> &nbsp;</Typography>
            <Typography style={{ ...fontStyles.avenirRegular, fontSize: '16px', color: 'black' }}> needed to complete financing</Typography>
          </Stack>
          <Stack style={{ height: '10px' }} />
          <Stack
            style={{
              alignSelf: 'flex-end'
            }}
          >
            <Button style={{ backgroundColor: colors.primary, borderRadius: 3, height: 40, width: 160 }} variant="contained" disableElevation>
              Complete Financing
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TractorFinancingCard;
