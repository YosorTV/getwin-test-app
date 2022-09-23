import { createSlice } from "@reduxjs/toolkit";
import { getPokemons, getCurrentPokemon } from "./actions";
import { PokemonState } from "./types";

const initialState: PokemonState = {
  pokemons: [],
  currentPokemon: {},
  loading: false,
  error: "",
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
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

export default pokemonSlice.reducer;
