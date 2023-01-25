import { AppBar, Avatar, Stack, Toolbar, Typography } from '@mui/material';
import { colors, fontStyles, sizes } from '../../styles/styles';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { Notifications } from '@mui/icons-material';
import appRoutes from '../../routes/appRoutes';

const Topbar = () => {
  const { appState } = useSelector((state: RootState) => state.appState);
  const userProfileImageUrl = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg';
  const username = 'Cindy Baker';
  const currentRoute = appRoutes.find((r) => r.state == appState);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizes.sideBarWidth})`,
        ml: sizes.sideBarWidth,
        boxShadow: 'unset',
        background: 'none',
        height: sizes.topBarHeight,
        justifyContent: 'center'
      }}
    >
      <Toolbar>
        <Stack
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1
          }}
        >
          <Typography
            style={{
              ...fontStyles.rooneyBold,
              color: colors.primary,
              fontSize: '32px'
            }}
          >
            {currentRoute?.sidebarProps.displayText}
          </Typography>
          <Stack
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Notifications color="action" sx={{ fontSize: 30, marginRight: '30px' }} />
            <Avatar alt={username} src={userProfileImageUrl} sx={{ width: 70, height: 70 }} />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
