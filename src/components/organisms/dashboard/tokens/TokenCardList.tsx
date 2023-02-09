import { Stack } from '@mui/material';
import TokenCard from './TokenCard';
import { useTokensQuery } from '@graphql/token/token';

export default function TokenCardList() {
  const { data } = useTokensQuery();

  if (!data || !data.tokens) {
    return <>Loading</>;
  }

  return (
    <Stack style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
      {data.tokens.map((t, i) => (
        <TokenCard token={t} key={i.toString()} />
      ))}
    </Stack>
  );
}
