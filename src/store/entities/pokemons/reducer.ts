import { createSlice } from "@reduxjs/toolkit";
import { getPokemons, getCurrentPokemon, getFilteredPokemon, getPokemonByName } from "./actions";
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
      .addCase(getFilteredPokemon.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilteredPokemon.fulfilled, (state, { payload }: any) => {
        state.pokemons = [...payload];
        state.loading = false;
      })
      .addCase(getCurrentPokemon.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentPokemon.fulfilled, (state, { payload }) => {
        state.currentPokemon = payload;
        state.loading = false;
      })
      .addCase(getPokemonByName.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPokemonByName.fulfilled, (state, { payload }: any) => {
        state.pokemons = [...payload.result];
        state.loading = false;
      })
      .addCase(getPokemonByName.rejected, state => {
        state.loading = false;
        state.pokemons = [];
        state.error = "Not Found";
      });
  },
});

export const { clearState } = pokemonSlice.actions;
export default pokemonSlice.reducer;
