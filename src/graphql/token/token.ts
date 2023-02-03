/* Generated File DO NOT EDIT. */
/* tslint:disable */
import * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TokensQueryVariables = Types.Exact<{ [key: string]: never }>;

export type TokensQuery = {
  __typename?: 'Query';
  tokens?: Array<{ __typename?: 'Token'; id?: string | null; name?: string | null; price?: number | null; currentValue?: number | null } | null> | null;
};

export type TokenQueryVariables = Types.Exact<{ [key: string]: never }>;

export type TokenQuery = {
  __typename?: 'Query';
  token?: {
    __typename?: 'Token';
    name?: string | null;
    price?: number | null;
    valueHistory?: Array<{ __typename?: 'History'; value?: number | null; date?: string | null } | null> | null;
  } | null;
};

export const TokensDocument = gql`
  query tokens {
    tokens {
      id
      name
      price
      currentValue
    }
  }
`;

/**
 * __useTokensQuery__
 *
 * To run a query within a React component, call `useTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokensQuery({
 *   variables: {
 *   },
 * });
 */
export function useTokensQuery(baseOptions?: Apollo.QueryHookOptions<TokensQuery, TokensQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TokensQuery, TokensQueryVariables>(TokensDocument, options);
}
export function useTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokensQuery, TokensQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TokensQuery, TokensQueryVariables>(TokensDocument, options);
}
export type TokensQueryHookResult = ReturnType<typeof useTokensQuery>;
export type TokensLazyQueryHookResult = ReturnType<typeof useTokensLazyQuery>;
export type TokensQueryResult = Apollo.QueryResult<TokensQuery, TokensQueryVariables>;
export const TokenDocument = gql`
  query token {
    token {
      name
      price
      valueHistory {
        value
        date
      }
    }
  }
`;

/**
 * __useTokenQuery__
 *
 * To run a query within a React component, call `useTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useTokenQuery(baseOptions?: Apollo.QueryHookOptions<TokenQuery, TokenQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TokenQuery, TokenQueryVariables>(TokenDocument, options);
}
export function useTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenQuery, TokenQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TokenQuery, TokenQueryVariables>(TokenDocument, options);
}
export type TokenQueryHookResult = ReturnType<typeof useTokenQuery>;
export type TokenLazyQueryHookResult = ReturnType<typeof useTokenLazyQuery>;
export type TokenQueryResult = Apollo.QueryResult<TokenQuery, TokenQueryVariables>;
