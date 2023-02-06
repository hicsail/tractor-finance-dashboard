import { Stack } from '@mui/material';
import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { componentStyles, sizes } from '@styles/styles';
import { setAppState } from '../../redux/features/appStateSlice';

type Props = {
  state: string;
  children: ReactNode;
};

const PageWrapper = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.state) {
      dispatch(setAppState(props.state));
    }
  }, [dispatch, props]);

  return (
    <Stack style={{ ...componentStyles.cardGreyBackground, marginTop: 15, padding: 30, backgroundColor: 'white', height: `calc(100% - ${sizes.topBarHeight} + 40px)` }}>
      {props.children}
    </Stack>
  );
};

export default PageWrapper;
