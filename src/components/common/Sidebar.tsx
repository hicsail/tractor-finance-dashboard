import { Drawer, List, Stack, Toolbar } from "@mui/material";
import appRoutes from "../../routes/appRoutes";
import { sizes } from "../../styles/styles";
import SidebarItem from "./SidebarItem";
import Logo from "../../assets/svgs/helloTractorLogo.svg";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizes.sideBarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizes.sideBarWidth,
          boxSizing: "border-box",
          borderRight: "0px",
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="flex-start"
          >
            <img src={Logo} alt="logo SVG" />
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? <SidebarItem item={route} key={index} /> : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
