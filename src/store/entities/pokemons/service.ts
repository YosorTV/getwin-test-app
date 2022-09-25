import { api } from "api";
import { PokemonDetails, PokemonResponse } from "./types";

export const getAllPokemonsData = async (page: number, rejectWithValue: any) => {
  const { data, status } = await api.get<PokemonResponse>(`pokemon?limit=60&offset=${page ?? 0}`);

  if (!!status) rejectWithValue("Server Error!");

  return { data, status };
};

export const getCurrentPokemonData = async (name: string, rejectWithValue: any) => {
  const { data, status } = await api.get<PokemonDetails>(`pokemon/${name.toLowerCase()}`);

  if (!!status) rejectWithValue("Server Error!");

  return { data, status };
};

export const getPokemonDataByName = async (name: string, rejectWithValue: any) => {
  const { data, status } = await api.get<PokemonDetails>(`pokemon/${name.toLowerCase()}`);

  if (status !== 200) rejectWithValue("Server Error!");

  return { data, status };
};

export const getFilteredPokemonData = async (type: string, rejectWithValue: any) => {
  const { data, status } = await api.get<PokemonDetails>(`type/${type.toLowerCase()}`);

  if (!!status) rejectWithValue("Server Error!");

  return { data, status };
};
