import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import React from 'react';
import { colors, fontStyles } from '../styles/styles';

export interface Props {}

const TAG = 'FinancingForm.tsx ';

const FinancingForm: React.FC<Props> = (props) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Stack style={{ flex: 1, justifyContent: 'space-between', height: '100px' }}>
      <Typography style={{ ...fontStyles.rooneyBold, color: colors.primary, fontSize: '20px' }}>Flexible Financing</Typography>
      <Typography style={{ ...fontStyles.avenirRegular, fontSize: '16px', color: 'black' }}>
        This is a flexible option to invest any amount to finance a tractor, it includes a mandatory three weeks waiting period to top up the complete amount to finance a tractor
        before you start earning
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          style={{ ...fontStyles.avenirRegular, fontSize: '32px', lineHeight: '50px' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Button style={{ backgroundColor: colors.primary, borderRadius: 3, height: 40, width: 160 }} variant="contained" disableElevation>
        Continue
      </Button>
    </Stack>
  );
};

export default FinancingForm;
