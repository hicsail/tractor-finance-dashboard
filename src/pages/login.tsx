import { useMeQuery } from '@graphql/auth/auth';

export const Login = () => {
  const { data } = useMeQuery();
  return (
    <div>
      <h1>{data?.me?.name}</h1>
    </div>
  );
};
