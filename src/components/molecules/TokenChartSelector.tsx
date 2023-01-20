import { Stack, Typography } from "@mui/material";
import React from "react";
import { fontStyles, colors } from "../../styles/styles";

import LeftArrowButton from "../../assets/svgs/leftArrowButton.svg";
import RightArrowButton from "../../assets/svgs/rightArrowButton.svg";
export interface Props {}

const TokenChartSelector: React.FC<Props> = (props) => {
  return (
    <Stack
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "200px",
      }}
    >
      <img src={LeftArrowButton} alt="GroupSolid SVG" />
      <Typography style={{ ...fontStyles.avenirBold, color: colors.black }}>
        DEMO-03-KW
      </Typography>
      <img src={RightArrowButton} alt="GroupSolid SVG" />
    </Stack>
  );
};

export default TokenChartSelector;
