import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { RouteType } from "../../routes/appRoutes";
import { colors, fontStyles } from "../../styles/styles";
import { useSelector } from "react-redux";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const { appState } = useSelector((state: RootState) => state.appState);

  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        "&: hover": {
          backgroundColor: colors.primary,
        },
        paddingY: "12px",
        paddingX: "24px",
        height: "50px",
        marginBottom: "25px",
        borderLeft: appState === item.state ? 3 : 0,
        borderColor: colors.primary,
      }}
    >
      <ListItemIcon
        sx={{
          color: appState === item.state ? colors.primary : colors.black,
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      <Typography
        style={{
          ...fontStyles.avenirRegular,
          fontSize: "16px",
          color: appState === item.state ? colors.primary : colors.black,
        }}
      >
        {item.sidebarProps.displayText}
      </Typography>
    </ListItemButton>
  ) : null;
};

export default SidebarItem;
