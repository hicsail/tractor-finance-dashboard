import { List, ListItem, Stack, Typography } from '@mui/material';
import { colors, componentStyles, fontStyles } from '@styles/styles';
import React from 'react';
import Tafe from '@assets/svgs/tafe.svg';

const bulltetItemStyle = {
  ...fontStyles.avenirRegular,
  fontSize: '16px',
  display: 'list-item',
  color: 'black'
};

const TractorPrice: React.FC = () => {
  return (
    <Stack
      style={{
        width: '140px',
        height: '45px',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '-60px',
        top: '-20px'
      }}
    >
      <Stack
        style={{
          backgroundColor: colors.primary,
          opacity: 0.2,
          width: '100%',
          height: '100%',
          padding: 5,
          borderRadius: 33
        }}
      ></Stack>
      <Typography
        style={{
          ...fontStyles.avenirBold,
          color: colors.primary,
          position: 'absolute',
          fontSize: 36
        }}
      >
        $5,500
      </Typography>
    </Stack>
  );
};

const TractorDetailsCard: React.FC = () => {
  return (
    <Stack style={{ ...componentStyles.cardGreyBackground, width: 480, height: 520, position: 'relative' }}>
      <TractorPrice />
      <img src={Tafe} alt="GroupSolid SVG" />

      <List sx={{ listStyleType: 'disc', pl: 2 }}>
        <ListItem sx={bulltetItemStyle}>Planting power - 10 seeds/s</ListItem>
        <ListItem sx={bulltetItemStyle}>Implements - Ridger, Harrower</ListItem>
        <ListItem sx={bulltetItemStyle}>Engine hours - 504 hrs</ListItem>
        <ListItem sx={bulltetItemStyle}>Horse power - 65hp</ListItem>
      </List>
    </Stack>
  );
};

export default TractorDetailsCard;
