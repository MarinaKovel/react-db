import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TCharacters } from '@types';

export const searchAPI = createApi({
  reducerPath: 'searchAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (build) => ({
    fetchSearchResults: build.query<TCharacters, string>({
      query: (searchValue: string) => ({
        url: '/character',
        params: { name: searchValue },
      }),
    }),
  }),
});
