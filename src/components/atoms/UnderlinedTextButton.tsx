import { Button } from '@mui/material';
import { fontStyles, colors } from '@styles/styles';

export interface Props {
  label: string;
}
const UnderlinedTextButton: React.FC<Props> = (props) => {
  return (
    <Button variant="text" style={{ ...fontStyles.rooneyBold, fontSize: '16px', color: colors.primary, textDecoration: 'underline' }}>
      {props.label}
    </Button>
  );
};

export default UnderlinedTextButton;
