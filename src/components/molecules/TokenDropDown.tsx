import React from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import DropDownIcon from '../../assets/svgs/dropDownIcon.svg';
import { fontStyles } from '@styles/styles';

export default function TokenDropDown() {
  const [age, setAge] = React.useState<string | number>(1);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          style={{ ...fontStyles.avenirRegular, color: 'black' }}
          onChange={handleChange}
          sx={{
            '.MuiOutlinedInput-notchedOutline': {
              borderWidth: 0
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 0
            }
          }}
          IconComponent={() => <img src={DropDownIcon} alt="GroupSolid SVG" />}
        >
          <MenuItem value={1}>DEMO-03-KW</MenuItem>
          <MenuItem value={10}>TELTONIKA FMB920</MenuItem>
          <MenuItem value={20}>All Tractors</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
