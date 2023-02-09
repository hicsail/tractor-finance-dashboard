/* Generated File DO NOT EDIT. */
/* tslint:disable */
import * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BookingsAndServicesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type BookingsAndServicesQuery = {
  __typename?: 'Query';
  bookingsAndServices?: {
    __typename?: 'BookingsAndServices';
    bookings: { __typename?: 'Bookings'; history: Array<{ __typename?: 'History'; value: number; date: string }> };
    services: { __typename?: 'Services'; history: Array<{ __typename?: 'History'; value: number; date: string }> };
  } | null;
};

export const BookingsAndServicesDocument = gql`
  query bookingsAndServices {
    bookingsAndServices {
      bookings {
        history {
          value
          date
        }
      }
      services {
        history {
          value
          date
        }
      }
    }
  }
`;

/**
 * __useBookingsAndServicesQuery__
 *
 * To run a query within a React component, call `useBookingsAndServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookingsAndServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookingsAndServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useBookingsAndServicesQuery(baseOptions?: Apollo.QueryHookOptions<BookingsAndServicesQuery, BookingsAndServicesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BookingsAndServicesQuery, BookingsAndServicesQueryVariables>(BookingsAndServicesDocument, options);
}
export function useBookingsAndServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookingsAndServicesQuery, BookingsAndServicesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BookingsAndServicesQuery, BookingsAndServicesQueryVariables>(BookingsAndServicesDocument, options);
}
export type BookingsAndServicesQueryHookResult = ReturnType<typeof useBookingsAndServicesQuery>;
export type BookingsAndServicesLazyQueryHookResult = ReturnType<typeof useBookingsAndServicesLazyQuery>;
export type BookingsAndServicesQueryResult = Apollo.QueryResult<BookingsAndServicesQuery, BookingsAndServicesQueryVariables>;
