import { api } from "api";
import { PokemonDetails, PokemonResponse } from "./types";

export const getAllPokemonsData = async (query: string, rejectWithValue: any) => {
  const { data, status } = await api.get<PokemonResponse>(query);

  if (!status) rejectWithValue("Server Error!");

  return { data };
};

export const getCurrentPokemonData = async (name: string, rejectWithValue: any) => {
  const { data, status } = await api.get<PokemonDetails>(`pokemon/${name}`);

  if (!status) rejectWithValue("Server Error!");

  return { data };
};
