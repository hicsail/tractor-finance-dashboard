import { Stack } from '@mui/material';
import { tokens } from '../data/sampleData';
import TokenCard from './TokenCard';

export default function TokenCardList() {
  return (
    <Stack style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
      <TokenCard token={tokens[0]} />
      <TokenCard token={tokens[1]} />
      <TokenCard token={tokens[0]} />
    </Stack>
  );
}
