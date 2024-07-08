import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    fetchPokemonDetails(state, action) {
      state.details = action.payload;
    },
  },
});

export const { fetchPokemonDetails } = pokemonSlice.actions;

export default pokemonSlice.reducer;
