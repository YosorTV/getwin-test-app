import { PokemonState, PokemonDetails } from "store/entities/pokemons/types";

type pokemonsSelectorType = {
  pokemons: PokemonState;
  currentPokemon: PokemonDetails;
};

export const allPokemons = (state: pokemonsSelectorType): PokemonState => state?.pokemons;
export const currentPokemon = ({ pokemons }: pokemonsSelectorType): PokemonDetails =>
  pokemons?.currentPokemon;
