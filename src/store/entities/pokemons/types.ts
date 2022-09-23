type Pokemon = {
  name?: string;
  url?: string;
};

export type PokemonResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
};

export type PokemonState = {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
};

export enum pokemonActions {
  getPokemons = "pokemons/getAllPokemons",
}
