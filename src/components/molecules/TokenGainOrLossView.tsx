import { Stack, Typography } from "@mui/material";
import React from "react";
import { colors, fontStyles } from "../../styles/styles";

export interface Props {}

const TokenGainOrLossView: React.FC<Props> = (props) => {
  return (
    <Stack
      style={{
        width: "125px",
        height: "33px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        style={{
          backgroundColor: colors.primary,
          opacity: 0.2,
          width: "100%",
          height: "100%",
          padding: 5,
          borderRadius: 3,
        }}
      ></Stack>
      <Typography
        style={{
          ...fontStyles.avenirBold,
          color: colors.primary,
          position: "absolute",
        }}
      >
        $4,200 (10%)
      </Typography>
    </Stack>
  );
};

export default TokenGainOrLossView;
