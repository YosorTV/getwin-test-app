import { Pokemon, PokemonState, PokemonDetails } from "store/entities/pokemons/types";

type pokemonsSelectorType = {
  pokemons: PokemonState;
  currentPokemon: PokemonDetails;
};

export const allPokemons = ({ pokemons }: pokemonsSelectorType): Pokemon[] => pokemons?.pokemons;
export const currentPokemon = ({ pokemons }: pokemonsSelectorType): PokemonDetails =>
  pokemons?.currentPokemon;
