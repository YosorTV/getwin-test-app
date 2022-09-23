import { Pokemon, PokemonState } from "store/entities/pokemons/types";

type pokemonsSelectorType = {
  pokemons: PokemonState;
};

export const allPokemons = ({ pokemons }: pokemonsSelectorType): Pokemon[] => pokemons?.pokemons;
