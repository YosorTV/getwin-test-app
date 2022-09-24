import { createSlice } from "@reduxjs/toolkit";
import { getPokemons, getCurrentPokemon } from "./actions";
import { PokemonState } from "./types";

const initialState = {
  pokemons: [],
  currentPokemon: {},
  loading: false,
  error: "",
} as PokemonState;

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    clearState: state => (state = { ...initialState }),
  },
  extraReducers: builder => {
    builder
      .addCase(getPokemons.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPokemons.fulfilled, (state, { payload }) => {
        state.pokemons = [...payload?.results];
        state.loading = false;
      })
      .addCase(getCurrentPokemon.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentPokemon.fulfilled, (state, { payload }) => {
        state.currentPokemon = payload;
        state.loading = false;
      });
  },
});

export const { clearState } = pokemonSlice.actions;
export default pokemonSlice.reducer;
