import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { colors, fontStyles } from '../../../../styles/styles';

export interface Props {}

const FinancingForm: React.FC<Props> = (props) => {
  return (
    <Stack style={{ flex: 1, justifyContent: 'space-between', height: '100px' }}>
      <Typography style={{ ...fontStyles.rooneyBold, color: colors.primary, fontSize: '20px' }}>Flexible Financing</Typography>
      <Typography style={{ ...fontStyles.avenirRegular, fontSize: '16px', color: 'black' }}>
        This is a flexible option to invest any amount to finance a tractor, it includes a mandatory three weeks waiting period to top up the complete amount to finance a tractor
        before you start earning
      </Typography>
      <FormControl fullWidth>
        <TextField sx={{ ...fontStyles.avenirRegular, fontSize: '32px', lineHeight: '50px' }} label="Type in amount" variant="outlined" />
      </FormControl>

      <Button style={{ backgroundColor: colors.primary, borderRadius: 3, height: 40, width: 160 }} variant="contained" disableElevation>
        Continue
      </Button>
    </Stack>
  );
};

export default FinancingForm;
