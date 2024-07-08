import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: (offset = 0, limit = 20) => `pokemon?offset=${offset}&limit=${limit}`,
    }),
    getPokemon: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetAllPokemonQuery, useGetPokemonQuery } = pokemonApi;
