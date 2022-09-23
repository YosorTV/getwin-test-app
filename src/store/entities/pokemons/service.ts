import { api } from "api";
import { PokemonResponse } from "./types";

export const getAllPokemonsData = async (query: string, rejectWithValue: any) => {
  const { data, status } = await api.get<PokemonResponse>(query);

  if (!status) {
    return rejectWithValue("Server Error!");
  }

  return { data };
};
