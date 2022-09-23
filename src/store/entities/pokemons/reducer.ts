import { createSlice } from "@reduxjs/toolkit";
import { getPokemons } from "./actions";
import { PokemonState } from "./types";

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  error: "",
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPokemons.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getPokemons.fulfilled, (state, { payload }) => {
      state.pokemons = [...payload?.results];
      state.loading = false;
    });
  },
});

export default pokemonSlice.reducer;
