import { Stack, Typography } from "@mui/material";
import React from "react";
import { colors, componentStyles, fontStyles } from "../styles/styles";
import PositiveTrendLine from "../assets/svgs/positiveTrendLine.svg";
import GroupSolid from "../assets/svgs/groupSolid.svg";
import { tokenToString } from "typescript";
export interface Props {
  token: any;
}

const TokenCard: React.FC<Props> = (props) => {
  return (
    <Stack
      style={{
        ...componentStyles.cardGreyBackground,
        width: "215px",
        height: "113px",
        justifyContent: "space-between",
      }}
    >
      <Stack
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography style={fontStyles.avenirBold}>
          {props.token.name}
        </Typography>

        <img src={GroupSolid} alt="GroupSolid SVG" />
      </Stack>
      <Typography style={fontStyles.rooneyBold}>{props.token.value}</Typography>
      <Stack
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack style={{ flexDirection: "row", alignItems: "center" }}>
          <img src={PositiveTrendLine} alt="PositiveTrendLine SVG" />
          <Typography
            style={{ ...fontStyles.avenirRegular, color: colors.green }}
          >
            10%
          </Typography>
          <Typography> &nbsp;</Typography>
          <Typography style={fontStyles.avenirRegular}> / Month</Typography>
        </Stack>
        <Stack
          style={{
            alignItems: "center",
          }}
        >
          <Typography style={fontStyles.avenirRegular}>Dec</Typography>
          <Typography style={{ ...fontStyles.avenirBold, color: colors.green }}>
            {props.token.price}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TokenCard;
