import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPokemonsData, getCurrentPokemonData } from "./service";
import { pokemonActions, PokemonDetails, PokemonResponse } from "./types";

export const getPokemons = createAsyncThunk<PokemonResponse, number, { rejectValue: string }>(
  pokemonActions.getPokemons,
  async (page, { rejectWithValue }) => {
    const { data } = await getAllPokemonsData(page, rejectWithValue);
    return data;
  }
);

export const getCurrentPokemon = createAsyncThunk<PokemonDetails, string, { rejectValue: string }>(
  pokemonActions.getCurrentPokemon,
  async (name, { rejectWithValue }) => {
    const { data } = await getCurrentPokemonData(name, rejectWithValue);
    return data;
  }
);
