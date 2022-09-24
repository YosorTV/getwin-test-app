import { api } from "api";
import { PokemonDetails, PokemonResponse } from "./types";

export const getAllPokemonsData = async (page: number, rejectWithValue: any) => {
  const { data, status } = await api.get<PokemonResponse>(`pokemon?limit=20&offset=${page ?? 0}`);

  if (!!status) rejectWithValue("Server Error!");

  return { data, status };
};

export const getCurrentPokemonData = async (name: string, rejectWithValue: any) => {
  const { data, status } = await api.get<PokemonDetails>(`pokemon/${name}`);

  if (!!status) rejectWithValue("Server Error!");

  return { data, status };
};
