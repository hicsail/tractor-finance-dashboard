import { Stack } from '@mui/material';
import { tokens } from '../data/sampleData';
import TokenCard from './TokenCard';
import { useTokensQuery } from '@graphql/token/token';

export default function TokenCardList() {
  const { data } = useTokensQuery();

  console.log('dta', data);

  if (!data || !data.tokens) {
    return <>Loading</>;
  }

  return (
    <Stack style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
      {data.tokens.map((t) => (
        <TokenCard token={tokens[0]} />
      ))}
    </Stack>
  );
}
