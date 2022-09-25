import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPokemonsData,
  getCurrentPokemonData,
  getFilteredPokemonData,
  getPokemonDataByName,
} from "./service";
import { Pokemon, pokemonActions, PokemonDetails, PokemonResponse } from "./types";

export const getPokemons = createAsyncThunk<PokemonResponse, number>(
  pokemonActions.getPokemons,
  async (page, { rejectWithValue }) => {
    const { data } = await getAllPokemonsData(page, rejectWithValue);
    return data;
  }
);

export const getCurrentPokemon = createAsyncThunk<PokemonDetails, string>(
  pokemonActions.getCurrentPokemon,
  async (name, { rejectWithValue }) => {
    const { data } = await getCurrentPokemonData(name, rejectWithValue);
    return data;
  }
);

export const getPokemonByName = createAsyncThunk<Pokemon[], string>(
  pokemonActions.getPokemonByName,
  async (name, { rejectWithValue }): Promise<any> => {
    const { data, status } = await getPokemonDataByName(name, rejectWithValue);

    const result = [{ name: data?.name, url: "" }];
    return { result, status };
  }
);

export const getFilteredPokemon = createAsyncThunk<PokemonDetails, string>(
  pokemonActions.getFilteredPokemon,
  async (type, { rejectWithValue }) => {
    const { data } = await getFilteredPokemonData(type, rejectWithValue);

    const result = data?.pokemon?.map((item: Pokemon) => ({
      name: item?.pokemon.name,
      url: item.pokemon?.url,
    }));

    return result;
  }
);
