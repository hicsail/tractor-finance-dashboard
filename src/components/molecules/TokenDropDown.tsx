import React, { useState } from "react";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import OptionUnstyled from "@mui/base/OptionUnstyled";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import DropDownIcon from "../../assets/svgs/dropDownIcon.svg";

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
          onChange={handleChange}
          //TODO style selector
          sx={{
            color: "white",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
              borderWidth: 0,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
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
