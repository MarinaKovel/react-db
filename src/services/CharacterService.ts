import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TCharacter } from '@types';

export const characterAPI = createApi({
  reducerPath: 'characterAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (build) => ({
    fetchSearchResults: build.query<TCharacter, string>({
      query: (id: string) => ({ url: `/character/${id}` }),
    }),
  }),
});
