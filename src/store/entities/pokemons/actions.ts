import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPokemonsData } from "./service";
import { pokemonActions, PokemonResponse } from "./types";

export const getPokemons = createAsyncThunk<PokemonResponse, undefined, { rejectValue: string }>(
  pokemonActions.getPokemons,
  async (_, { rejectWithValue }) => {
    const { data } = await getAllPokemonsData("pokemon?limit=10&offset=0", rejectWithValue);
    return data;
  }
);
